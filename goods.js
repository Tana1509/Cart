const cart = {
    "p92779": {
        "name": "Banana",
        "url": "#",
        "image": "./assets/banan.jpg",
        "price": "10",
        'sale': ''
    },
    "p93038": {
        "name": "Apple",
        "url": "#",
        "image": "./assets/apple.jpg",
        "price": "8",
        'sale': ''
    },
       "p93037": {
        "name": "Papaya",
        "url": "#",
        "image": "./assets/papaya.jpg",
        "price": "10",
        'sale': '0.5'
    },
    
}
let out = '<div class="items">';
for (let key in cart) {

    out += `<div class="item">`;
    out += `<div class="item__container">`;
    out += `<h2 class="fruit">${cart[key]["name"]}</h2>`;
    out += `<div class="img">`;
    out += `<img src="${cart[key]["image"]}">`;
    out += `</div>`;
    out += `<p class="price">${cart[key]['price']} $</p>`;
    out += `<button class="item__btn" data-articul="${key}">В корзину</button>`;
    out += `</div>`;
    out += `</div>`;
}
out += `</div>`;
document.querySelector(".items").innerHTML = out;

const data = {}; // корзина

document.querySelector('.items').addEventListener('click', event => {
    if (event.target.classList.contains("item__btn")) {
      let articul = event.target.dataset["articul"];
      if (data[articul] !== undefined) {
        data[articul]["count"]++;
      } else {
        data[articul] = cart[articul];
        data[articul]["count"] = 1;
      }
      localStorage.setItem("cart", JSON.stringify(data));
    }
})
