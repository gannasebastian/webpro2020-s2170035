/*
    DESTRUKTURISASI
    [ARRAY - OBJECT]
*/

// Destrukturisasi Array
let buah = ["Apple", "Banana", "Orange"];
let [buah1, buah2, buah3] = buah;
console.log(buah1);
console.log(buah2);
console.log(buah3);

let [NamaDepan, , NamaBelakang, , Buku] = 
["Joanne", "K", "Rowling", "Pengarang", "Harry Potter"];
console.log(NamaDepan);
console.log(NamaBelakang);
console.log(Buku);

// Swap Variable
/*  O L D  -  W A Y
    let a=10;
    let b=15;
    let temp=a;
    a=b;
    b=temp; */
let a=10;
let b=15;
[a,b]=[b,a];
console.log(a, b);

// Destrukturisasi Object
/*
let orang = {
    nama: "Sebastian",
    umur: 21,
    sudahMenikah: false
};
  O L D - W A Y
    let nama=orang.nama;
    let umur=orang.umur;
    let sudahMenikah=orang.sudahMenikah;

let {nama, umur, sudahMenikah: status}=orang;
console.log(nama, umur, status);
*/

// Object bertingkat
let murid = {
    kelas: "12A",
    nama: ["Ani", "Yahya", "Sinto"],
    prestasi: {
      olahraga: "Juara 1",
      akademik: "Juara 2"
    }
};

let {
    prestasi: { olahraga }
} = murid;
console.log(olahraga);