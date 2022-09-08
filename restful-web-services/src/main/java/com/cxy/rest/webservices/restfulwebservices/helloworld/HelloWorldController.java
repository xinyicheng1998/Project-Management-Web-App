package com.cxy.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

// Controller
@RestController
// change the port from http://localhost:8080 to http://localhost:4200
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {

    // GET
    // URI - /hello-world
    // method - "Hello World"
    // choose one from above two, map the URI to the GET method
    @GetMapping(path="/hello-world")
//    @RequestMapping(method=RequestMethod.GET, path="/hello-world")
    public String helloWorld(){
        return "Hello World";
    }

    @GetMapping(path="/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Hello World Bean"); // return JSON file
    }

    // hello-world/path-variable/cxy
    @GetMapping(path="/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
//        throw new RuntimeException("Something went wrong");
        return new HelloWorldBean(String.format("Hello World, %s",name));
    }
}
