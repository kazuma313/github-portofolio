// Data Storage - Embedded directly in JavaScript
const PROJECTS_DATA = [
  {
    id: 1,
    title: "AI-Powered Customer Service Chatbot",
    description:
      "Scalable chatbot using LangChain and LangGraph for automated customer support with multi-agent framework.",
    technologies: ["Python", "LangChain", "LangGraph", "FastAPI", "Vector Database"],
    category: "NLP",
    demo: "https://chatbot-demo.example.com",
    github: "https://github.com/kurniazulda/ai-chatbot",
    details:
      "Developed a comprehensive chatbot solution that can handle multiple customer queries simultaneously with high accuracy and contextual understanding. The system uses RAG (Retrieval-Augmented Generation) for improved response quality.",
    challenges:
      "Implementing multi-tenant vector database management and ensuring response consistency across different conversation contexts.",
    results:
      "",
  },
  {
    id: 2,
    title: "Indonesian Sentiment Analysis Model",
    description:
      "Advanced sentiment analysis specifically tailored for Indonesian language nuances and cultural context.",
    technologies: ["Python", "TensorFlow", "BERT", "Transformers", "Hugging Face"],
    category: "NLP",
    github: "https://github.com/kurniazulda/indonesian-sentiment",
    details:
      "Created a robust sentiment analysis model that understands Indonesian language context, slang, and cultural nuances. The model was trained on a diverse dataset of Indonesian social media posts, news articles, and customer reviews.",
    challenges:
      "Handling Indonesian language variations, regional dialects, and mixed language usage (Indonesian-English code-switching).",
    results:
      "",
  },
  {
    id: 3,
    title: "OCR Container Number Detection",
    description:
      "Computer vision system for automatic container number extraction from images in logistics operations.",
    technologies: ["Python", "OpenCV", "TensorFlow", "OCR", "NVIDIA Jetson"],
    category: "Computer Vision",
    github: "https://github.com/kurniazulda/ocr-container",
    details:
      "Implemented an end-to-end OCR solution for logistics automation, reducing manual data entry by 85%. The system works in real-time on edge devices and can handle various lighting conditions and container orientations.",
    challenges:
      "Dealing with varying image quality, different container number formats, and real-time processing constraints on edge devices.",
    results:
      "",
  },
  {
    id: 4,
    title: "House Vulnerability Classification",
    description: "Image classification system for assessing building structural vulnerability using computer vision.",
    technologies: ["Python", "PyTorch", "FastAPI", "Computer Vision"],
    category: "Computer Vision",
    details:
      "Developed a classification system that categorizes building structures into Confined Masonry, RC Infilled Masonry, Timber Structure, and Unconfined Masonry with high accuracy for disaster preparedness assessment.",
    results:
      "",
  },
  {
    id: 5,
    title: "Multi-Agent RAG Framework",
    description: "Blueprint design for a multi-agent AI framework with orchestration logic and system integrations.",
    technologies: ["Python", "LangGraph", "Vector Database", "Milvus", "FastAPI"],
    category: "AI Framework",
    details:
      "Designed and implemented a scalable multi-agent framework for complex AI workflows, featuring agent role definition, communication patterns, and system integrations for enterprise applications.",
    challenges:
      "Coordinating multiple AI agents, managing state consistency, and ensuring scalable performance across different use cases.",
    results:
      "",
  },
]

