package com.example.client.Service;

import com.example.client.Entity.Client;
import com.example.client.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public List<Client> addClient(Client client) {
         clientRepository.save(client);
        return clientRepository.findAll();
    }

    public List<Client> findAll() {
        return clientRepository.findAll();
    }

    public Client findById(int id) {
        return clientRepository.findById(id).get();
    }

    public List<Client> updateClient(int id, Client newClient) {
        Client client = clientRepository.findById(id).get();
        client.setCard(newClient.getCard());
        client.setName(newClient.getName());
        client.setFirstname(newClient.getFirstname());
        client.setDateReg(newClient.getDateReg());
        client.setTel(newClient.getTel());
         clientRepository.save(client);
        return clientRepository.findAll();
    }

    public List<Client> deleteClient(int id) {
        clientRepository.deleteById(id);
        return clientRepository.findAll();
    }
}
