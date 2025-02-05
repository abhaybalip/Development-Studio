
package com.example.demo;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.example.demo.PersonService;

@Component
class DataJpa_2 implements ApplicationRunner{

    @Override    
    public void run(ApplicationArguments args) throws Exception {
        System.out.println("DataJPA_2 is running");
    }
}
