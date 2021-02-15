import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Language, WebOutlined, YouTube } from "@material-ui/icons";

export default {
  name: "Qi Cao (Alan)",
  title: "Full stack developer",
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
    "I’ve always loved to build things. Still do. To me, building violins and building software are the same — I get the chance to mold a block of wood or a line of code from the ground up into something intricate and beautiful. When it comes to debugging code or restoring violins, using creative ways to solve problems and thinking outside the box is key.\n\n\nsomting else",
  experiences:[
    {
      title:'Work 1',
      date:'2010 - Present',
      description:'i woerja sdlkjf nasdfa sdfsd sdf werw sdfs sdfsd',

    },
    {
      title:'Work 2',
      date:'2018 - 2010',
      description:'i woerja sdlkjf nasdfa sdfsd sdf werw sdfs sdfsd',

    },
    {
      title:'Work 3',
      date:'Aug 2015 - Sep 2018',
      description:'i woerja sdlkjf nasdfa sdfsd sdf werw sdfs sdfsd',

    },
  ],
  educations:[
    {
      title:'school 1',
      date:'2010 - Present',
      description:'i woerja sdlkjf nasdfa sdfsd sdf werw sdfs sdfsd',

    },
    {
      title:'school 2',
      date:'2018 - 2010',
      description:'i woerja sdlkjf nasdfa sdfsd sdf werw sdfs sdfsd',

    },
    {
      title:'school 3',
      date:'Aug 2015 - Sep 2018',
      description:'i woerja sdlkjf nasdfa sdfsd sdf werw sdfs sdfsd',

    },
  ],

  services:[
    {
      title:'web Dev',
      description:'I have been a web developer for 2 years',
      icon:<WebOutlined/>,
    },
    {
      title:'Branding Identity',
      description:'I have been a web developer for 2 years',
      icon:<WebOutlined/>,
    },
    {
      title:'hand made violin ',
      description:'I have been a web developer for 2 years',
      icon:<WebOutlined/>,
    },
  
  ],

  skills:[
    {
      title:'FRONT-END',
      description:[
        "ReactJS",
        "JavaScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title:'BACK-END',
      description:[
        "Ruby",
        "JAVA",
        "C++",
      ],
    },
    {
      title:'DATABASES',
      description:[
        "Firebase",
        "AWS",
        "MYSQL",
        "Postgres",

      ],
    },
    {
      title:'SOURCE CONTROL',
      description:[
        "Git",
        "GitHub",
        "SCRUM/Agile",
      ],
    },
  ],
  projects:[
  {
    tag:'React',
    image:'https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?cs=srgb&dl=pexels-felix-mittermeier-956981.jpg&fm=jpg',
    title:'React Project 1',
    caption:'a long desritopn',
    description:'This is my project description',
    links:[
      {link:'https://www.google.com',icon:<YouTube/>},
      {link:'https://www.google.com',icon:<GitHubIcon/>},
      {link:'https://www.google.com',icon:<Language/>},
    ]
  },
  {
    tag:'React',
    image:'https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?cs=srgb&dl=pexels-felix-mittermeier-956981.jpg&fm=jpg',
    title:'React Project 2',
    caption:'a sort desritopn',
    description:'This is my project description',
    links:[
      {link:'https://www.google.com',icon:<YouTube/>},
      {link:'https://www.google.com',icon:<GitHubIcon/>},
      {link:'https://www.google.com',icon:<Language/>},
    ]
  },

  {
    tag:'Java',
    image:'https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?cs=srgb&dl=pexels-felix-mittermeier-956981.jpg&fm=jpg',
    title:'Java Project 1',
    caption:'a sort desritopn',
    description:'This is my project description',
    links:[
      {link:'https://www.google.com',icon:<YouTube/>},
      {link:'https://www.google.com',icon:<GitHubIcon/>},
      {link:'https://www.google.com',icon:<Language/>},
    ]
  },


  {
    tag:'Python',
    image:'https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?cs=srgb&dl=pexels-felix-mittermeier-956981.jpg&fm=jpg',
    title:'Python Project 1',
    caption:'a sort desritopn',
    description:'This is my project description',
    links:[
      {link:'https://www.google.com',icon:<YouTube/>},
      {link:'https://www.google.com',icon:<GitHubIcon/>},
      {link:'https://www.google.com',icon:<Language/>},
    ]
  }


]
  };
