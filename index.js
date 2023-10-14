document.addEventListener("DOMContentLoaded", function() {
    const catchMeDiv = document.getElementById("catch-me-div");

    catchMeDiv.addEventListener("mouseover", function() {
        moveDivRandomly();
    });

    function moveDivRandomly() {
        const maxX = window.innerWidth - catchMeDiv.offsetWidth;
        const maxY = window.innerHeight - catchMeDiv.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        catchMeDiv.style.left = randomX + "px";
        catchMeDiv.style.top = randomY + "px";
    }
});