 
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        
        form.classList.add('was-validated');
      }, false);
    });

    var validation = Array.prototype.filter.call(forms, function(form) {
      let y =0;
      addB.addEventListener('click', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          
         }else{          
          
           inner= document.createElement('span'); 
           let btn = document.createElement('span');
           btn.setAttribute('id',  y ); 
           btn.setAttribute('class', 'remove' ); 
           btn.textContent ='X';
           //btn.setAttribute('type', 'button' ); 
           inner.appendChild(btn);          
           inner.setAttribute('id',  'formHead'+y ); 
           
          //  let btn = document.getElementsByName('span');
          //  btn[y].setAttribute('id',inner.getAttribute('id'));
           //setChild(y);
           y++; 
            

           for (let i = 0 ;i< rForm.length ; i++){             
            inner.innerHTML +=rForm[i].innerHTML;                
          }  
           
         // bottomForm = document.getElementById('rFormAppend').appendChild(btn);
           bottomForm = document.getElementById('rFormAppend').appendChild(inner);
           
            
              
         }
        form.classList.add('was-validated');
        
      }, false);
    });




  }, false);
})();
 
// veriables for adding element
let addB = document.getElementById('addR');

let rForm = document.getElementsByClassName('rForm');
 

//let bottomForm = document.getElementById('rFormAppend');
let inner;
let bottomForm;
          
// varible for removing element 

// let minusB = document.querySelectorAll('spanButton');
// console.log(outside);
// for (let i = 0 ;i< minusB.length ; i++){ 
//    console.log(inside);
//   console.log(minusB[i]);
                
// }  
// if (minusB !==null ){
// minusB.addEventListener('click' , ()=>{
// for (let i = 0 ;i< minusB.length ; i++){ 
   
//   console.log(minusB[i]);
                
// }  
// let parent = document.getElementById('rFormAppend')
// let minusB = document.querySelectorAll('button')

//  });

// }

// minusB.addEventListener('click', ()=>{

  
// //for(let i = 0 ;i<child.length; i++){
//  let parent = document.getElementById('rFormAppend')
// let child= document.getElementById('0');
// if (child !==null ){

//   console.log(minusB.parentElement);
 
// console.log(parent);
// console.log(child);

// parent.removeChild(child);


// }else{

// console.log(' i am undefined');

// }

// //}

// });

// function setChild(num){
  
//   let num = num
//   return toString(num)
// };
//function getChild{return toString(num)};

//console.log(rForm);

 // let reimbItems=[];

// for(let i = 0 ;i< rForm.length ; i++){

//    if( rForm[i].getElementsByTagName('input') && rForm[i].getAttribute('type') === 'text' ){
//     console.log(rForm[i]);

//       reimbItems.push(rForm[i]);

//    }
        
     
    
// } 

// console.log(reimbItems);

// let bottomForm = document.getElementById('rFormAppend');
// let inner;


//   for(let i = 0 ;i< rForm.length ; i++){
//      inner =rForm[i].innerHTML;

//  }

//  console.log(inner);

//  addB.addEventListener('click',()=>{
//   bottomForm.innerHTML+=` ${inner} `;
   


  
// });
// for(let i = 0 ;i< bottomForm.length ; i++){

//   console.log(bottomForm[i]);
//  }     


 //     body.innerHTML += `
  //     <tr>
  //       <td>${emp.role}</td>
  //       <td>${emp.username}</td>
        
  //     </tr>
//   `;


// let formParent = document.getElementById('rFormAppend');
// if(formParent.hasChildNodes){

//   formParent.addEventListener('change',()=>{
//   for(let i = 0 ;i<  formParent.length ; i++){

//     console.log(formParent[i]);



//   }
//   formParent = document.getElementById('rFormAppend');

// })
  
// }



// console.log(formParent);
// for(let i = 0 ;i<  formParent.length ; i++){

// formParent.addEventListener('click',()=>{


// console.log('im parrent');


// // })

// }


//  let bttn = document.getElementsByClassName("remove")
            
           


//  for(let i = 0 ;i< bttn.length ; i++){

//     bttn[i].addEventListener('click',()=>{

//      console.log(bttn[i].getAttribute("class"));
      

//   });

          
                
//  }
 
 
$(document).on('click', '.remove', function(){
  let button_id = $(this).attr("id"); 
  let button = $(this);
  console.log(button_id);
 console.log($(button_id).closest('span')) 
 //$(this).closest('span').remove();    
 // console.log($(this).parent);
  //console.log(button_id)
  $(this).parent('#formHead'+button_id).remove(); 
  //let parent = document.getElementById('rFormAppend')
   
    

});
  





 





