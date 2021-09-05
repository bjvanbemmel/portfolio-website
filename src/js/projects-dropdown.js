function dropdown1() {
  if (active1 == 0) {
    document.getElementById("sub1").style.padding = "20px";
    document.getElementById("sub1").style.height = "auto";
    document.getElementById("sub1").style.opacity = "1";
    document.getElementById("src1").src = "https://cdn.bjvanbemmel.nl/launchpad-preview.mp4";
    active1++;
  } else {
    document.getElementById("sub1").style.padding = "0px";
    document.getElementById("sub1").style.height = "0px";
    document.getElementById("sub1").style.opacity = "0";
    document.getElementById("src1").src = "";

    active1 = 0;
  }
}