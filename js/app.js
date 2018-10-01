// Enemies our player must avoid
// Variables applied to each of our instances go here
var Enemy = function(x, y) {
  // The image for our enemies
  this.sprite = "images/enemy-bug.png";
  this.x = x;
  this.y = y;
  this.height = 65;
  this.width = 95;
  this.collision=false;
};

//Collistion function
function collision(px,py,pw,ph,ex,ey,ew,eh) {
  return (Math.abs(px-ex)*2 < pw + ew) && (Math.abs(py-ey)*2 < ph + eh);
}


// Update the enemy's position
// Parameter: dt, a time delta between ticks/
Enemy.prototype.update = function(dt) {

  if(this.x>ctx.canvas.width + this.width){
    //Randomnize the starting position of each enemy
    this.x = -200*Math.floor(Math.random()*4)+1;
  }
  else {
    //Multiply any movement by the dt parameter
    this.x += 220*dt;
  }
  if ( collision(player.x,player.y,player.width,player.height,this.x,this.y,this.width,this.height)) {
    this.collision=true;
    if (player) {
      player.x = 200;
      player.y=300;
    }
  } else {
    this.collision=false;
  }


};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class
var Player = function(sprite, x, y) {
  // The image for our player
  this.sprite = "images/char-princess-girl.png";
  this.x = x;
  this.y = y;
  this.height = 75;
  this.width = 65;
};

Player.prototype.update = function() {}


// Draw the player on the screen
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player will move based on the key input
Player.prototype.handleInput = function(direction) {
  if (direction === "left") {
    this.x -= 100;
  } else if (direction === "up") {
    this.y -= 80;
  } else if (direction === "right") {
    this.x += 100;
  } else if (direction === "down") {
    this.y += 80;
  }

  //Preventing the player from going off the canvas
  if (this.x < 0) {
    this.x = 0;
  } else if (this.x > 400) {
    this.x = 400;
  } else if (this.y < -20) {
    this.y = -20;
  } else if (this.y > 380) {
    this.y = 380;
  } else if (this.y < 60) {
    this.y = -20;
    gameWon();
  }
};

//Create a player
let player = new Player("", 200, 300);

//Set enemies' starting position
let enemyPosition = [60, 140, 220];
let allEnemies = enemyPosition.map((y, index) => {
  //The enemies start moving at ramdom positions
  return new Enemy(((-100 * (index + 1))*Math.floor(Math.random()*4)+1),y);

});


function gameWon() {
  console.log('You won!');
}





// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});




//Udacity's comments

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
