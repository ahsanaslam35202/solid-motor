import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TopBar from "../Common/TopBar";
import ToolBar from "../Common/ToolBar";
import Drawer from "../Common/Drawer";

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
}));

const Dashboard = () => {
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
        Dashboard
      </main>
    </div>
  );
};

export default Dashboard;
