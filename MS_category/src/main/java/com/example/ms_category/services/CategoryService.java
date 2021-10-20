package com.example.ms_category.services;

import com.example.ms_category.entities.Category;
import com.example.ms_category.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category addCategory(Category category) {
        return categoryRepository.save(category);
    }

    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    public Category findById(int id) {
        return categoryRepository.findById(id).get();
    }

    public Category updateCategory(int id, Category newCategory) {
        Category category = categoryRepository.findById(id).get();
        category.setName(newCategory.getName());
        return categoryRepository.save(category);
    }

    public String deleteCategory(int id) {
        categoryRepository.deleteById(id);
        return "category deleted: " + id;
    }

}
