let CartCount = 0;

const allButtons = document.querySelectorAll(".Pbuy-btn");
const carticon =   document.getElementById("cartcount")
const items = document.getElementById("cartitems")

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    CartCount =  CartCount + 1;
    carticon.textContent = CartCount;
    items.textContent =  CartCount;
    alert("✅ Product added to cart!");
  })
})

const ShopButton = document.getElementById("Shopnow")
const product = document.querySelector(".products")
ShopButton.addEventListener("click", () => {
  product.scrollIntoView({ behavior: "smooth", block: "start" })
})