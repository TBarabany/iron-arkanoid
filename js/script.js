const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
const startButton = document.getElementById("start-button")

startButton.onclick = () => {
  new Game(ctx).start()
}
