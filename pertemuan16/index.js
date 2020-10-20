/*
    Modularisasi JavaScript: 
    Export & Import
*/
// Menggunakan hello.js ke dalam index.js

// 1st Way to Import
// import {hello, world, name, numb} from './hello.js'

// hello('Sebastian');
// world();
// console.log(name);
// console.log(numb);

// 2nd Way to Import (use * and alias)
// import * as helper from './hello.js'

// helper.hello('Sebastian');
// helper.world();
// console.log(helper.name);

// 3rd Way to Import (Mode Default)
import hello from './hello.js'
hello('Sebastian');