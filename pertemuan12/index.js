//ARROW FUNCTION

/*
//Unusing Arrow
const calcAge = function (year) {
    return 2020-year;
};

//Using Arrow (Delete Function & Add => arrow)
const calcAge = (birthYear, currentYear) => {
    return currentYear - birthYear;
};
console.log(calcAge(1999, 2020));


//No Argument with implicit return value (can't use if there are 2 or more statement)
const calcAge = () => 2020-1992;
console.log(calcAge());

const years = (1990, 1992, 2001, 2005);
const calcAge5 = years.map(function(el){
    return 2020 - el;
});

const calcAge6 = years.map(el => 2020-el);
console.log(calcAge6);


//EXERCISE
//CONVERT to ES6 Syntax
function yearUntilRetirement(year, firstName){
    var age=28;
    var retirement=65-age;
    if(retirement>0){
        console.log(firstName + " retired in " + retirement + " years");
    }
    else{
        console.log(firstName + " is already retired");
    }
}
*/

//ES6 Syntax::
const yearUntilRetirement = (age, firstName) => {
    var retirement = 65-age;
    if(retirement>0){
        return `${firstName} retired in ${retirement} years`;
    }
    else{
        return `${firstName} is already retired`;
    }
}
console.log(yearUntilRetirement(21, 'Sebastian'));