function animateElements() {
    const screenWidth = screen.width;

    let slideHeight = "32px";
    let languageMarginTop = "35px";
    let slideTranslateEnd = "1600px";
    let languageEndMargin = "20px";

    if (screenWidth >= 1920) {
        slideHeight = "44px";
        languageMarginTop = "48.125px";
    } else if (screenWidth <= 801) {
        slideHeight = "27px";
        languageMarginTop = "35px";
        slideTranslateEnd = "500px";
        languageEndMargin = "10px";
    }

    setTimeout(() => {
        document.querySelector(".slidecont").style.height = slideHeight;
        document.querySelector(".language").style.marginTop = languageMarginTop;
    }, 500);

    setTimeout(() => {
        document.querySelector(".slide").style.transform = "translateX(0px)";
    }, 1000);

    setTimeout(() => {
        document.querySelector(".slide").style.transform = `translateX(${slideTranslateEnd})`;
    }, 8000);

    setTimeout(() => {
        document.querySelector(".language").style.marginTop = languageEndMargin;
        document.querySelector(".slidecont").style.height = "0px";
        document.querySelector(".slide").style.display = "none";
    }, 8500);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    document.querySelectorAll('.tbh, .tbp, .tbi, .footer-col, .servicehead, .card').forEach((el) => observer.observe(el));
}

animateElements();
