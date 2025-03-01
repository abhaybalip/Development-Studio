import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class SimpleAroundAspect {

    private static final Logger logger = LoggerFactory.getLogger(SimpleAroundAspect.class);

    @Around("execution(* com.example.MyService.*(..))")
    public Object logAround(ProceedingJoinPoint joinPoint) throws Throwable {
        logger.info("Before method: {}", joinPoint.getSignature().toShortString());

        Object result = joinPoint.proceed(); // Execute the method!

        logger.info("After method: {}", joinPoint.getSignature().toShortString());

        return result;
    }
}

// Example MyService:

package com.example;

import org.springframework.stereotype.Service;

@Service
public class MyService {

    public String simpleMethod(String input) {
        return "Processed: " + input;
    }

    public int anotherMethod(int number) {
        return number * 2;
    }
}
