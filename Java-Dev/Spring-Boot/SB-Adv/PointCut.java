package com.example.pointcutexample.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class SimplePointcutAspect {

    private static final Logger logger = LoggerFactory.getLogger(SimplePointcutAspect.class);

    // **Pointcut Definition:**  "execution of ANY method in the 'com.example.pointcutexample.MySimpleService' class"
    @Pointcut("execution(* com.example.pointcutexample.MySimpleService.*(..))")
    public void serviceMethodsPointcut() {
        // This is an empty method, just for defining the pointcut.
        // 'serviceMethodsPointcut' is the ID of this pointcut.
    }

    // **Advice:** Apply @Before advice to the 'serviceMethodsPointcut'
    @Before("serviceMethodsPointcut()")
    public void logMethodEntry(JoinPoint joinPoint) {
        String methodName = joinPoint.getSignature().getName();
        logger.info("Entering method: {}", methodName);
    }
}

package com.example.pointcutexample;

import org.springframework.stereotype.Service;

@Service
public class MySimpleService {

    public String processData(String data) {
        System.out.println("MySimpleService is processing data: " + data);
        return "Processed: " + data;
    }

    public int calculateValue(int number) {
        System.out.println("MySimpleService is calculating value for: " + number);
        return number * 2;
    }

    private void internalMethod() { // Private method - will NOT be targeted by our example pointcut
        System.out.println("MySimpleService - internalMethod executed");
    }
}