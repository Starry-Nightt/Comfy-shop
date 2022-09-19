import runSidebar from "./sidebar.js";
import runCart, {cartApp, cartBtn} from './cart.js';

runCart();
runSidebar();

// Single page plugin

const keyLocal = 'detailProduct'
function start(){
    getProduct(renderProduct);
    handleEvents();
}

start();


function getProduct(callback){
    const data = JSON.parse(localStorage.getItem(keyLocal));
    callback(data)
}

function renderProduct(element){
    var htmls =  `
        <div class="detail container py-section">
            <div class="detail__img rounded">
                <img src="${element.img}" alt="">
            </div>
            <div class="detail__body">
                <h2 class="detail__name">${element.name}</h2>
                <h1 class="detail__company text-uppercase">By ${element.company}</h1>
                <h4 class="detail__price">$${element.price}</h4>
                <div class="detail__colors">
                    <span class="circle circle-orange"></span>
                    <span class="circle circle-black"></span>
                </div>
                <p class="detail__desc text-gray">${element.desc}</p>
                <button class="btn-primary text-uppercase js-add-cart-btn">Add To Cart</button>
            </div>
        </div>
        `
    document.querySelector('#detail').innerHTML = htmls;
    document.querySelector('#breadcrumb .js-breadcrumb-product a').textContent = element.name
}

function handleEvents(){
    document.querySelector('#detail').onclick = function(e){
        if (e.target.closest('.js-add-cart-btn')){
            const {img, name, price} = JSON.parse(localStorage.getItem(keyLocal));
            const newCartItem = {img, name, price, quantity: 1};
            cartApp.handleAddItem(newCartItem);
            cartBtn.click();
        }
    }
}



