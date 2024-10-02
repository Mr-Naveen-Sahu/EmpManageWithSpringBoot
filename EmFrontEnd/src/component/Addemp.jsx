import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmpService from "../component/Service"

const Addemp = () => {
    const navi = useNavigate();
    const [emp,setEmp] = useState({
         id: "",
         name: "",
         phone: "",
         email: ""
    });
    
    const handleForm = (e)=>{
         const val = e.target.value;
         setEmp({...emp,[e.target.name]:val})
    }
    const clearAll = ()=>{
        setEmp({
            id: "",
            name: "",
            phone: "",
            email: ""
        })
    }

    const save =(e)=>{
          e.preventDefault();
          if(emp.name && emp.email && emp.phone){
            EmpService.saveEmp(emp)
            .then((re)=>console.log("ok"))
            .catch((e)=>console.log("not"));
            navi("/")
          }else{
            alert("pls fill all name")
          }
        
       

    }
  return (
    <div className='w-[400px] my-10 ml-16 bg-gray-800 p-3'>

         <div className='flex justify-center text-3xl text-white'>Add 🧑‍💻 New Emplyoee</div>
         <div className='flex flex-col gap-4 my-4'>
            <input
              value={emp.name}
              name="name"
              onChange={(e)=>handleForm(e)}
             type="text" placeholder='First Name'></input>

            <input type="number"
             value={emp.phone}
             name="phone"
             onChange={(e)=>handleForm(e)}
             placeholder='Password'></input>

            <input type="emila"
            value={emp.email}
            name="email"
            onChange={(e)=>handleForm(e)}
             placeholder='email'></input>
         </div>

         <div className=' flex justify-center gap-2 my-5'>
             <button onClick={save} className='bg-green-600 p-2 rounded-lg'>Save</button>
             <button onClick={clearAll} className='bg-yellow-600 p-2 rounded-lg'>Clear</button>
             <button onClick={()=>navi("/")} className='bg-purple-600 p-2 rounded-lg'>Cancle</button>
         </div>
      
    </div>
  )
}

export default Addemp