const BLOG_POSTS_DATA = [
  {
    id: 1,
    title: "Getting Started with Large Language Models: A Practical Guide",
    slug: "getting-started-with-llms",
    excerpt:
      "Explore the fundamentals of Large Language Models and learn how to implement them in real-world applications. This comprehensive guide covers everything from basic concepts to advanced techniques.",
    content: `# Getting Started with Large Language Models: A Practical Guide

Large Language Models (LLMs) have revolutionized the field of artificial intelligence, enabling unprecedented capabilities in natural language understanding and generation. In this comprehensive guide, we'll explore the fundamentals of LLMs and learn how to implement them in real-world applications.

## What are Large Language Models?

Large Language Models are neural networks trained on vast amounts of text data to understand and generate human-like text. These models, such as GPT-4, BERT, and T5, have billions of parameters and can perform a wide variety of language tasks.

### Key Characteristics:
- **Scale**: Billions to trillions of parameters
- **Versatility**: Can handle multiple NLP tasks
- **Context Understanding**: Maintain context over long conversations
- **Few-shot Learning**: Learn new tasks with minimal examples

## Popular LLM Architectures

### 1. Transformer Architecture
The foundation of most modern LLMs, introduced in the paper 'Attention Is All You Need'.

### 2. GPT (Generative Pre-trained Transformer)
Designed for text generation and completion tasks.

### 3. BERT (Bidirectional Encoder Representations from Transformers)
Excellent for understanding context and classification tasks.

## Best Practices

1. **Choose the Right Model**: Select models based on your specific use case
2. **Fine-tuning**: Adapt pre-trained models to your domain
3. **Prompt Engineering**: Craft effective prompts for better results
4. **Resource Management**: Consider computational requirements

## Real-World Applications

- **Chatbots and Virtual Assistants**
- **Content Generation**
- **Code Completion**
- **Language Translation**
- **Sentiment Analysis**

## Challenges and Considerations

- **Computational Cost**: LLMs require significant resources
- **Bias and Fairness**: Models can perpetuate training data biases
- **Hallucination**: Models may generate false information
- **Privacy**: Handling sensitive data appropriately

## Conclusion

Large Language Models represent a significant advancement in AI technology. By understanding their capabilities and limitations, developers can harness their power to create innovative applications that benefit users and society.

Stay tuned for more advanced tutorials on fine-tuning and deploying LLMs in production environments!`,
    author: "Kurnia Zulda Matondang",
    date: "2025-01-15",
    category: "AI",
    tags: ["LLM", "AI", "Machine Learning", "NLP", "Tutorial"],
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Building RAG Systems: From Theory to Production",
    slug: "building-rag-systems",
    excerpt:
      "Learn how to build Retrieval-Augmented Generation systems that combine the power of large language models with external knowledge bases for more accurate and contextual responses.",
    content: `# Building RAG Systems: From Theory to Production

Retrieval-Augmented Generation (RAG) has emerged as one of the most effective approaches to enhance Large Language Models with external knowledge. In this post, we'll explore how to build RAG systems from scratch and deploy them in production.

## What is RAG?

RAG combines the generative capabilities of LLMs with the precision of information retrieval systems. Instead of relying solely on the model's training data, RAG systems can access and utilize external knowledge bases in real-time.

### Key Components:
1. **Knowledge Base**: External documents or data sources
2. **Retrieval System**: Finds relevant information
3. **Generator**: LLM that produces responses using retrieved context

## Implementation Steps

### 1. Document Processing
Load and chunk your documents for optimal retrieval.

### 2. Vector Store Creation
Create embeddings and store them in a vector database.

### 3. Retrieval and Generation
Combine retrieved context with user queries for enhanced responses.

## Advanced Techniques

### Hybrid Search
Combining semantic and keyword search for better retrieval.

### Re-ranking
Improving retrieval quality with re-ranking models.

## Production Considerations

### 1. Scalability
- Use distributed vector databases
- Implement caching strategies
- Optimize embedding models

### 2. Monitoring
- Track retrieval accuracy
- Monitor response quality
- Log user interactions

### 3. Security
- Implement access controls
- Sanitize inputs
- Protect sensitive information

## Conclusion

RAG systems represent a powerful approach to building knowledge-aware AI applications. By combining retrieval and generation, we can create systems that are both knowledgeable and contextually aware.

In the next post, we'll explore advanced RAG techniques including multi-modal RAG and graph-based retrieval systems.`,
    author: "Kurnia Zulda Matondang",
    date: "2025-01-10",
    category: "AI",
    tags: ["RAG", "LLM", "Vector Database", "LangChain", "Production"],
    readTime: "12 min read",
    featured: true,
  },
  {
    id: 3,
    title: "My Journey from Computer Science Student to AI Engineer",
    slug: "journey-to-ai-engineer",
    excerpt:
      "A personal reflection on my career journey, the challenges I faced, lessons learned, and advice for aspiring AI engineers looking to break into the field.",
    content: `# My Journey from Computer Science Student to AI Engineer

Four years ago, I was a computer science student at UIN Malang with a passion for technology but no clear direction. Today, I work as an AI Analyst at PT Icon Plus, building cutting-edge AI solutions. Here's my story and the lessons I've learned along the way.

## The Beginning: University Years

My journey started like many others - with curiosity and a lot of uncertainty. During my undergraduate studies in Informatics Engineering, I was exposed to various fields: web development, databases, algorithms, and eventually, artificial intelligence.

### The Spark
The moment that changed everything was during a machine learning course in my third year. We were tasked with building a simple image classifier, and seeing the model learn to recognize patterns felt like magic. That's when I knew I wanted to pursue AI.

### Early Challenges
- **Mathematical Foundation**: AI requires strong math skills - linear algebra, statistics, calculus
- **Programming Proficiency**: Moving from basic programming to complex ML implementations
- **Information Overload**: The field was evolving rapidly, making it hard to know what to focus on

## First Steps into AI

### Self-Learning Phase
I spent countless hours on online courses:
- **Andrew Ng's Machine Learning Course** (Coursera)
- **Fast.ai Practical Deep Learning**
- **Kaggle Learn** modules
- **YouTube tutorials** and research papers

### Building Projects
Theory without practice is useless. I started building projects, starting with simple classification tasks and gradually moving to more complex applications.

## The Bootcamp Experience

In 2023, I enrolled in the AI Bootcamp at Skill Academy Pro Ruang Guru. This was a game-changer:

### What I Learned
- **Structured Learning**: Proper curriculum covering fundamentals to advanced topics
- **Hands-on Projects**: Real-world applications and case studies
- **Industry Mentorship**: Guidance from experienced practitioners
- **Networking**: Connections with fellow AI enthusiasts

### The Excellence Award
Receiving the Excellence Award wasn't just recognition - it was validation that I was on the right path. It boosted my confidence and opened doors to opportunities.

## Breaking into the Industry

### First Job: Optimasi.ai (2023)
My first professional role as a Machine Learning Engineer was both exciting and terrifying.

**Key Projects:**
- Indonesian sentiment analysis models
- News article categorization systems
- Topic clustering algorithms
- RESTful APIs for ML model deployment

**Lessons Learned:**
- **Production vs. Research**: Real-world ML is different from academic projects
- **Data Quality**: 80% of the work is data cleaning and preprocessing
- **Business Impact**: Technical excellence means nothing without business value

## Key Lessons Learned

### 1. Continuous Learning is Essential
AI evolves rapidly. What's cutting-edge today might be obsolete tomorrow.

### 2. Build a Strong Foundation
Don't skip the fundamentals:
- **Mathematics**: Linear algebra, statistics, calculus
- **Programming**: Python, data structures, algorithms
- **ML Basics**: Supervised/unsupervised learning, evaluation metrics

### 3. Focus on Problem-Solving
Technology is just a tool. Focus on solving real problems.

### 4. Communication is Crucial
Technical skills alone aren't enough.

### 5. Build a Portfolio
Show, don't just tell.

## Advice for Aspiring AI Engineers

### For Students
1. **Start Early**: Don't wait until graduation
2. **Build Projects**: Theory + Practice = Understanding
3. **Join Communities**: Kaggle, GitHub, AI meetups
4. **Find Mentors**: Learn from experienced practitioners

### For Career Changers
1. **Leverage Your Domain Expertise**: Combine AI with your existing knowledge
2. **Take Structured Courses**: Bootcamps or formal programs
3. **Network Actively**: Attend conferences and meetups
4. **Be Patient**: Career transitions take time

## Final Thoughts

My journey from a confused computer science student to an AI engineer wasn't linear. There were setbacks, moments of doubt, and countless late nights debugging code. But every challenge was a learning opportunity.

If you're starting your AI journey, remember:
- **Progress over perfection**
- **Consistency over intensity**
- **Learning over knowing**

The field needs diverse perspectives and fresh ideas. Your unique background and experiences are assets, not obstacles.`,
    author: "Kurnia Zulda Matondang",
    date: "2025-01-05",
    category: "Career",
    tags: ["Career", "AI", "Personal Story", "Advice", "Journey"],
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Computer Vision for Edge Devices: Optimizing Models for NVIDIA Jetson",
    slug: "computer-vision-edge-devices",
    excerpt:
      "Learn how to optimize computer vision models for deployment on edge devices like NVIDIA Jetson. Covers model optimization, TensorRT acceleration, and real-world deployment strategies.",
    content: `# Computer Vision for Edge Devices: Optimizing Models for NVIDIA Jetson

Deploying computer vision models on edge devices presents unique challenges: limited computational resources, power constraints, and real-time performance requirements. In this post, I'll share my experience optimizing CV models for NVIDIA Jetson devices.

## Why Edge Computing for Computer Vision?

### Advantages
- **Low Latency**: No network round-trips
- **Privacy**: Data stays on device
- **Reliability**: Works without internet connectivity
- **Cost Efficiency**: Reduced cloud computing costs

### Challenges
- **Limited Resources**: CPU, GPU, memory constraints
- **Power Consumption**: Battery life considerations
- **Model Size**: Storage limitations
- **Heat Management**: Thermal throttling issues

## Model Optimization Strategies

### 1. Model Architecture Selection
Choose efficient architectures designed for mobile/edge deployment.

### 2. Quantization
Reduce model precision from FP32 to INT8.

### 3. Pruning
Remove unnecessary connections.

## TensorRT Optimization

TensorRT is NVIDIA's inference optimization library that can significantly improve performance on Jetson devices.

## Real-World Case Study: Container Number OCR

During my time at PT Indismart, I developed an OCR system for container number detection:

### Problem Statement
- **Task**: Extract container numbers from images in real-time
- **Environment**: Port logistics with varying lighting conditions
- **Constraints**: Must run on Jetson Xavier NX with <100ms latency

### Solution Architecture
The system consisted of two main components: text detection and text recognition, both optimized for edge deployment.

### Performance Results
- Inference Time: Reduced from 250ms to 85ms
- Model Size: Compressed from 45MB to 12MB
- Accuracy: Maintained 93.8% (slight drop from 94.2%)
- Power Consumption: Reduced from 18W to 12W

## Deployment Best Practices

### 1. Environment Setup
Proper setup of the Jetson development environment.

### 2. Monitoring and Logging
Track system performance metrics in production.

### 3. Error Handling and Recovery
Implement robust fallback mechanisms.

## Conclusion

Optimizing computer vision models for edge devices requires a holistic approach combining the right architecture, optimization techniques, hardware-specific optimizations, performance monitoring, and robust error handling.

The key is finding the right balance between accuracy, speed, and resource usage for your specific use case.`,
    author: "Kurnia Zulda Matondang",
    date: "2024-12-28",
    category: "Tutorial",
    tags: ["Computer Vision", "Edge AI", "NVIDIA Jetson", "TensorRT", "Optimization"],
    readTime: "15 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Understanding Transformer Architecture: The Foundation of Modern NLP",
    slug: "transformer-architecture-explained",
    excerpt:
      "Deep dive into the Transformer architecture that revolutionized NLP. Learn about attention mechanisms, positional encoding, and how to implement transformers from scratch.",
    content: `# Understanding Transformer Architecture: The Foundation of Modern NLP

The Transformer architecture, introduced in the groundbreaking paper "Attention Is All You Need" by Vaswani et al., revolutionized natural language processing and became the foundation for models like BERT, GPT, and T5.

## The Problem with Sequential Models

Before Transformers, NLP relied heavily on RNNs and LSTMs:

### Limitations of RNNs/LSTMs:
- **Sequential Processing**: Can't parallelize training
- **Long-range Dependencies**: Struggle with distant relationships
- **Vanishing Gradients**: Information loss over long sequences
- **Computational Inefficiency**: Slow training and inference

## The Transformer Solution

Transformers address these issues through:
- **Self-Attention**: Capture relationships between all positions
- **Parallelization**: Process all positions simultaneously
- **Positional Encoding**: Maintain sequence order information
- **Multi-Head Attention**: Learn different types of relationships

## Core Components

### 1. Self-Attention Mechanism
The heart of the Transformer is the self-attention mechanism that allows the model to weigh the importance of different words in a sequence.

### 2. Positional Encoding
Since Transformers don't have inherent sequence order, we add positional information.

### 3. Multi-Head Attention
Multiple attention heads allow the model to focus on different types of relationships simultaneously.

### 4. Feed-Forward Networks
Simple neural networks applied to each position separately.

## Training a Transformer

Training involves preparing data, defining the model architecture, and optimizing parameters through backpropagation.

## Advanced Concepts

### 1. Multi-Head Attention Visualization
Understanding what different attention heads learn.

### 2. Transformer Variants
Different architectures for different tasks (BERT for understanding, GPT for generation).

## Performance Optimization

### 1. Gradient Checkpointing
Save memory during training.

### 2. Mixed Precision Training
Use lower precision for faster training.

## Real-World Applications

### 1. Document Classification
Using transformers for text classification tasks.

### 2. Text Generation
Generating coherent text with transformer models.

## Conclusion

The Transformer architecture revolutionized NLP by eliminating sequential processing, capturing long-range dependencies through self-attention, providing interpretability through attention weights, and enabling transfer learning.

### Key Takeaways:
- **Self-attention** is the core innovation
- **Positional encoding** maintains sequence information
- **Layer normalization** and **residual connections** enable deep networks
- **Multi-head attention** captures different types of relationships

The Transformer architecture continues to evolve, but understanding these fundamentals is crucial for working with modern NLP models.`,
    author: "Kurnia Zulda Matondang",
    date: "2024-12-20",
    category: "Machine Learning",
    tags: ["Transformer", "NLP", "Attention", "Deep Learning", "PyTorch"],
    readTime: "18 min read",
    featured: true,
  },
]

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

