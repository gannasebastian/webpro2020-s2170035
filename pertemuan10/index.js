//Var, Let, Const

//let nama="sebastian";
//console.log(nama);


/* 
    Scope dalam Javascript
    1. Function Scope (Var)
    for (var i=0; i<10; i++){
        console.log(i);
    }
    console.log(i); // variable i di akses di luar for


    2. Block Scope
    // Block Scope -> Variabel i tidak dapat di akses dari luar
    function tes(){
        for (var i=0; i<10; i++){
            console.log(i);
        }
    }
    tes();
*/

/*
    IIFE
    (function tes(){
        for (var i=0; i<10; i++){
            console.log(i);
        }
    })();

// Make it Block Scope
{
    let i;
    for (let i=0;i<10;i++){
        console.log(i);
    }
}
console.log(i);
*/
const person = {
    firstName: "Sebastian",
    lastName: "Ganna",
    age: 33,
};
console.log(
    "Hallo nama saya "+ person.firstName 
    + " " + person.lastName 
    + ". Umur saya adalah " + person.age 
    + " tahun."
);

console.log(
    `Hallo nama saya ${person.firstName} ${person.lastName}. Umur saya ${person.age} tahun`
);