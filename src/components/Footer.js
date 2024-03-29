import { Typography } from '@material-ui/core';
import React from 'react';
import './Footer.css';
import resumeData from '../untils/resumeData';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_left">
          <Typography className='footer_name'>{resumeData.name}</Typography>
        </div>
      <div className="footer_right">
        <Typography className='footer_copyright'>
          Developed by <a href='/' target='_blank'>Qi Cao(Alan)</a>
          <br/>
          Designed by <a href='/' target='_blank'>Travonline</a>
          .
        </Typography>
         </div>
    </div>
  )
}

export default Footer
