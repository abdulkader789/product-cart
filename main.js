
const container = document.querySelector('.product-container');

// fetch product data
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayProduct(data));


function displayProduct(products) {
    products.forEach((product) => {

        // Creating elements
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card');
        productDiv.innerHTML = `
      <div class="product-tumb">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="product-details">
        <h4><a href="">${product.title.slice(0, 30)}</a></h4>
        <p>${product.description.slice(0, 120)}</p>
        <div class="product-bottom-details">
          <div class="product-price">$ ${product.price}</div>
          <button class='add-to-cart'>Add To Cart</button>
        </div>
      </div>`;

        // Appending elements
        container.appendChild(productDiv);
    });
}










