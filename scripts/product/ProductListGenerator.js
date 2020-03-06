import { productHTML } from './ProductHTML.js';
import { copyOfProductsArray } from './productDataArray.js';

const contentTarget = document.querySelector('.productSection');

export const productMaker = () => {
    const newProductArray = copyOfProductsArray();
    for (const newProductObject of newProductArray) {
        const newProductHTMLString = productHTML(newProductObject);
        contentTarget.innerHTML += newProductHTMLString
    }
}