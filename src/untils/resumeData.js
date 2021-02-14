import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default{
  name:'Qi Cao (Alan)',
  title:'Full stack developer',
  phone:'801-557-3216',
  email:'alanqicao@gmail.com',
  web:'https://www.alanqicao.com',
  address:'Salt Lake City, UT',

  socials:{

    Github:{
      link:'https://github.com/alanqicao',
      text:'MyGithub',
      icon:<GitHubIcon/>,
    },

    LinkIn:{
        link:'https://linkedin.com/in/alanqicao',
        text:'MyLinkedin',
        icon:<LinkedInIcon/>,
    }

  }


}