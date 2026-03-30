package com.fintrack.config;

import com.fintrack.entity.Category;
import com.fintrack.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public void run(String... args) throws Exception {
        List<String> defaultCategories = Arrays.asList(
                "Food & Dining",
                "Transportation",
                "Rent & Utilities",
                "Shopping",
                "Entertainment",
                "Health & Medical",
                "Salary",
                "Investment",
                "Other"
        );

        for (String catName : defaultCategories) {
            categoryRepository.findByName(catName).orElseGet(() -> {
                Category category = new Category();
                category.setName(catName);
                category.setUser(null); // Global category
                return categoryRepository.save(category);
            });
        }
    }
}
