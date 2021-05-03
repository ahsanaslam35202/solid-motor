import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#e6f8ff",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DisplayCard(props) {
  const classes = useStyles();
  const { title, variant, value } = props;
  const bull = <span className={classes.bullet}>•</span>;
  console.log(props);
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h6" component="h2">
          {props.title}
        </Typography>
        <Typography variant={variant || ""} component="h6">
          {props.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
