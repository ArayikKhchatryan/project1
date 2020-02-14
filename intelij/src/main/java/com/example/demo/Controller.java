package com.example.demo;

import com.example.demo.user.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin
@RestController
public class Controller {
    public ArrayList<User> usersList = new ArrayList<User>();


    @GetMapping
    public ArrayList<String> getUser() {
        System.out.println("aaa");
        ArrayList<String> a = new ArrayList<String>();
        for(User i: usersList){
            a.add(i.name);
        }
        return a;
    }

    @PostMapping
    public boolean postUser(@RequestBody User user) {
        System.out.println(user.name);
        System.out.println("Aaa");
        usersList.add(user);
        System.out.println(usersList);
        return true;
    }

}


