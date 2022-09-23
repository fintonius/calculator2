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
// step 2: pressing operator button: 
//	- passes number to object||variable?
//	- passes operatorID to object||variable?
//	- clears numberDisplay

const numberDisplay = document.querySelector('.number-display');
numberDisplay.textContent = '';

//alternative to the Wes Bos drum-kit approach, which I still quite like :) :
//  listen for keydown, if it's keyCode/id(?) matches regexListA then call A-function,
//  if it matches regexListB call B-function, otherwise return.
//NEED TO REMEMBER TO ONLY CHECK/PASS '.' ONCE PER NUMBER!
const numbers = /[1234567890.]/;
const operators = /[-+=\/]/

//takes user number input via keyboard & calculator button-clicks & passes to calculatorDisplay
window.addEventListener('keydown', numPress);
document.querySelectorAll('.number-button, .operator-button').forEach(btn => {
	btn.addEventListener('click', numPress)
});

function numPress(e) {
	//check to see what sort of event called function - click or keydown
	if (e.type == 'click') {
		numbers.test(e.target.id) ? numberDisplay.textContent += e.target.id : equation(e);
	} else if (e.type == 'keydown') { //makes sure unwanted keypresses are being ignored - PROBABLY BETTER WAY OF DOING THIS?!
		if (numbers.test(e.key)) {
			numberDisplay.textContent += e.key;
		 } else if (operators.test(e.key)) {
			 equation(e);
		 } else {
			return
		 };
	}; 
};
// };
function equation(e) {
	console.log(e)
}
//pass

//takes user operator input via keyboard and clicking calculator buttons