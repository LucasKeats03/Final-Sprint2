document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const mainPage = document.getElementById('mainPage');
    const loginPage = document.getElementById('loginPage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // No need to check username and password; simply grant access
        loginPage.style.display = 'none';
        mainPage.style.display = 'block';
        displayProducts();
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: 'Handbag', price: 15.99, img: 'FinalSprintPics/images.jpeg'},
        { id: 2, name: 'Sunglasses', price: 10.99, img: 'FinalSprintPics/images (1).jpeg'},
        { id: 3, name: 'Hat', price: 12.99, img: 'FinalSprintPics/download.jpeg'},
        { id: 4, name: 'Watch', price: 20.99, img: 'FinalSprintPics/images (7).jpeg'}, 
        { id: 5, name: 'Ring', price: 30.99, img: 'FinalSprintPics/images (5).jpeg'},
        { id: 6, name: 'Jacket', price: 25.99, img: 'FinalSprintPics/download (2).jpeg'},
        { id: 7, name: 'Pants', price: 18.99, img: 'FinalSprintPics/images (2).jpeg'},
        { id: 8, name: 'Backpack', price: 16.99, img: 'FinalSprintPics/SleekBackpackRollTopGSBlackI2A9E-BB2J4_0ca798b8-cfb2-42ea-a807-1fe04d18ba79.webp'},
        { id: 9, name: 'Shirt', price: 20.99, img: 'FinalSprintPics/images (3).jpeg'},
        { id: 10, name: 'Gloves', price: 10.99, img: 'FinalSprintPics/images (6).jpeg'},
        { id: 11, name: 'Wallet', price: 8.99, img: 'FinalSprintPics/download (1).jpeg'},
        { id: 12, name: 'Socks', price: 6.99, img: 'FinalSprintPics/images (4).jpeg'},
    ];
    const cart = [];

    function displayProducts() {
        const productsContainer = document.getElementById('products');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <img src="${product.img}" alt="${product.name}">
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productsContainer.appendChild(productDiv);
        });
    }

    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        displayCart();
    };

    function displayCart() {
        const cartContainer = document.getElementById('cart');
        cartContainer.innerHTML = '';
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `<p>${item.name} - $${item.price}</p>`;
            cartContainer.appendChild(itemDiv);
        });
        calculateTotal();
    }

    function calculateTotal() {
        const total = cart.reduce((acc, curr) => acc + curr.price, 0);
        document.getElementById('total').textContent = total.toFixed(2);
    }

    window.showCheckoutForm = function() {
        document.getElementById('checkoutForm').style.display = 'block';
    };

    window.finalizePurchase = function() {
        alert('Thank you for shopping with ShopMore, Your order has been placed!');
    };

    displayProducts();
});

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const mainPage = document.getElementById('mainPage');
    const loginPage = document.getElementById('loginPage');
    const userDisplayName = document.getElementById('userDisplayName');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        // Grant access and display username
        loginPage.style.display = 'none';
        mainPage.style.display = 'block';
        userDisplayName.textContent = username; // Update displayed username
        displayProducts();
    });

});

