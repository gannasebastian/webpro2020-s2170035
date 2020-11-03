/*
    TEST 02
    3 NOVEMBER 2020
*/
// PART 1: UBAHLAH SYNTAX ES5 > ES6

// 1
function calculateAge(birthYear) {
	return 2019 - birthYear;
}
function yearUntilRetirement(object) {
	const age = calculateAge(object.year);
	const retirement = 60 - age;
	if(retirement > 0){
    	console.log(`${object.firstName} retires in ${retirement} years`);
    } 
    else{
    	console.log(`${object.firstName} is already retired.`);
	}
}
yearUntilRetirement({year: 1987, firstName: 'John'});


// 2
const addNumber = (...angka) => {
    let sum = 0;
    angka.map(x => (sum += x));
    return sum;
};
console.log(addNumber(1,2,3,4,5,6,7));


// 3
let phi = 3.14;
let power = 2;
let radius = 0;

const calculateArea = function(obj) {
  return phi * Math.pow(obj.radius, obj.power);
};
 
radius = 21;
const area21 = calculateArea({radius: radius, power: 2 });
 
radius = 7;
const area7 = calculateArea({radius: radius, power: 2 });
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);


// 4
const makeAjaxRequest = (url, method = "GET") => {
    console.log(url, method);
};
makeAjaxRequest("www.google.com");



// PART 2: PROGRAM CODE

// 1
const warnaKesukaan = (warna = "Putih") =>
    console.log(`Warna Kesuakaan saya adalah ${warna}`);
    warnaKesukaan();
    
// 2
let namaBuah1 = ['apel', 'mangga'];
let namaBuah2 = ['sirsak', 'semangka'];
let semuaNamaBuah;
semuaNamaBuah = [...namaBuah1, ... namaBuah2];
console.log(semuaNamaBuah);