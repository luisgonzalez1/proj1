function retreiveMovies() {
    const year = document.getElementById('year-input').value;
    //, {credentials: 'include'}
    fetch('http://localhost:3000/employee/')
      .then(resp => {
        console.log(resp.status)
        if(resp.status === 401 || resp.status === 403) {
          return;
        }        
        return resp.json();
      })
      .then((empData) => {
  
        // clear table;
        const body = document.getElementById('movie-table-body');
        body.innerHTML = '';
        
        // populate the table for each movie
        empData.forEach((emp)=>{

        console.log(emp.role);
        addEmp(emp)

        });
       // console.log(empData);

      })
      .catch(err => {
         console.log(err);
        // const body = document.getElementById('movie-table-body');
        // body.innerText = 'Unable to retreive data';
        console.log('this is crazy shit ')


      });
  }

  function addEmp(emp) {
    const body = document.getElementById('movie-table-body');
  
    const row = document.createElement('tr'); // create <tr>
    let data = document.createElement('td'); // create <td>
    data.innerText = emp.username; // assign value to the td  // emp.role; emp.username;
    row.appendChild(data); // append the td to the row
    data = document.createElement('td');
    data.innerText = emp.role;
    row.appendChild(data);
    body.appendChild(row); // append the row to the body

//     body.innerHTML += `
//     <tr>
//       <td>${emp.role}</td>
//       <td>${emp.username}</td>
       
//     </tr>
//   `;
     

  }