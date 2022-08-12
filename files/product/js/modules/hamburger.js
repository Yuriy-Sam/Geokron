export function hamburger() {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu_item'),
    productsItem = document.querySelectorAll('.header__products__menu_item'),
    products = document.querySelector('.header__products__title'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })
    productsItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })

    // let mobileMedia = window.matchMedia("(max-width: 767px)")
    // if(mobileMedia){
    //     // products.classList.add('mobile');
    //     products.addEventListener('click', () => {

    //         products.classList.toggle('header__products__title_active');
    
    //         if(products.classList.contains('header__products__title_active')){
    //             document.querySelector('.header__products__menu').style.display = 'block';
    //         } else {
    //             document.querySelector('.header__products__menu').style.display = 'none';
    //         }
    
    //     });    
    // }

    
}

