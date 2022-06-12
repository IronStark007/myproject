import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';


export default function ProjectList(props) {
  return (
    <Box sx={{ flexGrow: 1 }} mt={4}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {props.projects.map((ele, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ProjectCard projectDetails={ele}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
