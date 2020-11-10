import React from 'react';
//Panggil waktu.js (not default)
import {cekTahun, cekHari} from '../utils/waktu'

//Component Hello
const Hello = () => {
    return (
      <div>
        <p>Hello, selamat datang di kelas web programming</p>
        <p>Tahun Sekarang adalah {cekTahun()}</p>
        <p>Tanggal sekarang adalah {cekHari()}</p>
      </div>
    );
}

export default Hello;