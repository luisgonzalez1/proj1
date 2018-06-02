import * as rDao from '../dao/r-dao';


export function saveR(r){

   return rDao.saveR(r);


}

export function getR(username:string , timeSub:string){

    return rDao.getR(username,timeSub);

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

export function viewPending(username :string){

    return rDao.viewPending( username);

}

export function viewHistory(username :string){

    return rDao.viewHistory( username);

}