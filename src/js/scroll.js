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
  });