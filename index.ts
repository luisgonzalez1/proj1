import express from 'express';
import {Request, Response, NextFunction} from 'express'
import {rRouter} from './routers/r-router';
import {employeeRouter} from './routers/employee-router';
import bodyParser from 'body-parser'

const app =express();

const port = 3000;

app.set('port',port);




app.use((req :Request, resp:Response,next:NextFunction)=>{

    console.log(`request was made with url: ${req.path}
    
        
    ad method:${req.method}`);

    next();

});

//Register the body parser to convert request json to an actual object 
app.use(bodyParser.json());

/*******************************************************************************
 * Register Routers
 * 
*/

 
app.use('/r',rRouter);
app.use('/employee',employeeRouter);

app.listen(port,()=> {

    console.log('project 1 started');

});


