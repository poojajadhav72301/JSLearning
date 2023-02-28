console.log("***** Check leap year or not *****");
var checkLeapYear = function(leapYear){
    if(leapYear == null || isNaN(leapYear) || (typeof leapYear != "number")){
        console.log(`${leapYear} year is invalid`);
    }
    else{
        if(leapYear % 4 == 0 && leapYear % 100 != 0 || leapYear % 400 == 0){
            console.log(`${leapYear} year is leap year`);
        }
        else{
            console.log(`${leapYear} year is not leap year`); 
        }
    }
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);