// Theme Toggle Functionality
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle")
  const themeIcon = document.getElementById("theme-icon")
  const body = document.body

  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem("theme") || "light"

  // Apply the saved theme
  body.setAttribute("data-theme", currentTheme)
  updateThemeIcon(currentTheme)

  // Theme toggle click handler
  themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    // Apply new theme
    body.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    updateThemeIcon(newTheme)

    // Add a subtle animation effect
    themeToggle.style.transform = "scale(0.9)"
    setTimeout(() => {
      themeToggle.style.transform = "scale(1)"
    }, 150)
  })
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById("theme-icon")
  if (theme === "dark") {
    themeIcon.className = "fas fa-moon"
  } else {
    themeIcon.className = "fas fa-sun"
  }
}

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

// Enhanced Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("aos-animate")

      // Trigger specific animations based on section
      if (entry.target.classList.contains("about-stats")) {
        setTimeout(animateCounters, 300)
      }

      if (entry.target.classList.contains("skills")) {
        setTimeout(animateSkillBars, 500)
      }

      if (entry.target.classList.contains("languages-section")) {
        setTimeout(animateLanguageBars, 500)
      }

      // Optional: Stop observing after animation triggers (for performance)
      // observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Replace the existing initNameAnimation function with this new typing animation
function initTypingAnimation() {
  const typingElement = document.getElementById("typing-name")
  if (!typingElement) return

  const fullText = "Kurnia Zulda Matondang"
  let charIndex = 0
  let isDeleting = false
  let isPaused = false

  function typeWriter() {
    if (isPaused) {
      setTimeout(typeWriter, 2000) // Pause for 2 seconds when complete
      isPaused = false
      return
    }

    if (!isDeleting && charIndex < fullText.length) {
      // Typing forward
      typingElement.textContent = fullText.substring(0, charIndex + 1)
      charIndex++
      setTimeout(typeWriter, 100) // Typing speed
    } else if (!isDeleting && charIndex === fullText.length) {
      // Finished typing, pause then start deleting
      typingElement.classList.add("finished")
      isPaused = true
      setTimeout(() => {
        typingElement.classList.remove("finished")
        isDeleting = true
        typeWriter()
      }, 3000) // Show complete text for 3 seconds
    } else if (isDeleting && charIndex > 0) {
      // Deleting backward
      typingElement.textContent = fullText.substring(0, charIndex - 1)
      charIndex--
      setTimeout(typeWriter, 50) // Deleting speed (faster)
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, start typing again
      isDeleting = false
      setTimeout(typeWriter, 500) // Brief pause before retyping
    }
  }

  // Start the typing animation
  typeWriter()
}

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

