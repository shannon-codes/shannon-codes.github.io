export const projects = [
  {
    id: 1,
    name: 'Yoga Learning Assistant',
    image: '../../assets/images/c1.png',
    description: 'The Yoga Learning Assistant is a web platform allows the user recieve colourful feedback on their poses through their live webcam capture. The application live detects 17 body joints of the user in 2D space and compares it to position of the instructor on the yoga video. This was the Capstone Winner for the Sheridan Applied Computing Capstone Showcase Competition 2020.',
    tech: 'React, PoseNet, TensorFlow.js, Bootstrap, Node.js, MongoDB',
    demo: 'http://capstone.dev.fast.sheridanc.on.ca/grpTechCatDream/videos/grpTechCatDream_AI_Yoga_Learning_Assistant_Pitch.mp4'
  },
  {
    id: 2,
    name: 'Movie Night iOS App',
    image: '../../assets/images/MovieNight.png',
    github: 'https://github.com/shannon-codes/iOS-Movie-Night',
    description: 'An iOS mobile app that helps users plan their movie night. The application fetches movie information from themoviedb.org API. Users can add, view, save, and delete their list of Favorites and set notifications for movie release dates. More screenshots and details in README on GitHub.',
    tech: 'Swift, SQLite3, Firebase, CoreLocation, Xcode',
    document: '../../assets/images/iOS Movie Night App.pdf'
  },
  {
    id: 3,
    name: 'Uplift',
    image: '../../assets/images/uplift.png',
    github: 'https://github.com/shannon-codes/rbcuplift',
    description: 'Designed this website at the RBC AmpHacks 2020 hackathon for 3rd/4th year students. Our four-member team won 2nd place. RBC Small business owners get their questions answered and brainstorm over 1-hour calls with mentors from departments like technology, marketing, human resources, and management. Uplift platform helps build customer relationships and helps businesses during the pandemic.',
    tech: 'Angular',
    document:'../../assets/images/Uplift.pdf',
    demo: 'https://shannon-codes.github.io/rbcuplift'
  },  
  {
    id: 4,
    name: 'Grades Management',
    image: '../../assets/images/GradesManagement.png',
    github: 'https://github.com/shannon-codes/student-grades-portal',
    description: 'Web application to organize student grades using Java Spring Boot. The professor role has CRUD functionality to organize students and their grades, and can see the class overall average, and average by each assessment category. User passwords are salted before storing in database. Uses in-memory H2 database or a local MySQL database. Roles are assigned so a student roles is denied access to the Professor area using Spring Security. File structure using MVC pattern.',
    tech: 'Java Spring Boot, H2 database or MySQL workbench, JPA, ThymeLeaf, Bootstrap, CSS'
  },
  {
    id: 5,
    name: 'Community Swap Portal',
    image: '../../assets/images/eswap.JPG',
    github: 'https://github.com/shannon-codes/Community-eSwap',
    description: 'This application is for current computer science students to volunteer with community non-profits. Non-profit community organization or individuals can post opportunities for students. Organizations swap assets such as rehearsal venue, instruments, use of truck, etc, if monetary payment is not available',
    tech: 'C# ASP.NET, Microsoft SQL Server'
  },
  {
    id: 6,
    name: 'Knight Tour Simulator',
    image: '../../assets/images/Heuristic1.png',
    github: 'https://github.com/shannon-codes/Knights-Tour',
    description: 'This application runs simulations of the Knight Tour problem. The aim is the move the knight to every position on the chessboard, but the knight can visit a square only once. It allows the user to choose the simulation method and the starting position. The result displays the sequence of movements of the knight on the chessboard and the total number of squares visited.',
    tech: 'C# .NET, Windows Forms'
  },
  {
    id: 7,
    name: 'Health Journal',
    image: '../../assets/images/HealthDiary.JPG',
    github: 'https://github.com/shannon-codes/HealthDiary',
    description: 'This application allows users to complete a daily questionnaire entry on health-related metrics such as glasses of water, meals, hours of sleep, calories burned, amount of exercise, etc. It allows the user to create, read, update, delete, and search for diary entries. It saves entries to an output file.',
    tech: 'Java, JavaFX, SceneBuilder'
  }
];
