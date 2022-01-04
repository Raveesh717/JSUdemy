

//                                                  String


// let a = 'Bran';
// let b = 'Sand';

// //concatenation

// let ab = a + ' ' + b;
// console.log(ab);

// //getting characters

// console.log(ab[2]);

// //getting length

// console.log(ab.length);

// //strings methods

// console.log(ab.toUpperCase());
// let result = ab.toLowerCase();
// console.log(result);

// //common methods
// let email = 'raveeshshib@gmail.com';

// let result2 = email.lastIndexOf('m');
// console.log(result2);

// let result3 = email.slice(0,6);
// console.log(result3);

// let result4 = email.substr(4,10);
// console.log(result4);


// let result5 = email.replace('s', 'w');
// console.log(result5);








//                                           Template String



// const title = 'best reads of 2021'
// const author = 'rav'
// const likes = '40'

// // concatenation way

// let result = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes ';
// console.log (result)

// // template string way

// let result2 = `The blog ${title} by ${author} has ${likes} likes`;
// console.log(result2);

// //HTML template
// let html = `
// <h2>${title}</h2>
// <p> by ${author}</p>
// <span> This blog has ${likes} likes </span>
// `;

// console.log(html);





//                                      Comparison Boolean 


// let age = 25

// //loose comaparison 

// console.log( age == 25);
// console.log( age == "25");

// //strict comparison 

// console.log (age === 25);
// console.log (age === '25');
// console.log (age !== 25);
// console.log (age !=='25');







//                                         Type Conversion 



let score = '100';
score = Number(score);

console.log(score + 1);

// let result = Number('hello');
// console.log(result);

let result = Boolean(0); 
console.log(result);

