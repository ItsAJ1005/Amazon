import { addToCart, cart, loadFromStorage } from "../../data/cart";

describe('test suite: addToCart', ()=> {
    it('adds an existing product to the cart', () => {

    });

    it('adds a new product to the cart', () => {

        spyOn(localStorage, 'getItem').and.callFake(()=> {
            return JSON.stringify([]);
        });

        console.log(localStorage.getItem('cart'));
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);

        
    })
});

descibe('test suite: loadProuct from set')