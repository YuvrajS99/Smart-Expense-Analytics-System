package com.fintrack.service;

import com.fintrack.entity.Category;
import com.fintrack.entity.Expense;
import com.fintrack.entity.User;
import com.fintrack.repository.CategoryRepository;
import com.fintrack.repository.ExpenseRepository;
import com.fintrack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Expense> getAllExpensesByUser(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return expenseRepository.findByUserOrderByDateDesc(user);
    }

    public Expense saveExpense(Expense expense, String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        expense.setUser(user);

        // Fetch or create category
        Category category = categoryRepository.findByName(expense.getCategory().getName())
                .orElseGet(() -> {
                    Category newCat = new Category();
                    newCat.setName(expense.getCategory().getName());
                    newCat.setUser(user);
                    return categoryRepository.save(newCat);
                });

        expense.setCategory(category);
        return expenseRepository.save(expense);
    }

    public void deleteExpense(Long id, String username) {
        Expense expense = expenseRepository.findById(id).orElseThrow(() -> new RuntimeException("Expense not found"));
        if (!expense.getUser().getUsername().equals(username)) {
            throw new RuntimeException("Unauthorized");
        }
        expenseRepository.deleteById(id);
    }

    public List<Map<String, Object>> getCategoryWiseExpenses(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return expenseRepository.findCategoryWiseExpenses(user);
    }

    public List<Map<String, Object>> getMonthlyExpenses(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return expenseRepository.findMonthlyExpenses(user);
    }
}
