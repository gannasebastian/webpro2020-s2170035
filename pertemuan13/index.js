/*
    REST AND SPREAD PARAMETER
*/

/*
// Contoh 1
const hitung = (a, b, c, d, e) => {
    const angka = [a,b,c,d,e];
    let total=0;
    for(let i=0; i<5; i++){
        total=total+angka[i];
    }
    return total;
};
console.log(hitung(1,2,3,4,5));
*/

// 1. Sederhanakan menggunakan Rest Operator
// const hitung=(...angka) => {
//     let total=0;
//     angka.forEach((el) => {
//         total=total+el;
//     })
//     return total;
// }
// console.log(hitung(1,2,3,4,5,6,7,8,9,10));


// 2. Spread Operator
// a) duplikasi array
// const angka=[1,2,3,4,5];
// console.log(angka);
// console.log(...angka); // Use to spread the value of array

// const angka2 = angka; //Copy referensi angka1 ke angka2 (duplikasi)
// angka[0]=10
// console.log(angka2);

// a) gabung dua array
// Old way
// const objek1 = {a: 1, b: 2};
// const objek2 = {c: 3, d: 4};
// const objekGabungan = Object.assign({}, objek1, objek2);
// console.log(objekGabungan);

//Using Spread
const angka1=[1,2,3,4,5];
const angka2=[6,7,8,9,10];
const gabung = angka1.concat(angka2);
console.log(gabung);

const objek1 = {a: 1, b: 2};
const objek2 = {c: 3, d: 4};
const objekGabungan = {...objek1, ...objek2};

console.log(objekGabungan);