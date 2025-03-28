document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
});

let cart = [];

function fetchProducts(){
    const requestOptions = {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    }
}
    fetch("http://localhost:3000/products", requestOptions)
      .then(response => response.json())
      .then(result => displayProducts(products))
      .catch(error => console.error("Error fetching products", error));


function displayProducts(products) {
  const container = document.getElementById("products-container");
  container.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
        `;
    container.appendChild(productElement);
  });
}


function addToCart(id, name, price) {
  cart.push({ id, name, price });
  updateCart();
}


function updateCart() {
  document.getElementById("cart-count").textContent = cart.length;
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });
}

function signIn() {
    event.preventDefault
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();

  if (email === "") {
    alert("Please enter your email to sign in.");
    return;
  }
  if(savedEmail) {
    document.getElementById("email").value = savedEmail;
  }
  localStorage.setItem("userEmail", email);
  alert(`Welcome, ${email}! You have signed in successfully.`);

  

}


document.getElementById("checkout").addEventListener("click", () => {
  if (cart.length > 0) {
    alert("Purchase successful!");
    cart = [];
    updateCart();
  } else {
    alert("Your cart is empty!");
  }
});