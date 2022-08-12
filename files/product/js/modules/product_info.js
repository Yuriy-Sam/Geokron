export function product_info() {

    const row = document.querySelector(".products__wrapper");
    const header = document.querySelector(".header__products__menu");
    const html = document.querySelector("html");


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
            html.innerHTML += 
            `
            @@include('html/head.html', {
                "title": "product"
            })
            
            <body>
                
                
                @@include('html/header.html', {})
                <main>
                    @@include('html/helper.html', {})
                    @@include('html/footer.html', {})
            
                </main>
                <!-- @@include('html/footer.html', {}) -->
                <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> -->
                <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
                <script src="js/app.min.js"></script>
            </body>
                

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