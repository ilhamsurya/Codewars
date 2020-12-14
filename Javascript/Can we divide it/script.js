//Apabila diberikan bilangan
// apakah bisa dibagi dengan a atau b
// apabila iya return true apabila tidak false

function isDivideBy(bilangan, a, b){
    if (bilangan % a == 0 && bilangan % b == 0) {
        return true;
      } else {
        return false;
      }
     
}

console.log(isDivideBy(10,2,3));