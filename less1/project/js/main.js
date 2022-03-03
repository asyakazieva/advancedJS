const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение


const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

document.querySelector('.products').innerHTML = products.map(item => renderProduct(item.title,item.price)).join('');

//ниже код лишнее по сути в list перебирается тот же массив, можно прямиком обратиться к products как описала выше
//запятая по умолчанию появляется при использовании map, 
//поэтому при необходимоости отобразить без запятой нужно заменять запятую на пустое значение с помощью join()



/*const renderPage = list => { 
    const productsList = list.map(item => renderProduct(item.title,item.price));
    console.log(productsList);
   
};

renderPage(products);*/