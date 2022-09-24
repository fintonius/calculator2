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

//stores the numbers & operator as they are entered then calculates answer when '=' is clicked/pressed

const problem = {
  num1: 0,
  num2 : 0,
  operator : '',
  equation : function() {
		switch(this.operator) {
			case '+':
				return this.num1 + this.num2;
				break;
			case '-':
				return this.num1 - this.num2;
				break;
			case '/':
				return this.num1 / this.num2;
				break;
			case '*':
				return this.num1 * this.num2;
				break;
			default:
				return `something's wrong`;
			}   
  }
};

function numPress(e) {
	if (e.type == 'click') { 	//check to see what sort of event called function - click or keydown
		if (numbers.test(e.target.id)) {
			numberDisplay.textContent += e.target.id;
		 } else {
			problem['num1'] = +numberDisplay.textContent;
			problem['num2'] = +numberDisplay.textContent;
			problem['operator'] = e.target.id;
			console.log(problem.equation());
		 }
	} else { 
		if (numbers.test(e.key)) {
			numberDisplay.textContent += e.key;
		 } else if (operators.test(e.key)) {
			 problem['num1'] = +numberDisplay.textContent;
			 problem['num2'] = +numberDisplay.textContent;
			 problem['operator'] = e.key;
			 console.log(problem.equation());
		 } else {
			return //makes sure unwanted keypresses are being ignored 
		 };
	}; 
};




