// 1. 1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.

// let data = 12
// let name = "Ankush"
// let bol = true

// console.log(typeof data);
// console.log(typeof name);
// console.log(typeof bol);


// 2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

// let firstname = 'Ankush'
// let lastname = "kumar"
// let marital_status =  'single'
// let country = 'india'
// let age = 23

// console.log(`my first name is ${firstname } and lastname ${lastname}  and my marital status ${marital_status} and this is my country name${country} and my age ${age}`)


// 3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.

// let name = 'ankush'
// console.log(name.toUpperCase());


// 4. Check if the string contains a word Script using includes() method.

// let text = "Hey this is Ankush"

// let value =  text.includes('is' ,2)
// console.log(value)


// 5. Split the string into an array using split() method
// const arr1 = "Hey this is ankush"
// const value = arr1.split()
// console.log(value);

// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

// const arr1 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

// console.log(arr1.split())

// 7. Use lastIndexOf to determine the position of the last occurrence of a script.

// const arr1 = "This to get the value of lastindex Of"
// console.log(arr1.lastIndexOf('of'))

// 8. Use search to find the position of the first occurrence of the word because in the following sentence: 'You cannot end a sentence with because because because is a conjunction'.

// const sentence = 'You cannot end a sentence with because because because is a conjunction'

// console.log(sentence.indexOf('end'));


// 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.

// const sentence = '       You cannot end a sentence with because because because is a conjunction   '
// console.log(sentence.trim())


// 10. Boolean value is either true or false. -
//   1.  Write three JavaScript statement which provide truthy value. -
//  2.   Write three JavaScript statement which provide falsy value.

// answer is 
// 1. '0', 'false', {} {empty object}, function(){}
// 2. undefined,null,(empty string) and false 



// 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//   1  - 4 > 3 true
//   2  - 4 >= 3 false   (wrong....) answer is true
//   3  - 4 < 3 false
//   4  - 4 <= 3 false
//   5  - 4 == 4 true
//   6  - 4 === 4 true
//   7  - 4 != 4 false
//   8  - 4 !== 4  false
//   9  - 4 != '4' true  (wrong .....) answer is false
//   10  - 4 == '4' true
//   11  - 4 === '4' false
//   12  - Find the length of python and jargon and make a falsy comparison statement.

// console.log("1", 4 > 3)
// console.log( "2", 4 >= 3)
// console.log("3" ,4 < 3)
// console.log("4", 4 <= 3)
// console.log( "5",4 == 4)
// console.log( "6",4 === 4)
// console.log("7",4 != 4)
// console.log("8",4 !== 4)
// console.log("9",4 != '4')
// console.log("10",4 == '4')
// console.log("11",4 === '4')



// 12. Use the Date object to do the following activities -
//     What is the year today ?    
//     -What is the month today as a number ?
//     -What is the date today ?
//     -What is the day today as a number ?
//     -What is the hours now ?
//     -What is the minutes now ?
//     -Find out the numbers of seconds elapsed from January 1, 1970 to now.


// const date = new Date();

// get full year
// console.log(date.getFullYear())

// today month as a number
// console.log(date.getMonth())

// get today date
// console.log(date.getDate())

// today day asn number
// console.log(date.getDay());

// now what's the hours
// console.log(date.getHours())

// what is the minutes
// console.log(date.getMinutes());

//     -Find out the numbers of seconds elapsed from January 1, 1970 to now.



// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle(area = 0.5 x b x h).

// const base =  prompt("Enter the base")
// const height = prompt('Enter the height')

// const value = 0.5 * base * height

// console.log(value)


// 14. Slope is m = (y2 - y1) / (x2 - x1).Find the slope between point(2, 2) and point(6, 10)

// function slope(a1,b1,a2,b2){
//     if(a2-a1 != 0){
//         return (b2-b1)/(a2-a1)
//     }
//     return Number.MAX_VALUE
// } 

// console.log("slope is",slope(2,6,2,10))


// 16. Get radius using prompt and calculate the area of a circle(area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// let pi = 3.14
// function findarea(){
//     return (pi * r * r )
// }

// let r = prompt("e")

// 17. Create a human readable time format using the Date time object
//     -
//     YYYY - MM - DD HH: mm -
//     DD - MM - YYYY HH: mm -
//     DD / MM / YYYY HH: mm


// let date = new Date()
// // console.log(date.toJSON());
// console.log(date.toUTCString())
// console.log();

// 19. Even numbers are divisible by 2 and the remainder is zero.How do you check,
//     if a number is even or not using JavaScript ?

// let a=8
// if(a%2==0){
//     console.log("it's a even number");
// }else{
//     console.log("it's not even number");
// }

// 22. Write a program which tells the number of days in a month.

function monthDay(month,year){
    return new Date(year,month).getDate()
}

console.log(monthDay(2,2023))