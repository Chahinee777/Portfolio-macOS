const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  /* {
    id: 1,
    img: "/icons/wifi.svg",
  }, */
  {
    id: 2,
    img: "/icons/search.svg",
    type: "safari"
  },
  {
    id: 3,
    img: "/icons/music.svg",
    type: "music",
  },
  {
    id: 4,
    img: "/icons/user.svg",
    type: "finder",
    action: "about",
  },
  /* {
    id: 5,
    img: "/icons/mode.svg",
  }, */

];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.webp",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.webp",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.webp",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.webp",
    canOpen: true,
  },
  {
    id: "vscode",
    name: "VS Code",
    icon: "code2.webp",
    canOpen: true,
  },
  {
    id: "music",
    name: "Music", // was "Trash"
    icon: "music.webp",
    canOpen: true,
  },
  {
    id: "game",
    name: "Games",
    icon: "game.webp",
    canOpen: true,
  },
  {
    id: "trash", // unique id to avoid duplicate keys in Dock
    name: "Trash",
    icon: "trash.webp",
    canOpen: true,
    action: "trash",
  },
];

const blogPosts = [
  
  {
    id: 2,
    date: "July 5, 2025",
    title: "Mastering Frontend Performance: Speed Up Your Website",
    image: "/images/blog3.png",
    link: "#",
  },
  {
    id: 1,
    date: "June 10, 2025",
    title:"Developing Dynamic Web Experiences Using React",
    image: "/images/blog1.png",
    link: "#",
  },
  {
    id: 3,
    date: "May 20, 2025",
    title: "CSS Animations: Bringing Your Website to Life",
    image: "/images/blog2.png",
    link: "#",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["Angular", "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Java EE", "Laravel", "Symfony", ".NET"],
  },
  {
    category: "Languages",
    items: ["Java", "Python", "C", "Golang"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Xamarin"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Kubernetes", "CI/CD", "Git", "GitHub", "GitLab"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Chahinee777",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://linkedin.com/in/chahine-ouled-amor",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/wallpaperflare.com_wallpaper (2).jpg",
  },
  {
    id: 2,
    img: "/images/gal1.jpg",
  },
  {
    id: 3,
    img: "/images/gal2.jpg",
  }
];

const songs = [
  
  {
    id: 1,
    title: "I Really Want to Stay at Your House",
    author: "Rosa Walton (with Hallie Coggins)",
    src: "/audio/lucysong.mp3",
    cover: "/images/lucysong.jpg",
  },
  {
    id: 2,
    title: "City Ruins - Rays of Light",
    author: "NieR: Automata OST",
    src: "/audio/City Ruins - Rays of Light (NieR_Automata Original Soundtrack)Audio.mp3",
    cover: "/images/city.webp",
  },
  {
    id: 3,
    title: "Feel It",
    author: "D4vd",
    src: "/audio/feelit.mp3",
    cover: "/images/feelit.jpg",
  },
  {
    id: 4,
    title: "Ma Meilleure Ennemie",
    author: "Arcane OST",
    src: "/audio/arcane.mp3",
    cover: "/images/arcane.jpg",
  },
  {
    id: 5,
    title: "Fire Again",
    author: "VALORANT",
    src: "/audio/fireagain.mp3",
    cover: "/images/fireagain.jpg",
  },
  {
    id: 6,
    title: "Die For You",
    author: "VALORANT",
    src: "/audio/dieforyou.mp3",
    cover: "/images/dieforyou.jpg",
  },
  {
    id: 7,
    title: "Ticking Away",
    author: "VALORANT",
    src: "/audio/Ticking Away.mp3",
    cover: "/images/tickingAway.jpg",
  },
  {
    id: 8,
    title: "Be a flower",
    author: "Ryokuoushoku Shakai",
    src: "/audio/Be a flower.mp3",
    cover: "/images/maomao.jpg",
  },
  {
    id: 9,
    title: "Anytime Anywhere",
    author: "Milet",
    src: "/audio/Anytime Anywhere.mp3",
    cover: "/images/anytimeanywhere.jpg",
  },
  {
    id: 10,
    title: "MAGIC",
    author: "Ado",
    src: "/audio/ADO_magic.mp3",
    cover: "/images/magic.jpg",
  },
  {
    id: 11,
    title: "Idol",
    author: "YASOBI",
    src: "/audio/YASOBI_oshi_s1.mp3",
    cover: "/images/Oshi_i_s1.jpg",
  },
  {
    id: 12,
    title: "Test Me",
    author: "Chanmina",
    src: "/audio/oshi_s3.mp3",
    cover: "/images/Oshi_i_s3.jpg",
  },
  {
    id: 13,
    title: "Burning",
    author: "Hitsujibungaku",
    src: "/audio/oshi_s2.mp3",
    cover: "/images/Oshi_i_s2.jpg",
  },
  {
    id: 14,
    title: "The Path to Becoming a Hero",
    author: "ZZZ Miyabi's OST",
    src: "/audio/The Path to Becoming a Hero.mp3",
    cover: "/images/miyabi.jpg",
  },
  {
    id: 15,
    title: "Dandelion",
    author: "Go!go!vanillas",
    src: "/audio/Dandelion.mp3",
    cover: "/images/dandelion.jpg",
  },
  {
    id: 16,
    title: "Abunaikioku (feat. Aoi Koga)",
    author: "Masayuki Suzuki",
    src: "/audio/kaguya.mp3",
    cover: "/images/kaguya.jpg",
  },
  {
    id: 17,
    title: "Fukashigi no KARTE",
    author: "Mai Sakurajima (VA: Sami Seto)",
    src: "/audio/Fukashigi no KARTE_Mai Sakurajima_CVAsami Seto.mp3",
    cover: "/images/mai.jpg",
  },
  {
    id: 18,
    title: "Kiminosei",
    author: "The Peggies",
    src: "/audio/kiminosei_the peggies.mp3",
    cover: "/images/kimi.jpg",
  },  
  {
    id: 19,
    title: "RED and BLUE",
    author: "Kaguya Shinomiya (VA: Aoi Koga)",
    src: "/audio/kaguya2.mp3",
    cover: "/images/kaguya2.jpg",
  },
  
  {
    id: 20,
    title: "Voices of The Chord (feat. Greta G)",
    author: "Tom Dabrowski",
    src: "/audio/86.mp3",
    cover: "/images/86.jpg",
  },
  {
    id: 21,
    title: "Odoriko",
    author: "Vaundy",
    src: "/audio/odoriko.mp3",
    cover: "/images/odorika.jpg",
  },
  {
    id: 22,
    title: "Something Super Sweet",
    author: "Rory Webley",
    src: "/audio/something-super-sweet.mp3",
    cover: "/images/sweet.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
  songs,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [

    // ▶ Project 1 AstroHub
    {
      id: 1,
      name: "AstroHub",
      icon: "/images/folder.webp",
      kind: "folder",
      position: "top-45 right-80",
      windowPosition: "top-[10vh] left-15",
      children: [
        {
          id: 1,
          name: "AstroHub.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-60 right-70",
          description: [
            "AstroHub is a cloud-based platform for managing subscriptions and deployments with a modern microservices architecture.",
            "Built to handle complex subscription workflows, deployment management, and real-time monitoring across distributed systems.",
            "The platform delivers a scalable, reliable solution for managing cloud infrastructure with an intuitive user interface.",
            "Engineered with performance and reliability at the core, supporting enterprise-grade deployment and subscription management.",
          ],
        },
        {
          id: 2,
          name: "AstroHub.com",
          icon: "/images/safari.webp",
          kind: "file",
          fileType: "url",
          href: "https://astrohub.dev.asteroidea.co/",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "Demo 1 - 2025-06-16 14-01-48.mkv",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "/videos/2025-06-16 14-01-48.mkv",
          position: "top-35 left-50",
        },
        {
          id: 4,
          name: "Demo 2 - 2025-06-16 14-02-17.mkv",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "/videos/2025-06-16 14-02-17.mkv",
          position: "top-50 left-80",
        },
      ],
    },

    // ▶ Project 2 Tunify
    {
      id: 2,
      name: "Tunify",
      icon: "/images/folder.webp",
      kind: "folder",
      position: "top-10 left-0",
      windowPosition: "top-[25vh] left-30",
      children: [
        {
          id: 1,
          name: "Tunify SpotifyClone.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-52 right-80",
          description: [
            "Tunify is a feature-rich Spotify clone built with modern web technologies to deliver an authentic music streaming experience.",
            "Users can browse music, create playlists, search tracks, and experience smooth playback with a polished, responsive UI.",
            "The application handles real-time playlist management and integrates with music APIs for a complete streaming platform.",
            "Built with performance and user experience in mind, delivering a desktop-quality music streaming interface.",
          ],
        },
        {
          id: 2,
          name: "Tunify.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Chahinee777/Tunify-SpotifyClone",
          position: "top-5 left-10",
        },
        {
          id: 3,
          name: "Tunify.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-65 right-30",
          imageUrl: "/images/7f38c0b4-4ced-441b-a342-5fcfa79ea89b.png",
        },
      ],
    },

    // ▶ Project 3 Mahdi Dhaker
    {
      id: 3,
      name: "Mahdi Dhaker",
      icon: "/images/folder.webp",
      kind: "folder",
      position: "top-10 left-50",
      windowPosition: "top-[40vh] left-15",
      children: [
        {
          id: 1,
          name: "Mahdi Dhaker Website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-67 right-85",
          description: [
            "Mahdi Dhaker Official Website is a professional portfolio and presence platform for an established figure.",
            "The site showcases biography, achievements, media presence, and engagement with a modern, polished design.",
            "Carefully crafted to reflect professionalism and credibility with smooth animations and responsive layouts.",
            "Built with modern web technologies to deliver an elegant, fast-loading experience across all devices.",
          ],
        },
        {
          id: 2,
          name: "MahdiDhaker.com",
          icon: "/images/safari.webp",
          kind: "file",
          fileType: "url",
          href: "https://mahdi-dhaker-official-website.vercel.app/",
          position: "top-25 left-30",
        },
        {
          id: 3,
          name: "Mahdi Dhaker.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Chahinee777/Mahdi-Dhaker-Official-website",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Mahdi Dhaker.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 right-20",
          imageUrl: "/images/mahdi.png",
        },
      ],
    },

    // ▶ Project 4 Ghrami
    {
      id: 4,
      name: "Ghrami",
      icon: "/images/folder.webp",
      kind: "folder",
      position: "top-80 right-55",
      windowPosition: "top-[55vh] left-30",
      children: [
        {
          id: 1,
          name: "Ghrami.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-60 right-70",
          description: [
            "Ghrami is a social learning and hobby-matching platform that connects people with shared interests, helps them track personal progress, and enables skill exchange through virtual or physical meetups. It also features a marketplace where verified instructors can offer paid classes."
          ],
        },
        {
          id: 2,
          name: "Ghrami.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/Chahinee777/Ghrami",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "Ghrami.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/ghrami.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/DSC_5324.JPG",
    },
    {
      id: 2,
      name: "Chahine.linkedin",
      icon: "/images/safari.webp",
      kind: "file",
      fileType: "url",
      href: "https://linkedin.com/in/chahine-ouled-amor",
      position: "top-60 left-50",
    },
    {
      id: 3,
      name: "Chahine.github",
      icon: "/images/plain.png",
      kind: "file",
      fileType: "fig",
      href: "https://github.com/Chahinee777",
      position: "top-60 left-95",
    },
    {
      id: 4,
      name: "AboutMe.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-18 left-50",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/chahin.jpeg",
      description: [
  "I’m Chahine Aouled Amor, a Full Stack Developer based in Tunisia, focused on building scalable and efficient web applications. I work with modern technologies across frontend and backend to deliver clean, reliable, and user-friendly solutions.",
  "I care about performance, structure, and code quality whether it’s designing microservices, optimizing APIs, or building smooth interfaces. If something can be improved or simplified, I work on it until it’s right.",
  "Outside coding, I continuously explore new technologies and improve my skills through real projects like AstroHub, where I design and build complete systems from architecture to deployment.",
],
    },
    {
      id: 5,
      name: "TechStack.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-95",
      subtitle: "Tech Stack",
      description: [
        "⚙️ Languages:",
        "Python, Java, C, Golang",
        "",
        "🎨 Frontend:",
        "Angular, React, Next.js, HTML5, CSS3, Tailwind CSS",
        "",
        "🔧 Backend:",
        "Spring Boot, Java EE, Laravel, Symfony, .NET",
        "",
        "📱 Mobile:",
        "Flutter, Xamarin",
        "",
        "🗄️ Databases:",
        "MySQL, PostgreSQL, Oracle, MongoDB",
        "",
        "🛠️ Tools & Platforms:",
        "GitHub, GitLab, Jira, Docker, Kubernetes, CI/CD, UML, Grafana, Selenium",
      ],
    },
    {
      id: 6,
      name: "me2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-55 left-5",
      imageUrl: "/images/WhatsApp Image 2026-02-07 at 18.13.19.jpeg",
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      href: "/files/AOULED-AMOR-Chahine-CV.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 4,
      name: "Trash4.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-65 left-80",
      imageUrl: "/images/trash-4.jpg",
    },
    {
      id: 3,
      name: "Trash3.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-55 left-30",
      imageUrl: "/images/trash-3.jpg",
    },
    {
      id: 2,
      name: "Trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-20 left-55",
      imageUrl: "/images/trash-2.jpg",
    },
    {
      id: 5,
      name: "Archive",
      icon: "/images/safari.webp",
      kind: "file",
      fileType: "url",
      position: "top-10 right-10",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  vscode: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  music: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  game: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };



