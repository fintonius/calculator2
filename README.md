# calculator2

Second attempt at building a calculator for the Odin Project foundation course.

I want to take the experience of building the first one and refine it. Also
using more efficient and "cleaner" code. I felt like the first calculator 
was a bit too bodged together and unwieldy!

I also want to try to use different methods from the first calculator for completing 
the project. I stuck very much with what I knew for the first one so this will push
me to learn and understand more different approaches to coding. Don't want to get
stuck/tunnel visioned on just the one way of doing things!

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


//I feel like there's something I'm missing here... the problem for me is how to reconcile
//being able to access properties of either universally rather than needing
//e.target.id for clickEvents and e.id for keyEvents...