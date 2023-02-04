
let numberDisplay = document.getElementById('display');
function clearDisplay() {
	numberDisplay.textContent = '';
};
//NEED TO REMEMBER TO ONLY CHECK/PASS '.' ONCE PER NUMBER!
const numbers = /[1234567890.]/;
const operators = /[\-*+=\/]/
let equalsClicked;

window.addEventListener('keypress', function(e) {
	console.log(e);
});

window.addEventListener('keydown', numPress)

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

//Have had to separate key-presses and mouse-clicks into individual functions
//as I couldn't find a way to have 1 function work with both types of input due
//to clashes between '.target.id' and '.key'.

function numClick(e) { //handles click events
	// console.log('button CLICK!');
	if (e.target.id == '=') {
		equation.num2 = +numberDisplay.textContent;
		numberDisplay.textContent = equation.solution();
		equalsClicked = true;
		clearEquation();
	} else if (numbers.test(e.target.id)) { 
			if(equalsClicked) {
				numberDisplay.textContent = '';
				numberDisplay.textContent += e.target.id;
				equalsClicked = false;
			} else if (numberDisplay.textContent.length == 9) {
				return;
			}//puts character limit on user input	
			else {
				let num = e.target.id;
				numberDisplay.textContent += num;
			}
	} else {
			equation.num1 = +numberDisplay.textContent;
			equation.operator = e.target.id;
			clearDisplay();		
		};
};

function numPress(e) { //handles keydown events
	if((e.key == 'Backspace') || (e.key == 'Delete')) {
		clearDisplay();
	};
	if ((e.key == '=') || (e.key == 'Enter')) {
		equation.num2 = +numberDisplay.textContent;
		numberDisplay.textContent  = equation.solution();
		equalsClicked = true;
		clearEquation();
	} else if (numbers.test(e.key)) { 
		if(equalsClicked) {
			numberDisplay.textContent = '';
			numberDisplay.textContent += e.key;
			equalsClicked = false;
		} else if (numberDisplay.textContent.length == 10) {
			return;
		}//puts character limit on user input
		else {
			numberDisplay.textContent += e.key;
		}
	} else if (operators.test(e.key)) {
			equation.num1 = +numberDisplay.textContent;
			equation.operator = e.key;
			clearDisplay();
	} else {
			return //makes sure unwanted keypresses are being ignored 
	};
};