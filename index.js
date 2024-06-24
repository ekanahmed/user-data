let xhr = new XMLHttpRequest();
xhr.open("GET",'https://dummyjson.com/users');
xhr.onload = function() {
      if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            const tBody=document.querySelector("tbody");
            let tr="";

            for (const user of data.users) {
                  tr+=`
                  <tr>
                        <td>${user.id}</td>
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                        <td>${user.email}</td>
                        <td>${user.password}</td>
                        <td>${user.phone}</td>
                        <td>${user.grnder}</td>
                        <td>${user.age}</td>
                        <td>${user.address.city}</td>
                        <td>${user.address.country}</td>
                        <td>${user.address.state}</td>
                  </tr>
                  `;
                  console.log(user);
            }
            tBody.innerHTML=tr;
      }

};
xhr.send();