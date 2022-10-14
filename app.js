const shoppingArea = document.querySelector(".shopping-area");
const buttonShopping = document.querySelector(".shopping-cart");
const buttonCheckout = document.querySelector(".button-checkout");


buttonCheckout.addEventListener("click", (e) => {
  console.log("Compra realizada.");
})

buttonShopping.addEventListener("click", (e) => {
  console.log("Click en bolsa de compra.");
  /* no responde */
})

function createShoppingCart() {
  const elements = runningProgram((e) => {
    return `<div class="shopping-cart-container">
    <h2>
      My cart
    </h2>
    <div class="cart-empty">
      <img src="images/sad-cart.svg" alt="">
      <h2>Your cart is empty</h2>
      <p>You can add items to your cart by clicking on the "+" button on the product page.</p>
    </div>
    <div class="cart-prices">
      <span>0 items</span>
      <span>$0.00</span>
    </div>
    <div class="cart-checkout">
      <button class="button-checkout"><img src="icons/icon-checkout.png" alt="icon-checkout">Checkout</button>
    </div>
  </div>`;
  })
  shoppingArea.innerHTML = elements.join("");
}

/* No me funcionó... */