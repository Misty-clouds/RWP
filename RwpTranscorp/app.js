//get the element 
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const faqHeaders = document.querySelectorAll('.faq-header');
  const cardWrap = document.getElementById('card-wrap');
  const scrollLeftBtn = document.getElementById('scroll-left');
  const scrollRightBtn = document.getElementById('scroll-right');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });


 

faqHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const faqItem = header.parentElement;

    faqItem.classList.toggle('active');

    const toggleIcon = faqItem.querySelector('.faq-toggle');
    if (faqItem.classList.contains('active')) {
      toggleIcon.textContent = '-';
    } else {
      toggleIcon.textContent = '+';
    }

    const otherFaqItems = document.querySelectorAll('.faq-item');
    otherFaqItems.forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
        item.querySelector('.faq-toggle').textContent = '+';
      }
    });
  });
});


 // Scroll to the left when the left arrow button is clicked
 scrollLeftBtn.addEventListener('click', function () {
    cardWrap.scrollBy({
      left: -350, 
      behavior: 'smooth'
    });
  });

  // Scroll to the right when the right arrow button is clicked
  scrollRightBtn.addEventListener('click', function () {
    cardWrap.scrollBy({
      left: 350, 
      behavior: 'smooth' 
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector('.about-article');
    const purpleElements = document.querySelectorAll('.big-purple svg, .small-purple svg, .about-triangle svg');
    const bowElement = document.querySelector('.bow');
    const whiteTruckElement = document.querySelector('.white-truck');
    
    // Observer options
    const options = {
      root: null, // viewport
      threshold: 0.2, // trigger when 20% of the section is visible
    };

    // Callback function for the observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the animate class to trigger text animations
          aboutSection.classList.add('animate');

          // Trigger zoomIn animation for SVG elements
          purpleElements.forEach((el, index) => {
            el.style.animation = `zoomIn 1.2s ease-in-out ${index * 0.2}s forwards`;
          });

          // Trigger slide-in animation for bow and white-truck
          bowElement.classList.add('animate');
          whiteTruckElement.classList.add('animate');

          // Stop observing after the animation starts
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Start observing the "About" section
    observer.observe(aboutSection);
  });


  window.addEventListener('scroll', function() {
    var serviceIntro = document.querySelector('.service-intro');
    var position = serviceIntro.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;
  
    if (position < screenPosition) {
      serviceIntro.classList.add('animate');
    }
  });
  
  window.addEventListener('scroll', function() {
    var cardWrap = document.getElementById('card-wrap');
    var position = cardWrap.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;
  
    if (position < screenPosition) {
      var cards = document.querySelectorAll('.service-card');
      cards.forEach(function(card) {
        card.classList.add('animate');
      });
    }
  });
  
  window.addEventListener('scroll', function() {
    var targetElement = document.querySelector('.a3'); // Select the element with class 'a3'
    var position = targetElement.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;

    if (position < screenPosition) {
        targetElement.classList.add('animate'); // Add the 'animate' class
    }
});


window.addEventListener('scroll', function() {
    var imageElement = document.querySelector('.g3'); // Select the element with class 'g3'
    var position = imageElement.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;

    if (position < screenPosition) {
        imageElement.classList.add('animate');
    }
});


window.addEventListener('scroll', function() {
  var introNew = document.querySelector('.intro-new'); // Select the element with class 'intro-new'
  var position = introNew.getBoundingClientRect().top;
  var fleetNow = window.innerHeight / 1.5; // Correctly defined variable

  // Check if the section has reached the viewable area
  if (position < fleetNow) {
      introNew.classList.add('animate');
  }
});

window.addEventListener('scroll', function() {
  var ogElement = document.querySelector('#og'); // Select the element with id 'og'
  var position = ogElement.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5; // Trigger the animation when the element is in view

  if (position < screenPosition) {
      ogElement.classList.add('animate');
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const testimonialSection = document.querySelector('.testimonial');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              testimonialSection.classList.add('animate');
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  observer.observe(testimonialSection);
});

document.addEventListener('DOMContentLoaded', function() {
  const faqSection = document.querySelector('.faq-section');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              faqSection.classList.add('visible'); // Add visible class when in view
              observer.unobserve(faqSection); // Stop observing after it has been animated
          }
      });
  });

  observer.observe(faqSection); // Start observing the FAQ section
});
