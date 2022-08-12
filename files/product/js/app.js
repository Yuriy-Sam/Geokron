import * as flsFunctions from "./modules/functions.js";
import {hamburger} from "./modules/hamburger.js";
import {headerFix} from "./modules/header.js";
import { news } from "./modules/news.js"; 
import {products} from "./modules/products.js"; 



import Typed from 'typed.js';

let options = {
    strings: ["Команда професіоналів!", "Не працює навігація? Потрібне налаштування? Не коректно працює автопілот? " ,"Підберемо комплект навігаційного обладнання під ваші вимоги"],
    typeSpeed: 80,
    backSpeed: 30,
    backDelay: 3000,
    startDelay: 800,
    // fadeOut: true,
    loop: true,
    showCursor: false

};
// let cont = {
//     strings: ["Hello!", 'Write me', "I'm waiting"],
//     typeSpeed: 200,
//     backSpeed: 100,
//     // backDelay: 500,
//     startDelay: 1000,
//     // fadeOut: false,
//     loop: true

// };

let typed = new Typed('.main__subtitle_typing', options);
// let contact = new Typed('.contact__bg__message__typing', cont);

window.addEventListener('DOMContentLoaded', () => {
    flsFunctions.isWebp();

    hamburger();
    news();
    products();
    headerFix();


    
});


