import axios from 'axios'

const spapi =  "http://localhost:9090/emplyoee";
class Empservice{
     
    saveEmp(emp){
         return axios.post(spapi,emp);
    }

    getEmp(){
        return axios.get(spapi);
    }
    getEmpById(id){
        return axios.get(spapi+"/"+id);
    }

    delete(id){
        return axios.delete(spapi+"/"+id);
    }

    update(emp,id){
        return axios.put(spapi+"/"+id, emp);
    }
}

export default new Empservice();