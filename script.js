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
// step 3: pressing equals button:
//	- passes number to object||variable?
//	- calls function to solve equation
//	- passes answer to numberDisplay
// step 4: clear display of equation answer when new number submitted by user

let numberDisplay = document.querySelector('.number-display');
function clearDisplay() {
	numberDisplay.textContent = '';
};
//NEED TO REMEMBER TO ONLY CHECK/PASS '.' ONCE PER NUMBER!
const numbers = /[1234567890.]/;
const operators = /[*-+=\/]/

//I feel like there's something I'm missing here... the problem for me is how to reconcile
//being able to access properties of either universally rather than needing
//e.target.id for clickEvents and e.id for keyEvents...
window.addEventListener('keydown', numPress);

document.querySelectorAll('.number-button, .operator-button').forEach(btn => {
	btn.addEventListener('click', numClick)
});

//stores the numbers & operator as they are entered then calculates answer when '=' is clicked/pressed
const equation = {
  num1: 0,
  num2: 0,
  operator : '',
  solution : function() {
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
				return ``;
			}   
  }
};

function clearEquation() {
	equation.num1 = 0;
	equation.num2 = 0;
	equation.operator = '';
}

function numClick(e) { //handles click events
	if (e.target.id == '=') {
		equation.num2 = +numberDisplay.textContent;
		numberDisplay.textContent = equation.solution();
		clearEquation();
	} else if (numbers.test(e.target.id)) { 
			numberDisplay.textContent += e.target.id;
	} else {
			equation.num1 = +numberDisplay.textContent;
			equation.operator = e.target.id;			
			clearDisplay();
		};
};

function numPress(e) { //handles keydown events
	if ((e.key == '=') || (e.key == 'Enter')) {
		equation.num2 = +numberDisplay.textContent;
		numberDisplay.textContent  = equation.solution();
		clearEquation();
	} else if (numbers.test(e.key)) { 
		numberDisplay.textContent += e.key;
	} else if (operators.test(e.key)) {
			equation.num1 = +numberDisplay.textContent;
			equation.operator = e.key;
			console.log(!equation.num1);
			clearDisplay();
	} else {
			return //makes sure unwanted keypresses are being ignored 
	};
}

//OR, ONE FUNCTION TO RULE THEM ALL! this was getting too messy and also basically was the same
//code repeated so it made little sense to try mash it all into 1 function when 2 was cleaner
// function numPress(e) {
// 	if (e.type == 'click') { 	//check to see what sort of event called function - click or keydown
// 			if (e.target.id == '=') {
// 				console.log('test')
// 			}
// 			 else if (numbers.test(e.target.id)) { //handles click events
// 				numberDisplay.textContent += e.target.id;
// 			 } else {
// 				equation['num1'] = +numberDisplay.textContent;
// 				equation['operator'] = e.target.id;
// 				clearDisplay();
// 			}
// 		} else { 
// 			if (numbers.test(e.key)) { //handles keydown events
// 				numberDisplay.textContent += e.key;
// 			 } else if (operators.test(e.key)) {
// 				equation['num1'] = +numberDisplay.textContent;
// 				equation['operator'] = e.key;
// 				clearDisplay();
// 			 } else {
// 				return //makes sure unwanted keypresses are being ignored 
// 			 };
// 		}; 
// 	};

//only alternative I can see is 2 functions: numPress() & numClick()