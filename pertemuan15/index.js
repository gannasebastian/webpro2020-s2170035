/*
    DESTRUKTURISASI
    [ARRAY - OBJECT]
*/

//1. Array

const colors = ["Merah", "Kuning", "Hijau"];
//Cara Lama
// let satu = colors[0];
// let dua = colors[1];
// let tiga = colors[2];

//Ambil semua variabel
// let [satu, dua, tiga] = colors;
// console.log(satu, dua, tiga);

//Ambil hanya 2 saja
// let[satu, , tiga] = colors;
// console.log(satu, tiga);

//Plus one
let [satu, dua, tiga, empat="Biru"] = colors;
console.log(satu, dua, tiga, empat);

//2. Object
const user = {
    name: "Sebastian",
    gender: "Male",
    age:21,
};

// let {name, gender, age, born="Manado"}=user;
// console.log(name,gender,age,born);
/*
    Jika Ambil hanya dua var saja
    (pada object), 
    tidak perlu dipisahkan dengan koma 
    (yang penting nama var sama)
*/
// Using Arrow function
// const display=(props)=>{
//     console.log(`Nama saya adalah ${props.name}. Umur saya adalah ${props.age}`);
// };

// Using Arrow function + Destructuring
const display=({name,age})=>{
    console.log(`Nama saya adalah ${name}. Umur saya adalah ${age}`);
};
display(user);

//3. Array Object

const users = [
    {id:1, name: "Sebastian"},
    {id:2, name: "Kenny"},
    {id:3, name: "Dasril"},
];
let [user1, user2, user3] = users;
console.log(user1, user2, user3);

//4. Kombinasi dengan Rest Operator