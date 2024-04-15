let newGameBut = document.querySelector(".newGame")
let continueBut = document.querySelector(".continue")
let menu = document.querySelector(".menu")
let game = document.querySelector(".game")
let cookie = document.querySelector(".cookie")
let scoreHTML = document.querySelector(".score")
let shop1 = document.querySelector(".shop1")
let itemcount = document.querySelector(".itemcount")

let score = 0
let autoClick = 0

newGameBut.addEventListener("click", () => {
	menu.style.display = "none"
	game.style.display = "flex"
})

shop1.addEventListener("click", () => {
	if (score >= 10) {
		score -= 10
		autoClick += 10
		scoreHTML.innerHTML = score
	}
	itemcount.innerHTML = autoClick / 10
})

cookie.addEventListener("click", () => {
	score += 1
	scoreHTML.innerHTML = score
	anime({
		targets: ".cookie",
		scale: 1.08,
		duration: 100,
	}).finished.then(() => {
		anime({
			targets: ".cookie",
			scale: 1.0,
			duration: 100,
		})
	})
})

setInterval(() => {
	score += autoClick
	scoreHTML.innerHTML = score
}, 1000)

let array

let score2
