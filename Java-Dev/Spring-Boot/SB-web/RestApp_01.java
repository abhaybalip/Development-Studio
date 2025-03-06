package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
class RestApp {

    @RequestMapping(path = "/test", method = RequestMethod.GET)
    public String ReqParam(
        @RequestParam(value="",required=false) String rp
    ) {
        return "req-param = "+rp;
    }

    @GetMapping("/greet/{name}")
    public String PathVar(
        @PathVariable(value="name",required=true) String name
    ){
        return "path-var = "+name;
    }

}


