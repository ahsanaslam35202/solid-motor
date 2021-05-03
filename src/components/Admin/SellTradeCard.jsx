import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    borderRadius: "12px",
    padding: "6px",
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
  checkButton: {
    backgroundColor: "#00b7fa",
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  mainColor: {
    color: "#00b7fa",
  },
  greenColor: {
    color: "green",
  },
});

export default function SellTradeCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.sellOrTrade}
        </Typography>
        <Typography variant="h5" component="h2" className={classes.mainColor}>
          {props.carMakeModel}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Model Year {props.carModelYear}
        </Typography>
        <Typography variant="body2" component="p">
          {props.drivenMiles} Miles Driven
          <br />
          {props.engineType}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={{
            pathname: "/sellTradeDetails",
            state: { sellTrade: props.sellTrade },
          }}
          style={{ textDecoration: "none" }}
        >
          <Button className={classes.checkButton} size="small">
            Reply
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
