function drawImage(img, x, y, width, height, deg, flip, flop, center) {

ctx.save();

if(typeof width === "undefined") width = img.width;
if(typeof height === "undefined") height = img.height;
if(typeof center === "undefined") center = false;

// Set rotation point to center of image, instead of top/left
if(center) {
    x -= width/2;
    y -= height/2;
}

// Set the origin to the center of the image
ctx.translate(x + width/2, y + height/2);

// Rotate the canvas around the origin
var rad = 2 * Math.PI - deg * Math.PI / 180;    
ctx.rotate(rad);

// Flip/flop the canvas
if(flip) flipScale = -1; else flipScale = 1;
if(flop) flopScale = -1; else flopScale = 1;
ctx.scale(flipScale, flopScale);

// Draw the image    
ctx.drawImage(img, -width/2, -height/2, width, height);

ctx.restore();
}

function drawItem(item){
	drawImage(item.sprite, item.posx, item.posy, item.width, item.height)
} 
function drawItemTop(item){
	drawImage(item.sprite, item.posx, item.topy, item.width, item.height)
} 

function printText(text, posx, posy, color,fontSize, Font){
	fontAndSize = fontSize + " " + Font;
	ctx.fillStyle = color;
	ctx.font = fontAndSize;
	ctx.fillText(text, posx,posy);
}

function printBodyText(text, posx, posy, color){
	printText(text, posx, posy, color, "30px", "Georgia")
}