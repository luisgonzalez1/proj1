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


//  $('#Modal').append(` <!-- Modal -->
//     <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//       <div class="modal-dialog" role="document">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div class="modal-body">
//           <table>
//             <tbody id= "moda-body">
               
               
//             <tbody>
//           </table>
//           </div>
//           <div class="modal-footer">
//             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
         
//           </div>
//         </div>
//       </div>
//     </div> `)

   



   
    
    let itemStr="";
    for (var key in item) {
      if (key === 'item' ) {
          //console.log(key + " -> " + item[key]);
          for(i in item[key]){   
            
            //itemStr.push(`Title : ${ item[key][i].title} , Amount : ${ item[key][i].title} , Description : ${ item[key][i].description} ,Type : ${  item[key][i].type} `)
            //` <tr><td>Title : ${ item[key][i].title} , Amount : ${ item[key][i].title} , Description : ${ item[key][i].description} ,Type : ${  item[key][i].type}</td></tr>` 

             //$(`#cBody`).append (` <tr><td>   Title : ${ item[key][i].title} , Amount : ${ item[key][i].amount} , Description : ${ item[key][i].description} ,Type : ${  item[key][i].type}</td></tr>` )
             itemStr += ` 
            
             
            
            <tr>
            <td>${item[key][i].title}</td>
            <td> ${item[key][i].amount}</td> 
            <td> ${item[key][i].description}</td> 
            <td>  ${item[key][i].type}</td>

             
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

    <tr class ='table-primary'>
        <th scope="col">Username</th>
        <th scope="col">Time Submitted</th>
        <th scope="col">Staus</th>
        <th scope="col">Approved by</th>
    </tr>

    <tr class='table-info'>

      <td>${item.username}</td>
      <td>${dateStr}</td>
      <td>${item.status}</td>           
      <td>${item.approver}</td>  
     
    <tr class='table-active'>
      <th scope="col">Title</th>
      <th scope="col">Amount</th>
      <th scope="col">Description</th>
      <th scope="col">Type</th>
     </tr>
       ${itemStr}
       
       

     
      
       
      
    
         
        
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
  
  

  // $('#Modal').append(` <!-- Modal -->
  //   <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  //     <div class="modal-dialog" role="document">
  //       <div class="modal-content">
  //         <div class="modal-header">
  //           <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
  //           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
  //             <span aria-hidden="true">&times;</span>
  //           </button>
  //         </div>
  //         <div class="modal-body">
  //         <table>
  //           <tbody id= "moda-body">
               
               
  //           <tbody>
  //         </table>
  //         </div>
  //         <div class="modal-footer">
  //           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
         
  //         </div>
  //       </div>
  //     </div>
  //   </div> `)


  // if ($('#form-footer').text() === "" ){
  //    $('#form-footer').append (`</form>` )
  //     }
  
  y++;
  


  // let approvedDenied = $('#approveDenied label.active input').val();
  // //console.log(approvedDenied);
  
  // $(document).on('change', ('#approveDenied label.active input', function(){
  //     console.log('changed');
     
  //     // $('#answer').append =`<span>${approvedDenied}</span>`;
  //   }));
   

 
  

// item.status = " testing ";
// item.approver = "approver tester "

//console.log(item);
 
  }

  // let approvedDenied;
  // $(document).on('change', ('#approveDenied label.active input', function(){
  //   approvedDenied = $('#approveDenied label.active input').val();
  //   console.log(approvedDenied)
    
  // item.status = " testing ";
  // item.approver = "approver tester "


// }));

// $("#option1").click(function(){
//   $("#option2").removeClass("active");
//   $(this).addClass("active");
// });

    

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
    // const body = document.getElementById('movie-table-body');
  
    // const row = document.createElement('tr'); // create <tr>
    // let data = document.createElement('td'); // create <td>
    // data.innerText = item.status; // assign value to the td  // emp.role; emp.username;
    // row.appendChild(data); // append the td to the row
    // data = document.createElement('td');
    // data.innerText = item.timeSubmitted;
    // row.appendChild(data);
    // data = document.createElement('td');
    // data.innerText = item.username;
    // row.appendChild(data);
    // data = document.createElement('td');
    // data.innerText = item.approver;
    // row.appendChild(data);
    // data = document.createElement('td');
    // for (var key in item) {
    //   if (key === 'item' ) {
    //       console.log(key + " -> " + item[key]);
    //       for(i in item[key]){
                 
    //         data.innerText = item[key][i].title;
    //         data.innerText = item[key][i].amount;
    //         data.innerText =item[key][i].description;
    //         data.innerText = item[key][i].type;
    //         let itemStr = (`Title : ${data.innerText = item[key][i].title} , Amount : ${data.innerText = item[key][i].title} , 
    //        Description : ${data.innerText =item[key][i].description} ,Type : ${data.innerText = item[key][i].type}` )
    //        data.innerText =itemStr
    //       }
    //   }
    // }
    // // data.innerText = item.item;
    // row.appendChild(data);
    // body.appendChild(row); // append the row to the body

  
    // let t =new Date(item.timeSubmitted).toLocaleTimeString("en-US");
    // let d =new Date(item.timeSubmitted).toLocaleDateString("en-US");
    // dateStr =  `${d} ${t}`;
    // console.log(dateStr);
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

 

 