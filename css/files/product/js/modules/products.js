export function products() {

    const row = document.querySelector(".products__wrapper");
    const header = document.querySelector(".header__products__menu");



    let funIndex = 0;
    

    const request = new XMLHttpRequest();
    request.open('GET', 'files/products.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    let format = '';
    function web(n) {
        if(document.querySelector('html').classList.contains("webp")){
            format = 'webp';

        } else {
            return format;
        }
    } 


    function dataGet(n){
        n.forEach(item => {
            
            format = item.img_format;
            web(item);
            row.innerHTML += 
            `
                <a class="products__item"">
                    
                    <div class="products__item__text">${item.text}</div>
                    <form class="button__form" action="${item.link}" target="_blank">
                        <button class="button button__products">ДЕТАЛЬНІШЕ</button>
                    </form>

                    <img src="img/products/${item.img}.${format}" alt="${item.title}" class="products__item__img">
                    <div class="products__item__title">${item.title}</div>
                </a>
                

            `

            header.innerHTML += `
                <a href="${item.link}" class="header__products__menu__item">
                    <img src="img/products/${item.img}.${format}" alt="${item.title}" class="header__products__menu__item__img">
                    <div class="header__products__menu__item__title">${item.title}</div>
                </a>
            `

            funIndex += 1;

        });

    }
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.response);
            dataGet(data.products);
            
        } else {
            console.log('data error');
    
        }
    });




}