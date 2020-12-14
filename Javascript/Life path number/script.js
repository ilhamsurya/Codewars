/* DESKRIPSI KODE
*menjumlahkan tanggal lahir seseorang hingga 1 digit
contoh:
ilham surya 27-oktober-2000
convert string DOB jadi integer
maka:
2 + 0 + 0 + 0 = 2
1 + 0 = 1
2 + 7 = 9
*/

/**
 *
 * @param {string} yearOrMonthOrDate
 *
 */

function calculateLifePath(yearOrMonthOrDate) {
  let temp;
  if (yearOrMonthOrDate.length > 1) {
    //split dengan seperator kosong '2000' => ['2', '0', '0', '0']
    //map operasi tiap map konvert ke int
    //
    temp = yearOrMonthOrDate
      .split("")
      .map((char) => parseInt(char, 10))
      .reduce((acc, value) => acc + value);

    if (temp.toString().length > 1) {
      return calculateLifePath(temp.toString());
    }
  }
  return temp;
}

/**
 *
 * @param {string} dateOfBirth
 * @returns {number}
 */

function lifePathNumber(dateOfBirth) {
  const [year, month, date] = dateOfBirth.split("-");
  var lifePath =
    calculateLifePath(year) +
    calculateLifePath(month) +
    calculateLifePath(date);
  return calculateLifePath(lifePath.toString());
}

console.log(lifePathNumber("2000-10-27"));
