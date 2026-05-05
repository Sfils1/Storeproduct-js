const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Audio",
    price: 79.99,
    rating: 4.6,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Headphones"
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Wearables",
    price: 149.99,
    rating: 4.8,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Smart+Watch"
  },
  {
    id: 3,
    name: "Gaming Mouse",
    category: "Accessories",
    price: 39.99,
    rating: 4.5,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Gaming+Mouse"
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 89.99,
    rating: 4.7,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Keyboard"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 59.99,
    rating: 4.4,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Speaker"
  },
  {
    id: 6,
    name: "Laptop Stand",
    category: "Office",
    price: 29.99,
    rating: 4.3,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Laptop+Stand"
  },
  {
    id: 7,
    name: "USB-C Hub",
    category: "Accessories",
    price: 24.99,
    rating: 4.2,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=USB-C+Hub"
  },
  {
    id: 8,
    name: "Portable Charger",
    category: "Power",
    price: 34.99,
    rating: 4.6,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Power+Bank"
  },
  {
    id: 9,
    name: "4K Monitor",
    category: "Display",
    price: 299.99,
    rating: 4.9,
    inStock: false,
    image: "https://via.placeholder.com/300x200?text=4K+Monitor"
  },
  {
    id: 10,
    name: "Desk Lamp",
    category: "Office",
    price: 19.99,
    rating: 4.1,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Desk+Lamp"
  },
  {
    id: 11,
    name: "External Hard Drive",
    category: "Storage",
    price: 99.99,
    rating: 4.7,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Hard+Drive"
  },
  {
    id: 12,
    name: "HD Webcam",
    category: "Camera",
    price: 49.99,
    rating: 4.4,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Webcam"
  },
  {
    id: 13,
    name: "Noise Cancelling Earbuds",
    category: "Audio",
    price: 119.99,
    rating: 4.8,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Earbuds"
  },
  {
    id: 14,
    name: "Tablet Pro 11",
    category: "Devices",
    price: 449.99,
    rating: 4.7,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Tablet"
  },
  {
    id: 15,
    name: "Wireless Charger",
    category: "Power",
    price: 27.99,
    rating: 4.3,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Wireless+Charger"
  },
  {
    id: 16,
    name: "Smart LED Bulb",
    category: "Smart Home",
    price: 14.99,
    rating: 4.2,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Smart+Bulb"
  },
  {
    id: 17,
    name: "Mini Projector",
    category: "Display",
    price: 189.99,
    rating: 4.5,
    inStock: false,
    image: "https://via.placeholder.com/300x200?text=Projector"
  },
  {
    id: 18,
    name: "Ring Light",
    category: "Camera",
    price: 32.99,
    rating: 4.4,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Ring+Light"
  },
  {
    id: 19,
    name: "Ergonomic Chair",
    category: "Office",
    price: 219.99,
    rating: 4.6,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Office+Chair"
  },
  {
    id: 20,
    name: "Smartphone Tripod",
    category: "Camera",
    price: 22.99,
    rating: 4.1,
    inStock: true,
    image: "https://via.placeholder.com/300x200?text=Tripod"
  }
];

const productContainer = document.getElementById("product-container");

const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

const createProductCard = (product) => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />

    <h2>${product.name}</h2>

    <p class="category">${product.category}</p>

    <p class="price">${formatPrice(product.price)}</p>

    <p class="rating">⭐ ${product.rating}</p>

    <p class="${product.inStock ? "in-stock" : "out-stock"}">
      ${product.inStock ? "In Stock" : "Out of Stock"}
    </p>

    <button ${!product.inStock ? "disabled" : ""}>
      ${product.inStock ? "Add to Cart" : "Unavailable"}
    </button>
  `;

  return card;
};

const renderProducts = (productList) => {
  if (!productContainer) {
    console.error("Product container not found.");
    return;
  }

  productContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();

  productList.forEach((product) => {
    fragment.appendChild(createProductCard(product));
  });

  productContainer.appendChild(fragment);
};

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});
