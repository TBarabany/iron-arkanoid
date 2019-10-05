class Brick {

  constructor (ctx, bX, bY){
    this.ctx = ctx

    this.w = 70
    this.h = 40

    this.bX = bX
    this.bY = bY
  }

  draw() {
    this.ctx.save()
    this.ctx.rect(this.bX, this.bY, this.w, this.h)
    this.ctx.fillStyle = "blue"

    // The below changes the color everytime we draw. Como se podía pintar de un color aleatorio?
    //this.ctx.fillStyle = 'rgb(' + (Math.floor(Math.random() * 156) + 100) 
    // + ',' + (Math.floor(Math.random() * 156) + 100) 
    // + ',' + (Math.floor(Math.random() * 156) + 100) + ')'
    this.ctx.stroke()
    this.ctx.fill()
    this.ctx.restore()
  }

}
