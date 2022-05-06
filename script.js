document.querySelectorAll(".hide").forEach((span) => {
    span.addEventListener("mouseenter", () => {
        span.classList.add("active");
    });
    span.addEventListener("mouseout", () => {
        span.classList.remove("active");
    });
});
document.querySelectorAll(".active-ful").forEach((span) => {
    span.addEventListener("click", () => {
        span.classList.toggle("active-full");
        console.log(span);
    });
});
document.querySelectorAll(".full").forEach((span) => {
    span.addEventListener("click", () => {
        span.classList.toggle("border");
        console.log(span);
    });
});
