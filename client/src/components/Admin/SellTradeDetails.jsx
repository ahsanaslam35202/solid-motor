import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import Drawer from "../Common/Drawer";
import ToolBar from "../Common/ToolBar";
import TopBar from "../Common/TopBar";
import DisplayCard from "./DisplayCard";
import { getSellTrade, putSellTrade } from "../../services/sellTradeService";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    background: "none",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  cardHeading: {
    textAlign: "center",
    fontSize: "42px !important",
    marginTop: "20px",
    color: "#00b7fa",
  },
  featuresBox: {
    boxShadow: "2px 7px 12px 7px rgba(56,74,76,0.05)",
    borderRadius: "5px",
    margin: "0px 12px",
    padding: "50px !important",
    backgroundColor: "#f1f7f9",
  },
  chipMargin: {
    marginRight: theme.spacing(1),
  },
  estimated_price: {
    marginTop: "100px",
  },
  mt_50: {
    marginTop: "50px",
  },
  submitButton: {
    marginTop: "30px",
    padding: " 10px 30px",
    backgroundColor: "#00b7fa",
  },
  DisplayCard: {
    color: "#9fe5ff",
  },
  mainColor: {
    color: "#00b7fa",
  },
}));

const SellTradeDetails = (props) => {
  const { sellTrade } = props.location.state;
  const [estimatedPrice, setEstimatedPrice] = React.useState(
    sellTrade.estimatedPrice
  );

  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [tradeSellData, setTradeSellData] = React.useState([]);

  // const getTradeSellRequests = async () => {
  //   const { data } = await getSellTrade();
  //   const tradeSellData = [...data];
  //   setTradeSellData(tradeSellData);
  // };

  // React.useEffect(() => {
  //   getTradeSellRequests();
  // }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function submitPrice() {
    console.log(sellTrade._id, estimatedPrice);
    putSellTrade(sellTrade._id, estimatedPrice);
  }

  return (
    <div className={classes.container}>
      <TopBar handleDrawerToggle={handleDrawerToggle} />
      <Drawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <main className={classes.content}>
        <ToolBar />

        <Card>
          <Typography className={classes.cardHeading}>
            {" "}
            {sellTrade.sellOrTrade} Car Request{" "}
          </Typography>
          <CardHeader></CardHeader>

          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={4}>
                <DisplayCard
                  title={"Car Vin Number"}
                  value={sellTrade.vinNumber}
                  className={classes.DisplayCard}
                />
              </Grid>
              <Grid item md={4}>
                <DisplayCard
                  title={"Car Make and model"}
                  value={sellTrade.carMakeModel}
                />
              </Grid>

              <Grid item md={4}>
                <DisplayCard
                  title={"Car Model Year"}
                  value={sellTrade.carModelYear}
                />
              </Grid>

              <Grid item md={4}>
                <DisplayCard
                  title={"Driven Miles"}
                  value={sellTrade.drivenMiles}
                />
              </Grid>

              <Grid item md={4}>
                <DisplayCard
                  title={"Engine type"}
                  value={sellTrade.engineType}
                />
              </Grid>

              <Grid item md={4}>
                <DisplayCard title={"Fuel type"} value={sellTrade.fuelType} />
              </Grid>

              <Grid item md={4}>
                <DisplayCard
                  title={"Tranmission"}
                  value={sellTrade.transmission}
                />
              </Grid>

              <Grid item md={4}>
                <DisplayCard
                  title={"Drive Train"}
                  value={sellTrade.driveTrain}
                />
              </Grid>

              <Grid item md={12}>
                <DisplayCard
                  title={"Extended features"}
                  variant="p"
                  value={sellTrade.extendedFeatures}
                />
              </Grid>

              <Grid item md={12}>
                <DisplayCard
                  title={"Car History"}
                  value={sellTrade.carHistory}
                />
              </Grid>
            </Grid>

            <Grid item md={12}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                align="center"
                className={`${classes.estimated_price} ${classes.mainColor}`}
              >
                Give Estimated Price
              </Typography>
              <TextField
                id="outlined-basic"
                label="Estimated Price"
                variant="outlined"
                fullWidth
                className={classes.mt_50}
                onChange={(e) => {
                  setEstimatedPrice(e.target.value);
                }}
              />
            </Grid>

            <Grid>
              <Button
                variant="contained"
                color="primary"
                className={classes.submitButton}
                onClick={submitPrice}
              >
                Send
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SellTradeDetails;
