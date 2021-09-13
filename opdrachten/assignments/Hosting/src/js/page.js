window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);
    if (scroll < 680) {
        document.getElementById('page').innerHTML = "1"
    }
    if (scroll >= 680 && scroll < 1360) {
        document.getElementById('page').innerHTML = "2"
    }
 })