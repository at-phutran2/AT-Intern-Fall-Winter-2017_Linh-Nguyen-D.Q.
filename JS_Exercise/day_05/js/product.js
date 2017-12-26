let arr;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   arr = JSON.parse(this.responseText);
 }
};
xhttp.open("GET", "../js/products.json", true);
xhttp.send();;


let product_list = [
  { "id": 1, "name": "Product01", "price": 100, "quantity": 0, "total": 0 },
  { "id": 2, "name": "Product02", "price": 200, "quantity": 0, "total": 0 },
  { "id": 3, "name": "Product03", "price": 300, "quantity": 0, "total": 0 }
]
let prdlength = product_list.length;
let card_desk = document.getElementById('card-deck');
let cart_btn = document.getElementsByClassName('cart-btn')[0];
let count = 0;
let card, card_content, card_img, card_body, card_title, card_text, buy_btn, url_img;
let id_json = [];
cart_btn.setAttribute('data-content', count);

function createListProduct() {
  for(let i = 0; i < prdlength; i++) {
    card = document.createElement('div');
    card.className = 'col-lg-4 col-md-4 col-sm-12 col-12 card';
    card_content = document.createElement('div');
    card_content.className = 'card-content';
    card.appendChild(card_content);

    card_img = document.createElement('div');
    card_img.className = 'card-img';
    url_img = '../images/' + (i+1) + '.jpg';
    card_img.style.backgroundImage = 'url(' + url_img + ')';
    card_content.appendChild(card_img);

    card_body = document.createElement('div');
    card_body.className = 'card-body';
    card_content.appendChild(card_body);

    card_title = document.createElement('h4');
    card_title.className = 'card-title';
    card_title.append(product_list[i].name);
    card_body.appendChild(card_title);

    card_text = document.createElement('p');
    card_text.append('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.');
    card_body.appendChild(card_text);

    buy_btn = document.createElement('button');
    buy_btn.append('Buy');
    buy_btn.className = 'btn btn-primary buy-btn';

    buy_btn.addEventListener('click', function() {
      let checkExist = false;
      product_list[i].quantity++;
      count++;
      cart_btn.setAttribute('data-content', count);
      product_list[i].total = product_list[i].quantity * product_list[i].price;
      for(let j = 0; json_length = id_json.length, j < json_length; j++) {
        if(product_list[i].id === id_json[j]) {
          checkExist = true;
          break;
        }
      }
      if(checkExist === false) {
        id_json.push(product_list[i].id);
        localStorage.setItem('cart', JSON.stringify(id_json));
      }
      console.log(product_list[i]);
    })
    card_body.appendChild(buy_btn);

    card_desk.appendChild(card);
  }
}



document.getElementsByClassName('cart-btn')[0].addEventListener('click', function() {
  location.href = '../template/cart.html';
})

createListProduct();
