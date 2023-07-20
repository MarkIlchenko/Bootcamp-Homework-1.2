let cartItems = [];

// Проверяем наличие сохраненных данных в localStorage
if (localStorage.getItem('cartItems')) {
    cartItems = JSON.parse(localStorage.getItem('cartItems'));
}

function increaseQuantity(coffeeName) {
    let item = cartItems.find(item => item.name === coffeeName);
    if (item) {
        item.quantity++;
        updateCart();
    }
}

function decreaseQuantity(coffeeName) {
    let item = cartItems.find(item => item.name === coffeeName);
    if (item && item.quantity > 1) {
        item.quantity--;
        updateCart();
    }
}

function getSelectedML(item) {
    const radioButtons = document.querySelectorAll(`input[name="${item}"]:checked`);
    if (radioButtons.length > 0) {
        return parseInt(radioButtons[0].value);
    }
    return 250;
}

function isSugarAdded(item) {
    const sugarCheckbox = document.getElementById(`${item}-myCheckbox`);
    if (sugarCheckbox.checked) {
        return `<img src="img/Sugar.svg"><p>Sugar</p>`
    } else {
        return ""
    }
}


function addToCart(coffeeName, price, img, ML, sugar, discount) {
    let cartItem = {
        name: coffeeName,
        price: price,
        img: img,
        ml: ML,
        sugar: sugar,
        discount: discount,
        quantity: 1
    };

    let existingItem = cartItems.find(item => item.name === coffeeName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push(cartItem);
    }

    updateCart();
}

function updateCartIconCounter() {
    const cartIcon = document.querySelector(".basket-icon");
    if (cartIcon) {
        // Получаем количество элементов в localStorage
        const cartItemCount = localStorage.getItem('cartItemCount');
        // Обновляем значение счетчика
        const counterElement = cartIcon.querySelector(".cart-item-count");
        if (counterElement) {
            counterElement.innerText = cartItemCount || '0';
        }
    }
}

function updateCart() {
    let cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = "";
    let totalItems = 0;

    cartItems.forEach(item => {
        let cartItemDiv = `
            <div class="cart-item-container">
                <div class="cart-item">
                <div>
                    <img src="${item.img}" alt="${item.name}" class="cart-img">
                    
                </div>
                <div class="item-quantity">
                    <div class="cart-name-price">
                        <h3 class="cart-name">${item.name}</h3>
                        <p class="price cart-price">${item.discount}</p>
                    </div>
                    <div class="selected-option">
                         <div class="cart-item-option-container">
                            <img src="img/ML-icon.svg" alt="icon" class="ml-icon"> ${item.ml}
                        </div>
                        <div class="cart-item-option-container">
                            ${item.sugar}
                        </div>
                        
                    </div>
                </div>
                <div class="quanity-counter">
                    <button onclick="decreaseQuantity('${item.name}')" class="cart-button"><img src="img/Minus.svg" alt="Minus"></button>
                    <span class="quanity-number">${item.quantity}</span>
                    <button onclick="increaseQuantity('${item.name}')" class="cart-button"><img src="img/Plus.svg" alt="Plus"></button>
                </div>
                    <button class="cart-remote cart-button" onclick="removeFromCart('${item.name}')"><img src="img/Delete.svg" alt="Delet"></button>
                </div>
                <div class="shape"></div>
            </div>
        `;

        totalItems += item.quantity;

        // Добавляем элемент корзины в div корзины
        cartItemsDiv.innerHTML += cartItemDiv;

    });

    let total = cartItems.reduce((sum, item) => sum + item.price * item.quantity + 5, 0);
    let cartTotal = document.getElementById("cart-total");
    cartTotal.innerHTML = `
    <div class="cart-list">
        <p class="cart-item-name">Delivery</p>
        <span class="cart-item-cost">$${total}</span>
    </div>
    `;

    let testElement = document.querySelector(".items-number-quanity");
    let cartItemNamesAndQuantities = cartItems.map(item =>
        `<li class="cart-list">
            <p class="cart-item-name">${item.name}:</p>
            <span class="cart-item-cost">${item.quantity}x $${item.price}</span>
        </li> `);
    testElement.innerHTML = `<h3>${cartItemNamesAndQuantities.join(' ')}</h3>`;





    let cartNumberCounter = document.querySelector(".cart-item-count");
    cartNumberCounter.innerHTML = totalItems;

    const cartIconImage = document.querySelector(".basket-icon");
    if (cartItems.length > 0) {
        cartIconImage.src = "img/Shopping-Cart2.svg";
    } else {
        cartIconImage.src = "img/Shopping-Cart.svg";
    }

    // Сохраняем данные в localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    localStorage.setItem('cartItemCount', totalItems);
    updateCartIconCounter();

}



function updateQuantity(coffeeName, quantity) {
    let item = cartItems.find(item => item.name === coffeeName);
    if (item) {
        item.quantity = quantity;
        updateCart();
    }
}

function removeFromCart(coffeeName) {
    cartItems = cartItems.filter(item => item.name !== coffeeName);
    updateCart();
}

function checkout() {
    // Redirect to checkout page
    alert("Спасибо мы получили ваш заказ, мы скоро с вами свяжемся!")
}

// Вызываем функцию updateCart для обновления корзины
updateCart();


// Старый код
// let cartItemDiv = document.createElement("div");
// cartItemDiv.classList.add("cart-item");
//
//
// let itemName = document.createElement("div");
// let itemNameHeader = document.createElement("h3");
// itemNameHeader.innerText = item.name;
// itemName.appendChild(itemNameHeader);
// cartItemDiv.appendChild(itemName);
//
//
// let itemQuantity = document.createElement("div");
// itemQuantity.classList.add("item-quantity");
//
// let imgElement = document.createElement("img");
// imgElement.src = item.img;
// imgElement.alt = item.name;
// itemQuantity.appendChild(imgElement);
//
// let decreaseButton = document.createElement("button");
// decreaseButton.innerText = "-";
// decreaseButton.onclick = function() {
//     decreaseQuantity(item.name);
// };
// itemQuantity.appendChild(decreaseButton);
//
// let quantityDisplay = document.createElement("span");
// quantityDisplay.innerText = item.quantity;
// itemQuantity.appendChild(quantityDisplay);
//
// let increaseButton = document.createElement("button");
// increaseButton.innerText = "+";
// increaseButton.onclick = function() {
//     increaseQuantity(item.name);
// };
// itemQuantity.appendChild(increaseButton);
//
// cartItemDiv.appendChild(itemQuantity);
// cartItemsDiv.appendChild(cartItemDiv);
//
//
// let selectedOption = document.createElement("div");
// selectedOption.classList.add("selected-option");
// selectedOption.innerText = `Selected option: ${item.ml}`;
//
// totalItems += item.quantity;
//
// cartItemDiv.appendChild(selectedOption);
// cartItemsDiv.appendChild(cartItemDiv);
//
// let removeButton = document.createElement("button");
// removeButton.innerText = "Remove";
// removeButton.onclick = function() {
//     removeFromCart(item.name);
// };
// cartItemDiv.appendChild(removeButton);
//
// cartItemsDiv.appendChild(cartItemDiv);