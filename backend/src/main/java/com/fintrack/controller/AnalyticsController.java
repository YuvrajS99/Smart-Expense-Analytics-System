package com.fintrack.controller;

import com.fintrack.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/analytics")
public class AnalyticsController {

    @Autowired
    private ExpenseService expenseService;

    @GetMapping("/category")
    public ResponseEntity<?> getCategoryWiseExpenses() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        List<Map<String, Object>> data = expenseService.getCategoryWiseExpenses(auth.getName());
        return ResponseEntity.ok(data);
    }

    @GetMapping("/monthly")
    public ResponseEntity<?> getMonthlyExpenses() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        List<Map<String, Object>> data = expenseService.getMonthlyExpenses(auth.getName());
        return ResponseEntity.ok(data);
    }

    @GetMapping("/trend")
    public ResponseEntity<?> getTrendExpenses() {
        // Trend API can just return all expenses ordered by date, or aggregated by day.
        // Reusing monthly for simple bar charts, but for trend (Line chart) let's group by Exact Date
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        
        // Simplifying by grouping expenses by date manually from all expenses
        var expenses = expenseService.getAllExpensesByUser(auth.getName());
        
        var trendData = expenses.stream()
            .collect(Collectors.groupingBy(
                com.fintrack.entity.Expense::getDate,
                Collectors.reducing(java.math.BigDecimal.ZERO, 
                                   com.fintrack.entity.Expense::getAmount, 
                                   java.math.BigDecimal::add)
            ))
            .entrySet().stream()
            .sorted(Map.Entry.comparingByKey())
            .map(e -> Map.of("date", e.getKey().toString(), "amount", e.getValue()))
            .collect(Collectors.toList());
            
        return ResponseEntity.ok(trendData);
    }
}
