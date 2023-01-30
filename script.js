
let numberDisplay = document.getElementById('display');
function clearDisplay() {
	numberDisplay.textContent = '';
};
//NEED TO REMEMBER TO ONLY CHECK/PASS '.' ONCE PER NUMBER!
const numbers = /[1234567890.]/;
const operators = /[*-+=\/]/
let equalsClicked;


// window.addEventListener('keydown', numPress);

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
			} else {
				let num = e.target.id;
				console.log(num);
				numberDisplay += num;
			}
	} else {
			equation.num1 = +numberDisplay.textContent;
			equation.operator = e.target.id;
			clearDisplay();		
		};
};

// function numPress(e) { //handles keydown events
// 	if ((e.key == '=') || (e.key == 'Enter')) {
// 		equation.num2 = +numberDisplay.textContent;
// 		numberDisplay.textContent  = equation.solution();
// 		equalsClicked = true;
// 		clearEquation();
// 	} else if (numbers.test(e.key)) { 
// 		if(equalsClicked) {
// 			numberDisplay.textContent = '';
// 			numberDisplay.textContent += e.key;
// 			equalsClicked = false;
// 		} else {
// 			numberDisplay.textContent += e.key;
// 		}
// 	} else if (operators.test(e.key)) {
// 			equation.num1 = +numberDisplay.textContent;
// 			equation.operator = e.key;
// 			clearDisplay();
// 	} else {
// 			return //makes sure unwanted keypresses are being ignored 
// 	};
// }

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