function cons(...args) {
  return (...args2) => Object.fromEntries(args.map((a, i) => [a, args2[i]]))
}

const School = cons('name', 'degree', 'start', 'end', 'desc')
const Project = cons('name', 'points')
const Job = cons('role', 'company', 'start', 'end', 'points')

const DATA = {
  name: 'Swagatam Das',
  statement: "With 80+ projects, an astrophysics paper, and an aerospace patent, I have the experience you need.",
  portrait: './best.jpeg',
  email: 'swda9655@colorado.edu',
  phone: '404-916-1000',
  linkedin: 'linkedin.com/in/swag-das',
  portfolio: 'swag31415.github.io/Portfolio',
  location: 'Atlanta, Georgia',
  education: [
    School('University of Colorado Boulder', 'Bachelor of Science in Computer Science', '', 'May 2023', ''),
  ],
  projects: [
    Project('Research on Tenure-Track Women Professors', [
      "Conducted research as part of the YOU'RE@CU research program to investigate beliefs about why tenure-track women professors leave the tenure track.",
      'Analyzed a longitudinal dataset of 10,000 tenure-track professors across various demographics to compare accuracy of beliefs on the subject across different groups.',
      "Used statistical methods and machine learning algorithms to identify patterns and trends in the data, and conducted hypothesis testing to validate findings.",
    ]),
    Project('GoDaddy Microbusiness Density Forecasting', [
      "Participated in a GoDaddy-sponsored Kaggle competition on Microbusiness Density Forecasting, with a goal to forecast next month's microbusiness density.",
      'Utilized Gradient Boosting techniques, including lightgbm, xgboost, and catboost, as part of a powerful VotingRegressor ensemble model.',
      'Conducted thorough preliminary data analysis of every county in the dataset, using blacklists and bias vectors to ensure the highest possible accuracy.',
      'Employed sophisticated feature engineering to optimize the performance of the model, leading to a nearly 5x improvement in model performance.',
    ]),
    Project('Weather-based Traffic Prediction', [
      'Leveraged datasets on traffic history and weather patterns from Jan 2018 to Oct 2020 to predict traffic conditions at various locations over the same time period in a Kaggle competition.',
      'Achieved a winning Macro F1-Score of 0.52 using DecisionTreeRegressor, surpassing other popular models like Random Forest and XGBoost.',
      'Experimented with state-of-the-art models like RNNs and external datasets.',
      'Applied feature engineering techniques such as smoothing weather patterns and utilizing lag variables to optimize model performance.',
      'Demonstrated a deep understanding of feature selection, hyperparameter tuning, and cross-validation techniques to create a reliable and robust prediction model.',
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
    ]),
  ],
  languages: [
    "Python",
    "C/C++",
    "Java",
    "C#",
    "Perl",
    "Rust",
    "Julia",
    "Nim",
    "Swift",
    "Kotlin",
  ],
  tools: [
    'Docker',
    'Kubernetes',
    'Keras',
    'Tensorflow',
    'PyTorch',
    'GCP',
    'AWS',
    'Tabelau',
    'Jenkins',
    'GitLab CI/CD',
    'Ansible',
    'Puppet',
    'Grafana',
    'Git',
    'Hadoop',
    'JUnit',
    'NUnit',
    'PyTest',
    'Scrum',
    'Kanban',
    'Log4j',
    'MySQL',
    'Oracle Database',
    'MongoDB'
  ],
  courses: [
    'Advanced Data Science',
    'Machine Learning',
    'Natural Language Processing',
    'Operating Systems',
    'Software Project Management',
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