// Enemies our player must avoid
// Variables applied to each of our instances go here
var Enemy = function(x, y) {
  // The image for our enemies
  this.sprite = "images/enemy-bug.png";
  this.x = x;
  this.y = y;
  this.height = 65;
  this.width = 95;
};

// Update the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  //Multiply any movement by the dt parameter
  this.x += 150*dt;
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

// Update the player's position
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
  //Multiply any movement by the dt parameter
};

// Draw the player on the screen
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
  if (direction === "left") {
    this.x -= 100;
  } else if (direction === "up") {
    this.y -= 83;
  } else if (direction === "right") {
    this.x += 100;
  } else if (direction === "down") {
    this.y += 83;
  }
  console.log(`x=${this.x}, y=${this.y}`);

  //Preventing the player from going off the canvas
  if (this.x < 0) {
    this.x = 0;
  } else if (this.x > 400) {
    this.x = 400;
  } else if (this.y < -20) {
    this.y = -20;
  } else if (this.y > 380) {
    this.y = 380;
  }
};

//Create a player
let player = new Player("", 200, 300);

let enemyPosition = [55, 140, 230];
let allEnemies = enemyPosition.map((y, index) => {
  return new Enemy((-100 * (index + 1)), y);
});

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

console.log(allEnemies);

//Udacity's comments

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
