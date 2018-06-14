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





  






  let itemArr = [];
  let y=0;
  function addApprovedDenied(item){

   
    
    let itemStr="";
    for (var key in item) {
      if (key === 'item' ) {
          //console.log(key + " -> " + item[key]);
          for(i in item[key]){   
            
            //itemStr.push(`Title : ${ item[key][i].title} , Amount : ${ item[key][i].title} , Description : ${ item[key][i].description} ,Type : ${  item[key][i].type} `)
            //` <tr><td>Title : ${ item[key][i].title} , Amount : ${ item[key][i].title} , Description : ${ item[key][i].description} ,Type : ${  item[key][i].type}</td></tr>` 

             //$(`#cBody`).append (` <tr><td>   Title : ${ item[key][i].title} , Amount : ${ item[key][i].amount} , Description : ${ item[key][i].description} ,Type : ${  item[key][i].type}</td></tr>` )
             itemStr += ` 
            
             
           
            <tr class ='t${y} disp'>
            <td >${item[key][i].title}</td>
            <td > ${item[key][i].amount}</td> 
            <td > ${item[key][i].description}</td> 
            <td >  ${item[key][i].type}</td>             
            </tr>
           
             
             ` 
             
             
             
             
             //Title : ${ item[key][i].title} , Amount : ${ item[key][i].amount} , Description : ${ item[key][i].description} ,Type : ${  item[key][i].type} 
             //<br>
             
           //data.innerText =itemStr
          }
         
        }
       
      }
    // body.innerHTML +=
   //console.log(itemStr);
    let t =new Date(item.timeSubmitted).toLocaleTimeString("en-US");
    let d =new Date(item.timeSubmitted).toLocaleDateString("en-US");
    dateStr =  `${d} ${t}`;
    
    // if ($('#form-header').text() === "" ){
    //   $('#form-header').append (`<form id ='rItems'class="needs-validation" onsubmit="event.preventDefault();  ">` )
    //   }
  //   <td><button id =Mbotton${y} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  //   Items
  // </button></td>
  //   <td>

    //$(`#moda-body`).append(`${itemStr}`)

    $('#movie-table-body').append(`

     

    <tr   class='table-info  header'>

      <td>${item.username}</td>
      <td>${dateStr}</td>
      <td>${item.status}</td>           
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
    //console.log(approvedDenied);
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

 

 