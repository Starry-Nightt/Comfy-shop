import runSidebar from "./sidebar.js";
import runCart, {cartBtn, cartApp} from './cart.js';
import products from './productsData.js';

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const featuredList = $('#featured .list');

var keyLocal = 'detailProduct'

const app = {
    products: products,

    renderFeaturedProduct: function(){
        const n = this.products.length;
        let rand1 = getRandomNumber(0, n-1);
        let rand2;
        let rand3;
        do {
            rand2 = getRandomNumber(0, n-1);
            rand3 = getRandomNumber(0, n-1);
        } while (rand2 == rand1 || rand2 == rand3 || rand3 == rand1);
        let first = this.products[rand1];
        let second = this.products[rand2];
        let third = this.products[rand3];
        const featuredProducts = [first, second, third];

        let htmls = featuredProducts.map(function(product){
            return `
            <li class="card">
                <div class="card__img rounded">
                    <img src="${product.img}" alt="">
                    <div class="card__btns">
                        <a href="./single.html" class="btn-primary js-view-product-btn">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                        <button class="btn-primary js-add-cart-btn">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
                <div class="card__body">
                    <h5 class="card__title text-gray">${product.name}</h5>
                    <h6 class="card__subtitle">$${product.price}</h6>
                </div>
            </li>
            `
        })
        $('#featured .list').innerHTML = htmls.join('');
    },

    handleEvents: function(){
        // Click
        featuredList.onclick = function(e){
            if (e.target.closest('.js-add-cart-btn')){
                const selectedItem = e.target.closest('.card');
                const nameItem = selectedItem.querySelector('.card__title').textContent;
                let priceItem = selectedItem.querySelector('.card__subtitle').textContent;
                priceItem = priceItem.replace('$', '');
                const imgItem = selectedItem.querySelector('.card__img img').src;

                const newCartItem = {
                    img: imgItem,
                    name: nameItem,
                    price: priceItem,
                    quantity: 1,
                }
                cartApp.handleAddItem(newCartItem)
                cartBtn.click();
                e.preventDefault();
            }
            else if (e.target.closest('.js-view-product-btn')){
                const selectedItem = e.target.closest('.card');
                const nameItem = selectedItem.querySelector('.card__title').textContent;
                const nameListItem = app.products.map(function(item){
                    return item.name;
                })
                const index = nameListItem.indexOf(nameItem);
                if (index == -1){
                    return;
                }
                const viewedItem = app.products[index]
                localStorage.setItem(keyLocal, JSON.stringify(viewedItem));
                
            }
        }
    },
    
    start: function(){
        this.renderFeaturedProduct();
        this.handleEvents();
    }
}

app.start();
runCart();
runSidebar();

function getRandomNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


