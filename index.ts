import express from 'express';
import {Request, Response, NextFunction} from 'express'
import session from 'express-session';
import path from 'path';
import {rRouter} from './routers/r-router';
import {employeeRouter} from './routers/employee-router';
import bodyParser from 'body-parser'

const app =express();

const port = 3000;

app.set('port',port);

const sess = {
    secret: 'keyboard cat',
    cookie: { secure: false },
    resave: false,
    saveUninitialized: false
  };
// set up express to attach sessions
app.use(session(sess));


// allow static content to be served, navigating to url with nothing after / will serve index.html from public
app.use(
    express.static(path.join(__dirname, 'static'))
  );

// log the request being made
app.use((req :Request, resp:Response,next:NextFunction)=>{

    console.log(`request was made with url: ${req.path}
    
            
    ad method:${req.method}`);

    next();

});

//Register the body parser to convert request json to an actual object 
app.use(bodyParser.json());

//allow cross origins
// app.use((req, resp, next) => {
//    resp.header('Access-Control-Allow-Origin', '*');
//    resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept .Authorization');
//   if (req.method === 'OPTIONS'){

//     resp.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
//     console.log('passed cors');
//   }

//    next();
//   });

/*******************************************************************************
 * Register Routers
 * 
*/

 
app.use('/r',rRouter);
app.use('/employee',employeeRouter);

app.listen(port,()=> {

    console.log('project 1 started');

});


