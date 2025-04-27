
// cloud in outdoor
document.addEventListener("scroll", function () {
    let clouds = document.querySelector(".clouds");
    let cloudsPosition = clouds.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;
    console.log(cloudsPosition, screenHeight);
    document.querySelectorAll(".cloud").forEach(cloud => {
        if (cloudsPosition < screenHeight - 100 && cloudsPosition > 0) {
            cloud.classList.add("animate");
        }
    });
});



// Navbar Scroll Effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("active");
    } else {
        backToTopBtn.classList.remove("active");
    }
});

backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
