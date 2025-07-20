// Navigation functionality
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const navbar = document.getElementById("navbar")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Counter animation for stats
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-count"))
    const increment = target / 100
    let current = 0

    const updateCounter = () => {
      if (current < target) {
        current += increment
        counter.textContent = Math.ceil(current)
        setTimeout(updateCounter, 20)
      } else {
        counter.textContent = target
      }
    }

    updateCounter()
  })
}

// Skill bars animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress")

  skillBars.forEach((bar) => {
    const width = bar.getAttribute("data-width")
    bar.style.width = width + "%"
  })
}

// Language bars animation
function animateLanguageBars() {
  const languageBars = document.querySelectorAll(".language-progress")

  languageBars.forEach((bar) => {
    const width = bar.getAttribute("data-width")
    bar.style.width = width + "%"
  })
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aos-animate")

      // Trigger specific animations based on section
      if (entry.target.classList.contains("about-stats")) {
        animateCounters()
      }

      if (entry.target.classList.contains("skills")) {
        setTimeout(animateSkillBars, 500)
      }

      if (entry.target.classList.contains("languages-section")) {
        setTimeout(animateLanguageBars, 500)
      }
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  // Add AOS attributes to elements
  const elementsToAnimate = document.querySelectorAll(
    ".timeline-item, .skill-category, .education-card, .contact-item, .about-stats, .languages-section",
  )

  elementsToAnimate.forEach((el, index) => {
    el.setAttribute("data-aos", "fade-up")
    el.setAttribute("data-aos-delay", (index % 4) * 100)
    observer.observe(el)
  })

  // Observe sections for specific animations
  observer.observe(document.querySelector(".about-stats"))
  observer.observe(document.querySelector(".skills"))
  observer.observe(document.querySelector(".languages-section"))
})

// Typing animation for hero title - Fixed version
function typeWriter() {
  const fullText = "Hi, I'm Kurnia Zulda Matondang"
  const element = document.querySelector(".typing-text")

  if (!element) return

  let charIndex = 0
  let isDeleting = false
  let isPaused = false

  function type() {
    if (isPaused) {
      setTimeout(type, 2000) // Pause for 2 seconds when complete
      isPaused = false
      return
    }

    if (!isDeleting && charIndex < fullText.length) {
      // Typing forward
      element.textContent = fullText.substring(0, charIndex + 1)
      charIndex++
      setTimeout(type, 80) // Slower, more natural typing speed
    } else if (!isDeleting && charIndex === fullText.length) {
      // Finished typing, pause then start deleting
      isPaused = true
      setTimeout(() => {
        isDeleting = true
        type()
      }, 3000) // Wait 3 seconds before starting to delete
    } else if (isDeleting && charIndex > 0) {
      // Deleting backward
      element.textContent = fullText.substring(0, charIndex - 1)
      charIndex--
      setTimeout(type, 50) // Faster deletion
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, start typing again
      isDeleting = false
      setTimeout(type, 500) // Short pause before retyping
    }
  }

  // Start the animation
  type()
}

// Initialize typing animation when page loads
window.addEventListener("load", () => {
  typeWriter()
})

