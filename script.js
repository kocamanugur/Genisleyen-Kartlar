let panels = document.querySelectorAll(".panel");
let count = 0;

function toggleImage() {
    panels.forEach((item) => item.classList.remove("active"));
    this.classList.toggle("active");
    count++;
    if (count % 2 == 0) {
    this.classList.toggle("active");
    }
}

panels.forEach((item) => item.addEventListener("click", toggleImage));
