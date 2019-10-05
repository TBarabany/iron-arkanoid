class Platform {
  constructor (ctx, x, y, h, w) {
    this.ctx = ctx

    this.h = 20
    this.w = 150
  
    this.x0 = 0.5 * this.ctx.canvas.width
    this.x = this.x0

    this.y = this.ctx.canvas.height - this.h

    this.vx = 0
    this.vy = 0

    this.ax = 3

    this.actions = {
      right: false,
      left: false
    }
  }
  
  draw() {
    this.ctx.fillRect(this.x, this.y, this.w, this.h)
  }

  move() {
    this._applyActions()
  }

  _setListeners() {
    document.onkeydown = e => this._switchAction(e.keyCode, true)
    document.onkeyup = e => this._switchAction(e.keyCode, false)
  }

  _applyActions() {    
    if (this.actions.right) {
      this.x <= 0 ? this.x = 0 : this.x += 5
      this.draw()
    } else if (this.actions.left) {
      this.x >= this.ctx.canvas.width - this.w? this.x = this.ctx.canvas.width - this.w : this.x -= 5
      this.draw()
    } else {
      this.draw()
    }
  }

  _switchAction(key, apply) {
    switch (key) {
      case RIGHT:
        this.actions.right = apply;
        break;
      case LEFT:
        this.actions.left = apply;
        break;
    }
  }

}

