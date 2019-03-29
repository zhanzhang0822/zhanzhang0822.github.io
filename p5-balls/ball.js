function Ball(x, y, z) {
  this.x = x;
  this.y = y;
  this.r = z;
  this.vx = 0.5;
  this.vy = 0.5;
  this.friction = map(this.r, 20, 70, 0.97, 0.99);
  this.col = color(random(255), random(255), random(255));

  this.intersects = function(other) {
    this.d = dist(this.x, this.y, other.x, other.y);
    this.dy = other.y - this.y;
    this.dx = other.x - this.x;

    if (this.d < this.r + other.r) {
      this.angle = atan2(this.dy, this.dx);
      this.targetX = this.x + cos(this.angle) * (this.r + other.r);
      this.targetY = this.y + sin(this.angle) * (this.r + other.r);
      this.axColi = (this.targetX - other.x) * spring;
      this.ayColi = (this.targetY - other.y) * spring;
      this.vx -= this.axColi;
      this.vy -= this.ayColi;
      other.vx += this.axColi;
      other.vy += this.ayColi;
      return true;
    
    } else {
      return false;
    }
  }

  this.display = function() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
    // ellipse(random(50, 150), random(50, 150), this.r * 2, this.r * 2);

    //console.log(this.x);
  }

  this.update = function() {
    
    ax = 0.12*accelerationX;
    ay = 0.12*accelerationY;
    
    
    this.vx = this.friction*(this.vx + ax);
    this.vy = this.friction*(this.vy + ay);    
    
    this.y = this.y + this.vy;
    this.x = this.x + this.vx;

    if (this.x + this.r > windowWidth) {
      this.vx=-this.vx;
      this.x = windowWidth - this.r;
    } else if (this.x - this.r < 0) {
      this.vx=-this.vx;
      this.x = this.r;
    }

    if (this.y + this.r > windowHeight) {
      this.vy=-this.vy;
      this.y = windowHeight - this.r;
    
    } else if (this.y - this.r < 0) {
      this.vy=-this.vy;
      this.y = this.r;
    }
  }


}