import { Grid } from "@material-ui/core";
import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <>
      {/* about me  */}
      <Grid container className="">
        <Grid item className='section_title'>
            <span></span>
            <Typography>About Me</Typography>
        </Grid>
      </Grid>
      {/* education and experiences */}
      <Grid container className=""></Grid>
      {/* services */}
      <Grid container className=""></Grid>
      {/* skill */}
      <Grid container className=""></Grid>
      {/* contact */}
      <Grid container className=""></Grid>
    </>
  );
};

export default Resume;
