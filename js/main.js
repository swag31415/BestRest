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
    Project('E-Commerce Website with ReactJS and NodeJS', [
      'Develop an e-commerce website using ReactJS for front-end and NodeJS for back-end.',
      'Implement Redux to manage the state of the application.',
      'Use Bootstrap for styling the website.',
      'Integrate with payment gateways like Stripe for processing transactions.',
      'Implement security features like JWT for authentication and authorization.',
    ]),
    Project('Online Quiz Application with ReactJS and NodeJS', [
      'Develop an online quiz application using ReactJS for front-end and NodeJS for back-end.',
      'Use Redux for state management.',
      'Implement security features like JWT for authentication and authorization.',
      'Use Socket.io for real-time communication between the server and clients.',
      'Deploy the application on Heroku or AWS Elastic Beanstalk.',
    ]),
    Project('Event Management System with Spring Boot and ReactJS', [
      'Develop an event management system using Spring Boot for back-end and ReactJS for front-end.',
      'Use Spring Security for authentication and authorization.',
      'Implement features like creating events, inviting attendees, and managing RSVPs.',
      'Use Redux for state management.',
      'Integrate with Google Maps API for location-based services.',
    ])
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
    'Java',
    'Python',
    'JavaScript',
    'C++',
    'C#',
    'Ruby',
    'Swift',
    'Kotlin',
    'PHP',
    'TypeScript',
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
    'Node',
    'LaTeX',
  ],
  courses: [
    'Machine Learning',
    'Artificial Intelligence',
    'Intro to Robotics',
    'Numerical Computation',
    'Advanced Data Science',
    'Technical Communication',
  ],
  human_languages: [
    'English',
    'Bengali',
    'Hindi',
  ]
}

const { createApp } = Vue
const app = createApp({ data() { return DATA } }).mount('#app')