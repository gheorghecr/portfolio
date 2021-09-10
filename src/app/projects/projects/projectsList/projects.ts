export interface Projects {
    id: number;
    title: string;
    description: string;
    technologies: string;
    thumbnailImagePath: string;
    about: string;
    images: string[];
    githubLink: string;
    appStoreLink: string;
    playStoreLink: string;
  }
  
  export const projects = [
    {
      id: 4,
      title: 'MUZZI',
      description: 'The application is a Party Game that focuses on finding more about our friends or family by getting everyone together through music. Throughout this project, I was responsible for the planning, development and testing of the application. As a result, I was capable to quickly learn FLUTTER, and the entire process on how to publish and application on the APP STORE & PLAY STORE.',
      technologies: 'Technologies: Flutter, Dart, Firebase, REST.',
      thumbnailImagePath: './assets/images/muzzi_app_1.png',
      about: "The mobile application was a side project that I developed along side three friends, during my last year of university. MUZZI allows friends and family to join together in the same lobby and find more about each other trough music. For the music provider we used the DEEZER API's.", 
      images: ['./assets/images/muzzi_app_1.png'],
      githubLink: "",
      appStoreLink: "https://apps.apple.com/gb/app/muzzi/id1558392121",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.muzzi.bulbupmedia",
    },
    {
      id: 1,
      title: 'REC',
      description: 'I was the sole developer for Remote Engineer Console as it was made as part of my placement projects. REC is an iOS app providing remote access to bureau data for in-the-field operatives. Its features include: in-app messaging system (including sending and receiving attachments) and the possibility to display data as charts.',
      technologies: 'Technologies: Swift, Storyboard, CocoaTouch, CocoaPods MVC, TCP Connections and CoreData.',
      thumbnailImagePath: './assets/images/iosEricc_chartNew.png',
      about: "The iOS application was developed for a big multinational retailer. Where the main goal was to facilitate the work and save time for the on-field engineers. So the engineers don't have to contact someone else to get access to the data.", 
      images: ['./assets/images/iosEricc_chartNew.png', './assets/images/iosEricc_requestEvents1Dark.png', './assets/images/iosEricc_EventsNew.png', './assets/images/iosEricc_eventEntrysNew.png', './assets/images/iosEricc_deleteAtacchement.png',],
      githubLink: "",
      appStoreLink: "",
      playStoreLink: "",
    },
    {
      id: 2,
      title: 'Full Stack Application - Real Estate SPA',
      description: `A single page application using React and Ant Design for the frontend and NodeJS and Koa for the backend. The application included authentication methods, different types of users with different types of permissions. OpenAPI documentation for the REST API's, JSDocs for code documentation and Unit Testing.`,
      technologies: 'NodeJS, Koa, React, JavaScript, REST API, Ant Design, MySQL.',
      thumbnailImagePath: './assets/images/spa_propertyList.png',
      about: "The single-page application was a coursework where I had to develop a full stack application by myself. For this real estate application, we have the agent and then the normal user. The main features that this project included were to register as an agent, add properties to sell, including photos, manage the properties (Update/Delete), and read the messages from the clients. The normal user could only see the  list of properties and send a message to the relevant agent. The backend server had implemented, authentication method, different roles  and permissions for a different types of users, it had a JSON schema Validation, OpenAPI documentation, JSDoc for code documentation and API's testing. The application allowed as well to search for properties by keywords.", 
      images: ['./assets/images/spa_propertyList.png', './assets/images/spa_propertyListAdmin.png', './assets/images/spa_propertyDetails.png', './assets/images/spa_editProperty.png', './assets/images/spa_openAPI.png', './assets/images/spa_JSDocs.png'],
      githubLink: "",
      appStoreLink: "",
      playStoreLink: "",
    },
    {
      id: 3,
      title: 'ECON',
      description: 'ECON is a multi-platform touchscreen desktop application that manages all the mechanical systems for a retail shop. This application was made on request for a big international retailer. I worked as a team with another software developer and our project manager using Agile methodology. Its features include: creating posts, realtime messaging and a responsive search system.',
      technologies: 'Technologies: Java, JavaFX, Scene Builder, TCP Connections.',
      thumbnailImagePath: './assets/images/econ_mainDasboard.png',
      about: "The JavaFx application was developed for a big multinational retailer. With the goal of rewriting an existing application so it can be executed on different platforms (Linux, Windows, macOS). The Application itself allowed in-store staff to have live data access for most of the mechanical systems that are in a store (HVAC, Boilers, etc).  It allowed as well to make some small changes to the schedule and some of mechanical systems.", 
      images: ['./assets/images/econ_mainDasboard.png', './assets/images/econ_Calendar.png', './assets/images/econ_Repeat.png', './assets/images/econ_Schedule.png' ],
      githubLink: "",
      appStoreLink: "",
      playStoreLink: "",
    }
  ];