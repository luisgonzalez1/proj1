// import Time from '../../assests/time'

// let t =new Time();


// let type=document.getElementById('radio1').textContent
// let inputs =document.getElementsByTagName('input');
// let initialSize =0;

// $(document).on('click', '.radios', function(){    
      
//   let button_id = $(this).attr("id"); 
//   let button = $(this);
//   type = this.textContent;
//   console.log(type.trim());
//     if( initialSize === inputs.length-1){

//       eItem.push(type.trim());

//     }

//     });


  
// function addR() {


//     const username = 'Nat12';
//     const timeSubmitted = Date.now();
//     const approver = '';
//     const status = 'pending';
//     const item = [];
//     let eItem=[];

//     l 
    
//     for(let y=0 ;y<50;y++);{


//     if(document.getElementById('formHead'+y) !== undefined ){
//     console.log($('#formHead'+y).find('#validationCustomTitle'+y))
//     console.log(document.getElementById('validationCustomTitle'+y).value)
                    
//     console.log($('#formHead'+y).find('#validationCustomAmount'+y))
//     console.log(document.getElementById('validationCustomAmount'+y).value)
    
//    console.log( $('#formHead'+y).find('#validationCustomDescription'+y))
//     console.log(document.getElementById('validationCustomDescription'+y).value)
//     }
//     }
// }
// iObject.title = document.getElementById('validationCustomTitle'+prevForm).value;
// iObject.amount=parseInt(document.getElementById('validationCustomAmount'+prevForm).value);
// iObject.description =document.getElementById('validationCustomDescription'+prevForm).value;
// iObject.type=type.trim();

    
    // childArr=[];
    // let title=document.getElementById("validationCustomTitle").value
    // let amount=parseInt(document.getElementById('validationCustomAmount').value)
    // let description =document.getElementById('validationCustomDescription').value
    // let newIteration = true;
    
    // let indexSize = 4;
    
    // let newsize = 0
    // let counter = 0; 
    
     
   
    
    //   for ( let i = 0; i<inputs.length;i++ ){

    //   console.log(type);
           
    //       //console.log(button_id);
       

        

        
    //             if(inputs[i].getAttribute('type')==='text') {

    //                     eItem[i]=(inputs[i].value);
    //                     //console.log( inputs[i].value);       
                      
    //                   }


    //                   item[initialSize] = eItem;
        
    //                   initialSize++;


                      
    //      }   // end for
        
        
     

    // console.log(item);

    //   }

      
     
 
    
    // console.log(childArr);


    
    // const types=document.getElementsByClassName('type');
    // for ( let i = 0; i<types.length;i++ ){
    //   if(types[i].getAttribute('checked')){
    //     let type=types[i].value;

    //   }
    // }

  //  let arr={title,amount,description};
    
  //   item.push(arr)


  

      
  
  //   const r = {username,timeSubmitted,approver,status,item};

  //   console.log(r);
  
  //   fetch('http://localhost:3000/r', {
  //     body: JSON.stringify(r),
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     //credentials: 'include',
  //     method: 'POST'
  //   })
  //   .then(resp => {
  //     if (resp.status === 401 || resp.status === 403) {
  //       alert('invalid permissions')
  //       throw 'Invalid permissions';
  //     }
  //     return resp.json();
  //   })
  //   .then(data => {
  //     alert('created') // this is horrible, never use alerts
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }






//   for ( let i = 0; i<inputs.length;i++ ){

         
//     if(initialSize !== inputs.length ){

//       initialSize = inputs.length
//       indexSize+=inidexSize;
      
//     }

//     // console.log(`size : ${inputs.length}`);

//     // console.log(`loop ${i}`);

//     if(i <  indexSize){
//       console.log('2')
    
//             if (inputs[i].parentElement.getElementsByClassName('active')===null){
                  
//                       console.log(inputs[i].parentElement.getElementsByClassName('active'));
//                       eItem.push(inputs[i].parentElement.textContent.trim())
//                       console.log(inputs[i].parentElement.textContent.trim());
                  
//                     }  
             
//        }    
           
    





//   if(i >=  indexSize){
//     console.log('1')
    
//             if(inputs[i].getAttribute('type')==='text') {

//                     eItem.push(inputs[i].value);
//                     console.log( inputs[i].value);       
                  
//                   }
        
//      }  

//    }// end for
 

// console.log(eItem);

   // }