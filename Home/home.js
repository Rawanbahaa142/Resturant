window.addEventListener("resize", function () {
    let element = document.querySelector(".image");

    if (window.innerWidth <= 980) {
        element.classList.remove("col"); 
        document.querySelector(".text").classList.remove("col");
    } else {
        element.classList.add("col");   
        document.querySelector(".text").classList.add("col");
    }
});

document.addEventListener("scroll", function () {
    let clouds = document.querySelector(".clouds");
    let cloudsPosition = clouds.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;
    console.log(cloudsPosition, screenHeight);
    document.querySelectorAll(".cloud").forEach(cloud => {
        if (cloudsPosition < screenHeight - 100 && cloudsPosition>0) {
            cloud.classList.add("animate");
        } else if (cloudsPosition > screenHeight && cloudsPosition<0 ) {

            cloud.classList.remove("animate");
        }
    });
});
