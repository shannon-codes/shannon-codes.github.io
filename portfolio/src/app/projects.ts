export interface DialogData {
  title: '',
  purpose: '',
  tasks: [],
  images: '',
  video: '',
  document:''
}

export const projects = [
  {
    id: 1,
    name: 'Yoga Learning Assistant',
    image: '../../assets/images/feature_capstone.png',
    description: 'Web platform that provides real-time feedback on live webcam capture. The application live detects 17 body joints of the user in 2D space and compares it to the position of the instructor on the yoga video. ',
    tech: 'React · TensorFlow.js · PoseNet ·  Node.js · Express.js · MongoDB · AWS S3',
    // video: 'http://capstone.dev.fast.sheridanc.on.ca/grpTechCatDream/videos/grpTechCatDream_AI_Yoga_Learning_Assistant_Pitch.mp4',
    link: 'http://capstone.dev.fast.sheridanc.on.ca/grpTechCatDream/',
    awards:[' 1st Place Capstone Award Winner in SDNE Program', ' 1st Place Sheridan Student Experience Award'],
    dialog: {title: 'Fitness assistant with real-time feedback', purpose: 'Create a motion-tracking prototype to teach yoga using a machine learning model for a Sheridan community partner.', tasks: ['Interview client and gather requirements', 'Create UI screen mock-ups using Marvel prototyping tool', 'Create System Context diagram, Data Flow diagram, ER (Database) diagram, Use Case diagram, architecture diagram', 'Select software tools', 'Market segmentation and competitive analysis', 'Weekly agile sprint to ensure deliverables were on schedule', 'Error handling and code review', 'Develop and present as senior Capstone project'], images:'', video: 'https://www.youtube.com/embed/bYvSkJg537s?start=123', document: ''}
  },
  {
    id: 2,
    name: 'Uplift',
    image: '../../assets/images/feature_uplift.png',
    github: 'https://github.com/shannon-codes/rbcuplift',
    description: 'Working in a team of 4, my role was developing our website front-end prototype during a 36-hour hackathon. Our solution was the Uplift platform for RBC Small business owners to connect with free 1-hour mini-coaching calls for brainstorming and answering questions.',
    tech: 'Angular 8 · TypeScript · Routing · Bootstrap · HTML · CSS',
    // video: 'https://youtu.be/dTp3bm7Hc9w?t=2209',
    // document:'../../assets/images/Uplift.pdf',
    demo: 'https://shannon-codes.github.io/rbcuplift',
    awards: [' 2nd place RBC AmpHacks 2020 Competition'],
    dialog: {title: 'Virtual coaching calls to uplift businesses', purpose: 'To tap into the wealth of expertise in the network of RBC employees from departments beyond the scope of pure banking, such as technology, marketing, human resources, to management. We can incentivize RBC employees by allowing them to use customer reviews on the platform on their annual performance reviews, and potentially tie their contributions to their annual bonuses. RBC benefits by building stronger relationships and identifying valuable employees. It also provides added-value to RBC small business clients as a not-for-profit platform aiming to ensure no small business gets left behind', tasks: ['Work with new people to ideate and pitch the solution', 'Liase with RBC mentors for feedback on proposed solutions and iterations', 'Develope website to meet a tight deadline', 'Present pitch and product demo to 3 rounds of judging panels'], images:'', video: 'https://www.youtube.com/embed/dTp3bm7Hc9w?start=2210', document:'../../assets/images/Uplift.pdf'}
  },
  {
    id: 3,
    name: 'Grades Management',
    image: '../../assets/images/feature_gradesportal.png',
    github: 'https://github.com/shannon-codes/student-grades-portal',
    description: 'Created a web application for the professor to manage students assessments. Professor has create, read, update, delete (CRUD) functionality and can create student login credentials for each student to access their own grades. Automated deployment from GitHub onto Azure App Service using GitHub Actions with CI/CD.',
    tech: 'Java Spring Boot · Azure Cloud Database for MySQL · MVC Architecture · JPA Hibernate ORM · ThymeLeaf · Bootstrap · CSS',
    demo: 'https://grades-portal.azurewebsites.net/'
  },
  {
    id: 4,
    name: 'Health Quality Dashboard',
    image: '../../assets/images/feature_dashboard.png',
    description: 'During my 2020 internship at the Ministry of Transportation with the .NET Solutions Delivery Center (SDC), I redesigned and developed the front-end for the Health Quality Dashboard. It was deployed internally to .NET SDC organization Azure DevOps portal. Makes REST calls to the .NET Core API to fetch DevOps metrics data.',
    tech: 'Angular 9 · RxJS · HTML · CSS · C# .NET Core API · Azure Functions',
    dialog: {title: 'Front-end dashboard using Angular 9 framework and serverless REST APIs', purpose: 'To provide a one-stop website to visualize project ongoing QA test runs showing results from functional automation tests, unit tests, AODA tests, and security alerts.', tasks: ['Develop website and logic according to UI design mockup specification', 'Learn and apply data visualization chart libraries, and Azure fundamentals in a short period of time', 'Learned and apply advanced Angular 9 asynchonous data handling using RxJS, Subcriptions, Behaviour Subjects, and Observables', 'Created presentation and demonstrated solution to developers and manager', 'Implement angular routing, and service-oriented architecture', 'Update backend with new API endpoint to consolidate all QA tests REST calls and improved page load time by 4 minutes', 'Documented all project setup in Wiki for further product development'], images:'../../assets/images/netsdc.png', video:'', document:''}
  },
  {
    id: 5,
    name: 'Movie Night iOS App',
    image: '../../assets/images/feature_movieapp.png',
    github: 'https://github.com/shannon-codes/iOS-Movie-Night',
    description: 'An iOS mobile app that helps users plan their movie night. The application makes a REST call to The Movie Database API (themoviedb.org). Users can add, view, save, and delete their list of Favorites and set notifications for movie release dates. More screenshots and details in README on GitHub.',
    tech: 'Swift · SQLite3 · Firebase · CoreLocation · Xcode',
    document: '../../assets/images/iOS Movie Night App.pdf'
  }, 
  {
    id: 6,
    name: 'Community Swap Portal',
    image: '../../assets/images/feature_eswap.png',
    github: 'https://github.com/shannon-codes/Community-eSwap',
    description: 'This web application is for technology students and early career professionals to gain experience with community non-profits. Non-profit community organization or individuals can post opportunities for students. Organizations swap assets such as rehearsal venue, instruments, use of truck, etc, if monetary payment is not available',
    tech: 'C# ASP.NET · Microsoft SQL Server · Bootstrap'
  },
  {
    id: 7,
    name: 'Knight Tour Simulator',
    image: '../../assets/images/feature_knight.png',
    github: 'https://github.com/shannon-codes/Knights-Tour',
    description: 'This application runs simulations of the Knight Tour problem in chess. Can the knight move to every position on the chessboard, visiting any given square only once? It allows the user to choose the simulation mode and the starting position. The result displays the sequence of movements of the knight on the chessboard and the total number of squares visited, and writes the outputs to a text file.',
    tech: 'C# .NET · Windows Forms'
  },
  {
    id: 8,
    name: 'Health Journal',
    image: '../../assets/images/feature_healthdiary.jpg',
    github: 'https://github.com/shannon-codes/HealthDiary',
    description: 'This application allows users to complete a daily questionnaire entry on health-related metrics such as glasses of water, meals, hours of sleep, calories burned, amount of exercise, etc. It allows the user to create, read, update, delete, and search for diary entries. It saves entries to an output file.',
    tech: 'Java · JavaFX · SceneBuilder'
  }
];
