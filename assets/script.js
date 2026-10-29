let btn1 = document.querySelector("#AddToCart1");
let btn2 = document.querySelector("#AddToCart2");
let btn3 = document.querySelector("#AddToCart3");
let btn4 = document.querySelector("#AddToCart4");
let btn5 = document.querySelector("#AddToCart5");
let clear_btn = document.querySelector(".clear-btn");
let cart_count = document.querySelector("#cart-count");
let addlist = [];
let labels = [];
btn1.addEventListener("click", function AddToCart1() {
    let count = 1;
    let show = document.querySelector("#show-cart");
    addlist.push(500);
    labels.push("Book Rs.");
    updateCartCount()
    let total = 0;
    let total_price = document.querySelector("#total-price");
    show.textContent = "";
    for (let i = 0; i < addlist.length; i++) { 
        show.innerHTML +=
            `<div class="cart_date">
                ${count++}. ${labels[i]}${addlist[i]}
                <button onclick="removeItem(${i})" class="remove-btn">Remove</button>
            </div>`;
        total = total + addlist[i]
    }
    total_price.textContent = total
}
)


btn2.addEventListener("click", function AddToCart2() {

    let count = 1;
    let show = document.querySelector("#show-cart");
    addlist.push(100)
    labels.push("Pen Rs.");
    updateCartCount()
    let total = 0;
    let total_price = document.querySelector("#total-price");
    show.textContent = "";
    for (let i = 0; i < addlist.length; i++) {
        show.innerHTML +=
            `<div class="cart_date">
                ${count++}. ${labels[i]}${addlist[i]}
                <button onclick="removeItem(${i})" class="remove-btn">Remove</button>
            </div>`;
        total = total + addlist[i]
    }
    total_price.textContent = total
}
)


btn3.addEventListener("click", function AddToCart3() {
    let count = 1;
    let show = document.querySelector("#show-cart");
    addlist.push(1500)
    labels.push("Bag Rs.");
    updateCartCount()
    let total = 0;
    let total_price = document.querySelector("#total-price");
    show.textContent = "";
    for (let i = 0; i < addlist.length; i++) {

        show.innerHTML +=
            `<div class="cart_date">
                ${count++}. ${labels[i]}${addlist[i]}
                <button onclick="removeItem(${i})" class="remove-btn">Remove</button>
            </div>`;
        total = total + addlist[i]
    }
    total_price.textContent = total
}
)


btn4.addEventListener("click", function AddToCart4() {
    let count = 1;
    let show = document.querySelector("#show-cart");
    addlist.push(50)
    labels.push("Pencil Rs.")
    updateCartCount()
    let total = 0;
    let total_price = document.querySelector("#total-price");
    show.textContent = "";
    for (let i = 0; i < addlist.length; i++) {
        show.innerHTML +=
            `<div class="cart_date">
                ${count++}. ${labels[i]}${addlist[i]}
                <button onclick="removeItem(${i})" class="remove-btn">Remove</button>
            </div>`;
        total = total + addlist[i]
    }
    total_price.textContent = total
}
)


btn5.addEventListener("click", function AddToCart5() {
    let count = 1;
    let show = document.querySelector("#show-cart");
    addlist.push(250)
    labels.push("Notebook Rs.")
    updateCartCount();
    let total = 0;
    let total_price = document.querySelector("#total-price");
    show.textContent = "";
    for (let i = 0; i < addlist.length; i++) {

        show.innerHTML +=
            `<div class="cart_date">
                ${count++}. ${labels[i]}${addlist[i]}
                <button onclick="removeItem(${i})" class="remove-btn">Remove</button>
            </div>`;
        total = total + addlist[i]
    }
    total_price.textContent = total
}
)


clear_btn.addEventListener("click", function remove() {
    labels = [];
    addlist = [];
    document.querySelector("#show-cart").textContent = "";
    document.querySelector("#total-price").textContent = 0;
    updateCartCount()
}
)


cart_count.addEventListener("click", function cart() {
    document.querySelector("#cart-count");
    cart_count++
}
)


function updateCartCount() {
    cart_count.textContent = addlist.length
}


function removeItem(index_number) {
    addlist.splice(index_number, 1)
    labels.splice(index_number, 1)
    let count = 1;
    let show = document.querySelector("#show-cart");
    updateCartCount();
    let total = 0;
    let total_price = document.querySelector("#total-price");
    show.textContent = "";
    for (let i = 0; i < addlist.length; i++) {

        show.innerHTML +=
            `<div class="cart_date">
                ${count++}. ${labels[i]}${addlist[i]}
                <button onclick="removeItem(${i})" class="remove-btn">Remove</button>
            </div>`;
        total = total + addlist[i]
    }
    total_price.textContent = total
}