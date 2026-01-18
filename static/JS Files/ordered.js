console.log("helkjd")

const STORAGE_KEY = "storedCarts";
const main_bg_img = document.querySelector(".main_bg_img");

main_bg_img.style.display = "none";

function renderEntry(entry, toTop = false) {
    const container = document.getElementById("result");


    const timeDiv = document.createElement("div");
    timeDiv.className = "time-box";
    timeDiv.innerText = entry.datetime;

    const orderedBox = document.createElement("div");
    orderedBox.className = "ordered_box";
    orderedBox.innerHTML = entry.items.join("");

    // const food_br = document.createElement("div");
    // food_br.classList = "food_br";
    // food_br.appendChild("cart-item");

    const wrapper = document.createElement("div");
    wrapper.className = "ordered_items";
    wrapper.appendChild(timeDiv);
    wrapper.appendChild(orderedBox);

    main_bg_img.style.display = "flex";

    if (toTop && container.firstChild) {
        container.insertBefore(wrapper, container.firstChild);
    } else {
        container.appendChild(wrapper);
    }


}

window.onload = () => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    saved.forEach(entry => renderEntry(entry));
};