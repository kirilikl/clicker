let newGameBut = document.querySelector(".newGame")
let continueBut = document.querySelector(".continue")
let menu = document.querySelector(".menu")
let game = document.querySelector(".game")
let cookie = document.querySelector(".cookie")
let scoreHTML = document.querySelector(".score")

let score = 0

newGameBut.addEventListener("click", () => {
	menu.style.display = "none"
	game.style.display = "flex"
})

cookie.addEventListener("click", () => {
	score += 1
	scoreHTML.innerHTML = score
	anime({
		targets: ".cookie",
		scale: 1.08,
		duration: 200,
	}).finished(
		anime({
			targets: ".cookie",
			scale: 1.0,
			duration: 100,
		})
	)
})
