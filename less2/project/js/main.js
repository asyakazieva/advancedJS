class ProductList{
    constructor(container='.products'){
    this.container = container;
    this.goods = [];
    this.NewArrList = []; //нужен отдельный массив куда будет добавляться при переборе исходного массива и для дальнейших манипуляций
    this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
    // this.render();//вывод товаров на страницу//если оставить то при вызове отрисовки вне то будет два раза отрисовывать
    
    }
    _fetchProducts(){
    this.goods = [
        {id: 1, title: 'Notebook', price: 2000},
        {id: 2, title: 'Mouse', price: 20},
        {id: 3, title: 'Keyboard', price: 200},
        {id: 4, title: 'Gamepad', price: 50},
    ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            this.NewArrList.push(item);
            console.log(product);
            block.insertAdjacentHTML("beforeend",item.render());
            // block.innerHTML += item.render();
        }
    }
    
    sumProductsOfPrice(){
        let sum = this.NewArrList.reduce((lastValue, currentValue) => lastValue + currentValue.price, 0);
        console.log(sum);
        }
}
    
    class ProductItem{
        constructor(product,img='https://via.placeholder.com/200x150'){
            this.title = product.title;
            this.id = product.id;
            this.price = product.price;
            this.img = img;
        }
    render(){
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
                </div>`
        }   
    }
    
    let list = new ProductList();
    list.render();
    list.sumProductsOfPrice();
    
    
    class basket {
        addedProduct(){
        
        }
        deletedProduct(){
        
        }
        editProduct(){
        
        }
        increaseCount(){
        
        }
        calculateAndRender(){
        //динамически содержимое
        } 
    }
    
    //действия с элементами товаров в корзине
    class ElemProduct{
        render(){
        //для отрисовки
        }    
    }
    //const products = [
    // {id: 1, title: 'Notebook', price: 2000},
    // {id: 2, title: 'Mouse', price: 20},
    // {id: 3, title: 'Keyboard', price: 200},
    // {id: 4, title: 'Gamepad', price: 50},
    //];
    //
    //const renderProduct = (product,img='https://placehold.it/200x150') => {
    // return `<div class="product-item">
    // <img src="${img}">
    // <h3>${product.title}</h3>
    // <p>${product.price}</p>
    // <button class="buy-btn">Купить</button>
    // </div>`
    //};
    //const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
    //
    //renderPage(products);