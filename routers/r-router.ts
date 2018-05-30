import express from 'express'
import {Request, Response, NextFunction} from 'express'


export const rRouter = express.Router();


export let r =[

{

userName : 'Ped100'   ,
timeSubmitted : 1     ,
approver : 'aprover1' , 
status   : 'approved' 


},
{

userName : 'Hec100'   ,
timeSubmitted : 1     ,
approver : 'aprover1' , 
status   : 'approved' 




},
{

    userName : 'carl100'   ,
    timeSubmitted : 1     ,
    approver : 'aprover1' , 
    status   : 'approved'


},
{

    userName : 'Ped100'   ,
    timeSubmitted : 1     ,
    approver : 'aprover1' , 
    status   : 'approved' 
    
    
    
    
},

{

    userName : 'Ped100'   ,
    timeSubmitted : 1     ,
    approver : 'aprover1' , 
    status   : 'denied' 
    
    
    
    
},

{

    userName : 'Ped100'   ,
    timeSubmitted : 1     ,
    approver : 'aprover1' , 
    status   : 'pending' 
    
    
    
    
}




]



rRouter.get('',(req:Request,resp:Response)=>{
    console.log('retrieving all reimbuersements');
    resp.json(r);

});


rRouter.get('/name/:name', (req:Request,resp:Response) =>{

    const name=req.params.name;
    let list=[];
    console.log(`retreiving reinbustment with name ${name}`);
    for (let p of r){
        
        if(p.userName === name){
            console.log(p);
            list.push(p);
           
    
        }
    }

    resp.json(list);
    
    
    });

    rRouter.get('/name/:name/h', (req:Request,resp:Response) =>{

        const name=req.params.name;
        let list=[];
        console.log(`retreiving reinbustment with name ${name}`);
        for (let p of r){
            
            if(p.userName === name && (p.status === 'approved'|| p.status === 'denied' )){
                console.log(p);
                list.push(p);
               
        
            }
        }
        
    
        resp.json(list);
        
        
        });


        rRouter.get('/name/:name/p', (req:Request,resp:Response) =>{

            const name=req.params.name;
            let list=[];
            console.log(`retreiving reinbustment with name ${name}`);
            for (let p of r){
                
                if(p.userName === name && p.status === 'pending'){
                    console.log(p);
                    list.push(p);
                   
            
                }
            }
        
            resp.json(list);
            
            
            });

    rRouter.post ('',(req:Request,resp:Response)=>{

        console.log(`adding reinbustment: ${JSON.stringify(req.body)}to reinbustments`)
        // if(!req.body.name || !req.body.size){
        //     resp.sendStatus(400);
        // }else{
            const p = {
                userName : req.body.userName   ,
                timeSubmitted :req.body.timeSubmitted   ,
                approver : req.body.approver , 
                status   : req.body.status
        
            }
            r.push(p);
            resp.sendStatus(201)
        
        // }

    });


    rRouter.delete('/name/:name',(req:Request,resp:Response)=>{
        r =r.filter((p)=>p.userName !== req.params.userName)
            resp.end();
            
        });