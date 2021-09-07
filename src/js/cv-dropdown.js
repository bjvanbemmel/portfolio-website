function dropdown1() {
  if (active1 == 0) {
    document.getElementById("drop-img1").style.transform = "rotate(0deg)";
    document.getElementById("drop1").style.backgroundColor = "#e57f845e";
    document.getElementById("sub1").style.display = "block";
    active1++;
  } else {
    active1 = 0;
    document.getElementById("drop-img1").style.transform = "rotate(90deg)";
    document.getElementById("drop1").style.backgroundColor = "#e6e6e6";
    document.getElementById("sub1").style.display = "none";
  }
}

function dropdown2() {
  if (active2 == 0) {
    document.getElementById("drop-img2").style.transform = "rotate(0deg)";
    document.getElementById("drop2").style.backgroundColor = "#e57f845e";
    document.getElementById("sub2").style.display = "block";
    active2++;
  } else {
    active2 = 0;
    document.getElementById("drop-img2").style.transform = "rotate(90deg)";
    document.getElementById("drop2").style.backgroundColor = "#00000017";
    document.getElementById("sub2").style.display = "none";
  }
}

function dropdown3() {
  if (active3 == 0) {
    document.getElementById("drop-img3").style.transform = "rotate(0deg)";
    document.getElementById("drop3").style.backgroundColor = "#e57f845e";
    document.getElementById("sub3").style.display = "block";
    active3++;
  } else {
    active3 = 0;
    document.getElementById("drop-img3").style.transform = "rotate(90deg)";
    document.getElementById("drop3").style.backgroundColor = "#00000017";
    document.getElementById("sub3").style.display = "none";
  }
}

function dropdown4() {
  if (active4 == 0) {
    document.getElementById("drop-img4").style.transform = "rotate(0deg)";
    document.getElementById("drop4").style.backgroundColor = "#e57f845e";
    document.getElementById("sub4").style.display = "block";
    active4++;
  } else {
    active4 = 0;
    document.getElementById("drop-img4").style.transform = "rotate(90deg)";
    document.getElementById("drop4").style.backgroundColor = "#00000017";
    document.getElementById("sub4").style.display = "none";
  }
}

