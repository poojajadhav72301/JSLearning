console.log("***** Check month using switch case *****");
function monthOfYear(monthNumber){
    switch(monthNumber){
        case 1:
            console.log(`${monthNumber} month is: January`);
            break;
        case 2:
            console.log(`${monthNumber} month is: February`);
            break;
        case 3:
            console.log(`${monthNumber} month is: March`);
            break;
        case 4:
            console.log(`${monthNumber} month is: April`);
            break;
        case 5:
            console.log(`${monthNumber} month is: May`);
            break;
        case 6:
            console.log(`${monthNumber} month is: June`);
            break;
        case 7:
            console.log(`${monthNumber} month is: July`);
            break;
        case 8:
            console.log(`${monthNumber} month is: August`);
            break;
        case 9:
            console.log(`${monthNumber} month is: September`);
            break;
        case 10:
            console.log(`${monthNumber} month is: October`);
            break;
        case 11:
            console.log(`${monthNumber} month is: November`);
            break;
        case 12:
            console.log(`${monthNumber} month is: December`);
            break;
        default:
            console.log(`${monthNumber} is invalid`);
    }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);