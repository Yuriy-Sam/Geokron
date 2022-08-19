import * as flsFunctions from "./modules/functions.js";
import {hamburger} from "./modules/hamburger.js";
import {headerFix} from "./modules/header.js";
import {product_info} from "./modules/product_info.js";




window.addEventListener('DOMContentLoaded', () => {
    product_info();
    flsFunctions.isWebp();
    hamburger();
    headerFix();



    
});