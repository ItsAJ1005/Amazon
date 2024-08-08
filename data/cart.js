export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart = [{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  }]
}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productId){

    let matchingcartItem = cart.find(cartItem => cartItem.productId === productId);
  
    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    const quantity = parseInt(quantitySelector.value);
    console.log(quantity);
  
    // let cartQuantity = 0;
    if (matchingcartItem) {
      matchingcartItem.quantity += quantity;
    } else {
  
      cart.push({
        productId: productId,
        quantity: quantity
      });
  
    }

    saveToStorage();
}
  

  export function removeFromCart(productId) {
    const newCart = [];
  
    cart.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });
  
    cart = newCart;
  
    saveToStorage();
  }