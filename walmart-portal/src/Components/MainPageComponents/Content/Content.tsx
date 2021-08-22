import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import grades from '../../../Images/grades.jpg'
import calendar from '../../../Images/calendar.png';
import cl from '../../../Images/classes.jpg';
import graduation from '../../../Images/graduation.jpg';
import news from '../../../Images/news.jpg';
import parking from '../../../Images/parking.jpg';
import resources from '../../../Images/resources.png';
import study from '../../../Images/study-plan.jpg';
import syllabus from '../../../Images/syllabus.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
      marginTop: '20px',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);

interface IContent {
    title?: string | null
    description?: string | null
    picture?: string | undefined
}

/**
 * Creation of the content grid, here we will set the images of each card and also their content
 */
export default function ComplexGrid() {
  const classes = useStyles();

  function FormRow(props: IContent) {
    return (
        <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={props.picture} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={3}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <Link to='/FutureImplementation'>{props.title}</Link>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    );
  }

  return (
    <div className={classes.root}>
        <Grid container spacing={8}>
            <Grid container item xs={12} spacing={3}>
                <FormRow title={"Grades"} description={"Check your students grades"} picture={grades} />
                <FormRow title={"Study Plan"} description={"Check all the study plans for all the majors"} picture={study}/>
                <FormRow title={"Enroll Calendar"} description={"Check the future dates for enrolling classes"} picture={calendar}/>
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <FormRow title={"Campus News"} description={"Check all the campus news"} picture={news}/>
                <FormRow title={"Campus Resources"} description={"List of all campus resources"} picture={resources}/>
                <FormRow title={"Campus Parking"} description={"Check the information of campus parking"} picture={parking}/>
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <FormRow title={"Syllabus Generator"} description={"Generate the syllabus for your class "} picture={syllabus}/>
                <FormRow title={"Classes Available"} description={"Help the students to pick their classes "} picture={cl}/>
                <FormRow title={"Graduation Status"} description={"Check the graduation status for your students"} picture={graduation}/>
            </Grid>
        </Grid>
    </div>
  );
}