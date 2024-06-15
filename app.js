function Color (r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;
    
}

Color.prototype.rgb = function(){
    const{r,g,b} = this;
    return `rgb(${r},${g},${b})`;
}

Color.prototype.hex = function() {
    const { r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
Color.prototype.rgba = function(a = 0.4) {
    const { r, g, b} = this;
    return `rgba(${r},${g},${b},${a})`;
  
}

const color1 = new Color(240,80,0);
const color2 = new Color(0,0,0);


console.log(color1.rgb());
console.log(color2.rgb());
console.log(color2.hex());
console.log(color1.hex());
console.log(color1.rgba());


const box = document.querySelector('#box')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')
const box4 = document.querySelector('#box4')
box.style.backgroundColor = color1.hex();
box2.style.backgroundColor = color2.rgb();
box3.style.backgroundColor = color2.rgba();
box4.style.backgroundColor = color1.rgba();
