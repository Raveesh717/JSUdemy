
//                                           Function

// function greet(){
//     console.log("hello there");
// }
// greet();

// const speak = function(){
//     console.log("be there");

// }
// speak();






//                                      Arguments and Parameter 



// const speak = function(name ='lola', time = 'night'){
//     console.log(`good ${time} ${name}`);
// }

// speak('mario', "night");





//                                       Return Values 



// const calArea = function(radius){
//     let area = 3.14*radius**2;
//     return area
// };

// const a = calArea(5);
// console.log(a);






//                                     Arrow Function 





// const calArea = (radius) => {
//     return 3.14 *radius**2;
// };

// const area = calArea(5)
// console.log(area);

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i=0; i< products.length; i++){
//         total += products[i] + products[i] * tax;
//     };
//     return total;
// };

// console.log(bill([10,15,30], 0.2));







//                                          Callback



// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(function(value){
//     console.log(value);
// });

// let people = [ 'Daniel', 'Ali', 'Karan', 'Mervin', 'Alicia']

// people.forEach((person, index) => {
//     console.log(index, person);

// });



//                                         callback function in action 

const ul = document.querySelector(".people");
const people =  [ 'Daniel', 'Ali', 'Karan', 'Mervin', 'Alicia'];
let html = ``;


people.forEach(function(person){
    html += `<li style="color: purple">
    ${person}
    </li>`
}
);

console.log(html);


ul.innerHTML = html;



