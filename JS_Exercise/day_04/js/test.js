document.getElementById('cart-btn').addEventListener('click', function() {
  let x = document.getElementById('cart-detail');
  if(x.className === 'hidden') {
    x.className = 'cart-detail';
  } else {
    x.className = 'hidden';
  }
});

let count = 0;
let $noti = document.getElementById('noti');
let $buy = document.getElementsByClassName('buy-btn');
$noti.innerHTML = count;
let items = [];
let item;

for(let i = 0; i < 3; i++) {
  item = {
    index: i,
    name: $buy[i].getAttribute("data-name"),
    price: $buy[i].getAttribute("data-price"),
    quantity: 0,
    total: 0,
  }
  items.push(item);
  $buy[i].addEventListener('click', function() {
    count++;
    $noti.innerHTML = count;
    items[i].quantity++;
    console.log('Index: ' + items[i].index + '; quantity: ' + items[i].quantity);
    refreshDT();
  });
}


function refreshDT() {
  for(let i = 0; i < 3; i++) {
    items[i].total = items[i].quantity * items[i].price;
    let j = 0;
    let $tds = document.getElementsByClassName('tb-prd')[i].children;
    for (var attr in items[i]) {
      $tds[j].innerHTML = items[i][attr];
      j++;
    }
  }  
}

refreshDT();
