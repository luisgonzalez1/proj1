import * as employeeDao from '../dao/employee-dao';

export function saveEmp(emp){

return employeeDao.saveEmp(emp);

}

export function getEmp(username){

return employeeDao.getEmp(username)

}

export function getAllRoleEmp(){

return employeeDao.getAllRoleEmp();

}

export function getAllRoleAdmin(){

    return employeeDao.getAllRoleAdmin();
    
    }

export function getTime(){


    let t =Date.now();
    let t2 = new Date();
    let month =t2.getMonth();
    let date =t2.getDate();
    let year =t2.getFullYear();
    let hours =t2.getHours()-12;
    let minutes = t2.getMinutes();
    let seconds = (t2.getSeconds());
    

    return(`${month}-${date}-${year} ${hours}:${minutes}:${seconds} `);

}
   