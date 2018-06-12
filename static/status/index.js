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
  



function retreiveHistory() {
    const year = document.getElementById('year-input').value;
    //, {credentials: 'include'}
    fetch('http://localhost:3000/r/name/:name/history')
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
    fetch('http://localhost:3000/r/name/:name/pending')
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
    fetch('http://localhost:3000/r/name/:name/all')
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





  function deniedApproveReimburstments(item){

    const year = document.getElementById('year-input').value;
    //, {credentials: 'include'}
    fetch('http://localhost:3000/r/name/:name/p')
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






  let itemArr = [];
  let y=0;
  function addApprovedDenied(item){

    
    let itemStr;
    for (var key in item) {
      if (key === 'item' ) {
          //console.log(key + " -> " + item[key]);
          for(i in item[key]){          

             itemStr =`Title : ${ item[key][i].title} , Amount : ${ item[key][i].title} , 

           Description : ${ item[key][i].description} ,Type : ${  item[key][i].type}`
           //data.innerText =itemStr
          }
        }
      }
    // body.innerHTML +=
   //console.log(itemStr);
    let t =new Date(item.timeSubmitted).toLocaleTimeString("en-US");
    let d =new Date(item.timeSubmitted).toLocaleDateString("en-US");
    dateStr =  `${d} ${t}`;
    
    if ($('#form-header').text() === "" ){
      $('#form-header').append (`<form id ='rItems'class="needs-validation" onsubmit="event.preventDefault();  ">` )
      }

    $('#movie-table-body').append(`
    <tr>

      <td>${item.username}</td>
      <td>${dateStr}</td>
      <td>${item.status}</td>           
      <td>${item.approver}</td>    
      <td>${itemStr}</td>
      <td>
      <div id='approveDenied${y}' class="btn-group btn-group-toggle" data-toggle="buttons">
      <label  class="btn btn-secondary active" >
        <input type="radio" name="options" id="option1" autocomplete="off" checked value='approved'> Approved
      </label>
      <label class="btn btn-secondary" >
        <input type="radio" name="options" id="option2" autocomplete="off" value='denied'> Denied
      </label>
      <label class="btn btn-secondary" >
        <input type="radio" name="options" id="option2" autocomplete="off" value='pending'> Leave Pending
      </label>
      
    </div>
      </td>
      

    </tr>
  `);
 
    
  if ($('#sumit-status').text() === "" ){
    $('#sumit-status').append (`<button id='submit' class="btn btn-primary"  type="submit">Submit Bundle</button> ` )
  }

 itemArr.push(item);
  y++;
     
  // if ($('#form-footer').text() === "" ){
  //    $('#form-footer').append (`</form>` )
  //     }
   
  


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
      itemArr[i].approver = "Sas07"
      console.log(`Status after ${itemArr[i].status}`)
      fetch('http://localhost:3000/r/', {
      body: JSON.stringify( itemArr[i]),
      headers: {
        'content-type': 'application/json'
      },
     //credentials: 'include',
    
       
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
      <td>${itemStr}</td>
      
      

    </tr>
  `);
     

  }