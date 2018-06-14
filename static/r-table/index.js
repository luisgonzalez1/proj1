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
   
         // clear table;
         const body = document.getElementById('movie-table-body');
         body.innerHTML = '';
 
         $('#movie-table-body').append(`
 
         <tr class ='table-primary'>
          <th scope="col">Username</th>
          <th scope="col">Time Submitted</th>
          <th scope="col">Staus</th>
          <th scope="col">Approved by</th>
        </tr>`)
         
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
 
         $('#movie-table-body').append(`
 
         <tr class ='table-primary'>
          <th scope="col">Username</th>
          <th scope="col">Time Submitted</th>
          <th scope="col">Staus</th>
          <th scope="col">Approved by</th>
        </tr>`)
         
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
 
         $('#movie-table-body').append(`
 
         <tr class ='table-primary'>
          <th scope="col">Username</th>
          <th scope="col">Time Submitted</th>
          <th scope="col">Staus</th>
          <th scope="col">Approved by</th>
        </tr>`)
         
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
 
         $('#movie-table-body').append(`
 
         <tr class ='table-primary'>
          <th scope="col">Username</th>
          <th scope="col">Time Submitted</th>
          <th scope="col">Staus</th>
          <th scope="col">Approved by</th>
        </tr>`)
         
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
 
         $('#movie-table-body').append(`
 
         <tr class ='table-primary'>
          <th scope="col">Username</th>
          <th scope="col">Time Submitted</th>
          <th scope="col">Staus</th>
          <th scope="col">Approved by</th>
        </tr>`)
         
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


   function addRItem(item) {
     
    let itemStr;
    for (var key in item) {
      if (key === 'item' ) {
          console.log(key + " -> " + item[key]);
          for(i in item[key]){          

             itemStr =`Title : ${ item[key][i].title} , Amount : ${ item[key][i].title} , 

           Description : ${ item[key][i].description} ,Type : ${  item[key][i].type}`
           //data.innerText =itemStr
          }
        }
      }
    // body.innerHTML +=
   console.log(itemStr);
    let t =new Date(item.timeSubmitted).toLocaleTimeString("en-US");
    let d =new Date(item.timeSubmitted).toLocaleDateString("en-US");
    dateStr =  `${d} ${t}`;
    
    $('#movie-table-body').append(`

   


    <tr>

      <td>${item.username}</td>
      <td>${dateStr}</td>
      <td>${item.status}</td>           
      <td>${item.approver}</td> 
      <td> 
    </tr>




   





  `);
     

  }
