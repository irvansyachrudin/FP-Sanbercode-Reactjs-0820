import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MovieIcon from "@material-ui/icons/Movie";
import GamesIcon from '@material-ui/icons/Games';
import { useStyles } from "./Style.js";
import { Navcontext } from "../Context/Navcontext";

const Sidebar = (props) => {
  const classes = useStyles();
  const { open } = useContext(Navcontext);

  const Movie = () => {
    props.history.push("/movies");
  };

  const Games = () => {
    props.history.push("/games");
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button onClick={Movie}>
          <ListItemIcon>
            <MovieIcon />
          </ListItemIcon>
          <ListItemText primary={"Movies Editor"} />
        </ListItem>
        <ListItem button onClick={Games}>
          <ListItemIcon>
            <GamesIcon />
          </ListItemIcon>
          <ListItemText primary={"Games Editor"} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default withRouter(Sidebar);