// Floating cards animation enhancement
document.addEventListener("DOMContentLoaded", () => {
  const floatingCards = document.querySelectorAll(".floating-card")

  floatingCards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.1) translateY(-10px)"
      card.style.transition = "all 0.3s ease"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1) translateY(0px)"
    })
  })
})

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset

  // Only apply parallax to hero background, not the entire section
  const heroBackground = document.querySelector(".hero::before")
  if (scrolled < window.innerHeight) {
    // Subtle parallax effect only when hero is visible
    const speed = scrolled * 0.2 // Reduced speed
    document.querySelector(".hero").style.transform = `translateY(${speed}px)`
  }

  // Navbar scroll effect (keep this)
  if (scrolled > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Add hover effects to timeline items
document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-content")

  timelineItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-5px)"
      item.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.15)"
      item.style.transition = "all 0.3s ease"
    })

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0)"
      item.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)"
    })
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Add scroll progress indicator
function createScrollProgress() {
  const progressBar = document.createElement("div")
  progressBar.className = "scroll-progress"
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        transition: width 0.1s ease;
    `
  document.body.appendChild(progressBar)

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset
    const docHeight = document.body.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    progressBar.style.width = scrollPercent + "%"
  })
}

// Initialize scroll progress
createScrollProgress()

// Add active navigation highlighting
function updateActiveNav() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active")
      }
    })
  })
}

// Initialize active navigation
updateActiveNav()

// Add CSS for active navigation
const style = document.createElement("style")
style.textContent = `
    .nav-link.active {
        color: #667eea !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        transition: width 0.1s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
`
document.head.appendChild(style)

// Projects data loading and modal functionality
async function loadProjects() {
  try {
    const response = await fetch("data/projects.json")
    const projects = await response.json()
    const projectsGrid = document.getElementById("projects-grid")

    projects.forEach((project) => {
      const projectCard = createProjectCard(project)
      projectsGrid.appendChild(projectCard)
    })
  } catch (error) {
    console.log("Projects data not found, using fallback")
    loadFallbackProjects()
  }
}

function createProjectCard(project) {
  const card = document.createElement("div")
  card.className = "project-card"
  card.setAttribute("data-aos", "fade-up")

  const techTags = project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")

  card.innerHTML = `
    ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-image">` : ""}
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tech">${techTags}</div>
      <div class="project-links">
        ${project.demo ? `<a href="${project.demo}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>` : ""}
        ${project.github ? `<a href="${project.github}" class="project-link" target="_blank"><i class="fab fa-github"></i> Code</a>` : ""}
        <a href="#" class="project-link view-details" data-project='${JSON.stringify(project)}'><i class="fas fa-info-circle"></i> Details</a>
      </div>
    </div>
  `

  return card
}

function loadFallbackProjects() {
  const fallbackProjects = [
    {
      title: "AI-Powered Customer Service Chatbot",
      description: "Scalable chatbot using LangChain and LangGraph for automated customer support.",
      technologies: ["Python", "LangChain", "LangGraph", "NLP"],
      category: "NLP",
      details:
        "Developed a comprehensive chatbot solution that can handle multiple customer queries simultaneously with high accuracy and contextual understanding.",
    },
    {
      title: "Indonesian Sentiment Analysis Model",
      description: "Advanced sentiment analysis specifically tailored for Indonesian language nuances.",
      technologies: ["Python", "TensorFlow", "BERT", "Transformers"],
      category: "NLP",
      details:
        "Created a robust sentiment analysis model that understands Indonesian language context, slang, and cultural nuances with 92% accuracy.",
    },
    {
      title: "OCR Container Number Detection",
      description: "Computer vision system for automatic container number extraction from images.",
      technologies: ["Python", "OpenCV", "TensorFlow", "OCR"],
      category: "Computer Vision",
      details: "Implemented an end-to-end OCR solution for logistics automation, reducing manual data entry by 85%.",
    },
  ]

  const projectsGrid = document.getElementById("projects-grid")
  fallbackProjects.forEach((project) => {
    const projectCard = createProjectCard(project)
    projectsGrid.appendChild(projectCard)
  })
}

// Modal functionality
function setupModal() {
  const modal = document.getElementById("project-modal")
  const closeBtn = document.querySelector(".close")

  // Close modal when clicking X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })

  // Close modal when clicking outside
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"
    }
  })

  // Handle project detail clicks
  document.addEventListener("click", (event) => {
    if (event.target.closest(".view-details")) {
      event.preventDefault()
      const projectData = JSON.parse(event.target.closest(".view-details").getAttribute("data-project"))
      showProjectModal(projectData)
    }
  })
}

function showProjectModal(project) {
  const modal = document.getElementById("project-modal")
  const modalBody = document.getElementById("modal-body")

  const techTags = project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")

  modalBody.innerHTML = `
    <h2>${project.title}</h2>
    ${project.image ? `<img src="${project.image}" alt="${project.title}" class="modal-project-image">` : ""}
    ${project.video ? `<video src="${project.video}" controls class="modal-project-video"></video>` : ""}
    <div class="project-tech" style="margin: 1rem 0;">${techTags}</div>
    <p><strong>Description:</strong> ${project.description}</p>
    ${project.details ? `<p><strong>Details:</strong> ${project.details}</p>` : ""}
    ${project.challenges ? `<p><strong>Challenges:</strong> ${project.challenges}</p>` : ""}
    ${project.results ? `<p><strong>Results:</strong> ${project.results}</p>` : ""}
    ${
      project.csvData
        ? `<div class="data-viz-container">
      <h4>Project Data:</h4>
      <div id="csv-visualization"></div>
    </div>`
        : ""
    }
    <div class="project-links" style="margin-top: 2rem;">
      ${project.demo ? `<a href="${project.demo}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ""}
      ${project.github ? `<a href="${project.github}" class="project-link" target="_blank"><i class="fab fa-github"></i> View Code</a>` : ""}
      ${project.documentation ? `<a href="${project.documentation}" class="project-link" target="_blank"><i class="fas fa-file-alt"></i> Documentation</a>` : ""}
    </div>
  `

  // Load CSV data if available
  if (project.csvData) {
    loadCSVData(project.csvData)
  }

  modal.style.display = "block"
}

// CSV data loading and visualization
async function loadCSVData(csvPath) {
  try {
    const response = await fetch(csvPath)
    const csvText = await response.text()
    const csvData = parseCSV(csvText)
    displayCSVTable(csvData)
  } catch (error) {
    console.log("CSV data not found:", error)
  }
}

function parseCSV(csvText) {
  const lines = csvText.split("\n")
  const headers = lines[0].split(",")
  const data = []

  for (let i = 1; i < lines.length && i < 11; i++) {
    // Limit to 10 rows for display
    if (lines[i].trim()) {
      const row = lines[i].split(",")
      data.push(row)
    }
  }

  return { headers, data }
}

function displayCSVTable(csvData) {
  const container = document.getElementById("csv-visualization")

  let tableHTML = '<table class="csv-table"><thead><tr>'
  csvData.headers.forEach((header) => {
    tableHTML += `<th>${header.trim()}</th>`
  })
  tableHTML += "</tr></thead><tbody>"

  csvData.data.forEach((row) => {
    tableHTML += "<tr>"
    row.forEach((cell) => {
      tableHTML += `<td>${cell.trim()}</td>`
    })
    tableHTML += "</tr>"
  })

  tableHTML += "</tbody></table>"
  container.innerHTML = tableHTML
}

// File upload handler for dynamic content
function setupFileHandlers() {
  // This can be extended to handle file uploads if needed
  console.log("File handlers initialized")
}

// Initialize new functionality
document.addEventListener("DOMContentLoaded", () => {
  loadProjects()
  setupModal()
  setupFileHandlers()
})
