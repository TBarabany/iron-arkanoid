class Game {
  constructor(ctx) {
    this.ctx = ctx
    this.intervalId = null
    this.ball = new Ball(this.ctx) 
    this.platform = new Platform(this.ctx)
    this.bricks = []
    this.tick = 0
  }

  start() {
    this.intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()
      this._checkCollisions()
    }, 1000 / 60)
  }

  _draw() {
    this.ball.draw()
    this.platform.draw()
  }

  _move() {
    this.ball.move()
    this.platform.move()
    }
  
  _clear() {
    this.ctx.clearRect(
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height
    )
  }

  _checkCollisions() {
    if (this.ball._collide(this.platform)) {
      this.ball.bounceY()
      this.ball.speed()
    }
  }
}