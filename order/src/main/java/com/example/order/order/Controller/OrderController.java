package com.example.order.order.Controller;

import com.example.order.order.Entities.MvtStock;
import com.example.order.order.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping
    public ResponseEntity<?> All() {
        return ResponseEntity.ok(orderService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable(value = "id") int id) {
        return ResponseEntity.ok(orderService.findById(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> createOrder(@RequestBody MvtStock mvtStock) {
        return new ResponseEntity<>(orderService.addOrder(mvtStock), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> updateOrder(@PathVariable(value = "id") int id,
                                                   @RequestBody MvtStock mvtStock) {
        return new ResponseEntity<>(orderService.updateOrder(id, mvtStock), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> deleteOrder(@PathVariable(value = "id") int id) {
        return new ResponseEntity<>(orderService.deleteOrder(id), HttpStatus.OK);
    }
}
