class Cart {
  constructor(
    items, // массив с товарами в корзине
    cartClass = "cart",
    plusClass = "plus",
    minusClass = "minus",
    deleteClass = "delete",
    currency = ""
  ) {
    this.items = items;
    this.plusClass = plusClass;
    this.minusClass = minusClass;
    this.deleteClass = deleteClass;
    this.cartClass = cartClass;
    this.currency = "$";
  }
  goodsPlus(art) {
    this.items[art]["count"]++;
  }
  goodsMinus(art) {
    if (this.items[art]["count"] - 1 == 0) {
      this.goodsDelete(art);
    } else {
      this.items[art]["count"]--;
    }
  }
  goodsDelete(art) {
    delete this.items[art];
  }

  getDiscount() {
    let discount = 0;
    for (let key in this.items) {
     Math.floor(this.items["p93037"]["count"] / 3) *
       goods["sale"] *
       goods.price;
    }
    return discount;
  }

  getTotal() {
    let total = 0;
    for (let key in this.items) {
      total += this.items[key]["count"] * this.items[key]["price"];
    }
    return total;
  }

  render() {
    let cartContainer = document.createElement("div");
    cartContainer.classList.add(this.cartClass);

    // add class from constructor
    let table = document.createElement("table");
    // create table
    table.classList.add(this.cartClass); // add class from constructor
    let discount = 0;
    for (let key in this.items) {
      let goods = this.items[key];
      // делаем контейнер для еденици товара
      const cartIitem = document.createElement("div");
      cartIitem.classList.add("item");
      let itemCont = document.createElement("div");
      itemCont.classList.add("item__container");
      // делаем картинку
      let pic = document.createElement("div");
      pic.classList.add("img");
      let img = document.createElement("img");
      img.src = goods.image;
      // контейнер для конткнта
      let content = document.createElement("div");
      content.classList.add("content");
      // вывод названия
      let h2 = document.createElement("h2");
      h2.classList.add("fruit");
      h2.innerHTML = goods.name;

      // вывод total
      let price = document.createElement("p");
      price.classList.add("price");
      try {
        discount =
          Math.floor(this.items["p93037"]["count"] / 3) *
          goods["sale"] *
          goods.price;

        price.innerHTML =
          goods.count * goods.price - discount + " " + this.currency;
      } catch {
        price.innerHTML = goods.count * goods.price + " " + this.currency;
      }
      typeof discount;
      let countBut = document.createElement("div");
      countBut.classList.add("countBut");
      // делаем минус
      let div = document.createElement("div");
      let button = document.createElement("button");
      button.classList.add(this.minusClass);
      button.classList.add("item__btn");
      button.innerHTML = "-";
      button.setAttribute("data-articul", key);
      div.append(button);
      countBut.append(div);
      // делаем количество
      div = document.createElement("div");
      let span = document.createElement("span");
      span.classList.add("count");
      span.innerHTML = goods.count;
      div.append(span);
      countBut.append(div);
      // делаем плюс
      div = document.createElement("div");
      button = document.createElement("button");
      button.classList.add(this.plusClass);
      button.classList.add("item__btn");
      button.innerHTML = "+";
      button.setAttribute("data-articul", key);
      div.append(button);
      countBut.append(div);

      // делаем кнопку удалить
      div = document.createElement("div");
      button = document.createElement("button");
      button.classList.add(this.deleteClass);
      button.classList.add("delBtn");
      button.innerHTML = "x";
      button.setAttribute("data-articul", key);
      itemCont.append(button);
      countBut.append(div);

      // вывод

      pic.append(img);
      itemCont.append(pic);
      content.append(h2);
      content.append(price);
      itemCont.append(content);
      itemCont.append(countBut);
      cartIitem.append(itemCont);
      cartContainer.append(cartIitem);
    }
    // делаем full total
    let total = document.createElement("div");
    total.classList.add("total__price");
    total.setAttribute("colspan", 7); // merge 7 td
    total.style.textAlign = "right";
    total.innerHTML =
      '<span class="total">Total: </span> ' +
      this.getTotal() 
      // - discount +
     + " " +
      this.currency;
    cartContainer.append(total);
    return cartContainer;
  }
}
