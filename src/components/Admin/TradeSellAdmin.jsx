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
import SellTradeCard from "./SellTradeCard";
import { getSellTrade } from "../../services/sellTradeService";

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
}));

const TradeSellAdmin = (props) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [tradeSellData, setTradeSellData] = React.useState([]);

  const getTradeSellRequests = async () => {
    const { data } = await getSellTrade();
    const tradeSellData = [...data];
    setTradeSellData(tradeSellData);
  };

  React.useEffect(() => {
    getTradeSellRequests();
  }, []);

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
          {tradeSellData.map((item, index) => (
            <Grid item md={3}>
              <SellTradeCard
                sellOrTrade={item.sellOrTrade}
                sellTrade={item}
                carMakeModel={item.carMakeModel}
                carModelYear={item.carModelYear}
                drivenMiles={item.drivenMiles}
                engineType={item.engineType}
              />
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
};

export default TradeSellAdmin;
