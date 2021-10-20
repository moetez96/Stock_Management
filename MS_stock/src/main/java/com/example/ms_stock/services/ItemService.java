package com.example.ms_stock.services;

import com.example.ms_stock.entities.Item;
import com.example.ms_stock.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemRepository repository;

    public Item addItem(Item item) {
        return repository.save(item);
    }

    public List<Item> findAll() {
        return repository.findAll();
    }

    public Item findById(int id) {
        return repository.findById(id).get();
    }

    public Item updateItem(int id, Item newItem) {
        Item item = repository.findById(id).get();
        item.setName(newItem.getName());
        item.setCategory(newItem.getCategory());
        item.setDescription(newItem.getDescription());
        item.setPrice(newItem.getPrice());
        item.setCurrentStock(newItem.getCurrentStock());
        return repository.save(item);
    }

    public Item updateStock(int id, int newStock) {
        Item item = repository.findById(id).get();
        item.setCurrentStock(newStock);
        return repository.save(item);
    }

    public String deleteItem(int id) {
        repository.deleteById(id);
        return "item deleted: " + id;
    }

}
