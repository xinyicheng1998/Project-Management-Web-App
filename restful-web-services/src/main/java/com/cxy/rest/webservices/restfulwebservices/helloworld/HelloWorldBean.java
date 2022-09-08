package com.cxy.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {

    private String message;

    public HelloWorldBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "com.cxy.rest.webservices.restfulwebservices.helloworld.HelloWorldBean{" +
            "message='" + message + '\'' +
            '}';
    }
}
