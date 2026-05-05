function fetchProductsThen() {
  fetch('https://www.course-api.com/javascript-store-products')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((products) => {
      products.forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
}

async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

function displayProducts(products) {
  const productContainer = document.querySelector('#product-container');
  productContainer.innerHTML = '';

  products.slice(0, 5).forEach((product) => {
    const card = document.createElement('article');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.fields.image[0].url;
    image.alt = product.fields.name;

    const name = document.createElement('h2');
    name.textContent = product.fields.name;

    const price = document.createElement('p');
    price.textContent = `$${(product.fields.price / 100).toFixed(2)}`;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);

    productContainer.appendChild(card);
  });
}

function handleError(error) {
  console.error(`An error occurred: ${error.message}`);
}

fetchProductsThen();
fetchProductsAsync();
