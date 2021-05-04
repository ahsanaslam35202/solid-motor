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
    fontSize: "36px !important",
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
  imageContainer: {
    width: "100%",
    overflow: "hidden",
  },
}));

const BuyCarDetails = (props) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.container}>
      <TopBar handleDrawerToggle={handleDrawerToggle} />
      <Drawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <main className={classes.content}>
        <ToolBar />

        <Card>
          <CardHeader
            title="Buy Car Request"
            className={classes.cardHeading}
          ></CardHeader>
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid className={classes.imageContainer} item md={12}>
                <img className="w-100" src="/assets/img/car.png" alt="" />
              </Grid>
              <Grid item md={4}>
                <DisplayCard title={"Car Make and Model"} value={"Name"} />
              </Grid>
              <Grid item md={4}>
                <DisplayCard title={"Miles Driven"} value={"Name"} />
              </Grid>
              <Grid item md={4}>
                <DisplayCard title={"Price"} value={"Name"} />
              </Grid>
              <Grid item md={4}>
                <DisplayCard title={"Vin Number"} value={"Name"} />
              </Grid>
              <Grid item md={4}>
                <DisplayCard
                  title={"View Complete Details"}
                  value={"Link to Car Page"}
                />
              </Grid>

              <Grid item md={12}>
                <Typography variant="h4" align="center" gutterBottom>
                  Buyer Proposal
                </Typography>{" "}
              </Grid>

              <Grid item md={4}>
                <DisplayCard title={"Buyer Name"} value={"Name"} />
              </Grid>
              <Grid item md={4}>
                <DisplayCard title={"Buyer Phone Number"} value={"Name"} />
              </Grid>
              <Grid item md={4}>
                <DisplayCard title={"Buyer Email Number"} value={"Name"} />
              </Grid>
              <Grid item md={4}>
                <DisplayCard title={"Loan Term"} value={"Name"} />
              </Grid>
              <Grid item md={4}>
                <DisplayCard title={"Credit Score"} value={"Name"} />
              </Grid>
              <Grid item md={4}>
                <DisplayCard title={"Anual Income"} value={"Name"} />
              </Grid>
              <Grid item md={4}>
                <DisplayCard title={"Monthly Payment"} value={"Name"} />
              </Grid>
              <Grid item md={4}>
                <DisplayCard title={"Cash Down"} value={"Name"} />
              </Grid>
              <Grid item md={4}>
                <DisplayCard title={"Trade In Credits"} value={"Name"} />
              </Grid>
              <Grid item md={4}>
                <DisplayCard title={"APR"} value={"Name"} />
              </Grid>
              <Grid item md={4}>
                <DisplayCard
                  title={"Estimated Amount Financed"}
                  value={"Name"}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default BuyCarDetails;
