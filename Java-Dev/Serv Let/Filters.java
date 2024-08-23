package com.example.demo.filter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

@WebFilter("/*") // This filter will apply to all incoming requests
public class LoggingFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // Initialization logic, if needed
        System.out.println("LoggingFilter initialized");
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        // Log the request details
        System.out.println("Incoming request: " + request.getRemoteAddr());

        // Continue the request-response chain
        chain.doFilter(request, response);

        // Log after the response is sent
        System.out.println("Response sent to: " + request.getRemoteAddr());
    }

    @Override
    public void destroy() {
        // Cleanup logic, if needed
        System.out.println("LoggingFilter destroyed");
    }
}