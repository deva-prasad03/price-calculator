let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

function pricevalue(a) {
  if (a == 10) {
    count1++;
    document.getElementById("price").innerText = a * count1;
  } else if (a == 20) {
    count2++;
    document.getElementById("price1").innerText = a * count2;
  } else if (a == 30) {
    count3++;
    document.getElementById("price2").innerText = a * count3;
  } else if (a == 40) {
    count4++;
    document.getElementById("price3").innerText = a * count4;
  } else {
    count5++;
    document.getElementById("price4").innerText = a * count5;
  }
}
function result() {
  var s =
    Number(document.getElementById("price").innerText) +
    Number(document.getElementById("price1").innerText) +
    Number(document.getElementById("price2").innerText) +
    Number(document.getElementById("price3").innerText) +
    Number(document.getElementById("price4").innerText);
  var y = Number(s);

  document.getElementById("total").innerText = y;
  console.log(count);
}
