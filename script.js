document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Nav Toggle ---
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('nav');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    const navLinksList = document.querySelectorAll('nav a');
    navLinksList.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // --- Active Nav Link & Scroll Reveal ---
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

    reveals.forEach(reveal => {
      const elementTop = reveal.getBoundingClientRect().top;
      const elementVisible = 120;
      if (elementTop < window.innerHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', scrollHandler);
  scrollHandler();

  // --- Stats Count-Up Animation ---
  const stats = document.querySelectorAll('.stat-number');
  let animatedStats = false;

  const countUp = () => {
    if (animatedStats) return;
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
        const speed = 100;
        const increment = target / speed;

        const updateCount = () => {
          count += increment;
          if (count < target) {
            if (isDecimal) {
              stat.innerText = (count / 100).toFixed(2);
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
  countUp();

  // --- Project Filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
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

  // --- Cursor-Responsive Node Network Background (Canvas) ---
  const canvas = document.getElementById('canvas-bg');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    const count = 75; // Number of particles
    let mouse = { x: null, y: null, radius: 150 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 2 + 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Boundary checks
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Interaction with cursor (repelled slightly)
        if (mouse.x !== null && mouse.y !== null) {
          let dx = this.x - mouse.x;
          let dy = this.y - mouse.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            let force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 2;
            this.y += (dy / dist) * force * 2;
          }
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.4)';
        ctx.fill();
      }
    }

    const initParticles = () => {
      particlesArray = [];
      for (let i = 0; i < count; i++) {
        particlesArray.push(new Particle());
      }
    };
    initParticles();

    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          let dist = Math.sqrt(
            Math.pow(particlesArray[a].x - particlesArray[b].x, 2) +
            Math.pow(particlesArray[a].y - particlesArray[b].y, 2)
          );
          if (dist < 110) {
            let alpha = (1 - (dist / 110)) * 0.15;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }

        // Draw connections to mouse
        if (mouse.x !== null && mouse.y !== null) {
          let mouseDist = Math.sqrt(
            Math.pow(particlesArray[a].x - mouse.x, 2) +
            Math.pow(particlesArray[a].y - mouse.y, 2)
          );
          if (mouseDist < mouse.radius) {
            let alpha = (1 - (mouseDist / mouse.radius)) * 0.25;
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(p => {
        p.update();
        p.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    };
    animate();
  }

  // --- Interactive 3D Tilt Effect ---
  const tiltElements = document.querySelectorAll('.project-card, .stat-card, .highlight-card, .recommendation-card, .profile-photo-frame');

  tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position inside element
      const y = e.clientY - rect.top;  // y position inside element
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation angles (limit rotation to 12 degrees max)
      const rotateX = ((centerY - y) / centerY) * 12;
      const rotateY = ((x - centerX) / centerX) * 12;
      
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  // --- Scroll Parallax Effect ---
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    
    // Subtle shift on glows
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');
    const orb3 = document.querySelector('.orb-3');
    
    if (orb1) orb1.style.transform = `translate3d(0px, ${scrollPos * 0.15}px, 0px)`;
    if (orb2) orb2.style.transform = `translate3d(0px, ${-scrollPos * 0.1}px, 0px)`;
    if (orb3) orb3.style.transform = `translate3d(0px, ${scrollPos * 0.08}px, 0px)`;
  });

  // --- Theme Toggle (Default Light) ---
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
    });
  }
});
