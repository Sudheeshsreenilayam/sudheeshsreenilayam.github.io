document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('nav');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu on link click
    const navLinksList = document.querySelectorAll('nav a');
    navLinksList.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Active Nav Link on Scroll & Scroll Reveal
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  const reveals = document.querySelectorAll('.scroll-reveal');

  const scrollHandler = () => {
    let current = '';
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current) && current !== '') {
        link.classList.add('active');
      }
    });

    // Scroll Reveal trigger
    reveals.forEach(reveal => {
      const elementTop = reveal.getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < window.innerHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', scrollHandler);
  scrollHandler(); // run once on load

  // Stats Count-Up Animation
  const stats = document.querySelectorAll('.stat-number');
  let animatedStats = false;

  const countUp = () => {
    if (animatedStats) return;
    
    // Check if stats are in view
    const statsSec = document.querySelector('.stats-section');
    if (!statsSec) return;
    
    const rect = statsSec.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom >= 0;
    
    if (inView) {
      animatedStats = true;
      stats.forEach(stat => {
        const target = parseFloat(stat.getAttribute('data-target'));
        const isDecimal = stat.getAttribute('data-decimal') === 'true';
        let count = 0;
        const speed = 100; // lower is faster
        const increment = target / speed;

        const updateCount = () => {
          count += increment;
          if (count < target) {
            if (isDecimal) {
              // Convert 397 target to 3.97 output style
              const formattedVal = (count / 100).toFixed(2);
              stat.innerText = formattedVal;
            } else {
              stat.innerText = Math.floor(count) + '+';
            }
            setTimeout(updateCount, 10);
          } else {
            if (isDecimal) {
              stat.innerText = (target / 100).toFixed(2);
            } else {
              stat.innerText = target + '+';
            }
          }
        };
        updateCount();
      });
    }
  };

  window.addEventListener('scroll', countUp);
  countUp(); // run once on load

  // Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active to clicked button
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hide');
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
});
