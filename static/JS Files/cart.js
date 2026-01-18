document.addEventListener("DOMContentLoaded", () => {

    const cartContainer = document.getElementById("cartItems");
    const totalEl = document.getElementById("cartTotal");
    const emptyCartEl = document.getElementById("emptyCart");
    const order_now_btn = document.querySelector("#order_now_btn");
    
    let cart = JSON.parse(localStorage.getItem("cartItems")) || {};

    function renderCart() {
        cartContainer.innerHTML = "";

        // ✅ EMPTY CART CHECK
        if (Object.keys(cart).length === 0) {
            emptyCartEl.style.display = "flex";
            totalEl.textContent = 0;
            document.getElementById("delivery_charges").textContent = 0;
            document.getElementById("tax").innerText = "0.00";
            document.getElementById("off").innerText = "0";
            document.getElementById("Full_cartTotal").innerText = "0.00";
            return;
        } else {
            emptyCartEl.style.display = "none";
        }

        cartContainer.innerHTML = "";
        let total = 0;
        const delivery_charges = document.querySelector("#delivery_charges");
        // const tax = document.querySelector("#tax");

        Object.values(cart).forEach(item => {
            total += item.price * item.qty;

            const div = document.createElement("div");
            div.className = "cart-item";
            div.dataset.id = item.id;

            div.innerHTML = `
  <img src="${item.img}" class="cart-img">
  <div class="cart-info">
  <h4>${item.name}</h4>
  <div class="cart-qty">
  <button class="qty-btn minus">−</button>
  <span class="qty-num">${item.qty}</span>
  <button class="qty-btn plus">+</button>
  </div>
  </div>
  <div class="price_bar">
  <p class="price_txt">Price</p>
  <p class="price_num">₹${item.price}</p>
  </div>
  `;

            cartContainer.appendChild(div);

            let main_cart_item = div;
        });

        totalEl.textContent = total;

        localStorage.setItem("cartItems", JSON.stringify(cart));

        if (total === 0) {
            delivery_charges.textContent = 0;
        } else if (total < 100) {
            delivery_charges.textContent = 30;
        } else if (total < 300) {
            delivery_charges.textContent = 20;
        } else if (total < 500) {
            delivery_charges.textContent = 10;
        } else {
            delivery_charges.textContent = 0;
        }

        function calculateTax() {
            let Full_cartTotal = document.getElementById("Full_cartTotal");

            let taxRate = 2;
            let tax = (total * taxRate) / 100;
            let offer = (total * 20) / 100;

            let delivery = Number(delivery_charges.textContent);

            let Full_Total = total + delivery + tax - offer;

            document.getElementById("tax").innerText = tax.toFixed(2);
            document.getElementById("off").innerText = offer;
            Full_cartTotal.innerText = Full_Total.toFixed(2);
        }


        calculateTax();
    }


    cartContainer.addEventListener("click", e => {
        const itemEl = e.target.closest(".cart-item");
        if (!itemEl) return;

        const id = itemEl.dataset.id;

        if (e.target.classList.contains("plus")) {
            cart[id].qty++;
        }

        if (e.target.classList.contains("minus")) {
            cart[id].qty--;

            // AUTO REMOVE WHEN ZERO
            if (cart[id].qty <= 0) {
                delete cart[id];
            }
        }

        renderCart();
    });

    renderCart();
    
    const STORAGE_KEY = "storedCarts";
    
    function storeCart() {
        const items = document.querySelectorAll(".cart-item");
    
        // ❌ No cart items → don't store
        if (items.length === 0) {
            alert("Cart is empty! Nothing to store.");
            return;
        }
    
        // ✅ Cart items present
        const cartHTML = Array.from(items).map(item => item.outerHTML);
    
        const now = new Date();
        const date = now.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        const time = now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
    
        const entry = {
            datetime: `${date} | ${time}`,
            items: cartHTML
        };
    
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        saved.unshift(entry);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    
        // alert("Cart stored successfully!");
    }

    order_now_btn.addEventListener("click", () => {
        storeCart();
        console.log("Order placed and cart stored!");
        alert("Order placed and cart stored!");
    });
});


