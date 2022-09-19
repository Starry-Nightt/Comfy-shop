import runSidebar from "./sidebar.js";
import runCart, {cartApp, cartBtn} from './cart.js';
import products from './productsData.js';
var keyLocal = 'detailProduct'
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const wrapperList = $('#wrapper .list');

const app = {
    products: products,
    filteredProducts: products,

    renderWrapperProducts: function(){
        let htmls = this.filteredProducts.map(function(product){
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
        $('#wrapper .wrapper-right .list').innerHTML = htmls.join('');
    },

    handleEvents: function(){
        // Filter
        const searchBar = $('#wrapper .category .search-bar input');
        const companyNames = $$('#wrapper .category .filter .company-name');
        const filterPrice = $('#wrapper .category .filter-bar');
        const filterPriceBar = filterPrice.querySelector('input');

        searchBar.oninput = function(){
            app.filterProducts();
            app.renderWrapperProducts();
        }
        Array.from(companyNames).forEach(function(element){
            element.onclick = function(){
                Array.from(companyNames).forEach(function(item){
                    item.classList.remove('active')
                })
                this.classList.add('active');
                app.filterProducts();
                app.renderWrapperProducts();
            }
        })
        filterPriceBar.oninput = function(){
            app.filterProducts();
            filterPrice.querySelector('.filter-bar__value').textContent = 'Value: $' + filterPriceBar.value
            app.renderWrapperProducts();
        }

        // Click
        wrapperList.onclick = function(e){
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
                cartApp.handleAddItem(newCartItem);
                cartBtn.click();
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

    filterProducts: function(){
        const searchBar = $('#wrapper .category .search-bar input');
        const keyName = searchBar.value.toLowerCase();
        const company = $('#wrapper .category .filter .company-name.active');
        const keyCompany = company.textContent.toLowerCase();
        const filterPriceBar = $('#wrapper .category .filter-bar input');
        const keyPrice = filterPriceBar.value;

        app.filteredProducts = app.products.filter(function(item){
            return item.name.toLowerCase().startsWith(keyName)
            && parseFloat(item.price) <= keyPrice
            && (item.company.toLowerCase() === keyCompany || keyCompany == 'all');
        })
    },

    
    start: function(){
        this.renderWrapperProducts();
        this.handleEvents();
    }
}

app.start();
runCart();
runSidebar();