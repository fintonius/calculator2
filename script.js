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

//can I test for numbers || operators but ALSO pass either btn//click .ids to display || call operator?!?
//should keyboard events call one function and click events call another?!
//OR is it one event for numbers and one event for operators?
//OR OR does the one function first check if it was operator or number then run relevant sub-function?!?!?!?!?
function numPress(e) {
	//check to see what sort of event called function - click or keydown
	
	if (e.type == 'click') {
		operators.test(e.target.id) ? console.log('a') : numberDisplay.textContent += e.target.id;
	} else {
		numbers.test(e.key) ? numberDisplay.textContent += e.key : console.log('b');
	}
	// if (numbers.test(e.key)) {
	// 	numberDisplay.textContent += e.key;
	// } else if (operators.test(e.target.id)) {
	// 	console.log('woohoo!');
	// } 
	// else if (numbers.test(e.target.id)) {
	// 	numberDisplay.textContent += e.target.id;
	// } else {
		return
	};
// };

//pass

//takes user operator input via keyboard and clicking calculator buttons