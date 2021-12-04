let button = document.querySelector(".btnn");
let main = document.querySelector("#main");
let popup = document.querySelector("#popup");
let icon = document.querySelector(".icon");

button.addEventListener("click", () => {
    main.style.display = "none";
    popup.style.display = "block";
});

icon.addEventListener("click", () => {
    popup.style.display = "none";
    main.style.display = "block";
});
