let cart = JSON.parse(localStorage.getItem("cartItems")) || {};

document.querySelectorAll(".food_bar").forEach(card => {
    const addBtn = card.querySelector(".add_btn");
    const subBtn = card.querySelector(".sub_btn");
    const qtyEl = card.querySelector(".qty");

    const name = card.querySelector(".food_name").innerText;
    const price = Number(card.querySelector(".price").dataset.price);
    const img = card.querySelector(".pic").src;

    const id = name.toLowerCase().replace(/\s+/g, "-");

    if (cart[id]) {
        qtyEl.textContent = cart[id].qty;
    }

    function animateQty(container, newVal, direction) {
        const oldNum = container.querySelector(".num");

        const newNum = document.createElement("span");
        newNum.className = "num";
        newNum.textContent = newVal;

        // If no previous number (first time click)
        if (!oldNum) {
            container.appendChild(newNum);
            return;
        }

        if (direction === "add") {
            oldNum.classList.add("exit-bottom");
            newNum.classList.add("enter-top");
        } else {
            oldNum.classList.add("exit-top");
            newNum.classList.add("enter-bottom");
        }

        container.appendChild(newNum);

        setTimeout(() => {
            oldNum.remove();
        }, 200);
    }

    addBtn.addEventListener("click", () => {
        if (!cart[id]) {
            cart[id] = { id, name, price, img, qty: 1 };
            animateQty(qtyEl, 1, "add");
        } else {
            cart[id].qty++;
            animateQty(qtyEl, cart[id].qty, "add");
        }

        localStorage.setItem("cartItems", JSON.stringify(cart));
    });


    subBtn.addEventListener("click", () => {
        if (!cart[id]) return;

        cart[id].qty--;

        if (cart[id].qty <= 0) {
            animateQty(qtyEl, "Add", "sub");
            delete cart[id];
        } else {
            animateQty(qtyEl, cart[id].qty, "sub");
        }

        localStorage.setItem("cartItems", JSON.stringify(cart));
    });

});


// Todo: This is heart section

const itemsContainer = document.getElementById("items");

itemsContainer.addEventListener("click", (e) => {
    const heart = e.target.closest(".heart");
    if (!heart) return;

    const id = heart.dataset.id;
    const opBox = heart.closest(".food_bar");
    if (!opBox) return;

    let savedItems = JSON.parse(localStorage.getItem("savedItems")) || {};

    if (savedItems[id]) {
        // UNSAVE
        delete savedItems[id];
        heart.classList.remove("fa-solid");
        heart.classList.add("fa-regular");
    } else {
        // Todo: SAVE — CLONE CLEAN VERSION
        const clone = opBox.cloneNode(true);

        const cloneHeart = clone.querySelector(".heart");
        cloneHeart.classList.remove("fa-solid");
        cloneHeart.classList.add("fa-regular");

        savedItems[id] = clone.outerHTML;

        heart.classList.remove("fa-regular");
        heart.classList.add("fa-solid");
    }

    localStorage.setItem("savedItems", JSON.stringify(savedItems));
});

console.log("It's work")