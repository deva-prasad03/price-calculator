var b = 0;
function pricevalue(a) {
  b = b + 1;
  if (a == 10) {
    var count1 = document.getElementById("quantity").value;
    document.getElementById("price").style.display = "inline";
    console.log(count1);
    if (count1 > 0) {
      document.getElementById("price").innerText = a * count1;
    } else {
      alert("Please enter the quantity");
    }
  } else if (a == 20) {
    var count2 = document.getElementById("quantity1").value;
    document.getElementById("price1").style.display = "inline";

    console.log(count2);
    if (count2 > 0) {
      document.getElementById("price1").innerText = a * count2;
    } else {
      alert("Please enter the quantity");
    }
  } else if (a == 30) {
    var count3 = document.getElementById("quantity2").value;
    document.getElementById("price2").style.display = "inline";

    if (count3 > 0) {
      document.getElementById("price2").innerText = a * count3;
    } else {
      alert("Please enter the quantity");
    }
  } else if (a == 40) {
    var count4 = document.getElementById("quantity3").value;
    document.getElementById("price3").style.display = "inline";

    if (count4 > 0) {
      document.getElementById("price3").innerText = a * count4;
    } else {
      alert("Please enter the quantity");
    }
  } else {
    var count5 = document.getElementById("quantity4").value;
    document.getElementById("price4").style.display = "inline";

    if (count5 > 0) {
      document.getElementById("price4").innerText = a * count5;
    } else {
      alert("Please enter the quantity");
    }
  }
}
function result() {
  if (b > 0) {
    var s =
      Number(document.getElementById("price").innerText) +
      Number(document.getElementById("price1").innerText) +
      Number(document.getElementById("price2").innerText) +
      Number(document.getElementById("price3").innerText) +
      Number(document.getElementById("price4").innerText);
    var y = Number(s);

    document.getElementById("display").innerText = y;
  } else {
    alert("Please enter the quantity");
  }

  // console.log(count);
}
function changeImage() {
  var logo = document.getElementById("pop");
  var container = document.querySelector(".container");
  var cancel = document.getElementById("cancel");
  var im = document.querySelectorAll(".overlay"); // add . to select by class
  im.forEach(function (el) {
    el.style.display = "block";
  });
  logo.style.display = "block";
  cancel.style.display = "block";
}
function cancel() {
  var logo = document.getElementById("pop");
  var container = document.querySelector(".container");
  var cancel = document.getElementById("cancel");
  var im = document.querySelectorAll(".overlay"); // add . to select by class
  im.forEach(function (el) {
    el.style.display = "none";
  });
  logo.style.display = "none";
  container.style.display = "flex";
  cancel.style.display = "none";
}
function cl() {
  document.querySelector(".coloumn2").style.display = "inline";
  var v = (document.getElementById("price").textContent = "");
  var v1 = (document.getElementById("price1").textContent = "");
  var v2 = (document.getElementById("price2").textContent = "");
  var v3 = (document.getElementById("price3").textContent = "");
  var v4 = (document.getElementById("price4").textContent = "");
  var v5 = (document.getElementById("display").textContent = "0");
  document.getElementById("quantity").value = " ";
  document.getElementById("quantity1").value = " ";
  document.getElementById("quantity2").value = " ";
  document.getElementById("quantity3").value = " ";
  document.getElementById("quantity4").value = " ";

  v.style.display = "none";
  v1.style.display = "none";
  v2.style.display = "none";
  v3.style.display = "none";
  v4.style.display = "none";
  v5.style.value = "0";
}

