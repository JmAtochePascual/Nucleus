
const sections = document.querySelectorAll('.section-animate');

const animationTrigger = (entries, observer) => {
  entries.forEach(entry => {

    const children = entry.target.querySelectorAll('[data-animation="animate"]');
    if (entry.isIntersecting) {
      children.forEach(child => child.classList.add('unset'));
      observer.unobserve(entry.target);
    }
  });
};

const options = { threshold: 0.25 }

const observer = new IntersectionObserver(animationTrigger, options);
sections.forEach(section => observer.observe(section));

