function RItem()  {

    this.type='';
    this.title= '';
    this.description='';
    this.amount = '';
    }
  
    function Reimbustment (){
    
    this.username = username;
    this.timeSubmitted=Date.now();
    this.item=[];
    this.approver=username;
    this.status='pending';
  
  
    }
    
    let username = localStorage.username;
    
    console.log(`user passes by session storage ${username}`);
  
  
    // window.onload = function() {
    //   $('#sumit-status').css({'display':'none'})
    // };
  
  
    function deniedApproveReimburstments(item){
  
  
  
      //const year = document.getElementById('year-input').value;
      //, {credentials: 'include'}
      fetch(`http://localhost:3000/r/name/${username}/p`, {credentials: 'include'})
        .then(resp => {
          console.log(resp.status)
          if(resp.status === 401 || resp.status === 403) {
            return;
          }        
          return resp.json();
        })
        .then((historyData) => {
    
          // clear table;
          const body = document.getElementById('movie-table-body');
          body.innerHTML = '';
  
          tableHeader()
          
          // populate the table for each movie
          historyData.forEach((item)=>{
  
          //console.log(emp.role);
          addApprovedDenied(item)
  
  
          });
         // console.log(empData);
  
        })
        .catch(err => {
           console.log(err);
          // const body = document.getElementById('movie-table-body');
          // body.innerText = 'Unable to retreive data';
           
  
  
        });
    }
  
  function retreiveHistory() {
     // const year = document.getElementById('year-input').value;
      //, {credentials: 'include'}
     
      fetch(`http://localhost:3000/r/name/${username}/history`, {credentials: 'include'})
        .then(resp => {
          console.log(resp.status)
          if(resp.status === 401 || resp.status === 403) {
            return;
          }        
          return resp.json();
        })
        .then((historyData) => {
    
          // clear table;
          const body = document.getElementById('movie-table-body');
          body.innerHTML = '';
  
          tableHeader()
          
          // populate the table for each movie
          historyData.forEach((item)=>{
  
          //console.log(emp.role);
          addRItem(item);
          //addRItem(item)
  
          });
         // console.log(empData);
  
        })
        .catch(err => {
           console.log(err);
          // const body = document.getElementById('movie-table-body');
          // body.innerText = 'Unable to retreive data';
           
  
  
        });
    }
  
  
    function retreivePending() {
      const year = document.getElementById('year-input').value;
      //, {credentials: 'include'}
      fetch(`http://localhost:3000/r/name/${username}/pending`, {credentials: 'include'})
        .then(resp => {
          console.log(resp.status)
          if(resp.status === 401 || resp.status === 403) {
            return;
          }        
          return resp.json();
        })
        .then((historyData) => {
    
          // clear table;
          const body = document.getElementById('movie-table-body');
          body.innerHTML = '';
  
          tableHeader();
          
          
          // populate the table for each movie
          historyData.forEach((item)=>{
  
          //console.log(emp.role);
          addRItem(item)
  
          });
         // console.log(empData);
  
        })
        .catch(err => {
           console.log(err);
          // const body = document.getElementById('movie-table-body');
          // body.innerText = 'Unable to retreive data';
           
  
  
        });
    }
  
    function retreiveAll() {
      const year = document.getElementById('year-input').value;
      //, {credentials: 'include'}
      fetch(`http://localhost:3000/r/name/${username}/all`, {credentials: 'include'})
        .then(resp => {
          console.log(resp.status)
          if(resp.status === 401 || resp.status === 403) {
            return;
          }        
          return resp.json();
        })
        .then((historyData) => {
    
          // clear table;
          const body = document.getElementById('movie-table-body');
          body.innerHTML = '';
          tableHeader();
       
          
          // populate the table for each movie
          historyData.forEach((item)=>{
  
          //console.log(emp.role);
          addRItem(item)
  
          });
         // console.log(empData);
  
        })
        .catch(err => {
           console.log(err);
          // const body = document.getElementById('movie-table-body');
          // body.innerText = 'Unable to retreive data';
           
  
  
        });
    }
  
  
  
  
  
    
  
  
  
  
  
  
    let itemArr = [];
    let y=0;
    function addApprovedDenied(item){
  
      //$('#submit1').css({'display':'block'})
      let size= 0;
      let itemStr="";
      for (var key in item) {
        if (key === 'item' ) {
            //console.log(key + " -> " + item[key]);
            for(i in item[key]){   
              
              
               itemStr += (` 
              
               
             
              <tr class ='t${y} disp'>
              <td >${item[key][i].title}</td>
              <td > ${item[key][i].amount}</td> 
              <td > ${item[key][i].description}</td> 
              <td >  ${item[key][i].type}</td>             
              </tr>
             
               
               ` )   
               size++;
                
            }
           
          }
         
        }
       
      let t =new Date(item.timeSubmitted).toLocaleTimeString("en-US");
      let d =new Date(item.timeSubmitted).toLocaleDateString("en-US");
      dateStr =  `${d} ${t}`;
      
       
  
      $('#movie-table-body').append(`
  
       
      <tr   class='table-info  header'>
  
        <td>${item.username}</td>
        <td>${dateStr}</td>
        <td>${item.status}</td>    
        <td>${size}</td>   
        <td>${item.approver}</td>  
      </tr>
       
     
     <tr   class='table-active disp '>
         
        <th>Title </th>
        <th>Amount </th>
        <th>Description</th>
        <th>Type</th>
     
       </tr>
     
         ${itemStr}
    
      
     
  
         <tr class='disp'>
         <td>
         <div id='approveDenied${y}' class="btn-group btn-group-toggle" data-toggle="buttons">
         <label  class="btn btn-secondary active" >
           <input class='blue' type="radio" name="options" id="option1" autocomplete="off" checked value='pending'>Pending
         </label>
         <label class="btn btn-secondary" >
           <input class='green'type="radio" name="options" id="option2" autocomplete="off" value='denied'>Approve
         </label>
         <label class="btn btn-secondary" >
           <input class='red' type="radio" name="options" id="option2" autocomplete="off" value='approved'>Deny
         </label>
         
       </div>
       
         </td>
   
         </tr>    
    `);
   
  
    
      
    if ($('#sumit-status').text() === "" ){
      $('#sumit-status').append (`<button id='submit' class="btn btn-primary"  type="submit">Submit</button> ` )
    }
  
    itemArr.push(item);
     
    y++;
  
    }
  
     
   
  
    $(document).on('click', '.header', function(){
       
      //console.log( $(this).nextUntil('tr.header'));
      $(this).nextUntil('tr.header').toggleClass('disp');
      
       
      })
   
  
    function updateStatus(){
      
      let size = document.getElementById('movie-table-body').childElementCount;
      for ( let i =0 ; i<size ; i++ ){
       // console.log(itemArr)
      approvedDenied = $(`#approveDenied${i} label.active input`).val();
      console.log(approvedDenied);
        //console.log(`Status before ${itemArr[i].status}`)
        itemArr[i].status =  approvedDenied;
        console.log(` timeSubmitted : itemArr[i].timeSubmitted`)
        //itemArr[i].timeSubmitted = Date.now();
        itemArr[i].approver = username;
        console.log(`Status after ${itemArr[i].status}`)
  
        fetch('http://localhost:3000/r/', {
        body: JSON.stringify( itemArr[i]),
        headers: {
          'content-type': 'application/json'
        },
       credentials: 'include',
      
         
        method: 'PUT'
      })
      .then(resp => {
        console.log(resp.status)
        // if (resp.status === 401) {
        //   throw 'invalid ';
        // }
        if (resp.status === 200) {
          return resp.json();
          console.log('updated data')
        }
        throw 'unable to update data ';
      })
      .then(data => {
        window.location = '../status/index.html';
      })
      .catch(err => {
        console.log(err);
        document.getElementById('error-message').innerText = err;
      })
    
    
        // console.log(itemArr[0].status);
  
  
  
  
  
      }
  
      
    }
  
  
  
  
    
  
  
  
  
   
  
   
      function retreiveAllR() {
        // const year = document.getElementById('year-input').value;
         //, {credentials: 'include'}
        
         fetch(`http://localhost:3000/r`, {credentials: 'include'})
           .then(resp => {
             console.log(resp.status)
             if(resp.status === 401 || resp.status === 403) {
               return;
             }        
             return resp.json();
           })
           .then((historyData) => {
             //console.log(historyData);
       
             // clear table;
             const body = document.getElementById('movie-table-body');
             body.innerHTML = '';
     
              tableHeader()
             
             // populate the table for each movie
             historyData.forEach((item)=>{
     
             //console.log(emp.role);
             addRItem(item)
     
             });
            // console.log(empData);
             
           })
           .catch(err => {
              console.log(err);
             // const body = document.getElementById('movie-table-body');
             // body.innerText = 'Unable to retreive data';
              
     
     
           });
       }
    
  
  
  
  
       function addRItem(item){
        
        //$('#sumit-status').css({'display':'none'})
     
        let size= 0;
        let itemStr="";
        for (var key in item) {
          if (key === 'item' ) {
              //console.log(key + " -> " + item[key]);
              for(i in item[key]){   
                
  
                
                 itemStr += (` 
                
                 
               
                <tr class ='t${y} disp'>
                <td >${item[key][i].title}</td>
                <td > ${item[key][i].amount}</td> 
                <td > ${item[key][i].description}</td> 
                <td >  ${item[key][i].type}</td>             
                </tr>
               
                 
                 ` )   
                 
                  size ++;
              }
             
            }
           
          }
         
        let t =new Date(item.timeSubmitted).toLocaleTimeString("en-US");
        let d =new Date(item.timeSubmitted).toLocaleDateString("en-US");
        dateStr =  `${d} ${t}`;
        
         
    
        $('#movie-table-body').append(`
    
         
        <tr   class='table-info  header'>
    
          <td>${item.username}</td>
          <td>${dateStr}</td>
          <td>${item.status}</td>  
          <td>${size}</td>       
          <td>${item.approver}</td>  
        </tr>
         
       
       <tr   class='table-active disp '>
           
          <th>Title </th>
          <th>Amount </th>
          <th>Description</th>
          <th>Type</th>
       
         </tr>
       
           ${itemStr}
      
        
       
    
          
      `);
     
    
      
      if ($('#sumit-status').text() !== "" ){
        $('#sumit-status').empty().append (`<button id='submit' class="btn btn-primary"  type="submit">Submit</button> ` )
      }
      
    
      itemArr.push(item);
       
      y++;
    
      }
    
  
      function tableHeader(){
  
         
  
  
        $('#movie-table-body').append(`
  
        
     
        <tr class ='table-primary'>
         <th scope="col">Username</th>
         <th scope="col">Time Submitted</th>
         <th scope="col">Staus</th>
         <th scope="col">Items</th>
         <th scope="col">Last Reviewed by</th>
       </tr>`)
  
  
  
  
      }
  
  
   ///////////////////////////////////////////////////////////////////////////
   ///////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////
   
   function retreiveAllApproved() {
    // const year = document.getElementById('year-input').value;
     //, {credentials: 'include'}
    
     fetch(`http://localhost:3000/r/approved`, {credentials: 'include'})
       .then(resp => {
         console.log(resp.status)
         if(resp.status === 401 || resp.status === 403) {
           return;
         }        
         return resp.json();
       })
       .then((historyData) => {
   
         // clear table;
         const body = document.getElementById('movie-table-body');
         body.innerHTML = '';
  
         tableHeader()
         
         // populate the table for each movie
         historyData.forEach((item)=>{
  
         //console.log(emp.role);
         addRItem(item)
  
         });
        // console.log(empData);
  
       })
       .catch(err => {
          console.log(err);
         // const body = document.getElementById('movie-table-body');
         // body.innerText = 'Unable to retreive data';
          
  
  
       });
   }
  
  
   function retreiveAllPending() {
    // const year = document.getElementById('year-input').value;
     //, {credentials: 'include'}
    
     fetch(`http://localhost:3000/r/pending`, {credentials: 'include'})
       .then(resp => {
         console.log(resp.status)
         if(resp.status === 401 || resp.status === 403) {
           return;
         }        
         return resp.json();
       })
       .then((historyData) => {
   
         // clear table;
         const body = document.getElementById('movie-table-body');
         body.innerHTML = '';
  
         tableHeader()
         
         // populate the table for each movie
         historyData.forEach((item)=>{
  
         //console.log(emp.role);
         addRItem(item)
  
         });
        // console.log(empData);
  
       })
       .catch(err => {
          console.log(err);
         // const body = document.getElementById('movie-table-body');
         // body.innerText = 'Unable to retreive data';
          
  
  
       });
   }
  
  
  
   function retreiveAllDenied() {
    // const year = document.getElementById('year-input').value;
     //, {credentials: 'include'}
    
     fetch(`http://localhost:3000/r/denied`, {credentials: 'include'})
       .then(resp => {
         console.log(resp.status)
         if(resp.status === 401 || resp.status === 403) {
           return;
         }        
         return resp.json();
       })
       .then((historyData) => {
   
         // clear table;
         const body = document.getElementById('movie-table-body');
         body.innerHTML = '';
  
         tableHeader()
         
         // populate the table for each movie
         historyData.forEach((item)=>{
  
         //console.log(emp.role);
         addRItem(item)
  
         });
        // console.log(empData);
  
       })
       .catch(err => {
          console.log(err);
         // const body = document.getElementById('movie-table-body');
         // body.innerText = 'Unable to retreive data';
          
  
  
       });
   }
  
  
   
  
   function retreiveAllHistory() {
    // const year = document.getElementById('year-input').value;
     //, {credentials: 'include'}
    
     fetch(`http://localhost:3000/r/history`, {credentials: 'include'})
       .then(resp => {
         console.log(resp.status)
         if(resp.status === 401 || resp.status === 403) {
           return;
         }        
         return resp.json();
       })
       .then((historyData) => {
   
         // clear table;
         const body = document.getElementById('movie-table-body');
         body.innerHTML = '';
  
         tableHeader()
        
         
         // populate the table for each movie
         historyData.forEach((item)=>{
  
         //console.log(emp.role);
         addRItem(item)
  
         });
        // console.log(empData);
  
       })
       .catch(err => {
          console.log(err);
         // const body = document.getElementById('movie-table-body');
         // body.innerText = 'Unable to retreive data';
          
  
  
       });
   }
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

 
 
 
 
 
let username = localStorage.username;
  

alert('connected to index.js');

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

////DELETE
$(document).on('click', '.btn_remove', function(){
 console.log('clicked');
 let button_id = $(this).attr("id"); 
 
 $('#row'+button_id).fadeOut(500,()=>{

   $('#row'+button_id).remove();
   i--
 })

 
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

