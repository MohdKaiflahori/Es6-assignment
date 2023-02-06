axios.get("https://jsonplaceholder.typicode.com/albums")
  .then((res) => res.data)
  .then((data) =>
    data.map((v) => {
      let tbody = document.getElementById("table");
      tbody.innerHTML += `<tr> <td>${v.userId}</td> <td> ${v.id}</td> <td>${v.title}</td>`;
    })
  ).catch((err)=>{
    console.log(err);
  });
