document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Close mobile menu when a link is clicked
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Testimonial slider
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  let currentTestimonial = 0;
  let testimonialInterval;
  
  function showTestimonial(index) {
    // Hide all slides
    testimonialSlides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Show the selected slide
    testimonialSlides[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
  }
  
  // Auto-rotate testimonials
  function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
      let next = currentTestimonial + 1;
      if (next >= testimonialSlides.length) {
        next = 0;
      }
      showTestimonial(next);
    }, 5000);
  }
  
  // Add click event to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(testimonialInterval);
      showTestimonial(index);
      startTestimonialInterval();
    });
  });
  
  // Initialize testimonial slider
  if (testimonialSlides.length > 0) {
    showTestimonial(0);
    startTestimonialInterval();
  }
  
  // Updates slider navigation
  const updatesTrack = document.querySelector('.updates-track');
  const prevButton = document.querySelector('.slider-prev');
  const nextButton = document.querySelector('.slider-next');
  
  if (updatesTrack && prevButton && nextButton) {
    const postCards = updatesTrack.querySelectorAll('.post-card');
    const cardWidth = postCards.length > 0 ? postCards[0].offsetWidth + 32 : 0; // card width + gap
    
    prevButton.addEventListener('click', () => {
      updatesTrack.scrollBy({
        left: -cardWidth * 2,
        behavior: 'smooth'
      });
    });
    
    nextButton.addEventListener('click', () => {
      updatesTrack.scrollBy({
        left: cardWidth * 2,
        behavior: 'smooth'
      });
    });
  }
}); 