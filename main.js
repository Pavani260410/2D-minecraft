var canvas = new fabric.Canvas('myCanvas');
var block_image_width = 30;
var block_image_height = 30;
var player_x = 10;
var player_y = 10;
var playerobject = "";

function playerupdate() {
    fabric.Image.fromURL('player.png', function (Img) {
        playerobject = Img;

        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top: player_y,
            left: player_x
        });
        canvas.add(playerobject);
    });
   
    
}

function newimage(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });


}
window.addEventListener('keydown', my_keydown);
function my_keydown(e) {
keyPressed = e.keyCode;


if(e.shiftKey == true && keyPressed == 80) {
console.log('P and shift key pressed together');
block_image_width += 10;
block_image_height += 10;
document.getElementById('current_width').innerHTML = block_image_width;
document.getElementById('current_height').innerHTML = block_image_height;
}
if(keyPressed == 38) {
    up();
    console.log('up arrow key');
}
if(keyPressed == 40) {
    down();
    console.log('down arrow key');
}
if(keyPressed == 37) {
    left();
    console.log('left arrow key');
}
if(keyPressed == 39) {
    right();
    console.log('right arrow key');
}
if(keyPressed == 87) {
newimage('wall.png');
console.log('w');
}
if(keyPressed == 71) {
    newimage('ground.png');
    console.log('g');
    }
if(keyPressed == 76) {
        newimage('light_green.png');
        console.log('l');
        }
if(keyPressed == 84) {
        newimage('trunk.jpg');
        console.log('t');
        }
if(keyPressed == 82) {
        newimage('roof.jpg');
        console.log('r');
        }
if(keyPressed == 89) {
        newimage('yellow_wall.png');
        console.log('y');
        }
if(keyPressed == 68) {
        newimage('dark_green.png');
        console.log('d');
        }
if(keyPressed == 85) {
        newimage('unique.png');
        console.log('u');
        }
if(keyPressed == 67) {
        newimage('cloud.jpg');
        console.log('c');
        }
}
function up() {
if (player_y >= -15) {
player_y = player_y - block_image_height;
console.log(player_y);
canvas.remove(playerobject);
playerupdate();
}
}

function down() {
    if (player_y <= 370) {
    player_y = player_y + block_image_height;
    console.log(player_y);
    canvas.remove(playerobject);
    playerupdate();
    }
    }
    
function left() {
    if (player_x >= -20) {
    player_x = player_x - block_image_height;
    console.log(player_x);
    canvas.remove(playerobject);
    playerupdate();
    }
    }
    
    function right() {
        if (player_x <= 590) {
        player_x = player_x + block_image_height;
        console.log(player_x);
        canvas.remove(playerobject);
        playerupdate();
        }
        }