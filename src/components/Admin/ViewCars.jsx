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
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TopBar from "../Common/TopBar";
import ToolBar from "../Common/ToolBar";
import Drawer from "../Common/Drawer";
import { deleteCar, getCars } from "../../services/carsService";

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
}));

const ViewCars = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [cars, setCars] = React.useState([]);

  const getCarsData = async () => {
    const { data } = await getCars();
    const cars = [...data];
    setCars(cars);
  };

  React.useEffect(() => {
    getCarsData();
  }, []);

  const handleDelete = async (carId) => {
    await deleteCar(carId).then(() => {
      getCarsData();
    });
  };

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
          {cars.map((car, index) => (
            <Grid item md={3}>
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      C
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={car.make + " " + car.model + " " + car.name}
                  subheader={car.modelYear}
                />
                <CardMedia
                  className={classes.media}
                  image="assets/img/car%20guide.png"
                  title="Car Image"
                />
                <CardContent>
                  <Typography variant="h" color="textSecondary" component="h6">
                    ${car.price}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleDelete(car._id);
                    }}
                    aria-label="share"
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
};

export default ViewCars;
