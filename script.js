//Pseudo-code & notes:
// - user inputs number by either/and clicking onscreen buttons and/or keyboard
//  - the number is shown on the calculator display
// - user presses/clicks an operator button
//  - this passes the number to the code to store
//  - the operator is passed to the code to store
//  - the calculator display is cleared
// - user inputs another number
//  - the number is shown on the calculator display
// - user presses/clicks equals operator
//  - this passes the number to the code to store
//  - a function is called to solve the relevant equation
//  - the answer to equation displayed
//
// step 1: allow user to input numbers through buttons & keyboard

const numberDisplay = document.querySelector('.number-display');
numberDisplay.textContent = 'DISPLAY';

//alternative to the Wes Bos drum-kit approach, which I still quite like :) :
//  listen for keydown, if it's keyCode/id(?) matches regexListA then call A-function,
//  if it matches regexListB call B-function, otherwise return.
const numbers = /[1234567890]/;
function numPress(e) {
	if (numbers.test(e.key)) {
		console.log('a');
	} else if (numbers.test(e.target.id)) {
		console.log('success!');
	} else {
		return
	};
};
window.addEventListener('keydown', numPress);
document.querySelectorAll('.number-button').forEach(btn => {
	btn.addEventListener('click', numPress)
});