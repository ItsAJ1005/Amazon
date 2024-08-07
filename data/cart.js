export const cart = [];

export function addToCart(productId){

    let matchingcartItem = cart.find(cartItem => cartItem.productId === productId);
  
    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    const quantity = Number(quantitySelector.value);
  
    // let cartQuantity = 0;
    if (matchingcartItem) {
      matchingcartItem.quantity += quantity;
    } else {
  
      cart.push({
        productId: productId,
        quantity: quantity
      });
  
    }
  }
  