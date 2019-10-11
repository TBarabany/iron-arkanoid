const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
const startButton = document.getElementById("start-button")

console.log(startButton)
startButton.onclick = () => {
  new Game(ctx).start()
}
