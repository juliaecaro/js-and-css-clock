// Last edited by: Julia Caro
// Last edited on: May 27, 2024


// Declaring needed variables
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const allHands = document.querySelectorAll(".hand");

// A function to make the clock hands move correctly
function setDate() {
	// Declaring the date
	const now = new Date();

	// Getting the current second
	const seconds = now.getSeconds();
	// The degrees by which the second hand should be angled
	const secondsDegrees = (seconds / 60) * 360 + 90; // + 90 to offset the 90 degree rotation
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	// Getting the current minute
	const mins = now.getMinutes();
	// The degrees by which the minute hand should be angled
	const minDegrees = (mins / 60) * 360 + 90; // + 90 to offset the 90 degree rotation
	minHand.style.transform = `rotate(${minDegrees}deg)`;

	// Getting the current hour
	const hour = now.getHours();
	// The degrees by which the hour hand should be angled
	const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90; // + 90 to offset the 90 degree rotation
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

	// If-else statement to fix a glitch that occurs at 90 degrees
	if (secondsDegrees === 90) {
		allHands.forEach((hand) => (hand.style.transition = "none"));
	} else {
		allHands.forEach((hand) => (hand.style.transition = ""));
	}
}

setInterval(setDate, 1000);

setDate();