// step 5: fix following issues:
//	- stop numberDisplay changing size when text entered - DONE
//	- add drop shadow to text - DONE
//	- change font to calculator font - DONE
//	- decimal point can only be added once
// 	- multiple operators can be added to equation
//	- when equals is pressed the answer can be used in next equation
//	- add character limit to numberDisplay - BEST WAY SEEMS TO BE USING <input>

let numberDisplay = document.getElementById('display');
function clearDisplay() {
	numberDisplay.textContent = '';
};

const numbers = /[0-9\.?]/;
const operators = /[Enter*\-+=\/]/
let equalsClicked = false; //this feels like a janky way around the equals problem!

//handling keyboard input
window.addEventListener('keydown', (e) => 	{
	if ((!numbers.test(e.key)) && (!operators.test(e.key))) {
		return // ignores unwanted keypresses
	} else {
		numbers.test(e.key) ? numPress(e): operatorPress(e);
	}
});

//use a loop to check each keypress before adding it to numberDisplay?
function numPress(e) { //have a function for equalsClicked & one for number?
 if (equalsClicked) {
		numberDisplay.textContent = '';
		numberDisplay.textContent += e.key;
		equalsClicked = false;
	} else {
			numberDisplay.textContent += e.key;
	}
};

function operatorPress(e) {
	if ((e.key == '=') || (e.key == 'Enter')) {
		equation.num2 = numberDisplay.textContent;
		numberDisplay.textContent = equation.solution();
		equalsClicked = true;
		clearEquation();
	} else {
			equation.num1 = numberDisplay.textContent;
			equation.operator = e.key;
			clearDisplay();
	}
};

//handling on-screen button clicks
document.querySelectorAll('.number-button').forEach(btn => {
	btn.addEventListener('click', numClick)
});
document.querySelectorAll('.operator-button').forEach(btn => {
	btn.addEventListener('click', operatorClick)
});

function numClick(e) { //can this be a loop?
	if (equalsClicked) {
			numberDisplay.textContent = '';
			numberDisplay.textContent += e.target.id;
			equalsClicked = false;
		} else {
				numberDisplay.textContent += e.target.id;
		}
};

function operatorClick(e) {
	equation.num1 = numberDisplay.textContent;
	equation.operator = e.target.id;			
	clearDisplay();
};

function equalClick() {
	equation.num2 = numberDisplay.textContent;
	numberDisplay.textContent = equation.solution();
	equalsClicked = true;
	clearEquation();
}

//stores the numbers & operator as they are entered then calculates answer when '=' is clicked/pressed
const equation = {
  num1: 0,
  num2: 0,
  operator : '',
  solution : function() {
		switch(this.operator) {
			case '+':
				return +this.num1 + +this.num2;
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