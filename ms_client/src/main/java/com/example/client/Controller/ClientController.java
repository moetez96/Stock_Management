package com.example.client.Controller;

import com.example.client.Entity.Client;
import com.example.client.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/client")
public class ClientController {
    @Autowired
    private ClientService clientService;

    @GetMapping
    public ResponseEntity<?> All() {
        return ResponseEntity.ok(clientService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable(value = "id") int id) {
        return ResponseEntity.ok(clientService.findById(id));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> createClient(@RequestBody Client client) {
        return new ResponseEntity<>(clientService.addClient(client), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> updateClient(@PathVariable(value = "id") int id,
                                                   @RequestBody Client client) {
        return new ResponseEntity<>(clientService.updateClient(id, client), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> deleteClient(@PathVariable(value = "id") int id) {
        return new ResponseEntity<>(clientService.deleteClient(id), HttpStatus.OK);
    }
}
