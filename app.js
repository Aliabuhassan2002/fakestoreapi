// API for get requests

// let i=0;

function fetchProducts(){
let fetchresponse = fetch("https://6784b22e1ec630ca33a535d6.mockapi.io/Users");
        
    // Fetchresponse is the promise to responseolve
    // it by using.then() method
    fetchresponse.then(response =>response.json())
        .then(users => {

          users.map((user) => {
            document.querySelector("main").innerHTML+= `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${user.Title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${user.price}</h6>
    <p class="card-text">${user.desc}</p>
    <button class="card-link" onclick="updateProduct(${user.id})">Update Title</button>
    <button class="card-link" onclick="deleteProduct(${user.id})">Delete</button>
  </div>
</div>`;

          });
          
        } 
          )
        }
        fetchProducts();
// function updateTitle(id){

//  let newTitle= prompt("Enter the new title");
//  fetch(`https://6784b22e1ec630ca33a535d6.mockapi.io/Users/${id}`,

//   {
//     method:'Patch',

//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },

//     body:JSON.stringify({
//       Title:newTitle
      
//     })


//   }

//  ).then(response=>response.json())

 

// }
let api="https://6784b22e1ec630ca33a535d6.mockapi.io/Users";
function updateProduct(id) {
  const newTitle = prompt('Enter the new title:');
  if (newTitle) {
    fetch(`${api}/${id}`, {

      method: 'Put',
      headers: {
        
   
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({ Title: newTitle }),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Product updated successfully!');
        fetchProducts(); // Refresh the product list
      })
      .catch((error) => console.error('Error updating product:', error));
  }
}
function deleteProduct(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    fetch(`${api}/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        alert('Product deleted successfully!');
        fetchProducts(); // Refresh the product list
      })
      .catch((error) => console.error('Error deleting product:', error));
  }
}

function CreateProduct(){

let title=prompt("Enter product title");
let descrip=prompt("Enter a descripition of the product");
let price=prompt("Enter the price of Product");

fetch("https://6784b22e1ec630ca33a535d6.mockapi.io/Users",{
  method: "Post",

  headers:{
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({

    Title:title,
    desc:descrip,
    price:price
  })
  

}).then(response=>response.json())
.then(()=>{
  alert(`The Product ${title} is created successfully`)
})
fetchProducts();

}


/////////////////////////////////////////////

// fetchresponse.then(response =>
//   response.json()).then(data => {
//        let

//   })



    