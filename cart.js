import products from "./productsData.js";
import preloader from "./preloader.js";

export const cartBtn = document.querySelector('.js-cart-btn');
const cartOverlay = document.querySelector('.js-cart-overlay');
const cartCloseBtn = document.querySelector('.js-close-cart-overlay');
const cart = document.querySelector('.js-cart');
const cartList = document.querySelector('.js-cart-list');

var $ = document.querySelector.bind(document);
var $$ =document.querySelectorAll.bind(document);

const [a,,b,,,c] = products;
let items = [a,b,c];
items =  items.map(function(element){
    let {img, name, price} = element;
    return {img, name, price, quantity: 1}
})

const keyLocal = 'cartLocal';
// localStorage.setItem(keyLocal, JSON.stringify([]));

export const cartApp = {
    items: items,

    renderCart: function(){
        if (localStorage.getItem(keyLocal) == null){
            this.items = [];
            this.updateBadge();
            this.updateTotal();
        }
        else {
            this.items = JSON.parse(localStorage.getItem(keyLocal))
            let htmls = this.items.map(function(item){
                return `
                <li class= "item js-item">
                    <div class="item__img rounded">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="item__body">
                        <h5 class="item__name">${item.name}</h5>
                        <h6 class="item__price">$${item.price}</h6>
                        <button class="js-remove-btn btn-normal text-gray">Remove</button>
                    </div>
                    <div class="item__quantity text-center js-item-quantity">
                        <span><i class="fa-solid fa-angle-up js-inc-btn"></i></span>
                        <h5 class="number js-number-item">${item.quantity}</h5>
                        <span><i class="fa-solid fa-angle-down js-dec-btn"></i></span>
                    </div>
                </li>
                `
            })
            cart.querySelector('.cart__list').innerHTML = htmls.join('');
            this.updateBadge();
            this.updateTotal();
        }
    },

    handleEvents: function(){
        // CLick events
        const _this = this;
        cartBtn.onclick = function(){
            cartOverlay.classList.add('show')
        }
        cartCloseBtn.onclick = function(){
            cartOverlay.classList.remove('show')
        }

        cartOverlay.onclick = function(e){
            cartOverlay.classList.remove('show')
        }
        
        cart.onclick = function(e){
            if (e.target.closest('.js-inc-btn')){
                const numberItems = e.target.closest('.js-item-quantity').querySelector('.js-number-item');
                const selectedItem = e.target.closest('.js-item');
                cartApp.handleIncreaseItem(selectedItem);
                let number= numberItems.textContent;
                number++
                numberItems.textContent = number;
            }
            else if (e.target.closest('.js-dec-btn')){
                const numberItems = e.target.closest('.js-item-quantity').querySelector('.js-number-item');
                let number = numberItems.textContent;
                const selectedItem = e.target.closest('.js-item');
                _this.handleDecreaseItem(selectedItem);
                number--;
                if (number == 0){
                    const item = e.target.closest('.js-item');
                    cartApp.handleRemoveItem(item);
                }
                else {
                    numberItems.textContent = number;
                }
            }
            else if (e.target.closest('.js-remove-btn')){
                const selectedItem = e.target.closest('.js-item');
                cartApp.handleRemoveItem(selectedItem);
            }
            e.stopPropagation(); 
        }

        const checkoutBtn = cart.querySelector('.js-checkout-btn')
        checkoutBtn.onclick = function(){
            let totalMoney = cart.querySelector('.cart__footer h1').textContent;
            totalMoney = totalMoney.slice(7);
            console.log(totalMoney)
            cartApp.items = []
            localStorage.setItem(keyLocal, JSON.stringify(cartApp.items))
            cartApp.renderCart();
            cartApp.updateBadge();
            cartApp.updateTotal();
            cartList.innerHTML = `
            <div class="cart__image--purchase cart__image">
                <img src="./assets/images/purchase.png" alt="">
            </div>
            `
            alert('Thank you for your purchase');
        }

        // Load event
        preloader();

        cart.addEventListener('beforeunload', function(e){
            cartApp.renderCart();
        })
    },

    handleAddItem: function(item){
        if (this.items.length == 0){
            const cartImg = cartList.querySelector('.cart__image');
            if (cartImg)
                cartList.removeChild(cartImg)
        }
        const nameItems = this.items.map(function(element){
            return element.name;
        })
        let index = nameItems.indexOf(item.name);
        if (index >= 0 && index < nameItems.length)
        {
            this.items[index].quantity++;
            localStorage.setItem(keyLocal, JSON.stringify(this.items));
            this.renderCart();
            return;
        }
        this.items.push(item);
        localStorage.setItem(keyLocal, JSON.stringify(this.items));
        const newItem = document.createElement('li');
        newItem.classList.add('item', 'js-item');
        newItem.innerHTML =  `
        <div class="item__img rounded">
            <img src="${item.img}" alt="">
        </div>
        <div class="item__body">
            <h5 class="item__name">${item.name}</h5>
            <h6 class="item__price">$${item.price}</h6>
            <button class="btn-normal text-gray js-remove-btn">Remove</button>
        </div>
        <div class="item__quantity text-center js-item-quantity">
            <span><i class="fa-solid fa-angle-up js-inc-btn"></i></span>
            <h5 class="number js-number-item">${item.quantity}</h5>
            <span><i class="fa-solid fa-angle-down js-dec-btn"></i></span>
        </div>
        `
        cartList.appendChild(newItem);
        this.updateBadge();
        this.updateTotal();
    },

    handleRemoveItem: function(selectedItem){
        const nameItem = selectedItem.querySelector('.item__name').textContent;
        const nameItems = this.items.map(function(item){
            return item.name;
        })
        let index = nameItems.indexOf(nameItem);
        if (index >= 0 && index < nameItems.length)
        {
            this.items.splice(index,1);
            localStorage.setItem(keyLocal, JSON.stringify(this.items));
            cartList.removeChild(selectedItem);
            this.updateBadge();
            this.updateTotal();
            this.updateCartImage();
        }
    },

    handleIncreaseItem: function(selectedItem){
        const nameItem = selectedItem.querySelector('.item__name').textContent;
        const nameItems = this.items.map(function(item){
            return item.name;
        })
        let index = nameItems.indexOf(nameItem);
        if (index >= 0 && index < nameItems.length)
        {
            this.items[index].quantity++;
            localStorage.setItem(keyLocal, JSON.stringify(this.items));
        }
        this.updateTotal();
        this.updateBadge();
    },
    handleDecreaseItem: function(selectedItem){
        const nameItem = selectedItem.querySelector('.item__name').textContent;
        const nameItems = this.items.map(function(item){
            return item.name;
        })
        let index = nameItems.indexOf(nameItem);
        if (index >= 0 && index < nameItems.length)
        {
            this.items[index].quantity--;
            localStorage.setItem(keyLocal, JSON.stringify(this.items));
        }
        this.updateTotal();
        this.updateBadge();
    },

    updateCartImage: function(){
        if (this.items.length == 0){
            cartList.innerHTML = `
            <div class="cart__image--empty cart__image">
                <img src="./assets/images/empty.png" alt="">
            </div>
            `
        }
    },

    updateTotal: function(){
        let total = this.items.reduce(function(acc, cur){
            return acc + cur.price * cur.quantity;
        }, 0)
        total = Math.round(total * 100) / 100;
        cart.querySelector('.cart__footer h1').innerHTML 
        = 'Total: $' + total;
    },

    updateBadge: function(){
        const n = this.items.reduce(function(acc, cur){
            return acc + cur.quantity
        },0);
        const cartBadge = document.querySelector('#header .cart__badge');
        if (n == 0){
            cartBadge.style.visibility = 'hidden';
        }
        else {
            cartBadge.style.visibility = 'unset';
            cartBadge.textContent = n;
        }

    },

    start: function(){
        this.renderCart();
        this.handleEvents();
    }
}

function runCart(){
    cartApp.start();
}

runCart();

export default runCart;
