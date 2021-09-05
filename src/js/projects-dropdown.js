function dropdown1() {
  if (active1 == 0) {
    document.getElementById("sub1").style.height = "500px";
    active1++;
  } else {
    document.getElementById("sub1").style.height = "0px";
    active1 = 0;
  }
}

function dropdown2() {
  if (active2 == 0) {
    document.getElementById("sub2").style.height = "500px";
    active2++;
  } else {
    document.getElementById("sub2").style.height = "0px";
    active2 = 0;
  }
}

function dropdown3() {
  if (active3 == 0) {
    document.getElementById("sub3").style.height = "500px";
    active3++;
  } else {
    document.getElementById("sub3").style.height = "0px";
    active3 = 0;
  }
}
