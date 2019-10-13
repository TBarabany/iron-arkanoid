class Brick {

  constructor (ctx, x, y){
    this.ctx = ctx

    this.w = 70
    this.h = 40

    this.x = x
    this.y = y

  }
  

  draw() {
    this.ctx.rect(this.x, this.y, this.w, this.h)
    //this.ctx.fillStyle = `rgb(200, 10, 250)`
    this.ctx.stroke()
    this.ctx.fill()
      
    
    
  }

}
