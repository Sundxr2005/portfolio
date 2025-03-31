window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    
    document.querySelectorAll('.service-card, .experience-item, .work-item, .testimonial').forEach((el) => {
        let elementPosition = el.getBoundingClientRect().top;
        if (elementPosition - window.innerHeight < -50) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        const navbar = document.querySelector(".navbar");
        const body = document.body;
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            body.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
            body.classList.remove("scrolled");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");

    function animateProgressBars() {
        progressBars.forEach((bar) => {
            const progressValue = bar.getAttribute("data-progress");
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                bar.style.width = progressValue + "%";
            }
        });
    }

    window.addEventListener("scroll", animateProgressBars);
    animateProgressBars(); // Run initially in case section is already in view
});
document.addEventListener("mousemove", function (event) {
    const heroImage = document.querySelector(".hero-image img");

    // Get the center of the screen
    const xAxis = (window.innerWidth / 2 - event.clientX) / 75;
    const yAxis = (window.innerHeight / 2 - event.clientY) / 75;

    // Apply transformation
    heroImage.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
});
document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        timelineItems.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible"); // Disappears when scrolling up
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-section");
    const text1 = document.querySelector(".about-text");
    const text2 = document.querySelector(".about-text1");

    const textContent1 = "I’m Jebarson, a passionate Cybersecurity Enthusiast with a strong focus on Bug Hunting and Vulnerability Assessment. My journey in cybersecurity began in early 2020, driven by a keen interest in tackling the growing digital security challenges.";
    const textContent2 = "Currently, in my second year of pursuing a B.Tech in Cyber Security at SRM IST, I’ve had the privilege of applying my skills to help secure numerous high-profile organizations, strengthening their digital defenses against emerging threats.";

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("active");
                aboutSection.classList.remove("inactive");
                text1.innerHTML = textContent1;
                text2.innerHTML = textContent2;
            } else {
                aboutSection.classList.remove("active");
                aboutSection.classList.add("inactive");
                text1.innerHTML = "";
                text2.innerHTML = "";
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aboutSection);
});
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".count");
    const hofCards = document.querySelectorAll(".hof-card");

    function animateCounts(counter) {
        let count = 0;
        const target = +counter.getAttribute("data-target");
        const duration = 1500; // Total animation duration in ms (1.5s)
        const startTime = performance.now();

        function updateCount(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            count = Math.floor(progress * target);
            counter.innerText = count;

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + "+"; // Final value with '+'
            }
        }

        requestAnimationFrame(updateCount);
    }

    function checkScroll() {
        hofCards.forEach((card, index) => {
            const sectionTop = card.getBoundingClientRect().top;
            const sectionBottom = card.getBoundingClientRect().bottom;

            if (sectionTop < window.innerHeight * 0.85 && sectionBottom > 0) {
                if (!card.classList.contains("visible")) {
                    card.classList.add("visible");
                    animateCounts(counters[index]);
                }
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run initially in case already in view
});
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.cursor = "url('customcursor.cur'), auto";

    document.querySelectorAll("a, button").forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.style.cursor = "url('pointercursor.cur'), pointer";
        });

        element.addEventListener("mouseleave", () => {
            element.style.cursor = "url('customcursor.cur'), auto";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const achievementCards = document.querySelectorAll(".achievement-card");

    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("data-category");

            achievementCards.forEach((card) => {
                if (category === "all" || card.getAttribute("data-category") === category) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });
});
ddocument.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const achievementCards = document.querySelectorAll(".achievement-card");
    const filterIndicator = document.querySelector(".filter-indicator");

    function moveIndicator(button) {
        const buttonRect = button.getBoundingClientRect();
        const parentRect = button.parentElement.getBoundingClientRect();
        filterIndicator.style.width = `${buttonRect.width}px`;
        filterIndicator.style.transform = `translateX(${buttonRect.left - parentRect.left}px)`;
    }

    filterButtons.forEach((button) => {
        // Click event for filtering
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            moveIndicator(this);

            const category = this.getAttribute("data-category");
            achievementCards.forEach((card) => {
                if (category === "all" || card.getAttribute("data-category") === category) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });

        // Hover effect - Move indicator
        button.addEventListener("mouseenter", function () {
            moveIndicator(this);
        });

        // Reset to active button when leaving the navigation area
        button.addEventListener("mouseleave", function () {
            const activeButton = document.querySelector(".filter-btn.active");
            if (activeButton) moveIndicator(activeButton);
        });

        // Initial position
        if (button.classList.contains("active")) {
            moveIndicator(button);
        }
    });

    window.addEventListener("resize", () => {
        const activeButton = document.querySelector(".filter-btn.active");
        if (activeButton) moveIndicator(activeButton);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const achievementCards = document.querySelectorAll(".achievement-card");
    const achievementsContainer = document.querySelector(".achievements-container");

    function filterAchievements(category) {
        const visibleCards = [];
        let delay = 0;

        achievementCards.forEach((card) => {
            if (category === "all" || card.getAttribute("data-category") === category) {
                visibleCards.push(card);
            }
        });

        // Calculate container dimensions
        const containerWidth = achievementsContainer.offsetWidth;
        const containerHeight = achievementsContainer.offsetHeight;

        // Animate cards into new random positions smoothly
        visibleCards.forEach((card, index) => {
            setTimeout(() => {
                const randomX = Math.random() * (containerWidth - card.offsetWidth);
                const randomY = Math.random() * (containerHeight - card.offsetHeight);

                card.style.opacity = "1";
                card.style.transform = `translate(${randomX}px, ${randomY}px) scale(1)`;
                card.style.pointerEvents = "auto";
                card.style.position = "absolute";
                card.style.transition = "all 0.5s ease";
            }, delay);

            delay += 100; // Slight delay to create a staggered effect
        });

        // Hide non-matching cards with smooth transition
        achievementCards.forEach((card) => {
            if (!visibleCards.includes(card)) {
                card.style.opacity = "0";
                card.style.transform = "scale(0.9)";
                card.style.pointerEvents = "none";
                card.style.position = "absolute";
                card.style.transition = "all 0.5s ease";
            }
        });
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("data-category");
            filterAchievements(category);
        });
    });

    // Initialize with all achievements visible
    filterAchievements("all");
});
const testimonials = [
    {
      name: "John Doe",
      photo: "path/to/john.jpg",
      text: "This portfolio is absolutely stunning! The attention to detail is impressive."
    },
    {
      name: "Jane Smith",
      photo: "path/to/jane.jpg",
      text: "I'm blown away by the creativity showcased in this portfolio. Truly inspiring work!"
    },
    {
      name: "Mike Johnson",
      photo: "path/to/mike.jpg",
      text: "The projects displayed here demonstrate a high level of skill and professionalism."
    },
    // Add more testimonials as needed
  ];
  
  const stack = document.querySelector('.testimonial-stack');
  let activeIndex = -1;
  
  function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.classList.add('testimonial-card');
    card.innerHTML = `
      <img src="${testimonial.photo}" alt="${testimonial.name}">
      <h3>${testimonial.name}</h3>
      <p>${testimonial.text}</p>
    `;
    return card;
  }
  
  function showNextTestimonial() {
    if (activeIndex >= 0) {
      stack.children[activeIndex].classList.remove('active');
    }
    activeIndex = (activeIndex + 1) % testimonials.length;
    const nextCard = createTestimonialCard(testimonials[activeIndex]);
    stack.appendChild(nextCard);
    setTimeout(() => {
      nextCard.classList.add('active');
    }, 10);
  
    if (stack.children.length > testimonials.length) {
      stack.removeChild(stack.children[0]);
    }
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  shuffleArray(testimonials);
  setInterval(showNextTestimonial, 5000);
  showNextTestimonial();
  