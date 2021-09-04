window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);
    if (scroll == 0) {
      document.getElementById("nav").style.backgroundColor =
        "rgba(0, 0, 0, 0)";
    } if (scroll != 0 && scroll < 350) {
      document.getElementById("nav").style.backgroundColor =
        "rgb(229, 127, 132)";
    }
    if (scroll >= 450) {
      document.getElementById("nav").style.backgroundColor =
        "rgb(66, 151, 160)";
    }
    if (scroll >= 480) {
      document.getElementById("btm-h2").style.animation = "opacity-fadeIn 300ms forwards";
      document.getElementById("btm-h1").style.animation = "opacity-fadeIn 300ms forwards";
    }
    if (scroll >= 650) {
      document.getElementById("wk-items").style.opacity = "1";
    }
  });