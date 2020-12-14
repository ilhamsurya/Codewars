//ubah paramater jam, menit dan detik lalu ke milisekon

function past(jam, menit, detik){
    var milisekon = 3600 * jam + 60 * menit + detik;
    return milisekon * 1000;
}

console.log(past(0,1,1),61000);