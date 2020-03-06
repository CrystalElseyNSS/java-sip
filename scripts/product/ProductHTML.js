export const productHTML = (productObject) => {
    return `
        <div class="product">
            <p>Brand: ${productObject.name}</p>
            <p>Profile: ${productObject.roastType} roast ${productObject.beanType}</p>
            <p>Price: ${productObject.price}</p>
        </div>
    `
}