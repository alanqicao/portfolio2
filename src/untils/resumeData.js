import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Language, WebOutlined, YouTube } from "@material-ui/icons";

export default {
  name: "Qi Cao (Alan)",
  title: "Full Stack Developer",
  phone: "801-557-3216",
  email: "alanqicao@gmail.com",
  web: "https://www.alanqicao.com",
  address: "Salt Lake City, UT",

  socials: {
    Github: {
      link: "https://github.com/alanqicao",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },

    LinkIn: {
      link: "https://linkedin.com/in/alanqicao",
      text: "MyLinkedin",
      icon: <LinkedInIcon />,
    },
  },

  about:
    "I’ve always loved to build things. Still do. To me, building violins and building software are the same — I get the chance to mold a block of wood or a line of code from the ground up into something intricate and beautiful. When it comes to debugging code or restoring violins, using creative ways to solve problems and thinking outside the box is key.",
  experiences: [
    {
      title: "Intermountain Healthcare -- Software Engineer Intern",
      date: "May 2022 - Sep 2022",
      description:
        "• Physician degital experience application \n• UI with React JS.\n• Data validation with Nest JS.\n• Jest unit testing.",
    },
    {
      title: "Apollo String LLC -- Digital Marketing",
      date: "2019 - 2022",
      description:
        "• Online Music Store. Set up online violin store and brand using Amazon and Shopify.\n• Produced and designed the digital branding with Adobe.\n• Analyzed buyer data using a third-party software to direct marketing strategies.",
    },
    {
      title: "CMC String LLC",
      date: "2018 - 2019",
      description:
        "• Repaired and hand-crafted violins and cellos while managing shop inventory.\n• Assisted customers with purchases.\n• Ensured customer satisfaction and shop’s quality of our work.",
    },

  ],
  educations: [
    {
      title: "Salt Lake Community College",
      date: "",
      description: "Associate of Science - AS, Computer Science",
    },
    {
      title: "University of Utah",
      date: "",
      description: "Full Stack Web Development Certificate",
    },
    {
      title: "Violin Making School Of American",
      date: "",
      description: "Luther, Violin Making, Restoration",
    },
  ],

  services: [
    {
      title: "web Dev",
      description: "I have been a web developer for 2 years",
      icon: <WebOutlined />,
    },
    {
      title: "Branding Identity",
      description: "I have been a web developer for 2 years",
      icon: <WebOutlined />,
    },
    {
      title: "hand made violin ",
      description: "I have been a web developer for 2 years",
      icon: <WebOutlined />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: ["ReactJS", "JavaScript", "Bootstrap", "TypeScript"],
    },
    {
      title: "BACK-END",
      description: ["Ruby", "JAVA", "C++", "NestJS"],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "AWS", "MYSQL", "Postgres"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub", "SCRUM/Agile"],
    },
  ],
  projects: [
    {
      tag: "Java",
      image:
        "https://res.cloudinary.com/dvnkqa41b/image/upload/v1660946623/Screenshot_2022-08-19_160334_gzc0ir.png",
      title: "Maze and algorithm",
      caption: "Solve Maze using differen algorithm",
      description: "Maze with UI build in JAVA ",
      links: [
        {
          link: "https://youtu.be/zv97H7lpxHc",
          icon: <YouTube />,
        },
        {
          link: "https://github.com/alanqicao/finalProject_Maze",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/alanqicao/finalProject_Maze",
          icon: <Language />,
        },
      ],
    },
    {
      tag: "Java",
      image:
        "https://res.cloudinary.com/dvnkqa41b/image/upload/v1614630557/plane_bq24hy.png",
      title: "Plane Game",
      caption: "Try to stay alive as long as you can",
      description:
        "Plane game is build in JAVA and bullet bounce back when it hit edge of window",
      links: [
        { link: "https://youtu.be/wbleSmpq8KY", icon: <YouTube /> },
        {
          link: "https://github.com/alanqicao/Java-Plane-Project",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/alanqicao/Java-Plane-Project",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React",
      image:
        "https://res.cloudinary.com/dvnkqa41b/image/upload/v1611130446/Screen_Shot_2021-01-20_at_1.07.29_AM_htqmsm.png",
      title: "NetFlix Trailer",
      caption: "NetFlix Trailer has real time trading movie and movie trailer",
      description:
        "This NetFlix Trailer page have fade in Navbar when you scroll, random trending movie in the banner, API call from other website, auto play movie trailer, and some css slow fade hover. ",
      links: [
        { link: "https://youtu.be/CpffWWjiGKo", icon: <YouTube /> },
        {
          link: "https://github.com/alanqicao/Netflix-clone",
          icon: <GitHubIcon />,
        },
        { link: "https://netflix-clone-32eac.web.app/", icon: <Language /> },
      ],
    },

    {
      tag: "React",
      image:
        "https://res.cloudinary.com/dvnkqa41b/image/upload/v1595620408/Screen_Shot_2020-07-24_at_1.22.56_PM_y66bgd.png",
      title: "Digital Glove Box",
      caption:
        "Digital Glove Box is full stack webpage for tracking your car's information",
      description:
        "Digital Glove Box is a repository for your vehicle and all of its identifying information, plus the ability to add as many vehicles as you'd like. Easy access to your documents from a secure cloud-based database.",
      links: [
        {
          link: "https://www.youtube.com/watch?v=uAMlLoYLoSo",
          icon: <YouTube />,
        },
        {
          link: "https://github.com/alanqicao/DigitalGloveBox",
          icon: <GitHubIcon />,
        },
        {
          link: "https://my-digital-glove-box.herokuapp.com",
          icon: <Language />,
        },
      ],
    },
    {
      tag: "React",
      image:
        "https://res.cloudinary.com/dvnkqa41b/image/upload/v1611130428/Screen_Shot_2021-01-20_at_1.08.04_AM_nz6cic.png",
      title: "Amazon Clone",
      caption: "Amazon Clone ia a Full-stack webpage ",
      description:
        "It has login auth user order track, and third party payment system",
      links: [
        { link: "https://youtu.be/hrDlNyh38EM", icon: <YouTube /> },
        {
          link: "https://github.com/alanqicao/Amazon-Clone-Full-stack",
          icon: <GitHubIcon />,
        },
        { link: "https://challenge-5bcae.web.app/", icon: <Language /> },
      ],
    },

    {
      tag: "React",
      image:
        "https://res.cloudinary.com/dvnkqa41b/image/upload/v1613435840/Screen_Shot_2021-02-15_at_5.36.34_PM_uvsyg4.png",
      title: "Facebook Messenger",
      caption: "Facebook Messenger is a real time chatting App",
      description:
        "Facebook Messenger is a real time chatting App has full back end support.",
      links: [
        { link: "https://youtu.be/IvMT_thdZQ4", icon: <YouTube /> },
        {
          link: "https://github.com/alanqicao/Facebook-Messenger-App",
          icon: <GitHubIcon />,
        },
        {
          link: "https://facebook-messenger-clone-f1b29.web.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React",
      image:
        "https://res.cloudinary.com/dvnkqa41b/image/upload/v1611602799/Screen_Shot_2021-01-25_at_12.25.15_PM_jixrip.png",
      title: "Robinhood Training Camp",
      caption:
        "Robinhood Training Camp is a React app that has real time stock market price",
      description: "You can add share to your personal stock account.",
      links: [
        { link: "https://youtu.be/i_8qnEzXCys", icon: <YouTube /> },
        {
          link: "https://github.com/alanqicao/Robinhood-Clone",
          icon: <GitHubIcon />,
        },
        { link: "https://robinhood-ad05e.web.app/", icon: <Language /> },
      ],
    },
    {
      tag: "UnrealEngine & C++",
      image:
        "https://res.cloudinary.com/dvnkqa41b/image/upload/v1614629321/bullCow_t3og9m.png",
      title: "BullCow Game",
      caption: "BullCowGame is a work guessing game",
      description: "BullCow Game is build using UnrealEngine 4 and C++",
      links: [
        { link: "https://youtu.be/5xV9Wr7DLDM", icon: <YouTube /> },
        {
          link: "https://github.com/alanqicao/BullCowGame-UnrealEngine",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/alanqicao/BullCowGame-UnrealEngine",
          icon: <Language />,
        },
      ],
    },
    {
      tag: "Architecture",
      image:
        "https://res.cloudinary.com/dvnkqa41b/image/upload/v1660946165/Screenshot_2022-08-19_154135_gxcd8a.png",
      title: "Robot Arm",
      caption: "Full arm robot with Arduino",
      description: "Whole functional robot arm with Arduino.",
      links: [
        { link: "https://youtu.be/k82c8T7KIW0", icon: <YouTube /> },
        {
          link: "https://github.com/alanqicao/Robot-Arm",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/alanqicao/Robot-Arm/blob/gh-pages/Robot%20Arm%20White%20Paper%20(1).pdf",
          icon: <Language />,
        },
      ],
    },
  ],
};
