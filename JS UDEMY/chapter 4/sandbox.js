const scores = [ 50, 25, 0, 30, 100, 20,10]

for(let i=0; i < scores.length; i++){
    console.log( 'you score is: ' + scores[i]);

    if ( scores[i] === 100){
        console.log('you have the top score');
        break;
    }
}

const grade = 'D'

switch(grade){
    case 'A':
        console.log('Your grade is A');
        break
    case 'B':
        console.log('Your grade is B');
        break
    case 'C':
        console.log('Your grade is C');
        break
    case 'D':
        console.log('Your grade is D');
        break
    case 'E':
        console.log('Your grade is E');
        break

    default:
        console.log('Invalid data')
}