var b = 0;
function pricevalue(a) {
  b = b + 1;
  if (a == 10) {
    var count1 = document.getElementById("quantity").value;
    console.log(count1);
    if (count1 > 0) {
      document.getElementById("price").innerText = a * count1;
    } else {
      alert("Please enter the quantity");
    }
  } else if (a == 20) {
    var count2 = document.getElementById("quantity1").value;
    console.log(count2);
    if (count2 > 0) {
      document.getElementById("price1").innerText = a * count2;
    } else {
      alert("Please enter the quantity");
    }
  } else if (a == 30) {
    var count3 = document.getElementById("quantity2").value;

    if (count3 > 0) {
      document.getElementById("price2").innerText = a * count3;
    } else {
      alert("Please enter the quantity");
    }
  } else if (a == 40) {
    var count4 = document.getElementById("quantity3").value;

    if (count4 > 0) {
      document.getElementById("price3").innerText = a * count4;
    } else {
      alert("Please enter the quantity");
    }
  } else {
    var count5 = document.getElementById("quantity4").value;

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
function clear() {
  var p1 = document.getElementById("price");
  var p2 = document.getElementById("price1");
  var p3 = document.getElementById("price2");
  var p4 = document.getElementById("price3");
  var p5 = document.getElementById("price4");
  p1.textContent = "";
  p2.innerText = "";
}
