class Game {
  constructor(ctx) {
    this.ctx = ctx
    this.intervalId = null
    this.ball = new Ball(this.ctx) 
    this.blocks = []
    this.tick = 0
  }

  start() {
    this.intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()
    }, 1000 / 60)
  }

  _draw() {
    this.ball.draw()
  }

  _move() {
    this.ball.move()
    }
  
  _clear() {
    this.ctx.clearRect(
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height
    )
    }
}