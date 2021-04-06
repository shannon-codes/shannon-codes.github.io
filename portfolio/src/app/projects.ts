export interface DialogData {
  title: '',
  purpose: '',
  tasks: [],
  images: '',
  video: '',
  document:''
}
/* featured projects*/
export const projects = [

  {
    id: 2,
    name: 'Health Quality Dashboard',
    image: '../../assets/images/feature_dashboard.png',
    description: 'Resdesigned dashboard web app for .NET Solutions Delivery Centre embedded into their Azure DevOps portal. Fetches metrics data using RESTful call to the .NET Core API.',
    tech: 'Angular 9 · REST API · RxJS · C# .NET Core · Azure Functions',
    dialog: {
      title: 'Front-end dashboard using Angular 9 framework and serverless REST APIs', 
      purpose: 'To provide a one-stop website to visualize project ongoing QA test runs showing results from functional automation tests, unit tests, AODA tests, and security alerts.', 
      tasks: ['Develop website and logic according to UI design mockup specification', 'Learn and apply data visualization chart libraries, and Azure fundamentals in a short period of time', 'Learned and apply advanced Angular 9 asynchonous data handling using RxJS, Subcriptions, Behaviour Subjects, and Observables', 'Created presentation and demonstrated solution to developers and manager', 'Implement angular routing, and service-oriented architecture', 'Update backend with new API endpoint to consolidate all QA tests REST calls and improved page load time by 4 minutes', 'Documented all project setup in Wiki for further product development'], 
      images:'../../assets/images/netsdc.png', 
      video:'', 
      document:''}
  },
  {
    id: 1,
    name: 'Yoga Learning Assistant',
    image: '../../assets/images/feature_capstone.png',
    description: 'Web platform that provides real-time feedback on live webcam capture. The application live detects 17 body joints of the user in 2D space and compares it to the position of the instructor on the yoga video. ',
    tech: 'React · TensorFlow.js · PoseNet ·  Node.js · Express.js · MongoDB · AWS S3',
    link: 'http://capstone.dev.fast.sheridanc.on.ca/grpTechCatDream/',
    awards:[' 1st Place Capstone Award Winner in SDNE Program', ' 1st Place Sheridan Student Experience Award'],
    dialog: {
      title: 'Fitness assistant with real-time feedback', 
      purpose: 'Create a motion-tracking prototype to teach yoga using a machine learning model for a Sheridan community partner.', 
      tasks: ['My role was implementing features including API for cloud database access, AWS S3 bucket storage, React interface for CRUD functionality, timer countdown, game webcam recording and playback, game menu UI', 'Nominated by Applied Computing Professor Sasipriya Arun to present and compete for award at 2020 Capstone Showcase', 'Gather requirements by interviewing Sheridan community partner, Kinetica.ca', 'Designed prototype and wireframe using MarvelApp', 'Created diagrams to convert requirements into technical solution: System Context diagram, Data Flow diagram, ER (Database) diagram, Use Case diagram, architecture diagram', 'Select software tools', 'Market segmentation and competitive analysis', 'Weekly agile team meetings to ensure deliverables were on schedule', 'Error handling and code review and testing'], 
      images:'', 
      video: 'https://www.youtube.com/embed/bYvSkJg537s?start=123', 
      document: ''}
  },
  
];

