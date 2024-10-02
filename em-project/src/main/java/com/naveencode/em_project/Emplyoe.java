package com.naveencode.em_project;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class Emplyoe {

    private Long id;
   private String name;
   private String phone;
   private String email;


}
