 


function RItem()  {

  this.type='';
  this.title= '';
  this.description='';
  this.amount = '';
  }

  function Reimbustment (){
  
  this.username = 'no user name';
  this.timeSubmitted=Date.now();
  this.item=[];
  this.approver='not approved';
  this.status='pending';


  }
  
 

// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
        
//     });

//     var validation = Array.prototype.filter.call(forms, function(form) {
//       // let y =0;
//       addB.addEventListener('click', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
          
//          }else{      
          
//                        inner= document.createElement('span'); 
//                       let btn = document.createElement('span');
//                       btn.setAttribute('id',  y ); 
//                       btn.setAttribute('class', 'remove' ); 
//                       btn.textContent ='X';
//                       inner.appendChild(btn);          
//                        inner.setAttribute('id',  'formHead'+y );         
                        

//                       for (let i = 0 ;i< rForm.length ; i++){             
//                         inner.innerHTML+=rForm[i].innerHTML;     
                        
//                       }

//                       bottomForm = document.getElementById('rFormAppend').appendChild(inner);

                       
                        
//                       $('#formHead'+y).find('#validationCustomTitle').attr("id", 'validationCustomTitle'+y);

                    
//                       $('#formHead'+y).find('#validationCustomAmount').attr("id", 'validationCustomAmount'+y);

                      
//                       $('#formHead'+y).find('#validationCustomDescription').attr("id", 'validationCustomDescription'+y);          

//                       // if(!firstIt){
//                         let iObject = new RItem();
//                         iObject.type="Lodging"
//                         console.log(y);
//                         let prevForm = y-1;
//                       iObject.title = document.getElementById('validationCustomTitle'+prevForm).value;
//                       iObject.amount=parseInt(document.getElementById('validationCustomAmount'+prevForm).value);
//                       iObject.description =document.getElementById('validationCustomDescription'+prevForm).value;
//                       iObject.type=type.trim();
//                        console.log(iObject);
//                       Reimb.item.push(iObject);

//                       //console.log(iObject);

//                       // }else {
//                       //   let iObject = new RItem();
//                       //   iObject.type="Lodging"
//                       //   console.log('firts iteration')
//                       //   iObject.title = document.getElementById('validationCustomTitle').value;
//                       //   iObject.amount=parseInt(document.getElementById('validationCustomAmount').value);
//                       //   iObject.description =document.getElementById('validationCustomDescription').value;
//                       //   iObject.type=type.trim() ;
//                       //   Reimb.item[y] =iObject;
//                       //   //console.log(iObject);
//                       // }                   
                      
//                       y++; 
                      
//                       firstIt = false; 
              
//          }
//          console.log(Reimb.item)
//         form.classList.add('was-validated');
        
//       }, false);
//     });

//   }, false);
// })();
 
// // veriables for adding element
// let addB = document.getElementById('addR');

// // let rForm = document.getElementsByClassName('rForm');
 

// //let bottomForm = document.getElementById('rFormAppend');
// // let inner;
// // let bottomForm;
          
// // varible for removing element 

//  // had to use jQuery from removin from table 
 
 
// $(document).on('click', '.remove', function(){
//   let button_id = $(this).attr("id"); 
//   let button = $(this);
//   console.log(button_id);
//  console.log($(button_id).closest('span')) 
//  //$(this).closest('span').remove();    
//  // console.log($(this).parent);
//   //console.log(button_id)
//   $(this).parent('#formHead'+button_id).remove();
// y--;
//   console.log(Reimb.item[button_id])
//   Reimb.item.splice(button_id);
   
//   //let parent = document.getElementById('rFormAppend')    

// });





// /*
// * add R 
// */
 

