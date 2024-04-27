const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.footer-col, .aumain, .sustain, .goalhead, .goal9head, .goalpara, .goalimg').forEach(el => {
    observer.observe(el);
});
