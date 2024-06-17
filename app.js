// function Color (r,g,b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
    
// }

// Color.prototype.rgb = function(){
//     const{r,g,b} = this;
//     return `rgb(${r},${g},${b})`;
// }

// Color.prototype.hex = function() {
//     const { r, g, b} = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// Color.prototype.rgba = function(a = 0.4) {
//     const { r, g, b} = this;
//     return `rgba(${r},${g},${b},${a})`;
  
// }

// const color1 = new Color(240,80,0);
// const color2 = new Color(0,0,0);


// console.log(color1.rgb());
// console.log(color2.rgb());
// console.log(color2.hex());
// console.log(color1.hex());
// console.log(color1.rgba());


const box = document.querySelector('#box')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')
const box4 = document.querySelector('#box4')
// box.style.backgroundColor = color1.hex();
// box2.style.backgroundColor = color2.rgb();
// box3.style.backgroundColor = color2.rgba();
// box4.style.backgroundColor = color1.rgba();



// USING JAVASCRIPT CLASSEs

class Color {
    constructor(r, g, b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    greet(){
        box.innerHTML = `hi ${this.name}`
        return `hello from ${this.name}`;
    }
    boxcolor(){
        box3.style.backgroundColor = this.name;
    }
    rgb(){
        const{r,g,b} = this;
        return `rgb(${r},${g},${b})`;

    }
    hex(){
        const { r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    rgba(a = 0.4){
        const { r, g, b} = this;
        return `rgba(${r},${g},${b},${a})`;
    
    }

}
const red = new Color(255, 67, 89, 'tomato');
const yellow = new Color(241, 242, 266, 'yellow');
const green = new Color(13, 138, 9, 'green');
const blue = new Color(2, 37, 129, 'blue');
red.greet();
// blue.boxcolor();
box.style.backgroundColor = blue.hex();
box3.style.backgroundColor = blue.rgba();
box2.style.backgroundColor = green.hex();
box4.style.backgroundColor = yellow.hex();


// Extends and superwords

// class Cat {
//     constructor (name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} ate an apple`;
//     }
//     meow(){
//         return `${this.name} meowed`;
//     }
// }
// const james = new Cat('james', 8);
// console.log(james.meow())

// class dog {
//     constructor (name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} ate an apple`;
//     }
//     bark(){
//         return `${this.name} woofed`;
//     }
// }
// const peggy = new dog('peggy', 8);
// console.log(peggy.bark())

// using extends

class pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
        eat(){
        return `${this.name} ate an apple`;
    }

}

class cat extends pet{
    constructor(name, age, livesleft, color){
        super(name,age);
        this.livesleft = livesleft;
        this.color = color;
    }
    meow(){
        return `${this.name} meowed`;
    }
}
const quinn = new cat('quinn', 10, 9, 'red');
console.log(quinn.eat());

class dog extends pet{
    bark(){
        return `${this.name} woofed`;
    }
}

const peggy = new dog('peggy', 8);
console.log(peggy.bark());
