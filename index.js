console.log("Hello World");
//if we want to write on display screen and not on console
document.write("This is document write");
// let age = 34;
//single if statement
// if(age>8){
//     console.log("you are not a kid");
// }
//if else statement
/*if(age>8){
    console.log("you are not a kid");
}
else{
    console.log("you are a kid");
}*/

//checking multiple conditions in one ladder
//if else ladder
// if (age > 2) {
//   console.log("you are not a bachcha");
// } else if (age > 26) {
//   console.log("Bachche nahi rahe");
// } else if (age > 22) {
//   console.log("yes Bachche nahi rahe");
// } else if (age > 18) {
//   console.log("18 Bachche nahi rahe");
// } else {
//   console.log("bachche rahe");
// }
// console.log("end of ladder");
// let age = prompt("Whats your age? ");
// age = Number.parseInt(age); //converting string to number
// if(a<0){
//     alert("this is an invalid age");
// }
// else if(a<9){
//     alert("you are a kid you can not even think of driving");
// }
// else if(a<18 && a>=9){
//     alert("you are a kid and you can think of driving after 18")
// }
// else{
//     alert("you can now drive because you are above 18");
// }
// const expr = "Mangoes";
// switch(expr){
//     case 'Oranges':
//         console.log('Oranges are 70₹ per kg');
//         break;
//     case 'Mangoes':
//         console.log('Mangoes are 100₹ per keg');
//         break;
//     case 'Papayas':
//         console.log('Papayas are 50₹ per kg');
//     break;
//     default:
//     console.log('Sorry we are out of stock of ₹(expr)');
// }

// console.log("You can", (age<18? "not drive" : "drive"));
// use logical operator to find whether the age of a person lies between 10 and 20
//prob 1
// let age = prompt("what is your age? ");
// age = Number.parseInt(age);
// if(age>10 && age <20){
//     console.log("your age lies between 10 and 20");
// }
// else{
//     console.log("your age doesn't lies between 10 and 20")
// }
//prob 2

/*let age = prompt("what is your age? ");
// age = Number.parseInt(age);
switch(age){
    case '12':
    console.log("your age is 12");
break;
    case '13':
    console.log("your age is 13");
break;
    case '14':
    console.log("your age is 14");
break;
    case '15':
    console.log("your age is 15");
break;   
    default:
    console.log("your age is not special");
}
*/

//prob 3
// write a JS prog to print whether a number is divisible by 2 and 3
/*let a = prompt("what is your age? ");
a = Number.parseInt(a);
if((a % 2 == 0) && (a % 3 == 0)){
    console.log("number is divisible by both 2 and 3");
}

else{
    console.log('number is not divisible by both')
}*/

//prob 4
// write a JS prog to print whether a number is divisible by either 2 or 3
// let a = prompt("what is your age? ");
// a = Number.parseInt(a);
// if((a % 2 == 0) || (a % 3 == 0)){
//     console.log("number is divisible by either 2 or 3");
// }
// else{
//     console.log('number is not divisible by both')
// }
// let age = prompt("what is your age? ")
// let a = age>18?"you can drive":"you cannot drive";
// console.log(a)

// loops in JS
/*let sum =0;
let n = prompt("enter the value of n");
n= Number.parseInt(n)
;for(let i = 0; i<n; i++){
 sum+=i;
}
console.log("sum of first " + n + " natural numbers is " + sum);

// for in loop
// we can use this for loop if we want to get keys from object
let abc ={
    harry:50,
    anushka:99,
    ritika:70,
    shubh:60
}
for(let a in abc){
    //obj ki keys print krna
    console.log("marks of " + a + " are " + abc[a]);
}
//for of loop
//object ki values ko ek ek kke print krege agar object iterable hai to
for(let b of "anushka"){
    //obj ki keys print krna
    console.log(b);
}*/

//do while loop
// let n = prompt("enter the value of n");
// n= Number.parseInt(n)

// let i = 0;
// //kam se kam ek baar zarur execute hoga
// do{
//     //do this code
//     console.log(i);
//     i++;
// }
// //jabtak i s less than n
// while(i<n)

// const Hello = () => {
//     console.log("hey hello how are you i am to fine yaar");
//     return "hi";
// }
// Hello();

// let marks = {
//     harry : 90,
//     shubham: 50,
//     anushka: 100,
//     monika: 80
// }
//Object.keys(marks).length = obj ke andar jo keys hai vo dega aur unki length dega
// Object.keys(marks) = sari keys ek array ke andar dega = harry shubham anushka monika
//Object.keys(marks).length uski length dega
// marks[Object.keys(marks)[i]]-this will give key ke corresponding value
// for(let i = 0; Object.keys(marks).length; i++){
// console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }

// // for in loop
// console.log("the marks of " + key + " are " + marks[key]);

//find mean
// const mean =(a,b,c,d)=>{
//     return (a+b+c+d)/4;
// }
// console.log(mean(4,5,6,7));

//strings
// let nameOfPerson ="Anushka";
// console.log(nameOfPerson);
// console.log(nameOfPerson.length);
// console.log(nameOfPerson[0]);
// console.log(nameOfPerson[1]);
// console.log(nameOfPerson[2]);
// console.log(nameOfPerson[3]);
// console.log(nameOfPerson[4]);
// console.log(nameOfPerson[5]);
// console.log(nameOfPerson[6]);
// console.log(nameOfPerson[7]);

