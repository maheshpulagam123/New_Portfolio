// Select all sections EXCEPT hero
const sections = document.querySelectorAll("section:not(.hero)");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15,
    }
);

// Observe each section
sections.forEach((section) => {
    observer.observe(section);
});
