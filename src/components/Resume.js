import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Resume.css";
import resumeData from "../untils/resumeData";
import CustomTimeLine, { CustomTimeLineSeparator } from "./CustomTimeLine";
import WorkIcon from "@material-ui/icons/Work";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
import SchoolIcon from '@material-ui/icons/School';


const Resume = () => {
  return (
    <>
      {/* about me  */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span> </span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>
      {/* education and experiences */}
      <Grid container className="section">
        <Grid item className="section_title mb_30">
          <span> </span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            {/* experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeLine title="Work Experience" icon={<WorkIcon />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimeLineSeparator/>
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>{experience.title}</Typography>
                      <Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
                      <Typography variant='body2' className='timeline_description'>{experience.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeLine>
            </Grid>
            {/* Education */}
            <Grid item sm={12} md={6}>
            <CustomTimeLine title="Education" icon={<SchoolIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomTimeLineSeparator/>
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>{education.title}</Typography>
                      <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                      <Typography variant='body2' className='timeline_description'>{education.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeLine>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* services */}
      <Grid container className="section"></Grid>
      {/* skill */}
      <Grid container className="section"></Grid>
      {/* contact */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
