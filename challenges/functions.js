// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function consume(array, func) {
  for (const i = 0; i < array.length; i++) {
    return array[i];
  }
}

function sumSquares(numbers) {
  const total = 0;

  return total;
}

sumSquares([1, 2, 3, 4]);

function add(x, y, cb) {
  
  cb(x + y);
}

add(2, 2, (add) => {
  console.log(add);
});

function multiply(x, y, cb) {
  
  cb(x * y);
}

multiply(10, 16, (multiply) => {
  console.log(multiply);
});

const firstName = 'Mary';
const lastName = 'Poppins';
function greeting() {
  console.log(`Hello ${firstName} ${lastName}, nice to meet you!`); 
}
greeting();

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2, 2, add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: The reason nestedfunction() can access the variable "internal" is because the variables and functions declared within the function can reach outward for context.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();