const jobs = [
    {
      id: 1,
      companySite: "https://www.amazon.com",
      company: "Amazon",
      logo: "img/amazon.svg",
      position: "Fullstack Developer",
      postedAt: "2d ago",
      contract: "Full Time",
      location: "United State",
      desc: "We are looking for a highly skilled computer programmer who is comfortable with both front and back end programming. Full stack developers are responsible for developing and designing front end web architecture, ensuring the responsiveness of applications, and working alongside graphic designers for web design features, among other duties.Full stack developers will be required to see out a project from conception to final product, requiring good organizational skills and attention to detail.",
      requirements: {
        reqTitle:
        "Full Stack Developer Requirements:"
          ,
  
        reqItem: [
          "Strong organizational and project management skills.",
          "Proficiency with fundamental front-end languages such as HTML, CSS, and JavaScript.",
          "Familiarity with JavaScript frameworks such as Angular JS, React, and Amber.",
          "Proficiency with server-side languages such as Python, Ruby, Java, PHP, and .Net.",
          "Familiarity with database technology such as MySQL, Oracle, and MongoDB."
        ],
      },
  
      responsibility: {
        resTitle: "Full Stack Developer Responsibilities:",
  
        resItem: [
          "Developing front end website architecture.",
          "Developing back-end website applications.",
          "Creating servers and databases for functionality.",
          "Designing and developing APIs.",
        ],
      },
    },
    {
      id: 2,
      companySite: "https://www.ibm.com",
      company: "IBM",
      logo: "img/ibm.svg",
      position: "Frontend Developer",
      postedAt: "5d ago",
      contract: "Part Time",
      location: "United Kingdom",
      desc: "We are looking for programmers with a keen eye for design for the position of front end developer. Front end developers are responsible for ensuring the alignment of web design and user experience requirements, optimizing web pages for maximum efficiency, and maintaining brand consistency across all web pages, among other duties.Front end developers are required to work in teams alongside back end developers, graphic designers, and user experience designers to ensure all elements of web creation are consistent. This requires excellent communication and interpersonal skills.",
      requirements: {
        reqTitle:
          "Front End Developer Requirements:",
        reqItem: [
          "Proficiency in HTML, CSS, JavaScript, and jQuery.",
          "Understanding of server-side CSS.",
          "Understanding of SEO principles.",
          "Experience with graphic design applications such as Adobe Illustrator.",
        ],
      },
  
      responsibility: {
        resTitle:
          "Front End Developer Responsibilities:",
  
        resItem: [
          "Determining the structure and design of web pages.",
          "Ensuring user experience determines design choices.",
          "Developing features to enhance the user experience.",
          "Ensuring web design is optimized for smartphones.",
        ],
      },
    },
    {
      id: 3,
      companySite: "https://www.tesla.com",
      company: "Tesla",
      logo: "img/tesla.svg",
      position: "Back-end Developers",
      postedAt: "1d ago",
      contract: "Full Time",
      location: "Canada",
      desc: "We are looking for an analytical, results-driven back-end developer who will work with team members to troubleshoot and improve current back-end applications and processes. The Back-end Developer will use his or her understanding of programming languages and tools to analyze current codes and industry developments, formulate more efficient processes, solve problems, and create a more seamless experience for users. You should have excellent communication, computer, and project management skills.To succeed as a backend developer, you should be focused on building a better, more efficient program and creating a better end-user experience. You should be knowledgeable, collaborative, and motivated.",
      requirements: {
        reqTitle:
          "Back-end Developer Requirements:",
  
        reqItem: [
          "Fluency or understanding of specific languages, such as Java, PHP, or Python, and operating systems may be required.",
          "Strong understanding of the web development cycle and programming techniques and tools.",
          "Focus on efficiency, user experience, and process improvement.",
          "Excellent project and time management skills.",
        ],
      },
  
      responsibility: {
        resTitle:
          "Back-end Developer Responsibilities:",
  
        resItem: [
          "Collaborating with the front-end developers and other team members to establish objectives and design more functional, cohesive codes to enhance the user experience.",
          "Developing ideas for new programs, products, or features by monitoring industry developments and trends.",
          "Participating in continuing education and training to remain current on best practices, learn new programming languages, and better assist other team members.",
          "Taking lead on projects, as needed.",
        ],
      },
    },
    {
        id: 4,
        companySite: "https://careers.google.com",
        company: "Google",
        logo: "img/google.svg",
        position: "Frontend Developer",
        postedAt: "8d ago",
        contract: "Freelance",
        location: "Australia",
        desc: "We are looking for programmers with a keen eye for design for the position of front end developer. Front end developers are responsible for ensuring the alignment of web design and user experience requirements, optimizing web pages for maximum efficiency, and maintaining brand consistency across all web pages, among other duties.Front end developers are required to work in teams alongside back end developers, graphic designers, and user experience designers to ensure all elements of web creation are consistent. This requires excellent communication and interpersonal skills.",
        requirements: {
          reqTitle:
            "Front End Developer Requirements:",
          reqItem: [
            "Proficiency in HTML, CSS, JavaScript, and jQuery.",
            "Understanding of server-side CSS.",
            "Understanding of SEO principles.",
            "Experience with graphic design applications such as Adobe Illustrator.",
          ],
        },
    
        responsibility: {
          resTitle:
            "Front End Developer Responsibilities:",
    
          resItem: [
            "Determining the structure and design of web pages.",
            "Ensuring user experience determines design choices.",
            "Developing features to enhance the user experience.",
            "Ensuring web design is optimized for smartphones.",
          ],
        },
      },
    {
      id: 5,
      companySite: "Apple.com",
      company: "Apple",
      logo: "img/apple.svg",
      position: "Remote DevOps Engineer",
      postedAt: "1w ago",
      contract: "Part Time",
      location: "Remote",
      desc: "We are searching for a decisive and insightful DevOps engineer to join our reputable company. The DevOps engineer will be involved in various stages of each product's lifespan and should remain abreast of technological advancements to promote efficiency. You should also keep track of customer reviews to enhance marketability.To ensure success as a DevOps engineer, you should ensure that all outputs remain safe for public consumption. Ultimately, a top-notch DevOps engineer will demonstrate excellent leadership skills and the capacity to mentor junior staff.",
      requirements: {
        reqTitle:
          "DevOps Engineer Requirements:",
  
        reqItem: [
          "Degree in computer science, software engineering, or an adjacent field.",
          "Experience using an array of automation tools.",
          "Demonstrated experience using a wide variety of coding languages.",
          "Curious, discerning envelope pusher.",
        ],
      },
  
      responsibility: {
        resTitle:
          "DevOps Engineer Responsibilities:",
  
        resItem: [
          "Collaborating with coworkers to conceptualize, develop, and release software.",
          "Conducting quality assurance to ensure that the software meets prescribed guidelines.",
          "Rolling out fixes and upgrades to software, as needed.",
          "Securing software to prevent security breaches and other vulnerabilities.",
        ],
      },
    },
    {
      id: 6,
      companySite: "https://www.asml.com",
      company: "ASML",
      logo: "img/asml.svg",
      position: "System Administrator",
      postedAt: "3w ago",
      contract: "Full Time",
      location: "Netherlands",
      desc: "We are looking for a talented, diligent system administrator to maintain and administer our company's networked system of computers. The system administrator's responsibilities include troubleshooting hardware, software, and networking issues, as well as ensuring that all computing operations run with optimal performance and security.To be successful as a system administrator, you should have an excellent ability to solve problems using your in-depth understanding of information systems and computing solutions. The best system administrator will also be a team player, willing to handle all support requests with courtesy and professionalism.",
      requirements: {
        reqTitle:
          "System Administrator Requirements:",
  
        reqItem: [
          "Relevant degree or diploma in Information systems or information technology.",
          "Microsoft MCSE certification or similar.",
          "Past experience administering server-side technology and networked computing systems.",
          "Familiarity with SQL and database operations.",
        ],
      },
  
      responsibility: {
        resTitle:
          "System Administrator Responsibilities:",
  
        resItem: [
          "Configuring and maintaining the networked computer system, including hardware, system software, and applications.",
          "Ensuring data is stored securely and backed up regularly.",
          "Diagnosing and resolving hardware, software, networking, and system issues when they arise.",
          "Monitoring system performance to ensure everything runs smoothly and securely.",
          "Researching and recommending new approaches to improve the networked computer system.",
        ],
      },
    },
    {
      id: 7,
      companySite: "Netflix.com",
      company: "Netflix",
      logo: "img/netflix.svg",
      position: "Fullstack Developer",
      postedAt: "10d ago",
      contract: "Full Time",
      location: "United State",
      desc: "We are looking for a highly skilled computer programmer who is comfortable with both front and back end programming. Full stack developers are responsible for developing and designing front end web architecture, ensuring the responsiveness of applications, and working alongside graphic designers for web design features, among other duties.Full stack developers will be required to see out a project from conception to final product, requiring good organizational skills and attention to detail.",
      requirements: {
        reqTitle:
        "Full Stack Developer Requirements:",
        reqItem: [
          "Strong organizational and project management skills.",
          "Proficiency with fundamental front-end languages such as HTML, CSS, and JavaScript.",
          "Familiarity with JavaScript frameworks such as Angular JS, React, and Amber.",
          "Proficiency with server-side languages such as Python, Ruby, Java, PHP, and .Net.",
          "Familiarity with database technology such as MySQL, Oracle, and MongoDB."
        ],
      },
  
      responsibility: {
        resTitle: "Full Stack Developer Responsibilities:",
        resItem: [
          "Developing front end website architecture.",
          "Developing back-end website applications.",
          "Creating servers and databases for functionality.",
          "Designing and developing APIs.",
        ],
      },
    },
    {
      id: 8,
      companySite: "https://www.lvmh.com",
      company: "lvmh",
      logo: "img/lvmh.png",
      position: "Web Designer",
      postedAt: "8d ago",
      contract: "Freelance",
      location: "France",
      desc: "We are looking for a web designer who will be responsible for creating great websites for our clients. Primary duties include conceptualizing and implementing creative ideas for client websites, as well as creating visual elements that are in line with our clients' branding. You will be working closely with our web development team to ensure proper and hassle-free implementation.To be successful in this role, you will need to have excellent visual design skills and be proficient in graphic design software such as Adobe Photoshop and Adobe Illustrator.",
      requirements: {
        reqTitle:
          "Web Designer requirements:",
  
        reqItem: [
          "Proficiency in graphic design software including Adobe Photoshop, Adobe Illustrator, and other visual design tools.",
          "Proficiency in front-end development web programming languages such as HTML and CSS, JQuery, and JavaScript.",
          "Good understanding of content management systems",
          "Creative and open to new ideas.",
        ],
      },
  
      responsibility: {
        resTitle:
          "Web Designer Responsibilities :",
  
        resItem: [
          "Conceptualizing creative ideas with clients.",
          "Testing and improving the design of the website.",
          "Establishing design guidelines, standards, and best practices.",
          "Maintaining the appearance of websites by enforcing content standards.",
        ],
      },
    },
    {
      id: 9,
      companySite: "Yelp.com",
      company: "Yelp",
      logo: "img/yelp.svg",
      position: "iOS Developer",
      postedAt: "3d ago",
      contract: "Freelance",
      location: "Remote",
      desc: "We are looking to hire a talented iOS developer to design, build, and maintain the next generation of iOS applications. Your primary focus will be developing high-end iOS applications for the latest Apple mobile devices. Your duties may include collaborating with the design team for new application features, identifying and fixing application bottlenecks, maintaining the core code, and updating applications published on the App Store.To ensure success as an iOS developer, you should have a strong working knowledge of iOS Frameworks, be proficient in Objective-C, and be able to work as part of a team. Ultimately, an outstanding iOS developer should be able to create functional, attractive applications that perfectly meet the needs of the user.",
      requirements: {
        reqTitle:
          "iOS Developer Requirements:",
  
        reqItem: [
          "Knowledge of iOS back-end services.",
          "Proficient in Objective-C, Swift, and Cocoa Touch.",
          "Knowledge of Apple’s design principles and application interface guidelines.",
          "Familiarity with push notifications, APIs, and cloud messaging.",
        ],
      },
  
      responsibility: {
        resTitle:"iOS Developer Responsibilities :",
  
        resItem: [
          "Designing and building mobile applications for Apple’s iOS platform.",
          "Identifying potential problems and resolving application bottlenecks.",
          "Publishing application on App Store.",
          "Maintaining the code and atomization of the application.",
        ],
      },
    },
    {
      id: 10,
      companySite: "https://www.oracle.com",
      company: "Oracle",
      logo: "img/oracle.svg",
      position: "Frontend Developer",
      postedAt: "1mo ago",
      contract: "Full Time",
      location: "United States",
      desc: "We are looking to hire a talented iOS developer to design, build, and maintain the next generation of iOS applications. Your primary focus will be developing high-end iOS applications for the latest Apple mobile devices. Your duties may include collaborating with the design team for new application features, identifying and fixing application bottlenecks, maintaining the core code, and updating applications published on the App Store.To ensure success as an iOS developer, you should have a strong working knowledge of iOS Frameworks, be proficient in Objective-C, and be able to work as part of a team. Ultimately, an outstanding iOS developer should be able to create functional, attractive applications that perfectly meet the needs of the user.",
      requirements: {
        reqTitle:
          "iOS Developer Requirements:",
  
        reqItem: [
          "Knowledge of iOS back-end services.",
          "Proficient in Objective-C, Swift, and Cocoa Touch.",
          "Knowledge of Apple’s design principles and application interface guidelines.",
          "Familiarity with push notifications, APIs, and cloud messaging.",
        ],
      },
  
      responsibility: {
        resTitle:"iOS Developer Responsibilities :",
  
        resItem: [
          "Designing and building mobile applications for Apple’s iOS platform.",
          "Identifying potential problems and resolving application bottlenecks.",
          "Publishing application on App Store.",
          "Maintaining the code and atomization of the application.",
        ],
      },
    },
  ];
  
  export default jobs;
  