export default {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    portfolio: "Portfolio",
    contact: "Contact",
    blog: "Blog",
    other: "Other",
    quickNav: "Quick Navigation"
  },

  motto: "Light wave afterimages are but fleeting moments; dark vibrations endure infinitely.",

  Frontend__Developer: "Frontend Developer",
  profileText:
    "I'm a third-year university student passionate about frontend development, proficient in HTML, CSS, JavaScript, and Vue.js technologies. I've participated in multiple projects, possessing good coding abilities and a team spirit.",
  Skills: "Skills",
  Works: "Works",
  project1: "Personal Website",
  project1__description: "A website documenting personal growth",
  project2: "SmartCat Intelligence+",
  project2__description:
    "An all-in-one cat service app based on ResNet50 architecture and fine-tuned deepseek model",

  about: {
    About__Me: "About Me",
    self__introduction:
      "Hello! I'm a passionate frontend developer currently in my third year of university. I'm enthusiastic about transforming creative ideas into elegant code, focusing on creating intuitive and user-friendly web applications.\n\nIn terms of technology, I'm familiar with HTML, CSS, and JavaScript, and have solid development experience with the Vue.js framework. I'm adept at using modern development tools to ensure code quality and maintainability.\n\nBeyond technical skills, I also highly value teamwork. I believe good communication and a positive attitude are key to project success. During my university years, I've participated in several team projects, which gave me a deep understanding of the importance of collaborative development.\n\nI maintain a passion for learning, keeping up with the latest trends in frontend technology.",
    Educational__Experience: "Education Experience",
    content: "Chongqing University of Technology, Software Engineering, September 2022 - June 2026",
    major__course: {
      0: "Client Software Development Technology",
      1: "Frontend Framework Development Technology",
      2: "UI Design",
      3: "Big Data Visualization Technology",
      4: "Framework Programming",
      5: "Software Testing Technology",
      6: "Human-Computer Interaction Interface Technology",
      7: "Data Structures and Algorithms",
      8: "Web Programming",
      9: "Operating Systems",
      10: "Database Principles and Applications",
      11: "Object-Oriented Programming",
      12: "Fundamentals of Computer Science",
    },
    Hire__Me: "Hire Me",
    Project__Experience: "Projects",
    content2: "Personal Website Development",
    content3:"Team Project - SmartCat Intelligence+"
  },

  frontendExperience: {
    Experience: "Project Experience",
    experienceTags:{
      0: "Vue 3",
      1: "Vite",
      2: "Vue Router",
      3: "I18n",
      4: "SCSS",
      5: "Three.js",
      6: "Git",
      7: "Responsive Design",
    },
    title: "Personal Website Development Experience (Vue 3 + Vite)",
    spaDevelopment: {
      title: "Single Page Application Development (SPA)",
      content:
        "Built high-performance SPAs based on the Vue 3 framework, proficient in using Composition API and <script setup> syntax to improve code readability and development efficiency.",
    },
    i18nSupport: {
      title: "Internationalization Support (i18n)",
      content:
        "Integrated vue-i18n to implement multi-language switching between Chinese and English, centrally managing language packs and translation resources to enhance the application's global adaptability and user experience.",
    },
    responsiveAndComponents: {
      title: "Responsive Design and Component Development",
      content:
        "Implemented responsive layouts using SCSS to adapt to various screen sizes. Developed multiple reusable components to improve project modularity and maintainability:",
      components: {
        imageCardGallery: "ImageCardGallery: Image card gallery supporting infinite scrolling and drag-and-drop",
        profileCardAlt: "ProfileCardAlt: Profile card displaying personal information and skill tags",
        glowingWave: "GlowingWave: Visual component implementing dynamic glowing wave effects",
        threeScene: "ThreeScene: 3D model display component based on Three.js",
      },
    },
    routingAndState: {
      title: "Routing and State Management",
      content1: "Used vue-router to implement multi-page navigation (Home, About, Services, Contact).",
      content2: "Used ref and computed to manage component states, responding to user interaction changes.",
    },
    interaction: {
      title: "Interaction Experience Optimization",
      content:
        "Implemented various interaction methods such as drag-and-drop, mouse wheel scrolling, and touch swiping to enhance user engagement and operational smoothness.",
    },
    threeD: {
      title: "3D Graphics Rendering",
      content:
        "Loaded and rendered 3D models using Three.js, mastering WebGL fundamentals to enhance page visual presentation.",
    },
    performance: {
      title: "Performance Optimization Practices",
      content:
        "Optimized the first-screen loading speed of route components through lazy loading (import()) and improved page smoothness and user experience with CSS animations.",
    },
    tooling: {
      title: "Build and Development Toolchain",
      content:
        "Used Vite to quickly set up the development environment.",
    },
    versionControl: {
      title: "Version Control and Collaboration",
      content:
        "Used Git for code version management, following clear commit conventions and branching strategies to ensure project iteration stability.",
    },
  },


  smartCat:{
    projectTitle: "Team Project Experience",
    projectName: "SmartCat Intelligence+",
    projectDescription: "This software was developed in response to the continuously expanding pet market with a recovering trend, and the significant growth in cat ownership within this market. Addressing the lack of comprehensive service platforms specifically for cats, it's an all-in-one service application integrating AI vision models with the deepseek-R1 AI agent. It includes features such as community forums, cat pet stores, online vet consultations, AI doctor agents, pet hospital route planning, and cat breed identification.",
    
    
    
    techStack: {
      title: "Tech Stack",
      0: "Frontend Framework: Vue 3 (Composition API + Script Setup)",
      1: "UI Component Library: Vant",
      2: "Routing Management: Vue Router",
      3: "State Management: Pinia",
      4: "Backend Framework: SpringBoot",
      5: "Data Interaction: Axios (RESTful API)"
    },
    modules: {
      title: "Modules I'm Responsible For",
      0: {
        title: "AI Doctor",
        features: "Features: User-AI conversation",
        highlights: [
          "Deployed LLaMA-Factory fine-tuned deepseek-R1-1.5b on Alibaba Cloud PAI_DSW, with local deployment using Ollama",
          "Frontend page design implemented with Vue3, backend SpringBoot for saving user chats and retrieving chat history"
        ]
      },
      1: {
        title: "Pet Store",
        features: "Features: Product image/text display, specification selection, add to cart, buy now, address management, order management",
        highlights: [
          "Optimized page loading speed using onMounted and asynchronous loading",
          "Optimized DOM operations with nextTick"
        ]
      },
      2: {
        title: "Online Consultation Platform",
        features: "Features: Real-time chat between doctors and users, doctor list, message list, chat history",
        highlights: [
          "Implemented bidirectional instant communication between users and doctors using WebSocket",
          "Automatically scrolled to bottom to ensure users always see the latest messages"
        ]
      },
      3: {
        title: "Doctor Information Backend Management",
        features: "Features: CRUD operations for doctor information",
        highlights: [
          "Supported searching by doctor name, specialty, introduction, and other keywords",
          "Implemented doctor information editing through modal dialogs to avoid page navigation and improve interaction smoothness"
        ]
      },
      
    },
    highlights: {
      title: "Project Highlights",
      identification: "Cat Breed Identification Innovation: Combined ResNet50 with transfer learning, using mixed precision training, OneCycleLR scheduling, and multi-process loading to achieve 98% identification accuracy.",
      aiDoctor: "AI Doctor Knowledge Application: Based on the DeepSeek-R1-1.5B model, fine-tuned with LoRA and cleaned data, deployed with LLaMA-Factory and Ollama to improve the accuracy of cat-related Q&A.",
      onlineAsk: "Online Consultation Platform: One-click direct connection to pet doctors for face-to-face communication, improving consultation efficiency and ensuring timely treatment.",
      routePlan: "Route Planning Service: Integrated Baidu Maps API to provide pet hospital travel planning for emergency medical needs.",
      petStore: "Pet Store Platform: Covers pet cats and related products and insurance, providing a one-stop comprehensive shopping experience.",
      socialCat: "Cat Community Interaction: Supports UGC content sharing and online activities like photography contests, enhancing user interaction and community atmosphere."
    },
    contribution: {
      title: "Personal Contributions",
      points: [
        "Responsible for the AI Doctor module: Completed frontend page design, implemented user-AI chat functionality with Vue3, and used Spring Boot for chat record storage and history query.",
        "Fine-tuned the DeepSeek-R1-1.5B model with LLaMA-Factory on Alibaba Cloud PAI DSW and deployed/called it locally with Ollama.",
        "Independently developed the Pet Store module: Implemented product display, specification selection, shopping cart, order management, and optimized loading and interaction performance with onMounted and nextTick.",
        "Developed the Online Consultation Platform: Implemented real-time bidirectional communication between doctors and users via WebSocket and optimized message list scrolling experience.",
        "Completed the Doctor Backend Management module: Implemented CRUD operations for doctor information, supported keyword search, optimized editing experience with modal dialogs, and improved interaction efficiency."
      ]
    },
    
    result: {
      title: "Project Results",
      points: [
        "Project successfully launched with positive feedback",
        "Improved development efficiency and significantly increased code reusability",
        "Gained practical experience with Vue 3 projects"
      ]
    },
   
    keywords: {
      title: "Technical Keywords",
      list: "Vue 3, Composition API, Vant, SCSS, Vue Router, Pinia, Axios, RESTful API, Dynamic Routing, Modal Dialogs, Conditional Rendering, Asynchronous Loading"
    }
  },

  other:{
    title:"Simple Records",
    cq:"Chongqing Scenery",
  },

  contact: {
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    contactForm: "Contact Form",
  },

  footer: {
    webName: "My Website",
    webIntroduction:
      "An online space documenting personal growth, interests, and ideas, including technical notes, life essays, and project sharing.",
    webFollow: "Follow Me",
  },
};