package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {

    @RequestMapping("/") // Use @GetMapping for GET requests
    public String homePage() {
        return "Welcome, this is the home page";
    }

    @GetMapping("/user/{username}") // Use @GetMapping for GET requests and @PathVariable for path variables
    public String user(@PathVariable("username") String username) {
        return "Welcome to user page: " + username;
    }

	@GetMapping("/test")
	public static String Test(@RequestParam("key") String key){
		return  "Request parm : Key = "+key;
	}

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
