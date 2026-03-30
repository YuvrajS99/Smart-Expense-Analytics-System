package com.fintrack.repository;

import com.fintrack.entity.Expense;
import com.fintrack.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    List<Expense> findByUserOrderByDateDesc(User user);
    
    @Query("SELECT c.name as category, SUM(e.amount) as total FROM Expense e JOIN e.category c WHERE e.user = :user GROUP BY c.name")
    List<Map<String, Object>> findCategoryWiseExpenses(@Param("user") User user);
    
    @Query("SELECT FUNCTION('TO_CHAR', e.date, 'Mon YYYY') as month, SUM(e.amount) as total FROM Expense e WHERE e.user = :user GROUP BY FUNCTION('TO_CHAR', e.date, 'Mon YYYY') ORDER BY MIN(e.date)")
    List<Map<String, Object>> findMonthlyExpenses(@Param("user") User user);
}