// Add active navigation highlighting
function updateActiveNav() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
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

// Projects functionality
let allProjects = []
let currentProjectPage = 1
const projectsPerPage = 3

function loadProjects() {
  console.log("🔄 Loading projects...")

  // Use embedded data instead of fetching JSON
  allProjects = PROJECTS_DATA
  currentProjectPage = 1
  displayProjects()
  setupProjectPagination()
  console.log("✅ Projects loaded successfully!")
}

function displayProjects() {
  console.log("🎨 Displaying projects page:", currentProjectPage)

  const projectsGrid = document.getElementById("projects-grid")
  if (!projectsGrid) {
    console.error("❌ Projects grid element not found!")
    return
  }

  const startIndex = (currentProjectPage - 1) * projectsPerPage
  const endIndex = startIndex + projectsPerPage
  const projectsToShow = allProjects.slice(startIndex, endIndex)

  console.log(
    `📊 Showing projects ${startIndex + 1}-${Math.min(endIndex, allProjects.length)} of ${allProjects.length}`,
  )

  // Clear existing content
  projectsGrid.innerHTML = ""

  if (projectsToShow.length === 0) {
    projectsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
        <i class="fas fa-folder-open" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <h3>No projects found</h3>
        <p>Please check back later for updates.</p>
      </div>
    `
    return
  }

  // Add projects to grid with staggered animations
  projectsToShow.forEach((project, index) => {
    const projectCard = createProjectCard(project)
    projectCard.setAttribute("data-aos", "fade-up")
    projectCard.setAttribute("data-aos-delay", (index * 100).toString())
    projectsGrid.appendChild(projectCard)

    // Observe the new element for animations
    observer.observe(projectCard)
  })

  // Update pagination controls
  updateProjectPagination()

  console.log("✅ Projects displayed successfully!")
}

function createProjectCard(project) {
  const card = document.createElement("div")
  card.className = "project-card"

  const techTags = project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")

  card.innerHTML = `
    <div class="project-image-placeholder">
      <i class="fas fa-code"></i>
    </div>
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tech">${techTags}</div>
      <div class="project-links">
        ${project.demo ? `<a href="${project.demo}" class="project-link" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Demo</a>` : ""}
        ${project.github ? `<a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Code</a>` : ""}
        <a href="#" class="project-link view-details" data-project-id="${project.id}"><i class="fas fa-info-circle"></i> Details</a>
      </div>
    </div>
  `

  return card
}

function setupProjectPagination() {
  const totalPages = Math.ceil(allProjects.length / projectsPerPage)

  // Remove existing pagination if it exists
  const existingPagination = document.querySelector(".projects-pagination")
  if (existingPagination) {
    existingPagination.remove()
  }

  // Create pagination container
  const paginationContainer = document.createElement("div")
  paginationContainer.className = "projects-pagination"
  paginationContainer.innerHTML = `
    <div class="pagination-controls">
      <button id="prev-projects-btn" class="btn btn-secondary pagination-btn">
        <i class="fas fa-chevron-left"></i> Previous
      </button>
      <div class="pagination-info">
        <span id="projects-page-info">Page ${currentProjectPage} of ${totalPages}</span>
        <span class="pagination-count">(${allProjects.length} total projects)</span>
      </div>
      <button id="next-projects-btn" class="btn btn-secondary pagination-btn">
        Next <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  `

  // Insert pagination after projects grid
  const projectsSection = document.getElementById("projects-grid").parentNode
  projectsSection.appendChild(paginationContainer)

  // Add event listeners
  document.getElementById("prev-projects-btn").addEventListener("click", () => {
    if (currentProjectPage > 1) {
      currentProjectPage--
      displayProjects()
      scrollToProjects()
    }
  })

  document.getElementById("next-projects-btn").addEventListener("click", () => {
    if (currentProjectPage < totalPages) {
      currentProjectPage++
      displayProjects()
      scrollToProjects()
    }
  })

  updateProjectPagination()
}

function updateProjectPagination() {
  const totalPages = Math.ceil(allProjects.length / projectsPerPage)
  const prevBtn = document.getElementById("prev-projects-btn")
  const nextBtn = document.getElementById("next-projects-btn")
  const pageInfo = document.getElementById("projects-page-info")

  if (prevBtn) prevBtn.disabled = currentProjectPage === 1
  if (nextBtn) nextBtn.disabled = currentProjectPage === totalPages
  if (pageInfo) pageInfo.textContent = `Page ${currentProjectPage} of ${totalPages}`
}

function scrollToProjects() {
  const projectsSection = document.getElementById("projects")
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

function setupProjectModal() {
  const modal = document.getElementById("project-modal")
  const modalTitle = document.getElementById("modal-title")
  const modalBody = document.getElementById("modal-body")
  const closeBtn = document.querySelector(".close")

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none"
    })
  }

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"
    }
  })

  // Event listener for project details
  document.addEventListener("click", (event) => {
    if (event.target.closest(".view-details")) {
      event.preventDefault()
      const projectId = Number.parseInt(event.target.closest(".view-details").getAttribute("data-project-id"))
      const project = allProjects.find((p) => p.id === projectId)
      if (project) {
        showProjectModal(project)
      }
    }
  })
}

function showProjectModal(project) {
  const modal = document.getElementById("project-modal")
  const modalTitle = document.getElementById("modal-title")
  const modalBody = document.getElementById("modal-body")

  if (!modal || !modalTitle || !modalBody) return

  modalTitle.textContent = project.title

  // Build modal content
  let modalContent = ""

  // Technologies
  if (project.technologies) {
    modalContent += '<div class="modal-content-section">'
    modalContent += "<h3>Technologies Used</h3>"
    modalContent += '<div class="modal-tags">'
    project.technologies.forEach((tech) => {
      modalContent += `<span class="modal-tag">${tech}</span>`
    })
    modalContent += "</div></div>"
  }

  // Details
  if (project.details) {
    modalContent += `
      <div class="modal-content-section">
        <h3>Project Overview</h3>
        <p>${project.details}</p>
      </div>
    `
  }

  // Challenges
  if (project.challenges) {
    modalContent += `
      <div class="modal-content-section">
        <h3>Challenges & Solutions</h3>
        <p>${project.challenges}</p>
      </div>
    `
  }

  // Results
  if (project.results) {
    modalContent += `
      <div class="modal-content-section">
        <h3>Results & Impact</h3>
        <p>${project.results}</p>
      </div>
    `
  }

  // Links and resources
  modalContent += '<div class="modal-links">'
  if (project.demo) {
    modalContent += `<a href="${project.demo}" class="modal-link" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Live Demo</a>`
  }
  if (project.github) {
    modalContent += `<a href="${project.github}" class="modal-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Source Code</a>`
  }
  modalContent += "</div>"

  modalBody.innerHTML = modalContent
  modal.style.display = "block"
}

