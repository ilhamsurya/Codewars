// accum("aBcD") = "A-Bb-Ccc-Dddd"
//
//

function accum(input) {
  // variabe penampung
  let result = "";
  //iterasi pertama
  for (let i = 0; i < input.length; i++) {
    //menambahkan satu alphabet i+1 dari input awal
    for (let j = 0; j < i + 1; j++) {
      if (j == 0) {
        //aplhabet pertama kapital
        result += input[i].toUpperCase();
      } else {
        //sisanta huruf kecil
        result += input[i].toLowerCase();
      }
    }
    //selain alphabet terakhir tambahkan dash
    if (i != input.length - 1) {
      result += "-";
    }
  }
  return result;
}

console.log(accum("AcIkIWIR"));
