import express from 'express'
import {Request, Response, NextFunction} from 'express'
import {r} from './r-router';
import * as employeeService from '../services/employee-service'
export const employeeRouter = express.Router();


//console.log(r);
let reimb = r;
/*
* veriying user logged in  
*/
// let logged = false;
// let currentlyLogged ={};


 


employeeRouter.get('',(req:Request,resp:Response)=>{
   
   employeeService.getTime();
   // console.log(t2);
   // console.log(t);
    console.log('retrieving all employee');
    let allData ={};
    //will hold data retrieved from   employeeService.getAllRoleEmp() 
    //and  employeeService.getAllRoleAdmin() 
    

    employeeService.getAllRoleEmp() // GSI holds primary key  field role =employee 
         .then((empData)=>{// first then 
        
        //inside first promise 
        //infor stored in empData will bw assigned to the allData 
        allData=empData;
      
        
        employeeService.getAllRoleAdmin() //GSI holds primary key  field role =admin 
                    .then((adminData)=>{ // second then 

                        console.log('inside second promise')
                    
                        // combine employees and admins in allData
                        let counter = allData["Items"].length
                        for(let i =0 ; i<adminData["Items"].length ; i++ ){
                            
                            
                            
                            allData["Items"][counter] = adminData["Items"][i];
                            
                            
                            counter++;
                            
                        }

                        //console.log(allData);
                        resp.json(allData["Items"]);

                    })

                    .catch((err)=>{// second then 
                    
                        console.log(err);
                        console.log('was not able to retrieve data');
                        resp.sendStatus(500);
                
                
                    });

       
        

    })
    .catch((err)=>{// first then 
        
        console.log(err);
        console.log('was not able to retrieve data');
        resp.sendStatus(500);


    });

 

});

 
employeeRouter.get('/name/:name', (req:Request,resp:Response) =>{
                console.log(typeof(req.params.name));         
                
    employeeService.getEmp(req.params.name)
        .then(data=>{//data obgect containg data retrieved from DB 
                     //data.Item reffers to the actual object body
                     console.log(data);
            resp.json(data.Items);
            console.log("data retrieved ");            
        })
        .catch(err => {
            console.log(err);
            resp.sendStatus(500);
            console.log("data not retrieved ");


        });   

     
    
    });// end get emp 

     

    employeeRouter.post ('',(req:Request,resp:Response)=>{
        console.log(req.body);

         
        employeeService.saveEmp(req.body)
        .then(()=>{
            
            console.log('User saved sucessfully');
            resp.sendStatus(201);


        })
        .catch(err=>{
            console.log(err);
        resp.sendStatus(500);
        })

    }); // end empl post 


    

    employeeRouter.post('/login',(req:Request,resp:Response, next)=>{
       // resp.send('please enter userName and password');
        const user = req.body && req.body;

          

        

                     employeeService.getEmp(req.body.username)
                        .then(data=>{//data obgect containg data retrieved from DB 
                         //data.Item reffers to the actual object body
                         console.log(data);

                         if (req.body.username === data.Items[0].username && req.body.password === data.Items[0].password) {
                            req.session.role = data.Items[0].role;
                            resp.json({
                              username: data.Items[0].password,
                              role: data.Items[0].role});

                          } else if (req.body.username === data.Items[0].username && req.body.password === data.Items[0].password) {
                            req.session.role = data.Items[0].role;
                            console.log('logged sucessfully');
                            resp.json({
                              username: data.Items[0].username,
                              role: data.Items[0].role});
                          } else {
                            resp.sendStatus(401);
                          }
                        })
                       .catch((err)=>{
                        
                            console.log(err);
                            resp.sendStatus(400);
                           
                        });

                    
                });


 
    
               

        // should probably send a call to the db to get the actual user object to determine role
       

      /**
 * This will reset the session so that all session data is removed and a new session id will be created
 */
    employeeRouter.delete('/logout', (req, resp, next) => {
    req.session.regenerate(err => {
      if (err) {
        resp.sendStatus(500);
      } else {
        resp.end();
      }
    });
  });
  


    // employeeRouter.get ('/name/:name/r',(req:Request,resp:Response)=>{
    //     console.log(currentlyLogged);
    //     console.log (!currentlyLogged) 
    // if (logged){

    //     resp.redirect(`/r/name/${req.params.name}`);

    // }else{

    //     console.log("no users currently logged");
    //     resp.send('action not valid');

    // }
    
     


    // });

    // employeeRouter.get ('/name/:name/h',(req:Request,resp:Response)=>{
    //     console.log(currentlyLogged);
    //     console.log (!currentlyLogged) 
    // if (logged){

    //     resp.redirect(`/r/name/${req.params.name}/h`);

    // }else{

    //     console.log("no users currently logged");
    //     resp.send('action not valid');

    // }
    
     


    // });


    // employeeRouter.get ('/name/:name/p',(req:Request,resp:Response)=>{
    //     console.log(currentlyLogged);
    //     console.log (!currentlyLogged) 
    // if (logged){

    //     resp.redirect(`/r/name/${req.params.name}/p`);

    // }else{

    //     console.log("no users currently logged");
    //     resp.send('action not valid');

    // }
    
     


    // });


    // employeeRouter.post('/login',(req:Request,resp:Response)=>{
    //     resp.send('please enter userName and password');
    //     let body=req.body;

    //     // console.log(body);

    //     // console.log(body.username);
    //     // console.log(body.password);
    //         for( let e of emp ){
    //             if(e.userName === body.username && e.password === body.password){
    //             console.log("user found")
    //             currentlyLogged = e;

    //             logged = true ;  
    //                  }else console.log("user not found");
                                         
    //             }
             
                 
    // });

    // employeeRouter.delete('/name/:name',(req:Request,resp:Response)=>{
    //     emp =emp.filter((p)=>p.userName !== req.params.userName)
    //         resp.end();
            
    //     });

    
    // employeeRouter.get('/login',(req:Request,resp:Response)=>{
    //     resp.send('please enter userName');


    // });