document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero");
    const heroHeight = heroSection.clientHeight;

    window.addEventListener("scroll", () => {
        const header = document.querySelector(".header");
        if (window.scrollY > heroHeight) {
            header.classList.add("header--is-active");
        } else {
            header.classList.remove("header--is-active");
        }
    });
});
