let product_list = [
  { "id": 1, "name": "Product01", "price": 100, "quantity": 0, "total": 0 },
  { "id": 2, "name": "Product02", "price": 200, "quantity": 0, "total": 0 },
  { "id": 3, "name": "Product03", "price": 300, "quantity": 0, "total": 0 }
]
let prdlength = product_list.length;
let card_desk = document.getElementById('card-deck');
let card, img, card_body, card_title, card_text, buy_btn;

function createListProduct() {
  for(let i = 0; i < prdlength.length; i++) {
    card = document.createElement('div');
    card.className = 'col-lg-4 col-md-4 col-sm-12 col-12 card';
    img = document.createElement('image');
    img.className = 'card-img-top';
    img.src = '../images/' + i + '.jpg';
    card_body = document.createElement('div');
    card_body.className = 'card-body';
    card_title = document.createElement('h4');
    card_title.className = 'card-title';
    card_text = document.createElement('p');
    card_text.className = 'card-text';
    buy_btn = document.createElement('a');
    buy_btn.className = 'btn btn-primary';

    card_body.appendChild(card_title);
    card_body.appendChild(card_text);
    card_body.appendChild(buy_btn);
    card.appendChild(img);
    card.appendChild(card_body);
    card_desk.appendChild(card);
  }
}

createListProduct();