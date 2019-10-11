class Game {
  constructor(ctx) {
    this.ctx = ctx
    this.intervalId = null
    this.ball = new Ball(this.ctx) 
    this.platform = new Platform(this.ctx)
    
    this.score = 0

    this.totalBricks = 0
    this.bricks = []
    this._createBricks()
  
    this.tick = 0

    this.startAudio = document.getElementById("startAudio")
    this.gameOverAudio = document.getElementById("gameOverAudio")
    this.collisionAudio = document.getElementById("collisionAudio")
  }

  _createBricks () {
    for(let i = 0; i < 10; i++) {
      for (let j = 0; j < 5; j++) {
        this.bricks.push(new Brick(this.ctx, 10 + i * 100, 10 + j * 60))
      }
    }
    this.totalBricks = this.bricks.length
  }

  start() {
    this.startAudio.play()
    this.intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()
      this._checkCollisions()
      this._gameOver()
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
      this.collisionAudio.play()
    
    }
    
    for(let i = 0; i < this.bricks.length; i++) {
      if (this.ball._collide(this.bricks[i])) {
        this.collisionAudio.play()
        this.bricks.splice(i,1)
        this.ball.bounceY()

        this.score ++
        console.log(this.score)
        
      }
    } 
  }
  _gameOver() {
    if(this.ball.y + this.ball.r >= this.ctx.canvas.height) { 
      clearInterval(this.intervalId)

      this.startAudio.pause()
      this.gameOverAudio.play()

      this.ctx.font = "40px Comic Sans MS";
      this.ctx.textAlign = "center";
      this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2 )
    }
    
    if (this.score === this.totalBricks) {
      clearInterval(this.intervalId)

      this.startAudio.pause()

      this.ctx.font = "40px Comic Sans MS";
      this.ctx.textAlign = "center";
      this.ctx.fillText(
      "You Win",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2 )
    } 
  }
}