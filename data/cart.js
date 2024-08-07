export const cart = [{
  id: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 1
},{
  id: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 3
}];

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
  