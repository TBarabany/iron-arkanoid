class Board {
  constructor(ctx) {
    this.ctx = ctx
    this.intervalId = null;
    this.balls = []
    this.blocks = []
    this.tick = 0
  }

  start() {
    this.intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()

      if (this.tick++ % 50 === 0) {
        this._addBall()
      }

      if (this.tick > 100000) {
        this.tick = 0;
      }
    }, 1000 / 60)
  }

  _draw () {
    
  }
}