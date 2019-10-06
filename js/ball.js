class Ball {
  constructor (ctx, x, y , r) {
    this.ctx = ctx
    this.x = 10
    this.y = 10
    this.r = 10
    this.vx = 3
    this.vy = 3
    this.ay = 0
    this.ax = 0
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(
      this.x,
      this.y,
      this.r,
      0,
      2 * Math.PI, 
      false
    );
    this.ctx.fill();
    this.ctx.closePath();
  }
  
  move() {
    this.x += this.vx
    this.y += this.vy

    this._checkCollisions()
  }

  bounceY() {
    this.vy *= -1
  }

  bounceX() {
    this.vx *= -1
  }

  _checkCollisions() {
    if (this.x + this.r >= this.ctx.canvas.width) {
      this.bounceX()
    }

    if (this.x - this.r <= 0) {
      this.bounceX()
    }
    
    if (this.y- this.r <= 0) {
      this.bounceY()
    }
  }
  
  speed() {
    this.vx *= 1.1
    this.vy *= 1.1
  }

  _collide(el) {
    const collideX = el.x + el.w > this.x - this.r && el.x < this.x + this.r
    const collideY = el.y + el.h > this.y - this.r && el.y < this.y + this.r

    return collideX && collideY
  }
  
}