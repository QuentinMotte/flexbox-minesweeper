// REPLACE THE HOVER WITH CSS -----------------
// --------------------------------
document.querySelectorAll(".hide").forEach((span) => {
    span.addEventListener("mouseenter", () => {
        span.classList.add("active");
    });
    span.addEventListener("mouseout", () => {
        span.classList.remove("active");
    });
});
//
//Add a click event the boxes filled
document.querySelectorAll(".active-ful").forEach((span) => {
    span.addEventListener("click", () => {
        span.classList.toggle("active-full");
        console.log(span);
    });
});
//
//Remove the outset border for dotted border
document.querySelectorAll(".full").forEach((span) => {
    span.addEventListener("click", () => {
        span.classList.toggle("border");
        console.log(span);
    });
});
