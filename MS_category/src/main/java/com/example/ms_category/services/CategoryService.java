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

    public List<Category> addCategory(Category category) {
        categoryRepository.save(category);
        return categoryRepository.findAll();
    }

    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    public Category findById(int id) {
        return categoryRepository.findById(id).get();
    }

    public List<Category> updateCategory(int id, Category newCategory) {
        Category category = categoryRepository.findById(id).get();
        category.setName(newCategory.getName());
        categoryRepository.save(category);
        return categoryRepository.findAll();
    }

    public List<Category> deleteCategory(int id) {
        categoryRepository.deleteById(id);
        return categoryRepository.findAll();
    }

}
