import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: fade(theme.palette.common.black, 0.8),
    color: "#ffffff",
  },
  list: {
    width: 300,
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
  },
  listItem: {
    justifyContent: "center",
    padding: theme.spacing(5),
    width: "100%",
    letterSpacing: "2px",
  },
  headerLinks: {
    color: fade(theme.palette.common.black, 0.7),
    marginRight: theme.spacing(3),
    letterSpacing: "1px",
    [theme.breakpoints.up("md")]: {
      color: "#ffffff",
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  headerLogo: {
    fontSize: 13,
    letterSpacing: "1px",
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  desktopView: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      padding: theme.spacing(2),
    },
  },
  mobileView: {
    height: "100%",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  mobileList: {
    textAlign: "center",
  },
  buttonText: {
    textTransform: "lowercase",
    // position: "absolute",
    // top: 100,
    [theme.breakpoints.up("md")]: {
      position: "static",
    },
  },
}));

const siteLinks = ["blog.", "github."];

export default function Header() {
  const classes = useStyles();
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setMobileMenu(open);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Fade cascade top delay={4000}>
            <div className={classes.headerLogo}>mark.the.dev</div>
            <div className={classes.desktopView}>
              <div className={classes.headerLinks}>
                <Link
                  component="button"
                  variant="body2"
                  className={classes.headerLinks}
                  onClick={() => alert("In progress.")}
                >
                  {siteLinks[0]}
                </Link>
                <Link
                  component="button"
                  variant="body2"
                  className={classes.headerLinks}
                >
                  <a
                    target="_blank"
                    href="https://github.com/shoshin-programmer"
                  >
                    {siteLinks[1]}
                  </a>
                </Link>
                <a target="_blank" href="/Resume.pdf">
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classes.buttonText}
                  >
                    resume.
                  </Button>
                </a>
              </div>
            </div>

            <IconButton
              edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            />
            <div className={classes.mobileView}>
              <React.Fragment>
                <MenuIcon onClick={toggleDrawer(true)} />
                <SwipeableDrawer
                  anchor="left"
                  open={mobileMenu}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}
                >
                  <div className={classes.headerLogo}>mark.the.dev</div>

                  <div
                    className={classes.list}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                  >
                    <List className={classes.mobileList}>
                      {siteLinks.map((text, index) => (
                        <ListItem
                          button
                          key={text}
                          className={classes.listItem}
                        >
                          {text}
                        </ListItem>
                      ))}
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={classes.buttonText}
                      >
                        resume.
                      </Button>
                    </List>
                  </div>
                </SwipeableDrawer>
              </React.Fragment>
            </div>
          </Fade>
        </Toolbar>
      </AppBar>
    </div>
  );
}