// Blog functionality
let allBlogPosts = []
let filteredBlogPosts = []
let currentBlogPage = 1
const blogPostsPerPage = 3
let currentCategory = "all"
let currentSearchTerm = ""

function loadBlogPosts() {
  console.log("🔄 Loading blog posts...")

  // Use embedded data instead of fetching JSON
  allBlogPosts = BLOG_POSTS_DATA
  filteredBlogPosts = [...allBlogPosts]
  currentBlogPage = 1
  displayBlogPosts()
  setupBlogControls()
  setupBlogPagination()
  console.log("✅ Blog posts loaded successfully!")
}

function displayBlogPosts() {
  console.log("🎨 Displaying blog posts page:", currentBlogPage)

  const blogGrid = document.getElementById("blog-grid")
  if (!blogGrid) {
    console.error("❌ Blog grid element not found!")
    return
  }

  const startIndex = (currentBlogPage - 1) * blogPostsPerPage
  const endIndex = startIndex + blogPostsPerPage
  const postsToShow = filteredBlogPosts.slice(startIndex, endIndex)

  console.log(
    `📊 Showing blog posts ${startIndex + 1}-${Math.min(endIndex, filteredBlogPosts.length)} of ${filteredBlogPosts.length}`,
  )

  // Clear existing content
  blogGrid.innerHTML = ""

  if (postsToShow.length === 0) {
    blogGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <h3>No blog posts found</h3>
        <p>Try adjusting your search or category filter.</p>
      </div>
    `
    return
  }

  // Add blog posts to grid with staggered animations
  postsToShow.forEach((post, index) => {
    const blogCard = createBlogCard(post)
    blogCard.setAttribute("data-aos", "fade-up")
    blogCard.setAttribute("data-aos-delay", (index * 100).toString())
    blogGrid.appendChild(blogCard)

    // Observe the new element for animations
    observer.observe(blogCard)
  })

  // Update pagination controls
  updateBlogPagination()

  console.log("✅ Blog posts displayed successfully!")
}

function createBlogCard(post) {
  const card = document.createElement("div")
  card.className = "blog-card"

  const tagTags = post.tags.map((tag) => `<span class="blog-tag">${tag}</span>`).join("")

  card.innerHTML = `
    <div class="blog-image-placeholder">
      <i class="fas fa-blog"></i>
    </div>
    <div class="blog-content">
      <div class="blog-meta">
        <span class="blog-date">
          <i class="fas fa-calendar"></i>
          ${formatDate(post.date)}
        </span>
        <span class="blog-read-time">
          <i class="fas fa-clock"></i>
          ${post.readTime}
        </span>
      </div>
      <div class="blog-category">${post.category}</div>
      <h3 class="blog-title">${post.title}</h3>
      <p class="blog-excerpt">${post.excerpt}</p>
      <div class="blog-tags">${tagTags}</div>
      <div class="blog-links">
        <a href="#" class="blog-link read-more" data-post-id="${post.id}">
          <i class="fas fa-book-open"></i> Read More
        </a>
      </div>
    </div>
  `

  return card
}

function setupBlogControls() {
  const searchInput = document.getElementById("blog-search")
  const categoryButtons = document.querySelectorAll(".category-btn")

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchTerm = e.target.value.toLowerCase()
      filterBlogPosts()
    })
  }

  // Category filtering
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      categoryButtons.forEach((b) => b.classList.remove("active"))
      // Add active class to clicked button
      btn.classList.add("active")

      currentCategory = btn.getAttribute("data-category")
      filterBlogPosts()
    })
  })
}

function filterBlogPosts() {
  filteredBlogPosts = allBlogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(currentSearchTerm) ||
      post.excerpt.toLowerCase().includes(currentSearchTerm) ||
      post.tags.some((tag) => tag.toLowerCase().includes(currentSearchTerm))

    const matchesCategory = currentCategory === "all" || post.category === currentCategory

    return matchesSearch && matchesCategory
  })

  currentBlogPage = 1
  displayBlogPosts()
  updateBlogPagination()
}

function setupBlogPagination() {
  const totalPages = Math.ceil(filteredBlogPosts.length / blogPostsPerPage)

  // Remove existing pagination if it exists
  const existingPagination = document.querySelector(".blog-pagination")
  if (existingPagination) {
    existingPagination.remove()
  }

  // Create pagination container
  const paginationContainer = document.createElement("div")
  paginationContainer.className = "blog-pagination"
  paginationContainer.innerHTML = `
    <div class="pagination-controls">
      <button id="prev-blog-btn" class="btn btn-secondary pagination-btn">
        <i class="fas fa-chevron-left"></i> Previous
      </button>
      <div class="pagination-info">
        <span id="blog-page-info">Page ${currentBlogPage} of ${totalPages}</span>
        <span class="pagination-count">(${filteredBlogPosts.length} total posts)</span>
      </div>
      <button id="next-blog-btn" class="btn btn-secondary pagination-btn">
        Next <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  `

  // Insert pagination after blog grid
  const blogSection = document.getElementById("blog-grid").parentNode
  blogSection.appendChild(paginationContainer)

  // Add event listeners
  document.getElementById("prev-blog-btn").addEventListener("click", () => {
    if (currentBlogPage > 1) {
      currentBlogPage--
      displayBlogPosts()
      scrollToBlog()
    }
  })

  document.getElementById("next-blog-btn").addEventListener("click", () => {
    if (currentBlogPage < totalPages) {
      currentBlogPage++
      displayBlogPosts()
      scrollToBlog()
    }
  })

  updateBlogPagination()
}

function updateBlogPagination() {
  const totalPages = Math.ceil(filteredBlogPosts.length / blogPostsPerPage)
  const prevBtn = document.getElementById("prev-blog-btn")
  const nextBtn = document.getElementById("next-blog-btn")
  const pageInfo = document.getElementById("blog-page-info")

  if (prevBtn) prevBtn.disabled = currentBlogPage === 1
  if (nextBtn) nextBtn.disabled = currentBlogPage === totalPages
  if (pageInfo) pageInfo.textContent = `Page ${currentBlogPage} of ${totalPages}`
}

function scrollToBlog() {
  const blogSection = document.getElementById("blog")
  if (blogSection) {
    blogSection.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

function setupBlogModal() {
  // Event listener for blog post reading
  document.addEventListener("click", (event) => {
    if (event.target.closest(".read-more")) {
      event.preventDefault()
      const postId = Number.parseInt(event.target.closest(".read-more").getAttribute("data-post-id"))
      const post = allBlogPosts.find((p) => p.id === postId)
      if (post) {
        showBlogModal(post)
      }
    }
  })
}

function showBlogModal(post) {
  let modal = document.getElementById("blog-modal")
  if (!modal) {
    modal = document.createElement("div")
    modal.id = "blog-modal"
    modal.className = "enhanced-modal"
    modal.innerHTML = `
      <div class="enhanced-modal-content">
        <div class="modal-header">
          <h2 id="blog-modal-title"></h2>
          <span class="enhanced-close">&times;</span>
        </div>
        <div class="enhanced-modal-body" id="blog-modal-body"></div>
      </div>
    `
    document.body.appendChild(modal)
  }

  const modalTitle = document.getElementById("blog-modal-title")
  const modalBody = document.getElementById("blog-modal-body")

  modalTitle.textContent = post.title

  // Build modal content
  let modalContent = ""

  // Meta information
  modalContent += `
    <div class="modal-content-section">
      <div class="blog-meta" style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
        <span><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
        <span><i class="fas fa-clock"></i> ${post.readTime}</span>
      </div>
      <div class="modal-tags">
        ${post.tags.map((tag) => `<span class="modal-tag">${tag}</span>`).join("")}
      </div>
    </div>
  `

  // Main content
  modalContent += `
    <div class="modal-content-section">
      <div class="blog-post-content">${parseMarkdown(post.content)}</div>
    </div>
  `

  modalBody.innerHTML = modalContent
  modal.style.display = "block"

  // Add event listeners
  const closeBtn = modal.querySelector(".enhanced-close")
  closeBtn.onclick = () => (modal.style.display = "none")

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none"
    }
  }
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function parseMarkdown(markdown) {
  return markdown
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
    .replace(/\*(.*)\*/gim, "<em>$1</em>")
    .replace(/```([\s\S]*?)```/gim, "<pre><code>$1</code></pre>")
    .replace(/`([^`]*)`/gim, "<code>$1</code>")
    .replace(/\n\n/gim, "</p><p>")
    .replace(/^- (.*$)/gim, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>")
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Initializing portfolio website...")

  // Initialize theme toggle
  initThemeToggle()

  // Initialize name animation
  initTypingAnimation()

  // Create scroll progress indicator
  createScrollProgress()

  // Setup active navigation highlighting
  updateActiveNav()

  // Setup intersection observer for animations
  const elementsToObserve = document.querySelectorAll(
    "[data-aos], .about-stats, .skills, .languages-section, .timeline-item, .skill-category, .education-card, .contact-item",
  )

  elementsToObserve.forEach((el) => {
    observer.observe(el)
  })

  // Load projects and blog posts
  loadProjects()
  loadBlogPosts()

  // Setup modals
  setupProjectModal()
  setupBlogModal()

  console.log("✅ Portfolio website initialized successfully!")
})

// Add some interactive enhancements
document.addEventListener("DOMContentLoaded", () => {
  // Add hover effects to cards
  const cards = document.querySelectorAll(".project-card, .blog-card, .info-card, .education-card, .contact-item")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
    })
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Add click ripple effect to buttons
  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `

      this.style.position = "relative"
      this.style.overflow = "hidden"
      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })

  // Add CSS for ripple animation
  const style = document.createElement("style")
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `
  document.head.appendChild(style)
})
