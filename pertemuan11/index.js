// Rewind about function
function ucapkanSalam() {
    return "Selamat Pagi";
};
console.log(ucapkanSalam());


/*
    ARROW FUNCTION
*/

// Fungsi dengan parameter
const operasiPenjumlahan = (bilangan1, bilangan2) => {
    const hasil =  bilangan1 + bilangan2;
    return hasil;
};
console.log(operasiPenjumlahan(4, 4));

// Fungsi w/o parameter
const namaJenisAnjing = () => {
    const anjing = ["Pug", "Bulldog", "Poodle"];
    return anjing[Math.floor(Math.random()*(anjing.length))];
}
console.log(namaJenisAnjing()); // Output: -Random-

/*
    Implicit Return Value
*/
/*
function greeting(nama) {
    return `Hi ${nama}`;
}
console.log(greeting('Einstein'));
*/

// Disingkat menggunakan arrow function
const greeting = (nama) => `Hi ${nama}`;
console.log(greeting('Einstein'));

/*
    Syntax arrow function untuk implicit return value::
    const namaFungsi = () => nilaiReturn;
*/