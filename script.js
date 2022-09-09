/*function summ(a, b) {
    return(a+b);
}
function subtraction(a, b) {
    return(a-b);
};
function multip(a, b) {
    return(a*b);
};
function dev(a, b) {
    return(a/b);
};
let a=+prompt('Введите а', '');
let b=+prompt('Введите b', '');
let operation=prompt('Введите название операции', '');
function mathOperation(a, b, operation) {
if (operation='summ') {
    function summ(a, b) {
  return result1= (a+b);}
} else if (operation='subtraction') {
    function subtraction(a, b) {
   return result2= (a-b);}
} else if (operation='multip') {
    function multip(a, b) {
   return result3= (a*b);}
} else if (operation='dev') {
    function dev(a, b) {
   return result4= (a/b);
} 
}
}
switch (operation) {
  case 'summ' :
    console.log(a+b);
    break;
  case 'subtraction' :
    alert(a-b);
    break;
  case 'multip' :
    alert(a*b);
    break;
  case 'dev' :
    alert(a/b);
    break;  
}

const users=['ogo', 'aga','ux'];
users.splice(1, 1);
console.log(users);
user={
    name:'Саша',
    age:20
}
console.log(user.age);
user.birth='28.06.2002';
console.log(user);
i=0;
while(i<101) {
    console.log(i);
    i++;
}
function getNumber(min, max) {
    let number=parseInt(Math.random()*(max-min)+min);
    if (number=== -0) number=0;
    return number;
}*/
/*let basket=[
    {
        product:'pen',
        price: getNumber(50, 100),
    },
    {
        product:'pencil',
        price: getNumber(50, 100),  
    },
    {
        product:'paper',
        price: getNumber(50, 100),
    },
    {
        product:'file',
        price: getNumber(50, 100),
    },
];
let basketPrice=0;
for (let prod of basket) {
 basketPrice += prod.price;
 console.log('Товар' + prod.product + 'стоит' + prod.price);
}
console.log('Корзина стоит' + basketPrice);*/
/*let arrBasket = [
    {
        product:'pen',
        price: getNumber(50, 100),
    },
    {
        product:'pencil',
        price: getNumber(50, 100),  
    },
    {
        product:'paper',
        price: getNumber(50, 100),
    },
    {
        product:'file',
        price: getNumber(50, 100),
    },
];
console.log(arrBasket[1].price);
arrBasket.splice(1, 0, {product: 'gum', price: getNumber(50, 100)});
console.log(arrBasket);
function countBasketPrice(arrBasket) {
   let fullBasketPrice=0;
   for (let prod of arrBasket) {
    fullBasketPrice +=prod.price;
   }
   return fullBasketPrice;
}
console.log('Полная цена корзины составит' + " " + countBasketPrice(arrBasket));
*/
/*function toBeep() {
    console.log(`${this.model} подает сигнал!`);
}
function Car(model){
    this.model=model;
    this.beep=toBeep;
}
const car1=new Car('BMV');
const car2=new Car('Audi');
car1.beep();
car2.beep();

function Number(number) {
    number=s+d+e;
}
Number.prototype.sayNumber=function () {
    console.log(`сотни ${this.s}
    десятки ${this.d}
    единицы ${this.e}`)
}
const number1=new Number('1', '2', '3');
number1.sayNumber();
function ProductE5 (name, price) {
    this.name=name;
    this.price=price;
}

ProductE5.prototype.make25Discount = function() {
this.price*=0.75;
};
const productE5=new ProductE5('paper', 67);
productE5.make25Discount();
console.log(productE5);

class ProductE6 {
    constructor(name, price) {
        this.name=name;
        this.price=price;     
    }
    make25Discount() {
        this.price*=0.75;
    }
}
let productE6=new ProductE6('file', 100);
productE6.make25Discount();
console.log(productE6);

function PostE5(name, text) {
    this.name=name;
    this.text=text;
    this.updatedAt=new Date();
}
PostE5.prototype.edit = function(text) {
this.text=text;
this.updatedAt=new Date();
}*/
/*const postE5=new PostE5 ('sasha','huygtfy');
console.log(postE5);
setTimeout( () => {
 postE5.edit('jklmlk');
console.log(postE5);
}, 2000);*/


/*class PostE6 {
    constructor(name, text) {
    this.name=name;
    this.text=text;
    this.updatedAt=new Date;
    }
    edit(text) {
        this.text=text;
        this.updatedAt=new Date(); 
    }
}
const postE6=new PostE6 ('sasha','huygtfy');
console.log(postE6);
setTimeout( () => {
    postE6.edit('jklmlk');
   console.log(postE6);
   }, 2000);*/
  /* function AttachedPostES5 (name, text) {
     PostE5.call(this, name, text);
     this.highlighted=false;
   }
   AttachedPostES5.prototype = Object.create(PostE5.prototype);
   const attachedPostES5=new AttachedPostES5('Sasha', 'ffff');
   console.log(attachedPostES5);
   class AttachedPostES6 extends PostE6 {
    highlighted=false;
    }
   */