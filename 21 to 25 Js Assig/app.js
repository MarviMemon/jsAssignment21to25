//=========Q1===============
// let userInput = prompt("inter your firts name");
// let userInput2 = prompt("inter your last name");
// let merge =  userInput + userInput2;
// alert(merge);
// document.write(merge);

//============Q2============
// let userInput = prompt("inter your fvrt mobile name");
// let len = userInput.length;
// document.write("my favorite phone is "+  userInput + "<br>");
// document.write("lenght of string : " , + len);

//==========Q3============
// let text = "pakistani";
// let index = text.indexOf("n");
// document.write("String: pakistani" +"<br>")
// document.write("index of n :  " + index);

//===========Q4===========
// let text = "hello world";
// let index = text.lastIndexOf("l");
// document.write("String: hello world " +"<br>")
// document.write("last index of  l :  " + index);

//=============Q5==========
// let str = "pakistan";
// let str2 = str.charAt(3);
// // document.write(str.charAt(3));
// document.write("string : pakistani" + "<br>" );
// document.write("Cgaracter at index 3 : " + str2);

//============Q6==============
// let firstName = prompt( "enter your name");
// let lastName =  prompt("enter your cast");
// //document.write(firstName.concat(lastName));
//  alert(firstName.concat(lastName));

//============Q7=============
// let city = "hyderabad";
// let city2 = city.replace("hyderabad" ," Islamabad");
// document.write( "City : " + city +"<br>");
// document.write("After replacement : " + city2);

//===========Q8===========
// let message ="ali and sami are best friends,they play crickey end football together.";
// let rep = message.replace("and" , "&");
// document.write(rep);

//============Q9==========
// let num = "472";
// let num2 = Number(num)
// document.write("value :" +num +"<br>");
// document.write( "type : " + typeof num +"<br>");
// document.write("value : " + num2 +"<br>");
// document.write( "type : " + typeof num2);

//==========Q10==========
// let userInput = prompt("enter the your input ");
// document.write("User input : " + userInput + "<br>");
// document.write( "Upper case : "+ userInput.toUpperCase());

//================Q11=======
//  let string = prompt("please enter a string");
//  let letter = string.charAt(0).toUpperCase()+string.slice(1);
// //  alert(letter)
// document.write("User input :" + string +"<br>");
// document.write("Upper case : " + letter);

//========Q12======
// let num = 35.36
// document.write( "Number : " + num + "<br>");
//  let num2 = num.toString();
//  document.write("Result : " + num2 +"<br>");
//  document.write(typeof num2);

//==============Q13============
// function checkspecialSymbol(str) {
//   const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//   return specialChars.test(str);
// }
// let userInpt = prompt("Enter username");
// if (checkspecialSymbol(userInpt)) {
//   prompt('Enter a valid username');
// } else {
//   alert('Correct username');
// }



//=======Q14=========
// var items = ["cake", "apple" ,"pie" , "cookie", "chips", "patties"];
// function searchItem(){
//     var usreInput = prompt("Welcom to ABC Bakery. what do you want to order sir/ma'ma?");

//     const isTrue = items.findIndex((item) => item.toLowerCase() === usreInput.toLowerCase());

//     if(isTrue !== -1){
//         document.write("Cookie available at index no " + isTrue +" in our bakery");
//     }else{
//         document.write("we are sorry." + usreInput  + "is not available in our bakery ");
//     }
// }
// searchItem();

//========Q15==========
// function validatePassword(password) {
//   // Check if the password contains alphabets and numbers
//   var hasAlphabets = /[a-zA-Z]/.test(password);
//   var hasNumbers = /[0-9]/.test(password);

//   // Check if the password starts with a letter
//   var startsWithLetter = /^[a-zA-Z]/.test(password);

//   // Check if the password is at least 6 characters long
//   var checkLength = password.length >= 6;

//   // Check if all requirements are met
//   if (hasAlphabets && hasNumbers && startsWithLetter && checkLength) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // Prompt the user to enter a password
// var password = prompt("Enter a password:");

// // Validate the password
// if (validatePassword(password)) {
//   alert("Invalid password. Please enter a valid password.");
// } else {
//   alert("Password is valid!");
// }


//============Q16========
// function convertStringToArray(){
//   let university = "University of Karachi";
//   document.write(university);
//   let arr = university.split('');
//   for(let i = 0; i<= arr; i++){
//     document.write(arr[i] +"<br>")
//   }
// }
// convertStringToArray();


//========Q17========
// let str =  prompt("enter the value");
// let res = str.charAt(str.length -1);
// document.write("user input : " + str +"<br>")
// document.write( "last character of input : " + res);


//========18==========
// function countOccurrences(str, word) {
//   let words = str.split(" ");
//   let count = 0;

//   for (var i = 0; i < words.length; i++) {
//     if (words[i].toLowerCase() === word.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// }

// let sentence = "The quick brown fox jumps over the lazy dog";
// let targetWord = "the";
// let result = countOccurrences(sentence, targetWord);
// document.write("Occurrences of word '" + targetWord + "': " + result);