export const projectsMore = [
  {
    id: 2,
    name: 'Uplift',
    image: '../../assets/images/feature_uplift.png',
    github: 'https://github.com/shannon-codes/rbcuplift',
    description: 'Pitched a web app for RBC Small business owners to connect with experts volunteering free 1-hr coaching calls.',
    tech: 'Angular 8 · TypeScript · Routing · Bootstrap · Trello',
    demo: 'https://shannon-codes.github.io/rbcuplift',
    awards: [' 2nd place RBC AmpHacks 2020 Competition'],
    dialog: {title: 'Virtual coaching calls to uplift businesses', 
            purpose: 'The hackathon challenge: How can we think beyond banking to make Canadians lives better? Our solution was to tap into the expertise of RBC employees from departments beyond the scope of pure banking. Therefore, help connect skills-based volunteers from typically non client-facing departments of technology to marketing, with RBC small businesses for 1-hour coaching calls to brainstorm with experts. We proposed to incentivize RBC employees by allowing them to use customer reviews on the platform on their annual performance reviews, and potentially tied to a benefit to their annual bonuses. RBC benefits by building stronger relationships and identifying valuable employees. This is added-value to RBC small business clients as it operates on a on-profit manner. The goal is to ensure no small business gets left behind.', 
            tasks: ['My role was designing and coding our technical solution using Angular', 'Work with new people in team of 4 to ideate, prototype, and pitch the solution', 'Liase with RBC mentors for feedback on proposed solutions and iterations', 'Present pitch and product demo to 3 rounds of judging panels',  'Delivered on a tight 36-hour deadline'], 
            images:'', 
            video: 'https://www.youtube.com/embed/dTp3bm7Hc9w?start=2210', 
            document:'../../assets/images/Uplift.pdf'}
  },
  {
    id: 3,
    name: 'Students Grades Management',
    image: '../../assets/images/feature_gradesportal.png',
    github: 'https://github.com/shannon-codes/student-grades-portal',
    description: 'Created a web application for the professor to manage students assessments with user login authorization.',
    tech: 'Java Spring Boot · Azure Cloud Database for MySQL · MVC Architecture · JPA Hibernate ORM · ThymeLeaf · Bootstrap · CSS',
    demo: 'https://grades-portal.azurewebsites.net/',
    dialog: {
      title: 'Student Grades Management Portal',
      purpose: 'A program to organize student grades for professors and students.',
      tasks:['Add a student as a professor','View students as a professor. And, create, edit, and delete for each student', 'View grades as a student only details for that student','User authorization using roles, Spring security, and salted passwords', 'Automated deployment from GitHub onto Azure App Service using GitHub Actions with CI/CD.'],
      images: '',
      video: '',
      document: ''
    }
  },
  {
    id: 5,
    name: 'Movie Night iOS App',
    image: '../../assets/images/feature_movieapp.png',
    github: 'https://github.com/shannon-codes/iOS-Movie-Night',
    description: 'A movie information mobile app allowing users to set release date reminders, explore upcoming movies, create lists, and get map directions',
    tech: 'Swift · REST API· SQLite3 · Firebase · CoreLocation · Xcode',
    document: '../../assets/images/iOS Movie Night App.pdf',
    dialog: {
      title: 'Movie Night iOS App', 
      purpose: 'The purpose of our app is to help users discover movies currently playing in theatres and upcoming movies soon to be in theatres. It provides movie details, a map features to get driving directions, allow users to set reminders for theatre release dates, and post discussion comments. The app allows users to register for an account and securely authenticate logins with credentials stored in Firebase.', 
      tasks: ['Make REST call to The Movie Database (themoviedb.org) API', 'Feature to schedule reminder as a local notification on official movie release date', 'Collection view of fetched movie posters for a user-friendly interface', 'JSON results decoded to Movie class model object', 'Users can add, view, save, and delete their list of Favorites and set notifications for movie release dates','Maps feature helps the user locate the nearest movie theatre using CoreLocation'], 
      images:'', 
      video:'', 
      document:''}
  }, 
  {
    id: 6,
    name: 'Community Swap Portal',
    image: '../../assets/images/feature_eswap.png',
    github: 'https://github.com/shannon-codes/Community-eSwap',
    description: 'Community organizations post volunteer opportunities offering a trade for assets such as rehearsal venue, instruments, use of truck, etc, if monetary payment is not available',
    tech: 'C# ASP.NET · Microsoft SQL Server · Bootstrap',
    dialog: {
      title: 'Community Swap Portal', 
      purpose: 'For the final group project in #C .NET course, we designed a web app for a skills-based volunteer board. This web application is for technology students and early career professionals to gain experience with community non-profits. ', 
      tasks: ['Created web forms for adding, registration, login with form validation','Built database using Microsoft SQL Server to create Users and Projects tables'], 
      images:'', 
      video:'', 
      document:''}
  },
  {
    id: 7,
    name: 'Knight Tour Simulator',
    image: '../../assets/images/feature_knight.png',
    github: 'https://github.com/shannon-codes/Knights-Tour',
    description: 'Can a Knight move to every position on the chessboard, visiting every square only once?',
    tech: 'C# .NET · Windows Forms',
    dialog: {
      title: 'Knight Tour Simulator', 
      purpose: 'This application runs simulations of the Knight Tour problem in chess. The aim is to produce the longest series of moves of a chess knight, while visiting squares on the board only once. Using a non-intellegent method, a knight randomly moves to any available square it is legally allowed to until it can no longer make any more moves. Using a heuristic (strategy) for moving the knight, a way to improve the chances of success is with an accessibility rating matrix. Hence, move the knight to the most troublesome squares first (lowest rated accessibility number) and leave open those that are easiest to get to.', 
      tasks: ['Created a .NET Framework Windows Forms Application', 'Implement a logic for Heuristics strategy where knight reaches at least on average 55 squares','Implement Non-intelligent(random) strategy where knight is able to reach 20 squares', 'Allows the user to choose the simulation mode and choose any starting coordinate for the Knight.','Generates text file output with reported number of squares the knight was able to successfully touch during each the run', 'Write abstract class and use inheritance'], 
      images:'', 
      video:'', 
      document:''}
  },
  {
    id: 8,
    name: 'Health Journal',
    image: '../../assets/images/feature_healthdiary.jpg',
    github: 'https://github.com/shannon-codes/HealthDiary',
    description: 'Record daily health, diet and fitness details.',
    tech: 'Java · JavaFX · SceneBuilder',
    dialog: {
      title: 'Health Journal GUI App', 
      purpose: 'Keep records of daily dietary choices and fitness. Saves, search, and review them later. Add entries forms have validation.', 
      tasks: ['Created a Java application with data persistence', 'GUI using JavaFX and SceneBuilder', 'File I/O: Saves (write) and read from csv text file data store.'], 
      images:'', 
      video:'', 
      document:''}
  }
]

