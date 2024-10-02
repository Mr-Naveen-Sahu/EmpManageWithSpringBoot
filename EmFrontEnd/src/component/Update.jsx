import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmpService from "../component/Service";
import { useParams } from 'react-router-dom';

const Update = () => {
    const navi = useNavigate();
    const {id} = useParams();
    const [emp,setEmp] = useState({
         id: id,
         name: "",
         phone: "",
         email: ""
    });
    
    const handleForm = (e)=>{
         const val = e.target.value;
         setEmp({...emp,[e.target.name]:val})
    }
     
    useEffect(()=>{
        const fet = async ()=>{
         //  setLoad(true);
          try{
            const res = await EmpService.getEmpById(emp.id);
            setEmp(res.data);
           }catch(e){
             console.log(e);
           }
         
         }
         fet();
      },[])
 

    const upda =(e)=>{
          e.preventDefault();
          if(emp.name && emp.email && emp.phone){
            EmpService.update(emp,id)
            .then((re)=>console.log("ok"))
            .catch((e)=>console.log("not"));
            navi("/")
          }else{
            alert("pls fill all name")
          }
        
       

    }
  return (
    <div className='w-[400px] my-10 ml-16 bg-gray-800 p-3'>

         <div className='flex justify-center text-3xl text-white'>Update 🧑‍💻  Emplyoee</div>
         <div className='flex flex-col gap-4 my-4'>
          <div> <label className='text-white'>Name </label>   <input className='w-[300px]'
              value={emp.name}
              name="name"
              onChange={(e)=>handleForm(e)}
             type="text" placeholder='First Name'></input></div>

          <div><label className='text-white'>Phone </label>  <input type="number" className='w-[300px]'
             value={emp.phone}
             name="phone"
             onChange={(e)=>handleForm(e)}
             placeholder='Password'></input></div>

           <div><label className='text-white'>email</label> <input type="emila" className='w-[300px]'
            value={emp.email}
            name="email"
            onChange={(e)=>handleForm(e)}
             placeholder='email'></input></div>
         </div>

         <div className=' flex justify-center gap-2 my-5'>
             <button onClick={upda} className='bg-green-600 p-2 rounded-lg'>Update</button>
            
             <button onClick={()=>navi("/")} className='bg-purple-600 p-2 rounded-lg'>Cancle</button>
         </div>
      
    </div>
  )
}

export default Update
