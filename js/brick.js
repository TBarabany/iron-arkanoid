class Brick {

  constructor (ctx){
    this.ctx = ctx

    this.w = 100
    this.h = 50

    this.x = this.ctx.canvas.width * 0.4
    this.y = this.ctx.canvas.height * 0.3
  }

  draw() {
    this.ctx.fillRect(this.x, this.y, this.w, this.h)
  }

 


}