import { Typography } from "@material-ui/core";
import React from "react";
import "./Profile.css";
import CustomTimeLine, { CustomTimeLineSeparator } from "./CustomTimeLine";
import resumeData from "../untils/resumeData";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from './Button';
import GetAppIcon from "@material-ui/icons/GetApp";

const CustomTimeLineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimeLineSeparator />
    <TimelineContent className='timeline_content'>
      {link ? (
        <Typography className='timelineItem_text'>
          <span>{title}:</span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className='timelineItem_text'>
          <span>{title}:</span>{" "}
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img
          src="https://res.cloudinary.com/dvnkqa41b/image/upload/v1613276795/mypic_vjsocy.png"
          alt=""
        />
      </figure>
      <div className="profile_information">
        <CustomTimeLine icon={<PersonOutlineIcon />}> 
        <CustomTimeLineItem title='Name' text={resumeData.name}/>
        <CustomTimeLineItem title='Title' text={resumeData.title}/>
        <CustomTimeLineItem title='Email' text={resumeData.email}/>
        <CustomTimeLineItem title='Location' text={resumeData.address}/>
        {Object.keys(resumeData.socials).map((key) =>(
       <CustomTimeLineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>

        ))}
        </CustomTimeLine>
      <div className='button_container'>
      <CustomButton text ={'Download Cv'} icon ={<GetAppIcon/>} />

      </div>
      </div>
    </div>
  );
};

export default Profile;
