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
// function findarea(r){
//     return (pi * r * r )
// }

// let r = findarea(5)
// console.log(r)

// 17. Create a human readable time format using the Date time object
//     -
//     YYYY - MM - DD HH: mm -
//     DD - MM - YYYY HH: mm -
//     DD / MM / YYYY HH: mm

// let date = new Date()
// console.log(date.toJSON());
// console.log();

// 19. Even numbers are divisible by 2 and the remainder is zero.How do you check,
//     if a number is even or not using JavaScript ?

// let a=8
// if(a%2==0){
//     console.log("it's a even number");
// }else{
//     console.log("it's not even number");
// }

// 20. Write a code which can give grades to students according to theirs scores:
//     -80 - 100, A -
//     70 - 89, B -
//     60 - 69, C -
//     50 - 59, D -
//     0 - 49, F

// let grade = 30;
// switch (true) {
//   case grade >= 80:
//     console.log("A");
//     break;

//   case grade >= 70:
//     console.log("B");
//     break;

//   case grade >= 60:
//     console.log("C");
//     break;
//   case grade >= 50:
//     console.log("D");
//     break;

//   default:
//     console.log("failed ");
// }

// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer
// let season = new Date().getMonth();

// switch (season) {
//     // December, January or February
//   case 0:
//   case 1:
//   case 2:
//     console.log("December, January or February, the season is Winter.");
//     break;

//     // March, April or May
//   case 3:
//   case 4:
//   case 5:
//     console.log("March, April or May, the season is Spring");

//     break;

//     // June, July or August
//   case 6:
//   case 7:
//   case 8:
//     console.log("June, July or August, the season is Summer");

//     break;

//     //  September, October or November
//   case 9:
//   case 10:
//   case 11:
//     console.log(" September, October or November, the season is Autumn");

//     break;

//   default:
//     console.log("something went wrong");
// }

// 22. Write a program which tells the number of days in a month.

// function monthDay(month,year){
//     return new Date(year,month,0).getDate()
// }

// console.log(monthDay(1,2023))

// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'

// let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//- add 'Meat' in the beginning of your shopping cart if it has not been already added

// let add = shoppingCart.unshift("Meat")
// console.log(add);
// console.log(shoppingCart)

//- add Sugar at the end of you shopping cart if it has not been already added
// shoppingCart.push("Sugar")
// console.log(shoppingCart);

//- remove 'Honey' if you are allergic to honey
// let removeItem = shoppingCart.pop()
// shoppingCart.push("honey")
// console.log(removeItem);
// console.log(shoppingCart)

//- modify Tea to 'Green Tea'
// shoppingCart[2] = "Green Tea"
// console.log(shoppingCart)

// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// - Sort the array and find the min and max age
// ages.sort()
// let max =  Math.max(...ages)
// console.log(max)
// let min = Math.min(...ages)
// console.log(min)

// - Find the median age(one middle item or two middle items divided by two)

// let divided = ages.slice(2,4)

// - Find the range of the ages(max minus min)
// let range = max-min
// console.log(range)

//- Find the average age(all items divided by number of items)
// let avg = ages.reduce((sum, a) => sum + a) / ages.length
// console.log(avg);

// - Compare the value of (min - average) and (max - average), use abs() method
// minium compare value
// let minium = min-avg
// console.log(minium)

// maxium compare value
// let maxium = max - avg
// console.log(maxium)

// 28. Use for loop to iterate from 0 to 100 and print only prime numbers

// let primeNum = false
// for(let i = 2; i<100; i++){
//     for(let j=2; j<i-1; j++){
//         if(i%j == 0){
//             primeNum = false;
//             break
//         }
//     }
//     if(primeNum){
//         console.log(i)
//     }
//     primeNum = true
// }

// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// let even = 0;
// let odd = 0;
// for(let i =0; i<100; i++){
//     if(i%2 === 0){
//         even += i
//     }else{
//         odd += i
//     }
// }

// console.log(even,odd)

// 30. Write a script which generates a random hexadecimal number.
// function randHex(num){
// let hexChar = ['0', '1', '2', '3', '4', '5',
//     '6', '7', '8', '9', 'A', 'B',
//     'C', 'D', 'E', 'F'
// ];

// for( let i = 0; i<num; i++){
//     console.log(hexChar[Math.floor(Math.random()*16)])
// }

// }
// let num = 5
// randHex(num)

// 35. Write a functions which checks if all items are unique in the array.

// const uniqueTtem = (item) =>
//     item.length === new Set(item).size

// console.log(uniqueTtem([1,1,2,3,4]));
// console.log(uniqueTtem([1, 2, 3, 4]));
