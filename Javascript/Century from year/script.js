// (1700) = 17
// (1801) = 19
// (2000) = 20
// (2003) = 21

function centuryFromYear(tahun) {
  // ex: 2000 maka akan didapatkan century 20
  const abad = Math.floor(tahun / 100);
  const dekade = year % 100;

  // ex: 2010 adalah abad 21 tetapi bila menggunakan century didapatkan 20
  // so hitung dekade nya apabila modulus yang dihasilkan lebih dari 1 tambah abadnya 1
  if (dekade > 0) {
    return abad + 1;
  }
  return abad;
}
