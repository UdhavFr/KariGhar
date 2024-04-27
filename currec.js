const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.rec').forEach((el) => observer.observe(el));

document.querySelectorAll('.footer-col').forEach((el) => observer.observe(el));