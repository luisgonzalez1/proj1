import * as employeeDao from '../dao/employee-dao';

export function saveEmp(emp){

return employeeDao.saveEmp(emp);

}

export function getEmp(username){

return employeeDao.getEmp(username)

}