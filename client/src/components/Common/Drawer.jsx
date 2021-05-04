import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
  Divider,
  Hidden,
  Collapse,
} from "@material-ui/core";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import LibraryAddRoundedIcon from "@material-ui/icons/LibraryAddRounded";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: "#00b7fa",
    },
  },
  white: {
    color: "white",
  },
  drawerPaper: {
    backgroundColor: "#00b7fa",
    color: "white",
    width: drawerWidth,
  }, // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Drawer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { window } = props;
  const [carOpen, setCarOpen] = React.useState(false);

  const handleOfficesClick = () => {
    setCarOpen(!carOpen);
  };

  const drawer = (
    <>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component={Link} to="/adminDashboard">
          <ListItemIcon>
            <DashboardRoundedIcon className={classes.white} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/TradeSellAdmin">
          <ListItemIcon>
            <DashboardRoundedIcon className={classes.white} />
          </ListItemIcon>
          <ListItemText primary="Trade/Sell Requests" />
        </ListItem>
        <ListItem button onClick={handleOfficesClick}>
          <ListItemIcon>
            <BusinessRoundedIcon className={classes.white} />
          </ListItemIcon>
          <ListItemText primary="Cars" />
          {carOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={carOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/addCar"
            >
              <ListItemIcon>
                <LibraryAddRoundedIcon className={classes.white} />
              </ListItemIcon>
              <ListItemText primary="Add Car" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/viewCars"
            >
              <ListItemIcon>
                <LibraryAddRoundedIcon className={classes.white} />
              </ListItemIcon>
              <ListItemText primary="View Cars" />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <MUIDrawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </MUIDrawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <MUIDrawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </MUIDrawer>
      </Hidden>
    </nav>
  );
};

export default Drawer;
