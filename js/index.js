
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





// Зробити фото максимально червоним:
// var image = new SimpleImage("chapel.png");
// for (var pixel of image.values()) {
// pixel.setRed(255);
// }
// print(image);

// Прибрати червоний колір з фото:
// var image = new SimpleImage("chapel.png");
// for (var pixel of image.values()) {
// pixel.setRed(0);
// }
// print(image);

// Зробити фото червоним на 70:
// var image = new SimpleImage("eastereggs.jpg");
// for (var pixel of image.values()) {
// if (pixel.getRed() > 70) {
// pixel.setRed(70);
// }
// }
// print(image);

// Додати чорну риску внизу фото:
// var someImage = new SimpleImage("astrachan.jpg");
// var height = someImage.getHeight();
// for (var pixel of someImage.values()) {
// if (pixel.getY() >= height - 10) {
// pixel.setRed(0);
// pixel.setGreen(0);
// pixel.setBlue(0);
// }
// }
// print(someImage);

// Додати зелений квадрат 50x50:
// var someImage = new SimpleImage("chapel.png");
// for (var pixel of someImage.values()) {
// if (pixel.getY() < 50) {
// if (pixel.getX() < 50) {
// pixel.setRed(0);
// pixel.setGreen(255);
// pixel.setBlue(0);
// }
// }
// }
// print(someImage);

// Додати жовтий прямокутник 30x60:
// function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
// var width = someImage.getWidth();
// for (var pixel of someImage.values()) {
// if (pixel.getY() < cornerHeight) {
// if (pixel.getX() > width - cornerWidth) {
// pixel.setRed(red);
// pixel.setGreen(green);
// pixel.setBlue(blue);
// }
// }
// }
// return someImage;
// }
// var picture = new SimpleImage("chapel.png");
// var result = topRightCorner(30, 60, picture, 255, 255, 0);
// print(result);

// Намалювати 3 різнокольорових квадрати:
// function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
// var width = someImage.getWidth();
// for (var pixel of someImage.values()) {
// if (pixel.getY() < cornerHeight) {
// if (pixel.getX() > width - cornerWidth) {
// pixel.setRed(red);
// pixel.setGreen(green);
// pixel.setBlue(blue);
// }
// }
// }
// return someImage;
// }
// var picture = new SimpleImage("chapel.png");
// var result = topRightCorner(30, 60, picture, 255, 255, 0);
// var result2 = topRightCorner(60, 30, result, 0, 0, 255);
// var result3 = topRightCorner(30, 30, result2, 0, 255, 0);
// print(result3);

// Намалювати червоний градієнт:
// function changeRed(width, height) {
// var picture = new SimpleImage(width, height);
// var red = 0;
// for (var pixel of picture.values()) {
// pixel.setRed(red);
// pixel.setGreen(0);
// pixel.setBlue(0);
// if (pixel.getRed() < 255) {
// red = red + 1;
// }
// if (pixel.getRed() == 255) {
// red = 0;
// }
// }
// return picture;
// }
// var result = changeRed(256,200);
// print(result);

// Намалювати різнокольоровий градієнт:
// function changeRed(width, height, green, blue) {
// var picture = new SimpleImage(width, height);
// var red = 0;
// for (var pixel of picture.values()) {
// pixel.setRed(red);
// pixel.setGreen(green);
// pixel.setBlue(blue);
// if (pixel.getRed() < 255) {
// red = red + 1;
// }
// if (pixel.getRed() == 255) {
// red = 0;
// }
// }
// return picture;
// }
// var result = changeRed(256,200, 200, 100);
// print(result);




// Порахувати кількість пікселів по осі x та y на фото Дрю:
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

// Зробити диявола Дюка на білому фоні:
// var image = new SimpleImage("duke_blue_devil.png");
// for (var pixel of image.values()) {  
//   if (pixel.getRed() < 200) {
//   pixel.setRed(0);  
//   pixel.setGreen(255);  
//   pixel.setBlue(100);      
//  }
// }
// print(image);

// Фото Дрю і Роберта на фоні динозаврів замість зеленого фону:
// var fgImage = new SimpleImage("drewRobert.png");
// var bgImage = new SimpleImage("dinos.png");
// var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
// for (var pixel of fgImage.values()) {
//     if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
//         var x = pixel.getX();
//         var y = pixel.getY();
//         var bgPixel = bgImage.getPixel(x, y);
//         output.setPixel(x, y, bgPixel);
//     }
//     else {
//         output.setPixel(pixel.getX(), pixel.getY(), pixel);
//     }
// }
// print(output);

// Різнокольоровий квадрат:
// var img = new SimpleImage(200,200);
// for (var px of img.values()){
// var x = px.getX();
// var y = px.getY();
// if (x < img.getWidth()/2){
// px.setRed(255);
// }
// if (y>img.getHeight()/2){
// px.setBlue(255);
// }
// if (x > img.getWidth()/2)
// if (y < img.getHeight()/2)
// {
// px.setGreen(255);
// }
// }
// print (img);