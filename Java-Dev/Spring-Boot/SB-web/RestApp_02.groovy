package com.example.demo;

import org.springframework.http.HttpHeaders;
import org.springframework.http.RequestEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@RestController
class RestApp {

    @RequestMapping(method = RequestMethod.GET, path = "/test")
    public String GetApp(
            HttpServletRequest request, HttpServletResponse response
    ) {
        HttpSession session = request.getSession();
        String sessios_id = session.getId();
        System.out.println("session id: " + sessios_id);

        return "welcome";
    }

    @RequestMapping(method = RequestMethod.POST, path = "/test2")
    public String postApp(
        RequestEntity<String> requestEntity
    ) {

        HttpHeaders header = requestEntity.getHeaders();

        System.out.println("Request Headers: ");
        header.forEach((key, value) -> {
            System.out.println(key + " : " + value);
        });

        System.out.println("Request URL: " + requestEntity.getUrl());
        System.out.println("Request Method: " + requestEntity.getMethod());
        System.out.println("Request Body: " + requestEntity.getBody());
        
        return "welcome";
    }

    @RequestMapping(path="/test3", method = RequestMethod.GET)
    public ResponseEntity<String> Test() {
        return ResponseEntity.status(HttpStatus.OK).body("Hello World");
    }

    @RequestMapping(path = "/error", method = RequestMethod.GET)
    public String ErrorPage() {
        return "Error Occured !";
    }

}
