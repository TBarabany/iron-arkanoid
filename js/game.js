class Game {
  constructor(ctx) {
    this.ctx = ctx
    this.intervalId = null
    this.ball = new Ball(this.ctx) 
    this.platform = new Platform(this.ctx)
    

    this.bX = 0
    this.bY = 0 
    this.bRowCount = 5
    this.bColCount = 10
    this.bTopOffset = 10
    this.bPadding = 5
    
    this.bricks = []
    this._createBricks()

    this.tick = 0
  }

  _createBricks () {
    for(let i = 0; i < 10; i++) {
      for (let j = 0; j < 5; j++) {
        this.bricks.push(new Brick(this.ctx, 10 +i * 100, 10+j * 60))
      }
    }
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
    this.bricks.forEach((brick) => {
      brick.draw()
    })       
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
    
    for(let i = 0; i < 10; i++) {
      for (let j = 0; j < 5; j++) {
        
        if (this.ball._collide(this.bricks[i][j])) {
            this.ball.bounceY()
            delete this.bricks[i][j]
        }
      }
    } 
  }
  
}