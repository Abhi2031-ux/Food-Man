const savedContainer = document.getElementById("savedItems");
let savedItems = JSON.parse(localStorage.getItem("savedItems")) || {};

if (Object.keys(savedItems).length === 0) {
    savedContainer.innerHTML = "<p class='txt_msg'>You did not like any food.</p>";
}

Object.entries(savedItems).forEach(([id, html]) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;

    const opBox = wrapper.firstElementChild;
    const heart = opBox.querySelector(".heart");

    // ❤️ force filled heart
    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid", "liked");

    // 🚀 INSTANT UNSAVE
    heart.addEventListener("click", (e) => {
        e.stopPropagation(); // stop bubbling

        // remove from storage
        delete savedItems[id];
        localStorage.setItem("savedItems", JSON.stringify(savedItems));

        // remove from UI instantly
        opBox.remove();

        // empty message
        if (Object.keys(savedItems).length === 0) {
            savedContainer.innerHTML = "<p class='txt_msg'>You did not like any food.</p>";
        }
    });

    savedContainer.appendChild(opBox);
});

