// step 5: fix following issues:
//	- stop numberDisplay changing size when text entered - DONE
//	- add drop shadow to text - DONE
//	- change font to calculator font - DONE
//	- decimal point can only be added once - DONE!!!
//	- fix text bottom being cut off - DONE
// 	- multiple operators can be added to equation
//	- when equals is pressed the answer can be used in next equation
//	- add character limit to numberDisplay - BEST WAY SEEMS TO BE USING <input> - DONE (sort of)
//	- look at bug where certain combos of key'=' and clickInputs don't work

//	step 6: CLEAN UP README FILE!!!

//AS YOU TRY TO SOLVE EACH PROBLEM USE IT AS AN OPPORTUNITY TO IMPROVE THE OVERALL CODE//

let number = [];
const numbers = /[0-9\.?]/;
const operators = /[Enter*\-+=\/]/
let equalsClicked = false; //this feels like a janky way around the equals problem!

let numberDisplay = document.getElementById('display');
function clearDisplay() {
	numberDisplay.value = '';
	number.length = 0;
};

//handling keyboard input
window.addEventListener('keydown', (e) => 	{
	if ((!numbers.test(e.key)) && (!operators.test(e.key))) {
		console.log('hell world'); // ignores unwanted keypresses
	} else {
		numbers.test(e.key) ? addNumber(e.key): operatorPress(e);
	};
});

function addNumber(e) {
	((e == '.') && (number.includes('.'))) ? console.log('hell world') : number.push(e);//only allows '.' once
	
	number.length = Math.min(number.length, 9);//limits the amount of digits in array/numberDisplay to 9.
	//it's a bit artificial though, calculations on large numbers still overspill as the answer is displayed
	//directly to numberDisplay rather than "through" the number array.
	//MAYBE combine this with using <input type="text||number"> and adding a max length to that too?
	//THEN how to handle large equations?
	numberDisplay.value = number.join(''); 
};

function operatorPress(e) {
	if ((e.key == '=') || (e.key == 'Enter')) {
		equation.num2 = numberDisplay.value;
		numberDisplay.value = equation.solution();
		equalsClicked = true;
		clearEquation();
	} else {
			equation.num1 = numberDisplay.value;
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
			numberDisplay.value = '';
			numberDisplay.value += e.target.id;
			equalsClicked = false;
		} else {
			((e.target.id == '.') && (number.includes('.'))) ? console.log('hell world') : number.push(e.target.id);//only allows '.' once
			numberDisplay.value = number.join(''); 
		}
};

function operatorClick(e) {
	equation.num1 = numberDisplay.value;
	equation.operator = e.target.id;			
	clearDisplay();
};

function equalClick() {
	equation.num2 = numberDisplay.value;
	numberDisplay.value = equation.solution();
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
	number.length = 0;
}

