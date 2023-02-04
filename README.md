# calculator2

Second attempt at building a calculator for the Odin Project foundation course.

I want to take the experience of building the first one and refine it. Also
using more efficient and "cleaner" code. I felt like the first calculator 
was a bit too bodged together and unwieldy!

I also want to try to use different methods from the first calculator for completing 
the project. I stuck very much with what I knew for the first one so this will push
me to learn and understand more different approaches to coding. Don't want to get
stuck/tunnel visioned on just the one way of doing things!

BUGS TO FIX:

- clicking '=' not working - DONE
- clicking '+' concantenating numbers not adding them - DONE
- clicking on buttons with mouse does not work - DONE
- no character limit; numbers overflow the calculator - DONE
- logo font needs to change - DONE
- logo design finished - DONE
- keypress: calculated answer not being retained for further equations when '-' pressed - DONE
- LIMIT '.' TO ONCE PER INPUT
- solar panel needs to be finished - DONE
- IMPLEMENT CHARACTER DELETION
- OPERATOR CHARACTER NOT APPEARING ON SCREEN
- COMPLETE EQUATION NOT APPEARING AT TOP OF SCREEN
- BUTTON BORDER CHANGES WHEN USING BOTH MOUSE-CLICK AND KEYBOARD PRESSES



OLD WHAT TO DO:
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
