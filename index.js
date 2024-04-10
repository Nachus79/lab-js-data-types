/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string


// Print out the concatenated string

const sTotal = `${s1} ${s2} ${s3} ${s4} ${s5} ${s1} ${s2} ${s3} ${s4}`;

console.log (sTotal);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string

const part1Camel = part1.slice (0, 3) + part1[part1.length -1].toUpperCase(); // o tb const part2Camel = part1.slice (0, 3) + part1[3].toUpperCase(); 

const part2Camel = part2.slice (0, 5) + part2[part2.length -1].toUpperCase(); //o tb const part2Camel = part2.slice (0, 3) + part2[5].toUpperCase();

const result = `${part1Camel}${part2Camel}`;

console. log (result);





/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tipAmount = billTotal * 15 /100; 

// Print out the tipAmount

console.log(tipAmount); 


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

let randomNumber = Math.floor(Math.random() * 10);      

// Print the generated random number

console.log(randomNumber); 

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//false
console.log (expression1);

const expression2 = a || b;
//true
console.log (expression2);

const expression3 = !a && b;
//true
console.log (expression3);

const expression4 = !(a && b);
//false
console.log (expression4);

const expression5 = !a || !b;
//true
console.log (expression5);

const expression6 = !(a || b);
//true
console.log (expression6);

const expression7 = a && a;
//true
console.log (expression7);