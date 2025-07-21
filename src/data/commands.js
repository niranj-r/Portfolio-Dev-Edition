export const commands = {
  help: {
    description: 'Show available commands',
    output: `Available commands:
<span style="color: #facc15;">help</span>      - Show this help message
<span style="color: #facc15;">welcome</span>   - Display welcome message
<span style="color: #facc15;">about</span>     - Learn more about me
<span style="color: #facc15;">projects</span>  - View my projects
<span style="color: #facc15;">skills</span>    - See my technical skills
<span style="color: #facc15;">socials</span>   - Get my social links
<span style="color: #facc15;">resume</span>    - View my resume
<span style="color: #facc15;">clear</span>     - Clear terminal
    
Type any command to get started!`
  },
  welcome: {
    description: 'Display welcome message',
    output: `
███╗   ██╗      ██╗   █████╗  ██╗    ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗  
████╗  ██║      ██║  ██╔══██╗ ██║    ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║
██╔██╗ ██║      ██║  ███████║ ██║       ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║
██║╚██╗██║ ██   ██║  ██╔══██║ ██║       ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║
██║ ╚████║ ╚█████╔╝  ██║  ██║ ██║       ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
╚═╝  ╚═══╝  ╚════╝   ╚═╝  ╚═╝ ╚═╝       ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚══╝  ╚═╝╚═════╝

<span style="color: #10b981;">Welcome to NJAI terminal!</span>
<span style="color: #c9d1d9;">Version 1.03.17</span>

Type <span style="color: #facc15;">'help'</span> to see available commands.`
  },
  about: {
    description: 'Learn more about me',
    output: `<span style="color: #10b981; font-weight: bold;">About Me</span>

Hi! I'm <span style="color: #facc15;">Niranj</span>, a passionate Full Stack Developer based in San Francisco, CA.

I love building digital experiences that make a difference. My journey in tech started 5 years ago, and I've been fascinated by the intersection of design and functionality ever since.

<span style="color: #f97316;">Interests:</span>
• Web Development & Modern JavaScript
• UI/UX Design & User Experience
• Open Source Contributions
• Machine Learning & AI
• Coffee and good music ☕🎵

<span style="color: #f97316;">Current Focus:</span>
Building scalable web applications with React, Node.js, and cloud technologies.`
  },
  projects: {
    description: 'View my projects',
    output: `<span style="color: #10b981; font-weight: bold;">Featured Projects</span>

<span style="color: #facc15;">1. E-Commerce Platform</span>
   Full-stack MERN application with payment integration
   <span style="color: #f97316;">→ github.com/niranj-r/ecommerce-platform</span>

<span style="color: #facc15;">2. Task Management App</span>
   React-based productivity tool with real-time collaboration
   <span style="color: #f97316;">→ github.com/niranj-r/task-manager</span>

<span style="color: #facc15;">3. Weather Dashboard</span>
   Weather forecasting app with interactive maps
   <span style="color: #f97316;">→ github.com/niranj-r/weather-dashboard</span>

<span style="color: #facc15;">4. Portfolio Website</span>
   This terminal-themed portfolio you're viewing right now!
   <span style="color: #f97316;">→ github.com/niranj-r/terminal-portfolio</span>

<span style="color: #c9d1d9;">Visit my GitHub for more projects and contributions.</span>`
  },
  skills: {
    description: 'See my technical skills',
    output: `<span style="color: #10b981; font-weight: bold;">Technical Skills</span>

<span style="color: #facc15;">Languages:</span>
JavaScript (ES6+), TypeScript, Python, Java, HTML5, CSS3

<span style="color: #facc15;">Frontend:</span>
React, Vue.js, Angular, Next.js, Tailwind CSS, Material-UI, SASS

<span style="color: #facc15;">Backend:</span>
Node.js, Express.js, Django, Flask, REST APIs, GraphQL

<span style="color: #facc15;">Databases:</span>
MongoDB, PostgreSQL, MySQL, Redis, Firebase

<span style="color: #facc15;">Tools & Technologies:</span>
Git, Docker, AWS, Vercel, Netlify, Webpack, Jest, Cypress

<span style="color: #facc15;">Design:</span>
Figma, Adobe XD, Photoshop, UI/UX Design Principles

<span style="color: #c9d1d9;">Always learning and exploring new technologies!</span>`
  },
  socials: {
    description: 'Get my social links',
    output: `<span style="color: #10b981; font-weight: bold;">Connect with me</span>

<span style="color: #facc15;">GitHub:</span>
<span style="color: #f97316;">→ github.com/niranj-r</span>

<span style="color: #facc15;">LinkedIn:</span>
<span style="color: #f97316;">→ linkedin.com/in/niranj-r</span>

<span style="color: #facc15;">Email:</span>
<span style="color: #f97316;">→ niranj.developer@email.com</span>

<span style="color: #facc15;">Portfolio:</span>
<span style="color: #f97316;">→ niranj-r.dev</span>

<span style="color: #c9d1d9;">Feel free to reach out for collaboration or just to say hi!</span>`
  },
  resume: {
    description: 'View my resume',
    output: `<span style="color: #10b981; font-weight: bold;">Resume</span>

<span style="color: #facc15;">Download:</span>
<span style="color: #f97316;">→ niranj-r.dev/resume.pdf</span>

<span style="color: #facc15;">Quick Overview:</span>
• 5+ years of full-stack development experience
• Led development of 3 major web applications
• Contributed to 15+ open source projects
• Experienced in agile methodologies
• Strong problem-solving and communication skills

<span style="color: #c9d1d9;">For detailed experience and education, please download the PDF above.</span>`
  }
};
