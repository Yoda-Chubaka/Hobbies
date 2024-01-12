
// write your code here
var x = 5;
var y = 4;
var z = x + 2*y;
console.log(z);
print(z);

var x = 3;
var y = 2;
y = x;
print (x);
print (y);

var image = new SimpleImage("./src/dominion.jpg");
print(image);
print(image.getWidth());
print(image.getHeight());
print(image.getPixel(230, 300));
print(image.getRed(230, 300));
print(image.getGreen(230, 300));
print(image.getBlue(230, 300));

function square(x){
    var ans = x*x;
    return ans;
} 
var y = square(6);
print(y);

function cube(x){
    var ans = x*x*x;
    return ans;
} 
var y = cube(3);
print(y);

function sum(x, y, z){
    var ans = x+y+z;
    return ans;
} 
var y = sum(6, 2, 4);
print(y);

function concat(a, b, c){
    var ans = a+b+c;
    return ans;
} 
var y = concat("Hello ", "my ", "world!");
print(y);
console.log(y);


// function printPixel(nameImage, xpos, ypos) {
//   var someImg = new SimpleImage(nameImage);
//   var red = someImg.getRed(xpos, ypos);
//   var green = someImg.getGreen(xpos, ypos);
//   var blue = someImg.getBlue(xpos, ypos);
//   var redPixels = "red is" + " " + red;
//   var greenPixels = "green is" + " " + green;
//   var bluePixels = "blue is" + " " + blue;
//     print(redPixels);
//     print(greenPixels);
//     print(bluePixels);
// }
// printPixel("drewgreen.png",10, 10);
// printPixel("drewgreen.png",250, 500);



// function sumPixel(nameOfImage, xpos, ypos) {
//     var someImg = new SimpleImage(nameOfImage);
//   var red = someImg.getRed(xpos, ypos);
//   var green = someImg.getGreen(xpos, ypos);
//   var blue = someImg.getBlue(xpos, ypos);
//   var sum = red + green + blue;
//   return sum;
// }
// var answer = sumPixel("drewgreen.png", 250, 500);
// print(answer);
// answer = sumPixel("drewgreen.png",10, 10);
// print(answer);

// Yellow square
// var img = new SimpleImage(200,200);
// print(img);
// for (var pixel of img.values()) {
//     var newR = 255 - pixel.getRed();
//     var newG = 255 - pixel.getGreen();
//     var newB = 0 - pixel.getBlue();
//     pixel.setRed(newR);
//     pixel.setGreen(newG);
//     pixel.setBlue(newB);
// }
// print(img);