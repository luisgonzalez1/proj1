import * as rDao from '../dao/r-dao';


export function saveR(r){

   return rDao.saveR(r);


}

export function getR(username:string , timeSub:string){

    return rDao.getR(username,timeSub);

}  

export function viewPending(username :string){

    return rDao.viewPending( username);

}

export function viewHistory(username :string){

    return rDao.viewHistory( username);

}

export function updateStatus(r){

    return rDao.updateStatus(r);

}

export function getAllR(){

    return rDao.getAllR();

 
}