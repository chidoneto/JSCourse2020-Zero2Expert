//-----------011 Values and Variables -----------------------------------
// LECTURE: Values and Variables
// 1.	Declare variables called 'country' , 'continent' and 'population' and assign their values according to your own country (population in millions) 
// 2.	Log their values to the console 

// let spaceHolder = "----V.011--Assignments.1--LECTURE: Values and Variables-----------";
// console.log(spaceHolder);

//My Answer:
// let country = "Commonwealth of Australia";
// let continent = "Australia";
// let population = 25;
// console.log(country);
// console.log(continent);
// console.log(population);

//-----------012 Data Types -----------------------------------
// LECTURE: Data Types 
//1.	Declare variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet 
//2.	Log the types of 'isIsland' , 'population' , 'country' and 'language' to the console 

//My Answer:
// let isIland = true;
// isIland = 'Australia';
// let language;
// console.log(isIland);
// console.log(population);
// console.log(country);
// console.log(language);
// console.log(continent);

//-----------013 let, const and var -----------------------------------
// LECTURE: let, const and var
// 1.	Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
// 2.	Think about which variables should be const variables (which values will never change, and which might change ?).Then, change these variables to const.
// 3.	Try to change one of the changed variables now, and observe what happens 

//My Answer:
// const language = "English";
// const country = "Australia";
// const continent = "Oceania";
// let population = 25;
// let isIland = true;
// isIland = 'Oceania';
// console.log(language);
// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIland);

//-----------014 Basic Operators -----------------------------------
// LECTURE: Basic Operators 
// 1.	If your country split in half, and each half would contain half the population, then how many people would live in each half? 
// 2.	Increase the population of your country by 1 and log the result to the console 
// 3.	Finland has a population of 6 million. Does your country have more people than Finland? 
// 4.	The average population of a country is 33 million people. Does your country have less people than the average country? 
// 5.	Based on the variables you created, create a new variable 'description’ which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak Portuguese' 

//My Answer:
// // 1.
// let population = 25;
// // 5. 
// const description1 =
//   country +
//   " is in " +
//   continent +
//   ", and it's " +
//   population +
//   " million people speak " +
//   language;
// console.log(description1)
// //1.
// console.log(population);
// population = 25 / 2;
// console.log(population);
// //2.
// population++;
// console.log(population);
// //3.
// console.log(population > 6);
// //4.
// console.log(population < 33);

//-----------017 Strings and Template Literals ---------------------
// LECTURE: Strings and Template Literals 
// 1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax

//My Answer:
// const description2 = `${country} is in ${continent}, and it's ${population} million people speak ${language}!`;
// console.log(description2);


//-----------018 Taking Decisions: if / else Statements ---------------------
// LECTURE: Taking Decisions: if / else Statements

// 1.	If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

// 2.	After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original

//My Answer:
//1
const country1 = 25;
let belowAverage1;
if (country1 > 33) {
  console.log(`Australia's population is above average.`)
} else {
  belowAverage1 = 33 - country1;
  console.log(`Australia's popualtion is ${belowAverage1} million below average.`)
};
console.log(belowAverage1);

//2.1
const country2 = 13;
let belowAverage2;
if (country2 > 33) {
  console.log(`Australia's population is above average.`)
} else {
  belowAverage2 = 33 - country2;
  console.log(`Australia's popualtion is ${belowAverage2} million below average.`)
};
console.log(belowAverage2);

// //2.2
// I could not do this part as I keep getting an undefined
const country3 = 130;
let belowAverage3;
if (country3 > 33) {
  console.log(`Australia's population is above average.`)
} else {
  belowAverage3 = 33 - country3; // Don't know how to do this here
  console.log(`Australia's popualtion is ${belowAverage3} million below average.`)
};
console.log(belowAverage3);