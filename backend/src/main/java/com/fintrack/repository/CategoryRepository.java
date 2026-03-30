package com.fintrack.repository;

import com.fintrack.entity.Category;
import com.fintrack.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    List<Category> findByUserIsNull();
    List<Category> findByUser(User user);
    Optional<Category> findByName(String name);
}
