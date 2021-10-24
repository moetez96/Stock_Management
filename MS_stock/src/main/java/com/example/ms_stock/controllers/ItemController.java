package com.example.ms_stock.controllers;

import com.example.ms_stock.entities.Item;
import com.example.ms_stock.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    public ResponseEntity<?> All() {
        return ResponseEntity.ok(itemService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable(value = "id") int id) {
        return ResponseEntity.ok(itemService.findById(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Item> createItem(@RequestBody Item item) {
        return new ResponseEntity<>(itemService.addItem(item), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> updateItem(@PathVariable(value = "id") int id,
                                        @RequestBody Item item){
        return new ResponseEntity<>(itemService.updateItem(id, item), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> deleteItem(@PathVariable(value = "id") int id){
        return new ResponseEntity<>(itemService.deleteItem(id), HttpStatus.OK);
    }

    @PutMapping(value = "/stock/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Item> updateStock(@PathVariable(value = "id") int id,
                                            @RequestParam("stock") int stock){
        return new ResponseEntity<>(itemService.updateStock(id, stock), HttpStatus.OK);
    }
}
