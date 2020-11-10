import React from 'react';

// Export tahun dan hari
const cekTahun = () => {
    return new Date().getFullYear();
};
  
  const cekHari = () => {
    return new Date().getDate();
};

export {cekHari, cekTahun};