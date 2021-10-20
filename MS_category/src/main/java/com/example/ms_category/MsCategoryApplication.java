package com.example.ms_category;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class MsCategoryApplication {

    public static void main(String[] args) {
        SpringApplication.run(MsCategoryApplication.class, args);
    }

}
