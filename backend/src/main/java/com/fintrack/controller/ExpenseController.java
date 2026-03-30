package com.fintrack.controller;

import com.fintrack.dto.ExpenseDto;
import com.fintrack.dto.MessageResponse;
import com.fintrack.entity.Category;
import com.fintrack.entity.Expense;
import com.fintrack.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    @GetMapping
    public ResponseEntity<List<ExpenseDto>> getAllExpenses() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        List<Expense> expenses = expenseService.getAllExpensesByUser(auth.getName());
        
        List<ExpenseDto> dtoList = expenses.stream().map(this::convertToDto).collect(Collectors.toList());
        return ResponseEntity.ok(dtoList);
    }

    @PostMapping
    public ResponseEntity<ExpenseDto> createExpense(@RequestBody ExpenseDto expenseDto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        
        Expense expense = new Expense();
        expense.setAmount(expenseDto.getAmount());
        expense.setDate(expenseDto.getDate());
        expense.setDescription(expenseDto.getDescription());
        
        Category category = new Category();
        category.setName(expenseDto.getCategory());
        expense.setCategory(category);
        
        Expense savedExpense = expenseService.saveExpense(expense, auth.getName());
        return ResponseEntity.ok(convertToDto(savedExpense));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ExpenseDto> updateExpense(@PathVariable Long id, @RequestBody ExpenseDto expenseDto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        
        Expense expense = new Expense();
        expense.setId(id);
        expense.setAmount(expenseDto.getAmount());
        expense.setDate(expenseDto.getDate());
        expense.setDescription(expenseDto.getDescription());
        
        Category category = new Category();
        category.setName(expenseDto.getCategory());
        expense.setCategory(category);
        
        Expense updatedExpense = expenseService.saveExpense(expense, auth.getName());
        return ResponseEntity.ok(convertToDto(updatedExpense));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteExpense(@PathVariable Long id) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        expenseService.deleteExpense(id, auth.getName());
        return ResponseEntity.ok(new MessageResponse("Expense deleted successfully"));
    }

    private ExpenseDto convertToDto(Expense expense) {
        ExpenseDto dto = new ExpenseDto();
        dto.setId(expense.getId());
        dto.setAmount(expense.getAmount());
        dto.setDate(expense.getDate());
        dto.setDescription(expense.getDescription());
        dto.setCategory(expense.getCategory() != null ? expense.getCategory().getName() : null);
        return dto;
    }
}
