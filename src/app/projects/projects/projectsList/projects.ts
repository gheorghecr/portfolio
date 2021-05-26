export interface Projects {
    id: number;
    title: string;
    subtitle: string;
    technologies: string;
  }
  
  export const projects = [
    {
      id: 1,
      title: 'REC',
      subtitle: 'I was the sole developer for Remote Engineer Console as it was made as part of my placement work. REC is an iOS app providing remote access to bureau data for in-the-field operatives. Its features include: in-app messaging system (including sending and receiving attachments) and the possibility to display data as charts.',
      technologies: 'Technologies: Swift, Storyboard, CocoaTouch, CocoaPods MVC, TCP Connections and CoreData.'
    },
    {
      id: 2,
      title: 'Full Stack Application - Real Estate SPA',
      subtitle: `A single page application using React and Ant Design for the frontend and NodeJS and Koa for the backend. The application included authentication methods, different types of users with different types of permissions. OpenAPI documentation for the REST API's, JSDocs for code documentation and Unit Testing.`,
      technologies: 'NodeJS, Koa, React, JavaScript, REST API, Ant Design, MySQL.'
    },
    {
      id: 3,
      title: 'ECON',
      subtitle: 'ECON is a multi-platform touchscreen desktop application that manages all the mechanical systems for a retail shop. This application was made on request for a big international retailer. I worked as a team with another software developer and our project manager using Agile methodology. Its features include: creating posts, realtime messaging and a responsive search system.',
      technologies: 'Technologies: Java, JavaFX, Scene Builder, TCP Connections.'
    }
  ];