console.log("script.js loaded");

let circles = document.querySelectorAll("circle");

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    circle.setAttribute("fill", `#${randomColor}`);
    //
  });
});
