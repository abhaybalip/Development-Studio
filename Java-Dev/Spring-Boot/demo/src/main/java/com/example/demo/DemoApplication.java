package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}

// sample code
// @SpringBootApplication // Mark as Spring Boot application
// public class DemoApplication implements CommandLineRunner { // Implement CommandLineRunner

//     @Autowired
//     private DataJPA dataJPA; // Inject DataJPA

//     public static void main(String[] args) {
//         SpringApplication.run(DemoApplication.class, args);
//     }

//     @Override
//     public void run(String... args) throws Exception {
//         dataJPA.run(); // Call dataJPA.run() when the application starts
//     }
// }
