package com.naveencode.em_project;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:5173/")
public class EmControler {
      
   @Autowired
    EmService em;

    @GetMapping("/emplyoee")
    public List<Emplyoe>  getAll(){
        return  em.getAll();
    }

    @PostMapping("/emplyoee")
    public String create(@RequestBody Emplyoe obj){    
        return em.createEm(obj);   
    }

    @DeleteMapping("/emplyoee/{id}")
    public String deleteOk(@PathVariable Long id){
        if( em.deleteOk(id)) return "delete succesfull";
        return "no id found";
    }
      @PutMapping("/emplyoee/{id}")
     public String putmap(@PathVariable Long id, @RequestBody Emplyoe of){
             return em.updateEmp(id, of);
            }

        @GetMapping("/emplyoee/{id}")
        public Emplyoe getById(@PathVariable Long id){
            return em.getDataById(id);
        }
       
}
