import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import moment from 'moment';


export default function ProjectCard(props) {
    const [subs,setSubs] = React.useState(false);
    const colorChange = (e)=> {
        if (e.target.style.color === 'red'){
            e.target.style.color = 'rgba(0, 0, 0, 0.54)'
        }else {
            e.target.style.color = 'red'

        }
    }
  return (
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor:'lightBlue'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.projectDetails.avatar}
          </Avatar>
        }
        title={props.projectDetails.name}
        subheader={moment(props.projectDetails.created_at).startOf('hour').fromNow()}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.projectDetails.image}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={colorChange}>
          <FavoriteIcon/>
        </IconButton>
        {subs ?
            <Button variant="contained" onClick={_=>subs? setSubs(false):setSubs(true)}  style={{backgroundColor:'red'}}>Subscibed</Button>:
            <Button variant="outlined" onClick={_=>subs? setSubs(false):setSubs(true)}>Not Subscibe</Button>
        }
      </CardActions>
    </Card>
  );
}
