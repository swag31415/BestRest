function cons(...args) {
  return (...args2) => Object.fromEntries(args.map((a, i) => [a, args2[i]]))
}

const School = cons('name', 'degree', 'start', 'end', 'desc')
const Project = cons('name', 'points')
const Job = cons('role', 'company', 'start', 'end', 'points')

const DATA = {
  name: 'Swagatam Das',
  statement: "With 50+ projects in a variety of domains I am confident that I have experience in everything you'll need.",
  portrait: './best.jpeg',
  email: 'swda9655@colorado.edu',
  phone: '404-916-1000',
  linkedin: 'linkedin.com/in/swag-das',
  portfolio: 'swag31415.github.io/Portfolio',
  location: 'Boulder, Colorado',
  education: [
    School('University of Colorado Boulder', 'Bachelor of Science in Computer Science', '', 'Expected May 2023', 'Major GPA: 3.582'),
  ],
  projects: [
    Project('Software Engineer for Boeing Sponsored Design Project', [
      'Worked with a team of 8 mechanical engineers as the sole computer scientist',
      'Developed a robust error correction algorithm through probability analysis for inadvertent deployment using data science skills and previous experience with similar sensors in robotics',
      'Created a complete code diagram and a custom 2D simulation environment using paper.js, allowing for real-time code testing and validation of error correction algorithms',
      "Developed intuitive charts, tables, and plots to effectively communicate the project's progress and results to Boeing in the PDR and CDR presentations and reports",
      'Utilized rapid programming skills to have the system up and running within an hour when the pressure sensor received was not as expected',
    ]),
    Project('Social Media Web App', [
      "Designed and implemented a responsive and visually appealing frontend using Bootstrap and JQuery, with features such as a newsfeed, profile pages, and search functionality.",
      'Automated software builds, unit tests, integration tests, deployment, and installations using a DevOps tool chain (Jenkins, Nexus, Artifactory), reducing deployment time by 40%.',
      'Developed guidelines and best practices for cloud-oriented development and implementations, including containers and container orchestration, resulting in improved efficiency and scalability.',
      'Implemented AWS solutions design and deployment of applications, resulting in a significant reduction in infrastructure costs.',
      'Utilized Ansible to develop scripts and templates to build development systems, enabling the automated creation of development environments.',
      'Developed and sustained an Agile methodology for the deployment, administration, maintenance, and upgrading of cloud environments, resulting in improved efficiency and collaboration.',
    ]),
  ],
  jobs: [
    Job("Full-Stack Developer", "Metro Atlanta Security Systems (MASS)", "Nov 2021", "July 2022", [
      "Employed data cleaning, transformation, and normalization, to manage three disparate datasets and derive KPIs.",
      "Used Decision Trees and Regression models to analyze advertising data and discover optimal sales strategies, resulting in a 30% increase in revenue.",
      "Created Tableau and D3.js dashboards to monitor KPIs, providing actionable insights to management.",
      "Collaborated with outsourced UX designers, product managers, and QA analysts to deliver high-quality features on time and within budget."
    ]),
    Job("Tech Sales Specialist", "Target", "May 2021", "Aug 2021", [
      "Developed a web-app to assist myself and my coworkers in our day-to-day activities, streamlining operations and increasing productivity."
    ]),
    Job("Resident Advisor (RA)", "University of Colorado Boulder", "Oct 2019", "Mar 2020", [
      "Planned and executed monthly events involving at least 20 residents, showcasing creativity and attention to detail in setting up, advertising, and running fun activities.",
      "Greeted guests and maintained friendly relations with over 400 residents, fostering a welcoming and inclusive community atmosphere."
    ]),
  ],
  languages: [
    "Python",
    "Java",
    "Go",
    "Ruby",
    "JavaScript",
    "Bash",
    "PowerShell",
    "Perl",
    "C/C++",
    "Rust",
    "Swift",
    "TypeScript",
    "Kotlin",
    "Lua",
    "Groovy"
  ],
  tools: [
    'Redis',
    'MongoDB',
    'GCP',
    'AWS',
    'JIRA',
    'Docker',
    'Git',
    'Kubernetes',
    'TensorFlow',
    'PyTorch',
    'Tableau',
    'OpenCV',
    'Node.js',
    'LaTeX',
    'Ansible',
    'Elasticsearch',
    'Terraform',
    'Jira',
    'Confluence',
    'Bitbucket',
    'Artifactory',
    'Gitlab',
    'Jenkins',
    'Maven',
    'Gradle',
  ],
  courses: [
    'Operating Systems',
    'Software Project Management',
    'Software Dev Methods and Tools',
    'Computer Security',
    'Advanced Data Science',
    'Technical Communication',
    'Numerical Computation',
  ],
  human_languages: [
    'English',
    'Bengali',
    'Hindi',
  ]
}

const { createApp } = Vue
const app = createApp({ data() { return DATA } }).mount('#app')