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

function initResponsiveNav() {
  const mobileBreakpoint = 850;
  const hamburgerIcon = '&#9776;';
  const closeIcon = '&times;';
  const navs = document.querySelectorAll('nav');

  navs.forEach((nav, index) => {
    const navList = nav.querySelector('ul');
    if (!navList) return;

    nav.classList.add('has-mobile-nav');
    nav.classList.remove('is-open');

    const toggleButton = document.createElement('button');
    const navId = navList.id || `nav-menu-${index + 1}`;
    navList.id = navId;

    toggleButton.type = 'button';
    toggleButton.className = 'nav-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle navigation menu');
    toggleButton.setAttribute('aria-controls', navId);
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.innerHTML = `<span aria-hidden="true">${hamburgerIcon}</span>`;

    const setToggleState = (isOpen) => {
      nav.classList.toggle('is-open', isOpen);
      toggleButton.setAttribute('aria-expanded', String(isOpen));
      toggleButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      toggleButton.innerHTML = `<span aria-hidden="true">${isOpen ? closeIcon : hamburgerIcon}</span>`;
    };

    toggleButton.addEventListener('click', () => {
      const isOpen = !nav.classList.contains('is-open');
      setToggleState(isOpen);
    });

    nav.append(toggleButton);

    navList.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= mobileBreakpoint) {
          setToggleState(false);
        }
      });
    });

    const handleResize = () => {
      if (window.innerWidth > mobileBreakpoint) {
        setToggleState(false);
      }
    };

    window.addEventListener('resize', handleResize);

    setToggleState(false);
  });
}

initResponsiveNav();