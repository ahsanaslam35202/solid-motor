import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
  Divider,
  Hidden,
} from "@material-ui/core";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
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
  // const [officeOpen, setOfficeOpen] = React.useState(false);

  // const handleOfficesClick = () => {
  //   setOfficeOpen(!officeOpen);
  // };

  const drawer = (
    <>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <DashboardRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/offices">
          <ListItemIcon>
            <BusinessRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Offices" />
        </ListItem>
        <ListItem button component={Link} to="/realtors">
          <ListItemIcon>
            <BusinessRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Realtors" />
        </ListItem>
        <ListItem button component={Link} to="/productGroups">
          <ListItemIcon>
            <BusinessRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Product Groups" />
        </ListItem>
        <ListItem button component={Link} to="/products">
          <ListItemIcon>
            <BusinessRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button component={Link} to="/packages">
          <ListItemIcon>
            <BusinessRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Packages" />
        </ListItem>
        {/* <ListItem button onClick={handleOfficesClick}>
          <ListItemIcon>
            <BusinessRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Offices" />
          {officeOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={officeOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <LibraryAddRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Add Office" />
            </ListItem>
          </List>
        </Collapse> */}
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
