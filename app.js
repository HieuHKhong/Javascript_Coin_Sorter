//! Coin Sorter
//TODO Create variables to store the number of each type of coin.
let pennies_coins = prompt("Enter how many pennies present: ");
let nickel_coins = prompt("Enter how many nickels present: ");
let dimes_coins = prompt("Enter how many dimes present: ");
let quarter_coins = prompt("Enter how many quarters present: ");

let coins = [];
coins.push(pennies_coins, nickel_coins, dimes_coins, quarter_coins);  //? Puts variables declared into the array coins.


//TODO Write code to calculate the total value of each type of coin in dollars.

let pennies_dollar = .01;
let nickel_dollar = .05;
let dimes_dollar =  .1;
let quarter_dollar = .25;

let dollar_amount = [];
dollar_amount.push(pennies_dollar, nickel_dollar, dimes_dollar, quarter_dollar); //? Puts variables declared into the array


//TODO Calculate the combine total value of all coins.
let total = 0;
for (let i = 0; i < coins.length; i++){
    total += coins[i] * dollar_amount[i];  //? Calculates the total by adding the product of coins array and dollar amount.
}

//TODO Use the standard capacity for each type of coin wrapper.
let pennies_wrapper = 50;
let nickel_wrapper = 40;
let dimes_wrapper = 50;
let quarter_wrapper = 40;

let coins_wrapper = [];
coins_wrapper.push(pennies_wrapper, nickel_wrapper, dimes_wrapper, quarter_wrapper); //? Puts the maximum coins per wrapper in an array.

//TODO Calculate the number of wrappers needed for each type of coin.
let remainder = []
let total_wrapper = []
for (let i = 0; i < coins_wrapper.length; i++){
    remainder.push(coins[i] % coins_wrapper[i]) //? Calculates the remainders if present
    total_wrapper.push((coins[i] / coins_wrapper[i]))
}
let rounded = total_wrapper.map(num => Math.floor(num))



//TODO Output the results

console.log(remainder[0] + " pennies leftover.")
console.log(remainder[1] + " nickels leftover.")
console.log(remainder[2] + " dimes leftover.")
console.log(remainder[3] + " quarters leftover.")

console.log(rounded[0] + " wrappers needed for pennies")
console.log(rounded[1] + " wrappers needed for nickels")
console.log(rounded[2] + " wrappers needed for dimes")
console.log(rounded[3] + " wrappers needed for quarters")

console.log("Total: $" + total.toFixed(2))