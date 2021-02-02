import { Typography } from '@material-ui/core'
import React from 'react';
import './Profile.css';
import CustomTimeLine from './CustomTimeLine';

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>
            Alan
        </Typography>
        <Typography className='title'>
            Alan
        </Typography>
      </div>


      <figure className='profile_image'>
        <img src='https://res.cloudinary.com/dvnkqa41b/image/upload/v1595620474/circle-cropped_rl2die.png' alt=""/>
      </figure>
      <div className='profile_information'>
        <CustomTimeLine/>
          <br/>
          <button>my button</button>
      </div>
    </div>
  )
}

export default Profile
