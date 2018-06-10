function retreiveHistory() {
    const year = document.getElementById('year-input').value;
    //, {credentials: 'include'}
    fetch('http://localhost:3000/r/name/Ped100/history')
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
    fetch('http://localhost:3000/r/name/Ped100/pending')
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
    fetch('http://localhost:3000/r/name/Ped100/all')
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

  function addRItem(item) {
    const body = document.getElementById('movie-table-body');
  
    const row = document.createElement('tr'); // create <tr>
    let data = document.createElement('td'); // create <td>
    data.innerText = item.status; // assign value to the td  // emp.role; emp.username;
    row.appendChild(data); // append the td to the row
    data = document.createElement('td');
    data.innerText = item.timeSubmitted;
    row.appendChild(data);
    data = document.createElement('td');
    data.innerText = item.username;
    row.appendChild(data);
    data = document.createElement('td');
    data.innerText = item.approver;
    row.appendChild(data);
    body.appendChild(row); // append the row to the body

//     body.innerHTML += `
//     <tr>
//       <td>${emp.role}</td>
//       <td>${emp.username}</td>
       
//     </tr>
//   `;
     

  }