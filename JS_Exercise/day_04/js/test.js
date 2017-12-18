let count = 0;
let $noti = document.getElementById('noti');
let $buy = document.getElementsByClassName('buy-btn');
let tb = document.getElementsByTagName('table')[0];
$noti.innerHTML = count;
let items = [];
let item;
let prdlength = $buy.length;

//Show data table
document.getElementById('cart-btn').addEventListener('click', function() {
  let x = document.getElementById('cart-detail');
  if(x.className === 'hidden') {
    x.className = 'cart-detail';
  } else {
    x.className = 'hidden';
  }
});

//Add item to items
for(let i = 0; i < prdlength; i++) {
  $buy[i].addEventListener('click', function() {
    count++;
    $noti.innerHTML = count;
    item = {
      index: $buy[i].getAttribute('data-id'),
      name: $buy[i].getAttribute('data-name'),
      price: $buy[i].getAttribute('data-price'),
      quantity: 1,
      total: 0,
    }
    
    let itslength = items.length;
    let checkExist = false;
    for(let j = 0; j < itslength; j++){
      if(item.index === items[j].index){
        items[j].quantity++;
        checkExist = true;
        break;
      }
    }
    if(checkExist == false){
      items.push(item);
      createTable(item.index);
    }

    refreshData();
  });
}


//Create table and remove
function createTable(id) {
  let tr = document.createElement('tr');  
  tr.className = 'tb-prd';
  tr.setAttribute('data-id', id);
  document.getElementsByTagName('tbody')[0].appendChild(tr);
  for(let i = 0; i < 6; i++) {
    let td = document.createElement('td');
    let t = document.createTextNode('Delete');
    let act = document.createElement('button');
    act.appendChild(t);
    act.className = 'btn btn-danger';
    act.setAttribute('data-id', id);
    if(i === 5) {
      td.appendChild(act);
    }
    else {
      td.appendChild(t);
    }
    tr.appendChild(td);

    act.addEventListener('click', function() {
      for(let j = 0; j < items.length; j++) {
        if(items[j].index === act.getAttribute('data-id')) {
          let r = confirm("Are you sure to delete?");
          if (r == true) {
            items.splice(j, 1);
            count = count - items[j].quantity;
            $noti.innerHTML = count;
            tr.parentNode.removeChild(tr);
            alert('Deleted success!');
          }
          refreshData();
        }
      }
    });
  }
}

function refreshData() {
  let empty = document.getElementsByTagName('h3')[0];
  if(count === 0) {
    tb.className = 'hidden';
    empty.className = 'noti-in-card';
  }
  else {
    tb.className = 'table';
    empty.className = 'hidden';
    for(let i = 0; i < items.length; i++) {
      items[i].total = items[i].quantity * items[i].price;
      let j = 0;
      let $tds = document.getElementsByClassName('tb-prd')[i].children;
      for (var attr in items[i]) {
        $tds[j].innerHTML = items[i][attr];
        j++;
      }
    }
  }
}

refreshData();