// export const projects = [
//   {
//     id: 1,
//     name: 'Yoga Learning Assistant',
//     image: '../../assets/images/feature_capstone.png',
//     description: 'Web platform that provides real-time feedback on live webcam capture. The application live detects 17 body joints of the user in 2D space and compares it to the position of the instructor on the yoga video. ',
//     tech: 'React · TensorFlow.js · PoseNet ·  Node.js · Express.js · MongoDB · AWS S3',
//     // video: 'http://capstone.dev.fast.sheridanc.on.ca/grpTechCatDream/videos/grpTechCatDream_AI_Yoga_Learning_Assistant_Pitch.mp4',
//     link: 'http://capstone.dev.fast.sheridanc.on.ca/grpTechCatDream/',
//     awards:[' 1st Place Capstone Award Winner in SDNE Program', ' 1st Place Sheridan Student Experience Award'],
//     dialog: {
//       title: 'Fitness assistant with real-time feedback', 
//       purpose: 'Create a motion-tracking prototype to teach yoga using a machine learning model for a Sheridan community partner.', tasks: ['Interview client and gather requirements', 'Create UI screen mock-ups using Marvel prototyping tool', 'Create System Context diagram, Data Flow diagram, ER (Database) diagram, Use Case diagram, architecture diagram', 'Select software tools', 'Market segmentation and competitive analysis', 'Weekly agile sprint to ensure deliverables were on schedule', 'Error handling and code review', 'Develop and present as senior Capstone project'], 
//       images:'', 
//       video: 'https://www.youtube.com/embed/bYvSkJg537s?start=123', 
//       document: ''}
//   },
//   {
//     id: 2,
//     name: 'Uplift',
//     image: '../../assets/images/feature_uplift.png',
//     github: 'https://github.com/shannon-codes/rbcuplift',
//     description: 'Working in a team of 4, my role was developing our website front-end prototype during a 36-hour hackathon. Our solution was the Uplift platform for RBC Small business owners to connect with free 1-hour mini-coaching calls for brainstorming and answering questions.',
//     tech: 'Angular 8 · TypeScript · Routing · Bootstrap · HTML · CSS',
//     // video: 'https://youtu.be/dTp3bm7Hc9w?t=2209',
//     // document:'../../assets/images/Uplift.pdf',
//     demo: 'https://shannon-codes.github.io/rbcuplift',
//     awards: [' 2nd place RBC AmpHacks 2020 Competition'],
//     dialog: {title: 'Virtual coaching calls to uplift businesses', 
//             purpose: 'To tap into the wealth of expertise in the network of RBC employees from departments beyond the scope of pure banking, such as technology, marketing, human resources, to management. We can incentivize RBC employees by allowing them to use customer reviews on the platform on their annual performance reviews, and potentially tie their contributions to their annual bonuses. RBC benefits by building stronger relationships and identifying valuable employees. It also provides added-value to RBC small business clients as a not-for-profit platform aiming to ensure no small business gets left behind', 
//             tasks: ['Work with new people to ideate and pitch the solution', 'Liase with RBC mentors for feedback on proposed solutions and iterations', 'Develope website to meet a tight deadline', 'Present pitch and product demo to 3 rounds of judging panels'], 
//             images:'', 
//             video: 'https://www.youtube.com/embed/dTp3bm7Hc9w?start=2210', 
//             document:'../../assets/images/Uplift.pdf'}
//   },
//   {
//     id: 3,
//     name: 'Grades Management',
//     image: '../../assets/images/feature_gradesportal.png',
//     github: 'https://github.com/shannon-codes/student-grades-portal',
//     description: 'Created a web application for the professor to manage students assessments. Professor has create, read, update, delete (CRUD) functionality and can create student login credentials for each student to access their own grades. Automated deployment from GitHub onto Azure App Service using GitHub Actions with CI/CD.',
//     tech: 'Java Spring Boot · Azure Cloud Database for MySQL · MVC Architecture · JPA Hibernate ORM · ThymeLeaf · Bootstrap · CSS',
//     demo: 'https://grades-portal.azurewebsites.net/',
//     dialog: {
//       title: 'Student Grades Management Portal',
//       purpose: 'A program to organize student grades.',
//       tasks:['Add a student as a professor','View students as a professor, edit and delete for each student', 'View grades as a student only details for that student','User authorization using roles, Spring security, and salted passwords'],
//       images: '',
//       video: '',
//       document: ''
//     }
//   },
//   {
//     id: 4,
//     name: 'Health Quality Dashboard',
//     image: '../../assets/images/feature_dashboard.png',
//     description: 'During my 2020 internship at the Ministry of Transportation with the .NET Solutions Delivery Center (SDC), I redesigned and developed the front-end for the Health Quality Dashboard. It was deployed internally to .NET SDC organization Azure DevOps portal. Makes REST calls to the .NET Core API to fetch DevOps metrics data.',
//     tech: 'Angular 9 · RxJS · HTML · CSS · C# .NET Core API · Azure Functions',
//     dialog: {
//       title: 'Front-end dashboard using Angular 9 framework and serverless REST APIs', 
//       purpose: 'To provide a one-stop website to visualize project ongoing QA test runs showing results from functional automation tests, unit tests, AODA tests, and security alerts.', 
//       tasks: ['Develop website and logic according to UI design mockup specification', 'Learn and apply data visualization chart libraries, and Azure fundamentals in a short period of time', 'Learned and apply advanced Angular 9 asynchonous data handling using RxJS, Subcriptions, Behaviour Subjects, and Observables', 'Created presentation and demonstrated solution to developers and manager', 'Implement angular routing, and service-oriented architecture', 'Update backend with new API endpoint to consolidate all QA tests REST calls and improved page load time by 4 minutes', 'Documented all project setup in Wiki for further product development'], 
//       images:'../../assets/images/netsdc.png', 
//       video:'', 
//       document:''}
//   },
//   {
//     id: 5,
//     name: 'Movie Night iOS App',
//     image: '../../assets/images/feature_movieapp.png',
//     github: 'https://github.com/shannon-codes/iOS-Movie-Night',
//     description: 'An iOS mobile app that helps users plan their movie night. The application makes a REST call to The Movie Database API (themoviedb.org). Users can add, view, save, and delete their list of Favorites and set notifications for movie release dates. More screenshots and details in README on GitHub.',
//     tech: 'Swift · SQLite3 · Firebase · CoreLocation · Xcode',
//     document: '../../assets/images/iOS Movie Night App.pdf',
//     dialog: {
//       title: 'Movie Night iOS App', 
//       purpose: 'The purpose of our app is to help users discover movies currently playing in theatres and upcoming movies soon to be in theatres. It will provide movie details, have a map features to get driving directions, allow users to set reminders for theatre release dates, and post discussion comments. The app will allow users to register for an account and securely authenticate user logins with firebase.', 
//       tasks: ['Call TMDb (The Movies database) API', 'Feature to schedule reminder as a local notification on official movie release date', 'Collection view of fetched movie posters for a user-friendly interface', 'JSON results decoded to Movie class model object', 'Maps feature helps the user locate the nearest movie theatre using CoreLocation'], 
//       images:'', 
//       video:'', 
//       document:''}
//   }, 
//   {
//     id: 6,
//     name: 'Community Swap Portal',
//     image: '../../assets/images/feature_eswap.png',
//     github: 'https://github.com/shannon-codes/Community-eSwap',
//     description: 'This web application is for technology students and early career professionals to gain experience with community non-profits. Non-profit community organization or individuals can post opportunities for students. Organizations swap assets such as rehearsal venue, instruments, use of truck, etc, if monetary payment is not available',
//     tech: 'C# ASP.NET · Microsoft SQL Server · Bootstrap'
//   },
//   {
//     id: 7,
//     name: 'Knight Tour Simulator',
//     image: '../../assets/images/feature_knight.png',
//     github: 'https://github.com/shannon-codes/Knights-Tour',
//     description: 'This application runs simulations of the Knight Tour problem in chess. Can the knight move to every position on the chessboard, visiting any given square only once? It allows the user to choose the simulation mode and the starting position. The result displays the sequence of movements of the knight on the chessboard and the total number of squares visited, and writes the outputs to a text file.',
//     tech: 'C# .NET · Windows Forms'
//   },
//   {
//     id: 8,
//     name: 'Health Journal',
//     image: '../../assets/images/feature_healthdiary.jpg',
//     github: 'https://github.com/shannon-codes/HealthDiary',
//     description: 'This application allows users to complete a daily questionnaire entry on health-related metrics such as glasses of water, meals, hours of sleep, calories burned, amount of exercise, etc. It allows the user to create, read, update, delete, and search for diary entries. It saves entries to an output file.',
//     tech: 'Java · JavaFX · SceneBuilder'
//   }
// ];

