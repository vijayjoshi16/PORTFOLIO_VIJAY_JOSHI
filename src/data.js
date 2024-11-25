export const education = [
  {
    name:"Indian Institute of Information Technology, Pune",
    course:"Bachelor of Technology in Computer Science and Engineering",
    year:"2019-2023",
    grade:"8.46/10"
  },
  {
    name:"Ramnivas Ruia Junior College, Matunga, Mumbai",
    course:"Grade 12 - Higher Secondary",
    year:"2017-2019",
    grade:"82.70%"
  },
  {
    name:"Kohinoor International School, Vidyavihar, Mumbai",
    "course":"Grade 10 - Secondary",
    year:"2010-2017",
    grade:"94.67%"
  }
]

export const skills = [
  {
    name:"C",
    icon_class:"devicon-c-plain"
  },
  {
    name:"C++ (Competitive Programming)",
    icon_class:"devicon-cplusplus-plain"
  },
  {
    name:"Java",
    icon_class:"devicon-java-plain"
  },
  {
    name:"Python",
    icon_class:"devicon-python-plain"
  },
  {
    name:"HTML",
    icon_class:"devicon-html5-plain"
  },
  {
    name:"CSS",
    icon_class:"devicon-css3-plain"
  },
  {
    name:"JavaScript",
    icon_class:"devicon-javascript-plain"
  },
  {
    name:"React JS",
    icon_class:"devicon-react-original"
  },
  {
    name:"Node JS",
    icon_class:"devicon-nodejs-plain"
  },
  {
    name:"Express JS",
    icon_class:"devicon-express-original"
  },
  {
    name:"Mongo DB",
    icon_class:"devicon-mongodb-plain"
  },
  {
    name:"SQL",
    icon_class:"devicon-mysql-plain"
  },
  {
    name:"Android",
    icon_class:"devicon-android-plain"
  },
  {
    name:"Jupyter",
    icon_class:"devicon-jupyter-plain"
  },
  {
    name:"Heroku",
    icon_class:"devicon-heroku-original"
  },
  {
    name:"Git",
    icon_class:"devicon-git-plain"
  },
  {
    name:"GitHub",
    icon_class:"devicon-github-original"
  },
]

export const workExperience = [
  {
    name: "Navi",
    logo:"./assets/navi.webp",
    position: "Software Development Engineer",
    date: "July 2023 - Present",
    "description":[
      "Worked on building a Golang based backend service for Navi’s in-house incident management portal\n" +
      "replacing Blameless to track the entire lifecycle of customer issues/incidents.",
      "Designed and implemented integrations with monitoring services to automatically post Grafana images and impacted customer data during alerts and metric breaches caused by third-party vendor issues.",
      "Collaborated on the development of Gen-AI support, enabling the automated generation of Root Cause Analysis (RCA) documents for customer incidents using data from Google Meet transcripts and Slack conversations, significantly reducing the time required for RCA compared to manual methods.",
      "Facilitated the onboarding of business units and stakeholders to the platform, ensuring smooth integration and adoption.",
      "Spearheaded the major migration of all the cron jobs in the service to Airflow improving the reliability, scalability, and manageability of scheduled tasks",
      "Implemented automatic archival of communication channels post-incident resolution and escalation mechanisms on SLA breaches",
      "Led a major refactoring effort of the service, addressing significant technical debts, improving service stability, reducing API latency, and enhancing code testability. This initiative resulted in increased code coverage and overall system robustness."
    ]
  },
  {
    name: "Yugabyte",
    logo:"./assets/yugabytedb.webp",
    position: "Engineering Intern",
    date: "July 2022 - Dec 2022",
    "description":[
      "Collaborated with the core database team on YugabyteDB, a cutting-edge distributed SQL database.",
      "Spearheaded the development of YCQL (Yugabyte Cloud Query Language) workload, simulating real-world complex use cases in a randomised manner.",
      "Wrote integration tests for xCluster replication in YugabyteDB, facilitating seamless data replication between dual data centers."
    ]
  },
  {
    name: "Blinkit",
    logo:"./assets/blinkit.webp",
    position: "Software Development Engineer Intern",
    date: "March 2022 - July 2022",
    "description":[
      "Worked with the Android team on the Blinkit App with over 10 million play store downloads",
      "Built the frontend for Blinkit Print – India’s first instant print delivery service including features such as multipart file uploading, print preview for various print configurations(color/bnw/portrait/landscape) for the uploaded file and delivery of the printouts from the dark stores in just minutes.",
      "Impact of the print delivery service includes expansion of Blinkit's scope from initially selling only products on their platform to now providing products as well as services.",
      "Carried forward code migration of the consumer app from React Native to Native Android (Kotlin)",
      "Added support for earliest delivery time and sponsorships of products in the consumer app and built the UI for Blinkit Cash feature in the cart page",
      "Worked on the UI transformation layer for conversion of the pre-existing Blinkit's React Native widgets to Zomato's Kotlin Snippets",
      "Used MVVM Architecture in Kotlin, wrote clean and production ready code with best possible practices"
    ],
    work_link: "https://play.google.com/store/apps/details?id=com.grofers.customerapp&hl=en_IN&gl=US"
  }
  ,
  {
    name: "COMET Labs",
    logo:"./assets/comet.jpg",
    position: "Web Developer",
    date: "November 2020 - March 2021",
    "description":[
      "Worked on a community platform to connect nearly 5000 IIIT students and clubs from 25 colleges",
      "Used Next JS as the front-end framework and React Hooks for state management",
      "Developed frontend for login/signup, edit profile, customized portfolio, search OS project, project details",
      "Top contributor, led a team of 5 interns and further mentored junior batches for later phases of the opensource project"
    ],
    work_link: "https://github.com/COMET-Labs/COMET-Frontend-OS"
  }
]

