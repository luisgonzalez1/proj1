import express from 'express'
import {Request, Response, NextFunction} from 'express'
import * as rService from '../services/r-service'
import {Time} from  '../assests/time'
import { authMiddleware } from '../security/auth-middleware';

export const rRouter = express.Router();
let t = new Time();

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

///////*******need to be worked  */

rRouter.get('',(req:Request,resp:Response)=>{
    console.log('retrieving all reimbuersements');
    resp.json(r);

});


// rRouter.get('/name/:name/time/:time', (req:Request,resp:Response) =>{
     
//     rService.getR(req.params.name,req.params.time)
//      .then((data)=>{
//          console.log('data has been retrieved');
//          //resp.sendStatus(200);
//          console.log(data)
//         resp.json(data.Item);
//      })
//      .catch((err)=>{
//         console.log('data not retrieved');
//         resp.sendStatus(500);


//      })

     
//     });
/////ADDED AUTH ///////    
rRouter.get('/name/:name/p', (req:Request,resp:Response) =>{
    authMiddleware('admin'),
      rService.viewPending(req.params.name)
          .then((data)=>{
              
              console.log('data retrieved');
              resp.json(data.Items);

          })
          .catch((err)=>{
              console.log(err);
          console.log('data not retrieved')
          resp.sendStatus(500);

          })                    
  
  
  });
     
    
    
      /////ADDED AUTH ///////    

    rRouter.get('/name/:name/:h', (req:Request,resp:Response) =>{
       authMiddleware('admin','employee'),
        rService.viewHistory(req.params.name)
        
        .then((data)=>{

            
            let dataResults ={Items:[]}
            console.log('data retrieved');
            //console.log(data);
             
            switch (req.params.h) {
                case 'denied': 
                    
                for (let i=0 ;  i <data.Items.length ; i++){

                    if( data.Items[i].status === 'denied'){
                         
                          dataResults.Items.push( data.Items[i]);
     
                    }                 
     
                 }
                 resp.json(dataResults.Items);
                    break;

                case 'pending':

                    
                for (let i=0 ;  i <data.Items.length ; i++){

                    if( data.Items[i].status === 'pending'){
                         
                          dataResults.Items.push( data.Items[i]);
     
                    }                 
     
                 }
                 resp.json(dataResults.Items);
                    break;


                case 'approved':
                    
                for (let i=0 ;  i <data.Items.length ; i++){

                    if( data.Items[i].status === 'approved'){
                         
                          dataResults.Items.push( data.Items[i]);
     
                    }                 
     
                 }
                 resp.json(dataResults.Items);
                    break;                   

                        case 'history':
                    
                        for (let i=0 ;  i <data.Items.length ; i++){
        
                            if( data.Items[i].status === 'denied' || data.Items[i].status === 'approved' ){
                                 
                                  dataResults.Items.push( data.Items[i]);
             
                            }                 
             
                         }
                         resp.json(dataResults.Items);
                            break;

                            case 'all':
                            resp.json(data.Items)
                         
                            break;
                 
            
                default:

                    resp.sendStatus(400);
                    break;
            }
            

           // console.log(dataResults.Items);

            //resp.json(dataResults.Items);

        })
        .catch((err)=>{
            console.log(err);
        console.log('data not retrieved')
        resp.sendStatus(500);

        })             
        
        
        });

  

              /////ADDED AUTH ///////    

    rRouter.post ('',(req:Request,resp:Response)=>{
        authMiddleware('admin', 'employee')
                let time = t.getCurrentTime();    
            let reimb ={
                username : req.body.username,
                timeSubmitted : time,
                approver:req.body.approver,
                status:req.body.status,
                item:req.body.item  /// be better using put 
                 

            }

            console.log(reimb);

      
        rService.saveR(reimb)
        
            .then(()=>{

                console.log('data created');
                resp.sendStatus(201);
            })
             .catch((err)=>{
                 console.log(err);  
                console.log('data was not saved ');
                resp.sendStatus(500);
             });
            })








    
    // rRouter.delete('/name/:name',(req:Request,resp:Response)=>{
    //     r =r.filter((p)=>p.userName !== req.params.userName)
    //         resp.end();
            
    //     });

/////ADDED AUTH ///////
        rRouter.put('', (req, resp) => {
            authMiddleware('admin'),
            rService.updateStatus(req.body)
              .then(data => {
                resp.json(data);
              })
              .catch(err => {
                console.log(err);
                resp.sendStatus(500);
              });
          });