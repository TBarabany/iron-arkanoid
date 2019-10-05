class Ball {
  constructor (ctx, x, y , r) {
    this.ctx = ctx
    this.x = 10
    this.y = 10
    this.r = 10

    this.vx = 3
    this.vy = 3
    this.ay = 0

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

  _checkCollisions() {
    if (this.x + this.r >= this.ctx.canvas.width) {
      this.vx *= -1
    }

    if (this.x - this.r <= 0) {
      this.vx *= -1
    }

    if (this.y + this.r >= this.ctx.canvas.height) {
      this.vy *= -1
    }
    
    if (this.y- this.r <= 0) {
      this.vy *= -1
    }
  }
}