// //template literal
// let boy1 = "krish";
// let boy2 = "Ram";
// //krish is friend of ram
// let sentence =`${boy1} is a friend of ${boy2}`;
// console.log(sentence)

//string methods and properties
// let name1 = "Anushka";
// console.log(name1.length);
// console.log(name1.toUpperCase());
// console.log(name1.toLowerCase());
// console.log(name1.slice(2,4));
// console.log(name1.slice(2));
// console.log(name1.replace("Anu", "Viru "));

// let friend = " Naman";
// console.log(name1.concat(" is a friend of ", friend, "OK"));
// let friend2 = "            meera           ";
// //spaces hata dega
// console.log(friend2.trim());

// let fr = "Shera" + "Shiv" + "Raman";
// console.log(fr[0]);
// console.log(fr[1]);
// console.log(fr[2]);
// console.log(fr[3]);
// console.log(fr);
// const sentence = 'The quick brown fox jumps over the lazy dog.';

// const word = 'fox';

// console.log(
//   `The word "${word}" ${
//     sentence.includes(word) ? 'is' : 'is not'
//   } in the sentence`,
// );
// Expected output: "The word "fox" is in the sentence"

// const str1 = 'Saturday night plans';

// console.log(str1.startsWith('Sat'));
// // Expected output: true

// console.log(str1.startsWith('Sat', 3));
// // Expected output: false

// const str1 = 'Cats are the best!';

// console.log(str1.endsWith('best!'));
// // Expected output: true

// console.log(str1.endsWith('best', 17));
// // Expected output: true

// const str2 = 'Is this a question?';

// console.log(str2.endsWith('question'));
// // Expected output: false
// let str2 = "please give rs 1000";
// let amount =Number.parseInt(str2.slice(15));
// console.log(amount);
// console.log(typeof amount);

// let friend = "deep";
// friend[3]="R";//we cant do this but it doesnt show eror also
// console.log(friend);

// let marks= [1,2,3,4,5];
// console.log(marks);

// //array methods
// let num = [1, 2, 3, 4, 5];
// //aray ko string me convert karna
// let b = num.toString(); //b is now a string
// console.log(typeof b);

// //join method
// let c = num.join("_");
// console.log(c);

// pop metho  d
// num.pop();
// console.log(num);

//what does pop element return - it returns the popped element
// let r = num.pop();
// console.log(num, r);

// //push returns the new array length
// let r = num.push(56);
// console.log(num, r);

//shift - removes 1st element and returns it
// let r = num.shift();
// console.log(num, r);

//unshift - adds array to begining of the array
// let r = num.unshift(67);
// console.log(num, r)

// let num1=[1,2,3,4,5,6,7,8,9]
// let num2=[11,12,13,14,15,16,17,18,19]
// let n3=[123,456,789,4567]
// let nweArray = num1.concat(num2, n3)
// console.log(nweArray, nweArray.length)

//sort method

// let compare = (a,b)=>{
// //     return a-b;
// // }
// let n1= [1,203,456,32,78,96,54,90];
// // n1.sort(compare)
// n1.reverse();
// console.log(n1)

// let n1=[1,2,45,37,68,32,46,7,235];
// // n1.splice(2,3,201,203,202);
// // console.log(n1);

// let newNum = n1.slice(3,6);
// console.log(newNum)

//loops in arrays
// let num1 = [1, 29, 63, 4, 56];
// for(let i=0; i<num1.length; i++){
// console.log(num1[i]);
// }
// num1.forEach((element)=>{
//     //har ek element ka square print ho gaya
//     console.log(element*element);
// })

//array.from
// let name1= "Anuska";
// let arr = Array.from(name1)
// console.log(arr)

// // for of loop
// for(let i of num1){
//     console.log(i);
// }

// for(let i in num1){
//     console.log(i);
// }

// let nano = [12, 23, 45, 67, 89];
// let a =nano.map((value,index,array)=>{
// console.log(value,index,array);
// return value+1;
// })
// console.log(a)

// let nano = [1,2,3,4,5,2,1];
// let newarr = nano.reduce((h1, h2) => {
//   return h1 + h2;
// });
// console.log(newarr)

//chapter 5
//que1
//create an array of numbers and take input from the user to add numbers to this array
// let arr = [1,2,3,4,5,6,83];
// let a = prompt("Enter a number");
// a = Number.parseInt(a);

// arr.push(a);
// console.log(arr);

//prob 2
// let arr = [1, 2, 3, 4, 5, 6, 83];
// let a;
// do {
//   a = prompt("Enter a number");
//   a = Number.parseInt(a);
//   arr.push(a);
//   console.log(arr);
// } while (a != 0);

//prob 3
// let arr = [10,20,30,40,50,60,80];
// let n = arr.filter((x)=>{
//     return x%10 == 0;
// })
// console.log(n);

//prob 3
// let arr = [1,2,30,4,50,6,7,83,670];
// let n = arr.map((x)=>{
//     return x*x;
// })
// console.log(n);

//prob 4
// let arr = [1,2,3,4,5,6,7,8];
// let n = arr.reduce((x1,x2)=>{
//     return x1 * x2 ;
// })
// console.log(n);