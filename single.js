import runSidebar from "./sidebar.js";
import runCart, {cartApp, cartBtn} from './cart.js';

runCart();
runSidebar();

// Single page plugin
const api = "http://localhost:3000/products";
let dataProduct;
function start(){
    getProduct(renderProduct);
    handleEvents();
}

start();

function getProduct(callback){
    fetch(api)
        .then(response => response.json())
        .then(callback);
}

function renderProduct(data){
    const n = data.length;
    dataProduct = data[n-1];
    const htmls = data.map(function(element){
        return `
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
    })
    document.querySelector('#detail').innerHTML = htmls[n-1];
    document.querySelector('#breadcrumb .js-breadcrumb-product a').textContent = dataProduct.name
}

function handleEvents(){
    document.querySelector('#detail').onclick = function(e){
        if (e.target.closest('.js-add-cart-btn')){
            const {img, name, price} = dataProduct;
            const newCartItem = {img, name, price, quantity: 1};
            cartApp.handleAddItem(newCartItem);
            cartBtn.click();
        }
    }
    window.onbeforeunload = function(){
        const option = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
        fetch(api + `/${dataProduct.id}`, option)
            .then(function(response){
                response.json();
        })
    }
}