//   //  fetch('http://localhost:3000/r', {
//   //     body: JSON.stringify(r),
//   //     headers: {
//   //       'content-type': 'application/json'
//   //     },
//   //     //credentials: 'include',
//   //     method: 'POST'
//   //   })
//   //   .then(resp => {
//   //     if (resp.status === 401 || resp.status === 403) {
//   //       alert('invalid permissions')
//   //       throw 'Invalid permissions';
//   //     }
//   //     return resp.json();
//   //   })
//   //   .then(data => {
//   //     alert('created') // this is horrible, never use alerts
//   //   })
//   //   .catch(err => {
//   //     console.log(err);
//   //   });
//   // }
let i=1;

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
        }else{
          let size = i;
          let table = document.getElementById('tbody');
          let cols  ;
          let cellData ;
          let Reimb =new Reimbustment();
          let iObject
          
          
          for(let y=1 ; y<=size ; y++ ){
            
            cols = table.children[y].children;
         
                for ( let z = 0 ;z< cols.length ; z++){
                 iObject = new RItem();
                  if (z === 0){
                      let option = cols[z].children[0].value
                      console.log(option)
                     
                    
                  }else {
      
                    cellData = cols[z].children[0].value ;
                    console.log(cellData);
                     
      
                  }
                   
                    
                }       
             Reimb.item.push(iObject);
          }
      
         console.log(Reimb);










        }
        form.classList.add('was-validated');

         
        
      }, false);
      let addB = document.getElementById('add');
      // let i=1;
      addB.addEventListener('click', function(event) {


        ///validate when add is pessed

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else {

          i++;
          console.log('add pressed')
          console.log(i);
          $('#tbody').append(`
      
          
          <tr id="row${i}">
      
         
       <td>
      
           
                            <select id='options'  class="custom-select">
                            <option value="Lodging">Lodging</option>
                            <option value="Travel">Travel</option>
                            <option value="Food">Food</option>
                            <option value="Other">Other</option>
                          </select>
      
          </td>
      
      
        
          
                      <td>                    
                                <input type="text" class="form-control" id="validationCustom03" placeholder="Title" required>
                                <div class="invalid-feedback">
                                  insert title
                                </div>
                              </div>              
                    </td> 
                
                    <td>                    
                        <input type="text" class="form-control" id="validationCustom03" placeholder="Amount" required>
                        <div class="invalid-feedback">
                          insert valid amount
                        </div>
                      </div>              
                  </td> 
                  <td>                    
                      <input type="text" class="form-control" id="validationCustom03" placeholder="Description" required>
                      <div class="invalid-feedback">
                        insert description 
                      </div>
                    </div>              
                </td> 
      
          <td><button type="button" name="remove" id=${i} class="btn btn-danger btn_remove">X</button></td>
          
          </tr>
           
            `);
        }
        form.classList.add('was-validated');

      },false)


    });
  }, false);
})();

$(document).on('click', '.btn_remove', function(){
  console.log('clicked');
  let button_id = $(this).attr("id"); 
  
  $('#row'+button_id).remove();

  i--
  console.log(i)
  
});



 
$(document).ready(function(){
	let i=1;
	$('#add').click(function(){
//     i++;
//     console.log('add pressed')
//     console.log(i);
//     $('#tbody').append(`

    
//     <tr id="row${i}">

   
//  <td>

     
//                       <select id='options'  class="custom-select">
//                       <option value="Lodging">Lodging</option>
//                       <option value="Travel">Travel</option>
//                       <option value="Food">Food</option>
//                       <option value="Other">Other</option>
//                     </select>

//     </td>


  
    
//                 <td>                    
//                           <input type="text" class="form-control" id="validationCustom03" placeholder="Title" required>
//                           <div class="invalid-feedback">
//                             insert title
//                           </div>
//                         </div>              
//               </td> 
          
//               <td>                    
//                   <input type="text" class="form-control" id="validationCustom03" placeholder="Amount" required>
//                   <div class="invalid-feedback">
//                     insert valid amount
//                   </div>
//                 </div>              
//             </td> 
//             <td>                    
//                 <input type="text" class="form-control" id="validationCustom03" placeholder="Description" required>
//                 <div class="invalid-feedback">
//                   insert description 
//                 </div>
//               </div>              
//           </td> 

//     <td><button type="button" name="remove" id=${i} class="btn btn-danger btn_remove">X</button></td>
    
//     </tr>
     
//       `);
	});
	
	// $(document).on('click', '.btn_remove', function(){
  //   console.log('clicked');
  //   let button_id = $(this).attr("id"); 
    
  //   $('#row'+button_id).remove();

  //   i--
  //   console.log(i)
    
	// });
  
  
	$('#submit').click(function(){	
  //   let size = i;
  //   let table = document.getElementById('tbody');
  //   let cols  ;
  //   let cellData ;
  //   let Reimb =new Reimbustment();
  //   let iObject
    
    
  //   for(let y=1 ; y<=size ; y++ ){
      
  //     cols = table.children[y].children;
   
  //         for ( let z = 0 ;z< cols.length ; z++){
  //          iObject = new RItem();
  //           if (z === 0){
  //               let option = cols[z].children[0].value
  //               console.log(option)
               
              
  //           }else {

  //             cellData = cols[z].children[0].value ;
  //             console.log(cellData);
               

  //           }
             
              
  //         }       
  //      Reimb.item.push(iObject);
  //   }

  //  console.log(Reimb);
	 
	});
	
});
let radioClicked;
 
 