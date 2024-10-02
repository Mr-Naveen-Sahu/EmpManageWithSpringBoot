import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmpService from "../component/Service"

const EmList = () => {
    const navigate = useNavigate();
     const [emp,setEmp] = useState(null);
     const [load , setLoad] = useState(false);

     useEffect(()=>{
       const fet = async ()=>{
        //  setLoad(true);
         try{
           const res = await EmpService.getEmp();
           setEmp(res.data);
          }catch(e){
            console.log(e);
          }
          setLoad(true);
        }
        fet();
     },[])

     const deleteid = (id)=>{
         EmpService.delete(id)
         .then(()=>{
            setEmp((e)=>{
              return e.filter((a)=> a.id != id);
            })
         })
     }

     const upd =(id)=>{
          navigate(`/Update/${id}`)
        console.log("ram",id)
     }

     
  return (
    <div className='w-[600px] my-12 ml-16 '>
        <button onClick={()=>navigate("/Addemp")} className='bg-green-500 p-2 rounded-xl font-bold hover:bg-slate-800 hover:text-white'>🧑‍💻 ADD EMPLYOEE</button>
       
       <table className='shadow-2xl my-9'>
           <thead className='bg-slate-600'>
                    <th className='px-7 py-3 tracking-wider'>NAME</th>
                    <th className='px-9 py-3 tracking-wider'>PHONE</th>
                    <th className='px-9 py-3 tracking-wider'>EMAIL</th>
                    <th className='px-9 py-3 tracking-wider'>EDIT</th>
                    <th className='px-9 py-3 tracking-wider'>DELETE</th>
           </thead>
            {load ? (
           <tbody >
           { emp.map((e)=>(
            <tr key={e.id} className='hover:bg-slate-50'>
             <td className='px-7 py-4'>{e.name}</td>
             <td className='px-7 py-4'>{e.phone}</td>
             <td className='px-7 py-4'>{e.email}</td>
             <td className='px-7 py-4'><button onClick={()=>upd(e.id)}  >📝</button></td>
             <td className='px-7 py-4'><button onClick={()=>deleteid(e.id)}>⚒️</button></td>
             </tr>
            )) }
            </tbody>
            ):""}

       </table>
    
    </div>
  )
}

export default EmList
