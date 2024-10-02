package com.naveencode.em_project;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.Comments;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;


public interface EmService {

    String createEm(Emplyoe obj);
    List<Emplyoe> getAll();
    boolean deleteOk(Long id);
    String updateEmp(Long id, Emplyoe em);
     Emplyoe getDataById(Long id);
} 


@Service
class Emimplement implements EmService{
     
   List<Emplyoe> mp = new ArrayList<>();

    @Autowired
     EmpRepository empRepository;
    
    @Override
    public String createEm(Emplyoe sm) {
          EmpEntiry so = new EmpEntiry();
          BeanUtils.copyProperties(sm, so);
         empRepository.save(so);
          mp.add(sm);
         return "Add Succesfuly";
    }

    @Override
    public List<Emplyoe> getAll() {
       List<EmpEntiry> mp = empRepository.findAll();
        List<Emplyoe> last = new  ArrayList<>();
       for(EmpEntiry of: mp){
             Emplyoe obj = new Emplyoe();
             obj.setName(of.getName());
             obj.setEmail(of.getEmail());
             obj.setPhone(of.getPhone());
             obj.setId(of.getId());
             last.add(obj);
       }
        return last;
    }

    
   
    @Override
    public boolean deleteOk(Long id) {
             EmpEntiry obj = empRepository.findById(id).get();
             empRepository.delete(obj);
          return true;
        
    }

    @Override
    public String updateEmp(Long id, Emplyoe em) {
        EmpEntiry str = empRepository.findById(id).get();
        
         str.setName(em.getName());
         str.setEmail(em.getEmail());
         str.setPhone(em.getPhone());
         empRepository.save(str);
         return "updaate succesfull";
        
     }

    @Override
    public Emplyoe getDataById(Long id) {
        EmpEntiry str = empRepository.findById(id).get();
        Emplyoe gtr = new Emplyoe();
        BeanUtils.copyProperties(str, gtr);
       
        return gtr;

    }

    
      
    
   
    }        

