import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TopBar from "../Common/TopBar";
import ToolBar from "../Common/ToolBar";
import Drawer from "../Common/Drawer";
import { getCars } from "../../services/carsService";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "70.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#ccc",
  },
  card_subtitle: {
    width: "100%",
    marginTop: "10px",
  },
}));

const BuyCarView = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //   const [cars, setCars] = React.useState([]);

  //   const getCarsData = async () => {
  //     const { data } = await getCars();
  //     const cars = [...data];
  //     setCars(cars);
  //   };

  //   React.useEffect(() => {
  //     getCarsData();
  //   }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.container}>
      <TopBar handleDrawerToggle={handleDrawerToggle} />
      <Drawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <main className={classes.content}>
        <ToolBar />
        <Grid container spacing={3}>
          <Grid item md={3}>
            <Card className={classes.root}>
              <CardHeader
                titleTypographyProps={{ variant: "subtitle2" }}
                subheaderTypographyProps={{ variant: "body2" }}
                title={"Offered Down Payment: "}
                subheader={"Offered CashDown: "}
              />
              <CardMedia
                className={classes.media}
                image="assets/img/car%20guide.png"
                title="Car Image"
              />
              <CardContent>
                <Typography
                  variant="h"
                  color="textSecondary"
                  component="subtitle2"
                >
                  {"Car Name"}
                </Typography>
                <br />
                <Typography
                  variant="h"
                  color="textSecondary"
                  component="subtitle2"
                >
                  {"Car Total Price"}
                </Typography>
                <br />
                <Typography
                  variant="h"
                  className={classes.card_subtitle}
                  color="textSecondary"
                  component="subtitle2"
                >
                  {"Buyer Name"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default BuyCarView;
