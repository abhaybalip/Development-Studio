import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class SimpleLoggingAspect {

    private static final Logger logger = LoggerFactory.getLogger(SimpleLoggingAspect.class);

    @Before("execution(* com.example.MyService.*(..))") // Apply to all methods in MyService
    public void logBefore(JoinPoint joinPoint) {
        logger.info("Entering method: {}", joinPoint.getSignature().toShortString());
    }
}

// Example MyService:

package com.example;

import org.springframework.stereotype.Service;

@Service
public class MyService {

    public void doSomething() {
        System.out.println("Doing something...");
    }

    public void doAnotherThing(String input) {
        System.out.println("Doing another thing with input: " + input);
    }
}
