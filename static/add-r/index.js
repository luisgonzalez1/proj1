 
 let username = localStorage.username;
  
 console.log(`user passes by local storage ${username}`);

function RItem()  {

  this.type='';
  this.title= '';
  this.description='';
  this.amount = '';
  }

  function Reimbustment (){
  
  this.username = username;
  //time submitted will be initialized on server side  
  this.timeSubmitted;
  this.item=[];
  this.approver='not approved';
  this.status='pending';


  }
  
 
 /// reinburstmnets item logic 
let i=1;

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {

        //|| checkEmpty() === false
        
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
            iObject = new RItem();
                for ( let z = 0 ;z< cols.length ; z++){
                
                  if (z === 0){
                      let option = cols[z].children[0].value
                      iObject.type=option;
                     
                    
                  }else if(z === 1){
      
                    cellData = cols[z].children[0].value ;
                    iObject.title=cellData
                     
      
                  }else if(z === 2){
      
                    cellData = cols[z].children[0].value ;
                    iObject.amount=cellData
                     
      
                  }if(z === 3){
      
                    cellData = cols[z].children[0].value ;
                    iObject.description=cellData
                     
      
                  }
                   
                    
                } Reimb.item.push(iObject);      
              
          }
      
         console.log(Reimb);
         //local storage username 
        //Reimb.username = username;


         /*FETCH   */


      fetch('http://localhost:3000/r', {
      body: JSON.stringify(Reimb),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      method: 'POST'
    })
    .then(resp => {
      if (resp.status === 401 || resp.status === 403) {
        alert('invalid permissions')
        throw 'Invalid permissions';
      }
      return resp.json();
    })
    .then(data => {
      alert('created') // this is horrible, never use alerts
    })
    .catch(err => {
      console.log(err);
    });
          }
        form.classList.add('was-validated');

         
        
      }, false);
      let addB = document.getElementById('add');
      // let i=1;
      addB.addEventListener('click', function(event) {


        ///validate when add is pressed

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
                        <input type="text" id="validationCustom03"  class="form-control" placeholder="Amount" required>
                        <div id='amount-feedback' class="invalid-feedback">
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

      //let amountField = document.getElementById('validationCustom03');
     // amountField.addEventListener('input'
        $('#validationCustom03').on('input', function(event) {

        console.log('typing information');










      }, false)


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

// $('#validationCustom03').bind('input', function(event) {


// console.log('typing');


// })

 
 

// function will check if there is any previous field empty  //  no working 
let radioClicked;
 
 function checkEmpty (){


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
              if(cellData ===""){
                return false;
              }
               

            }
             
              
          }       
        
    }

   
    

return true;
 }

 