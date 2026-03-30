package com.fintrack.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class ExpenseDto {
    private Long id;
    private BigDecimal amount;
    private String category;
    private String description;
    private LocalDate date;
}
