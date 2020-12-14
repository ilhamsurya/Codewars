/**
 * membalikan nilai akhir siswa setelah dimasukan ujian dan proyek dkk
 * syarat seperti di code
 *
 * @param {*int} ujian
 * @param {*int} proyek
 */

function finalGrade(ujian, proyek) {
  if (ujian > 90 || proyek > 10) {
    return 100;
  } else if (ujian > 75 && proyek >= 5) {
    return 90;
  } else if (ujian > 50 && proyek >= 2) {
    return 75;
  } else {
    return 0;
  }
}

console.log(finalGrade(20, 2));
