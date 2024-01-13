///////////// map filter reduce to work with it i invoked ///////////////////
function each(coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
}

function map(coll, func) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function (element, key) {
    acc[key] = func(element, key);
  });
  return acc;
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, index) {
    // notice we added the index here
    if (predicate(element, index)) {
      // notice we added the index here
      acc.push(element);
    }
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

///////////////// the class OOP for my Shop i do it to get easy for creat aouer  clothes each time  ////////////////////////

function Clothes(name, price, categories, src) {
  return { name, price, categories, src };
}
///// create the data of the clothes and then i will stored in array to loop with it /////
var clothes1 = Clothes(
  'Short Djean',
  '70 TND',
  'short',

  'https://static.bershka.net/4/photos2/2023/V/0/2/p/2608/969/400/63e5a533dc40db6e075d6a899f5699a9-2608969400_2_4_0.jpg?imwidth=1920&impolicy=bershka-itxmediumlow&imformat=generic'
);
var clothes2 = Clothes(
  'Short Imprime',

  '60 TND',
  'short',

  'https://static.bershka.net/4/photos2/2023/V/0/2/p/2614/388/712/e66f7bf220944178c03549f066b31f2f-2614388712_2_4_0.jpg?imwidth=1920&impolicy=bershka-itxmediumlow&imformat=generic'
);
var clothes3 = Clothes(
  'Short Cargo',
  '80 TND',
  'short',

  'https://static.bershka.net/4/photos2/2023/V/0/2/p/2617/335/428/affadf203a6a8be2ce306ba91567f503-2617335428_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=generic'
);
var clothes4 = Clothes(
  'Tshirt 2 pac',
  '25 TND',
  'tshirt',

  'https://static.bershka.net/4/photos2/2023/V/0/2/p/2407/777/250/028da2544ed616cd526cf7723aa3867d-2407777250_2_13_0.jpg?imwidth=1920&impolicy=bershka-itxmediumlow&imformat=chrome'
);
var clothes5 = Clothes(
  'Tshirt White',
  '20 TND',
  'tshirt',

  'https://static.bershka.net/4/photos2/2023/V/0/2/p/2393/443/251/5660e53aaf51faca6a15449074dddc6c-2393443251_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=chrome'
);
var clothes6 = Clothes(
  'Tshirt one piec',
  '35 TND',
  'tshirt',

  'https://static.bershka.net/4/photos2/2023/V/0/2/p/2357/777/707/43a70a9a32798d9cd679fe7efc6adec8-2357777707_2_13_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=generic'
);
var clothes7 = Clothes(
  'basket white',
  '140 TND',
  'shoes',

  'https://static.bershka.net/4/photos2/2023/V/1/2/p/2446/160/001/d8c6290c95501252f98b8c79e6e2c8b6-2446160001_2_4_0.jpg?imwidth=1920&impolicy=bershka-itxmediumlow&imformat=generic'
);
var clothes8 = Clothes(
  'basket like jordan',
  '200 TND',
  'shoes',

  'https://static.bershka.net/4/photos2/2023/V/1/2/p/2212/960/107/1b584bb6cc0c1e0132bd53b60f472f99-2212960107_2_4_0.jpg?imwidth=1920&impolicy=bershka-itxmediumlow&imformat=chrome'
);
var clothes9 = Clothes(
  'basket black',
  '120 TND',
  'shoes',

  'https://static.bershka.net/4/photos2/2023/V/1/2/p/2204/160/040/198c72b014a1d56afead258007acaa59-2204160040_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=chrome'
);
var arrayOFClothes = [
  clothes8,
  clothes1,
  clothes4,
  clothes3,
  clothes6,
  clothes9,
  clothes2,
  clothes7,
  clothes5,
];

//////// this function to show me all the array that takes all clothes i use the map function because it make aouer output array of all the clothes
function showTheAllCLothes(arr) {
  return map(arr, function (elem) {
    // console.log(elem);
    return $('#ijalena').append(
      '<div  > <div class="shop-items"><div><img class="shop-item-image" src=' +
        elem.src +
        ' /><span class="shop-item-title">' +
        elem.name +
        '</span><div class="shop-item-details"><span class="shop-item-price">' +
        elem.price +
        '</span></div></div></div> '
    );
  });
}
/////// this is the invocation of the fuction to worked wehn i click on navbar on the shop it will show me my array of clothes
showTheAllCLothes(arrayOFClothes);

///// declaration of the button
var btnall = document.getElementById('btnall');
var btnshoes = document.getElementById('btnshoes');
var btnshort = document.getElementById('btnshort');
var btntshirt = document.getElementById('btntshirt');

//// this function make you just select the short i mean make you filter by the categore short and we invoced the function showall lcothes because that have the append then w put aouer function filter inside it like parametre to append just the categro of short
btnshort.onclick = function () {
  $('#ijalena').empty();
  var x = filter(arrayOFClothes, function (elem) {
    console.log(elem);
    return elem.categories === 'short';
  });
  showTheAllCLothes(x);
  console.log(x);
};
//// this function make you just select the shoes i mean make you filter by the categore shoes and we invoced the function showall lcothes because that have the append then w put aouer function filter inside it like parametre to append just the categro of shoes
btnshoes.onclick = function () {
  $('#ijalena').empty();
  var x = filter(arrayOFClothes, function (elem) {
    console.log(elem);
    return elem.categories === 'shoes';
  });
  showTheAllCLothes(x);
  console.log(x);
};
//// this function make you just select the tshirt i mean make you filter by the categore tshirt and we invoced the function showall lcothes because that have the append then w put aouer function filter inside it like parametre to append just the categro of tshirt

btntshirt.onclick = function () {
  $('#ijalena').empty();
  var x = filter(arrayOFClothes, function (elem) {
    console.log(elem);
    return elem.categories === 'tshirt';
  });
  showTheAllCLothes(x);
  console.log(x);
};
//// this function make you to show all the element when you click

btnall.onclick = function () {
  $('#ijalena').empty();
  var x = map(arrayOFClothes, function (elem) {
    console.log(elem);
    return elem;
  });
  showTheAllCLothes(x);
  console.log(x);
};
////////this function help user to search with name of the clothes  ///////////

function searchee() {
  var searchbox = document.getElementById('inpute').value.toUpperCase();
  var x = filter(arrayOFClothes, function (elem) {
    return elem.name.toUpperCase().includes(searchbox);
  });
  console.log(x);
  /////// we invocked the function all show clothes because they have the product and when i write in search bar it will show me the row that i went like the same
  $('#ijalena').empty();
  showTheAllCLothes(x);
}