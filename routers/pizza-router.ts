import express from 'express'
import {Request, Response, NextFunction} from 'express'

export const pizzaRouter = express.Router();

let pizza =[
    {

        name:'supreme',
        size:'large'


    },

    {

        name:'buffalo',
        size:'large'


    }

]

pizzaRouter.get('',(req:Request,resp:Response)=>{
    console.log('retrieving all pizzas');
    resp.json(pizza);

});

pizzaRouter.get('/name/:name', (req:Request,resp:Response) =>{

const name=req.params.name;
console.log(`retreiving pizza with name ${name}`);
for (let p of pizza){
    if(p.name ===name){
        resp.json(p);
        return;

    }
}


});

pizzaRouter.post ('',(req:Request,resp:Response)=>{

console.log(`adding pizza: ${JSON.stringify(req.body)}to pizzas`)
if(!req.body.name || !req.body.size){
    resp.sendStatus(400);
}else{
    const p={
        name:req.body.name,
        size:req.body.size

    }
    pizza.push(p);
    resp.sendStatus(201)

}



 
});


pizzaRouter.delete('/name/:name',(req:Request,resp:Response)=>{
pizza =pizza.filter((p)=> p.name !== req.params.name)
resp.end();

});