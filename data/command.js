const commands = {
  help: {
    action: () => `❯ Available Commands:

help        - Show this help message          about      - about me
skills      - View my technical skills        projects    - See my projects
education   - My educational background       contact     - Get in touch
social      - Social media links              clear       - Clear the terminal        
resume      - Download my resume`,
  },

  about: {
    action: () => `❯ About Me

👨‍💻 Asad Ali
🚀 Full Stack Developer & Problem Solver

I'm a passionate full-stack developer with expertise in modern web technologies.
I love building scalable applications and solving complex problems through code.
Currently focused on React ecosystem and backend development.

💡 What drives me:
• Creating efficient, user-friendly applications
• Learning cutting-edge technologies
• Contributing to open-source projects
• Building solutions that make a difference

🎯 Always eager to take on new challenges and collaborate on innovative projects!`,
  },
  skills: {
    action: () => `❯ Technical Skills

🚀 Frontend Development:
• React.js - Advanced component architecture
• Next.js - SSR, SSG, and full-stack applications  
• TypeScript - Type-safe development
• Tailwind CSS - Modern responsive design
• HTML5/CSS3 - Semantic markup and styling

⚙️ Backend Development:
• Node.js - Server-side JavaScript
• Express.js - RESTful API development
• MongoDB - NoSQL database design
• MySQL - Relational database management
• RESTful APIs - Design and implementation

🛠️ Tools & Technologies:
• Git/GitHub - Version control and collaboration
• VS Code - Development environment
• Postman - API testing and documentation

💻 Programming Languages:
• JavaScript (ES6+) - Expert level
• C++ - Data structures and algorithms`,
  },

  education: {
    action: () => `❯ Education

🎓 Bachelor of Technology (B.Tech)
   Computer Science and Engineering
   Roorkee Institute of Technology • 2022-2026
   CGPA: 7.0 

🎓 Lala Lajpat Rai Inter College (12th Grade)
   CBSE • 2021
   GPA: 80%

📜 Certifications:
• Full Stack Web Development by Apna College
• Data Structures and Algorithms by Apna College
• Next.js Masterclass by Procoderr`,
  },

  projects: {
    action: () => `❯ Featured Projects

Wanderlust                                                               July 2024 - Oct 2024
Technologies Used: Express.js, EJS Templates, Passport.js, Multer, Cloudinary, MongoDB, CSS Designed and implemented a hotel listing platform aimed at delivering an optimal user experience through seamless browsing, filtering, hotel listing, user account integration, and a customer review system.
• Built the front-end using EJS templates to create a dynamic and user-friendly interface.
• Implemented secure user authentication with Passport.js to manage user sessions and access
control.
• Handled image uploads and media storage using Multer and Cloudinary for efficient content
management.
• Designed and developed robust backend functionality with Express.js, ensuring smooth data
handling and performance across the platform.

SansAi                                                                   Jan 2025 - Mar 2025
Technologies Used: Next.js, Clerk, Inngest, Prisma,neonDB, Google Gemini API, Tailwind CSS, ShadCN UI  Built a platform to assist users in enhancing their career growth through AI-powered tools, offering features such as interview preparation, resume building, and cover letter generation.
• Designed and implemented a clean, responsive UI with Tailwind CSS and ShadCN UI to provide a
user-friendly financial tracking experience.
• Implemented secure user authentication and management using Clerk, ensuring personalized and
protected access
• Integrated Google Gemini API to enhance functionality with AI-driven insights and smart
suggestions.
• Leveraged Inngest to handle background processing and workflows, enabling smooth and reliable
automation within the platform.

Aximo                                                                   June 2025 - July 2025
Built a no-code website builder (Aximo) that generates static websites using HTML, CSS, and JavaScript, allowing users to create and deploy personal or business websites without coding.
• Built with React and styled using Tailwind CSS to ensure a clean, responsive, and accessible design.
• Ensured performance optimization and user-friendly interactions across devices and browsers.
• Utilized packages Prism code highlighter, Google Gemini Api, Express for backend, and Netlify for
deployment to enhance performance and code formatting.
ACADEMIC ACHIEVEMENTS
• Awarded the Academic Excellence Award with a grant of ₹5,000 for securing over 80% aggregate,
recognizing outstanding academic performance and dedication to the field of study.
• Secured 2nd Prize in the ExploreIn Web-D Bootcamp exam, showcasing strong proficiency and
practical knowledge in web development.
`,
  },

  contact: {
    action: () => `❯ Contact Information

📧 mo.asadali007@gmail.com
📱 +91 9027171598

🌐 Let's connect! I'm always open to discussing new opportunities or interesting projects.
`,
  },

  social: {
    action: () => `❯ Social Media Links

🔗 Professional Networks:
• LinkedIn: linkedin.com/in/asadali-dev
• GitHub: github.com/asadali-07
• Portfolio: https://myportfolio-app-ochre.vercel.app

📱 Social Platforms:
• Twitter: @asadali-07
• Instagram: @heyy.asad__
• YouTube: Break&Win8BallPool
`,
  },

  resume: {
    action: () => `❯ Resume Download

📄[Download PDF](https://myportfolio-app-ochre.vercel.app/files/asadResume.pdf)`,
  },

  clear: {
    action: () => "CLEAR",
  },

  notFound: (cmd) => `❯ Command not found: '${cmd}'

🔍 Did you mean one of these?
• help - Show all available commands
• about - Learn more about me  
• skills - View my technical skills
• projects - See my project portfolio

💡 Type 'help' to see the complete list of available commands.`,
};

export default commands;