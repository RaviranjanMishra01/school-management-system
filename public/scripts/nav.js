// Mobile Menu Functionality - FIXED
(function() {
  const menuToggle = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const backdrop = document.getElementById('backdrop-overlay');
  const closeBtn = document.getElementById('close-menu');
  const body = document.body;
  
  function openMobileMenu() {
    mobileOverlay.classList.add('open');
    backdrop.classList.add('active');
    menuToggle.classList.add('active');
    body.classList.add('menu-open');
  }
  
  function closeMobileMenu() {
    mobileOverlay.classList.remove('open');
    backdrop.classList.remove('active');
    menuToggle.classList.remove('active');
    body.classList.remove('menu-open');
  }
  
  // Toggle menu on hamburger click
  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileOverlay.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }
  
  // Close on backdrop click
  if (backdrop) {
    backdrop.addEventListener('click', closeMobileMenu);
  }
  
  // Close on close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileMenu);
  }
  
  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileOverlay.classList.contains('open')) {
      closeMobileMenu();
    }
  });
  
  // Handle mobile dropdowns (multiple options)
  const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
  mobileDropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.mobile-dropdown-toggle');
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Close other dropdowns
        mobileDropdowns.forEach(other => {
          if (other !== dropdown && other.classList.contains('active')) {
            other.classList.remove('active');
          }
        });
        
        dropdown.classList.toggle('active');
      });
    }
  });
  
  // Close mobile menu when clicking any link
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a:not(.mobile-dropdown-toggle)');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(closeMobileMenu, 150);
    });
  });
  
  // Close on window resize (if screen becomes desktop)
  window.addEventListener('resize', function() {
    if (window.innerWidth > 900 && mobileOverlay.classList.contains('open')) {
      closeMobileMenu();
    }
  });
  
  // Prevent dropdown toggle default behavior
  const dropToggles = document.querySelectorAll('.dropdown-toggle');
  dropToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (toggle.getAttribute('href') === '#') {
        e.preventDefault();
      }
    });
  });
  
  console.log('Navbar loaded - Hamburger menu fixed with multiple dropdown options');
})();