// InersectionObserver Function
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});


// Target animated elements
const hiddenElemnents = document.querySelectorAll('.hidden');
hiddenElemnents.forEach(el => observer.observe(el));

const hiddenH2 = document.querySelectorAll('h2');
hiddenH2.forEach(el => observer.observe(el));