export const projects = [
  {
    name:"Poll Towards A Goal",
    tech:"• MongoDB • Express JS • Node JS • React JS • Material-UI",
    description:[
      "Web app intended to provide create polls (personal and organization), explore polls, vote to polls, poll results, organization profile/dashboard features",
      "Achieved Lighthouse score of 90, 93 and 92 for performance, best practices and SEO respectively on a scale of 100"
    ],
    img:"./assets/p-tag.png",
    links: [
      {
        type:"Front-end GitHub",
        link:"https://github.com/vijayjoshi16/Poll-Towards-A-Goal-Frontend"
      },
      {
        type:"Back-end GitHub",
        link:"https://github.com/vijayjoshi16/Poll-Towards-A-Goal-Backend"
      }
    ]
  },
  {
    name:"Lococart",
    tech:"• MongoDB • Express JS • Node JS • React JS • Material-UI",
    description:[
      "Bidding based E-Commerce web app where the sellers compete to provide products to customers at lowest prices through the bidding feature on an order which will be active for a 3hr bidding window",
      "Provided other features such as authentication, email OTP verification, explore products, add products(sellers), get best seller for an order, get active bids, place bid for an order and many more",
      "Used jwt for authorization, nodemailer to send emails"
    ],
    img:"./assets/lococart.png",
    links: [
      {
        type:"Front-end GitHub",
        link:"https://github.com/vijayjoshi16/Lococart-Frontend"
      },
      {
        type:"Back-end GitHub",
        link:"https://github.com/vijayjoshi16/Lococart-Backend"
      }
    ]
  },
  {
    name:"Postaholic",
    tech:"• MongoDB • Express JS • Node JS • React JS",
    description:[
      "A social media website built with MERN Stack having features like authentication, explore posts, create post, profile, follow users, like and comment on posts, update profile photo",
      "Used jwt for authorization, cloudinary to store images and heroku for deployment",
    ],
    img:"./assets/postaholic.png",
    links: [
      {
        type:"GitHub",
        link:"https://github.com/vijayjoshi16/POSTAHOLIC-SOCIAL-MEDIA-WEBSITE"
      }
    ]
  },
  {
    name:"i-Diagnostic Kit",
    tech:"• HTML • CSS • Jupyter • Flask • Matplotlib • Seaborn • Numpy • Scikit-learn",
    description:[
      "An online machine learning based web prototype built with flask that predicts the possibility of being positive towards chronic kidney, diabetes and heart disease tests",
      "Used algorithms such as Random Forest Classifier, Logistic Regression, KNN Classifier",
      "Achieved accuracy between 73-100% for all the medical tests"
    ],
    img:"./assets/i-diag.png",
    links: [
      {
        type:"GitHub",
        link:"https://github.com/vijayjoshi16/i-Diagnostic-Kit"
      }
    ]
  },
  {
    name:"SmartKart App",
    tech:"Android • Java • XML • Firebase",
    description:[
      "Android Ecommerce App providing features to customer, admin and deliver boy",
      "Used Firebase as a Real-time database"
    ],
    img:"./assets/smartkart.png",
    links: [
      {
        type:"GitHub",
        link:"https://github.com/vijayjoshi16/Shopping-Ecommerce-App-Project"
      }
    ]
  },
  {
    name:"Virtual Contact-less Keyboard",
    tech:"Python • OpenCV • PyAutoGUI • Imutils",
    description:[
      "Keyboard interface without using any physical contact",
      "Helpful during pandemic times when avoiding contact is a must"
    ],
    img:"./assets/hci.png",
    links: [
      {
        type:"GitHub",
        link:"https://github.com/vijayjoshi16/Virtual-Contact-less-Keyboard-HCI-Project"
      }
    ]
  }, 
]

export const achievements = [
  "4 star coder on CodeChef (Max Rating: 1929)",
  "Codeforces Max Rating Specialist (1567)",
  "Leetcode Max Contest Rating 1858 (Knight)",
  "Top 10/905 in Codjuring Coding Contest hosted by NIT Patna",
  "Top 10/520 in ISA HIT Hack-A-Code Competition",
  "Global rank 239 among 9018 participants in LeetCode Biweekly Contest 65",
  "Global rank 289 among 8744 participants in LeetCode Biweekly Contest 64",
  "Global rank 176 among 3214 participants in CodeChef Starters 15 Division 2",
  "Global rank 297 among 6,943 participants in CodeChef August Cook-Off 2020",
  "Global rank 521 among 14,187 participants in CodeChef March Long Challenge 2020",
  "Cleared Google Code Jam 2021 Qualification Round",
  "Solved 550+ problems on LeetCode on a consistent basis",
  "40+ stars on GitHub, 1.8k+ views in 14 days for my android project SmartKart App",
  "Top 1.81% among 1.1 million candidates in JEE Main 2019"
]