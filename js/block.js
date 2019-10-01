class Blocks {
  constructor (ctx) {
   this.blocks = []
   
  }

  _block() {

  }

  draw() {

  }


}

const generateTiles = () => {
  const tiles = []
  for (let i = 0; i < numberOfRows; i++) {
    tiles[i] = []
    for (let j = 0; j < tilesInRow; j++) {
      const x = (2 * j + 1) * sizeOfGap + j * Tile.width
      const y = (2 * i + 1) * sizeOfGap + i * Tile.height
      tiles[i][j] = new Tile(x, y)
    }
  }
  return tiles
}

{
  for (let i = 0; i < numberOfRows; i++) {
    for (let j = 0; j < tilesInRow; j++) {
      tiles[i][j].draw(ctx)
    }