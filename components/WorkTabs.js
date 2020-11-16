import React from "react";
import PropTypes from "prop-types";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: fade(theme.palette.common.white, 0.2),
    color: "#FFFFFF",
  },
  panel: {
    minHeight: "400px",
    background: fade(theme.palette.common.white, 0.1),
  },
  header: {
    color: "#cccccc",
    fontSize: 20,
    fontWeight: "bolder",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  companyLogo: {
    maxHeight: 150,
    maxWidth: 300,
    textAlign: "center",
  },
  textContainer: {
    paddingTop: theme.spacing(2),
    textAlign: "left",
  },
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(7),
    backgroundColor: "transparent",
    color: "#ffffff",
  },
}));
const content = [
  {
    header: "Python Developer @ ZenRooms | March 2020 - Present",
    logo: "/zenrooms.png",
    company_name: "Zen Rooms",
    link: "https://www.zenrooms.com/",
    texts: [
      "Create, design, and maintain an internal system for finance with Agile Scrum project management.",
      "Used Django, Docker, PostgreSQL, jQuery, and Docker as main tools for development and deployed to an AWS Server.",
    ],
  },
  {
    header:
      "Python Developer and GSS PMO Analyst @ RingCentral | June 2019 - March 2020",
    logo: "/ringcentral.png",
    company_name: "RingCentral",
    link: "https://www.ringcentral.com/",
    texts: [
      "Design, develop and deploy an internal system for HR.",
      "Design and develop Internal tool for other department requests using Sharepoint and PowerApps for automation.",
      "Tools and technologies used are Python, Django, and deployed on AWS.",
    ],
  },
  {
    header: "Data Specialist @ SiP | August 2018 - March 2019",
    logo: "/sip.png",
    company_name: "Stylist in Pocket",
    link: "https://stylistinpocket.com/",
    texts: [
      "Scrape data for mailing list.",
      "Scrape data for possible competitors.",
      "Clean and process data for exploratory analysis.",
    ],
  },
];

export default function WorkTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="none"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="ZEN Rooms" {...a11yProps(0)} />
          <Tab label="Ring Central" {...a11yProps(1)} />
          <Tab label="SiP" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      {content.map((content, index) => {
        return (
          <TabPanel value={value} index={index} className={classes.panel}>
            <Typography className={classes.header}>{content.header}</Typography>
            <Container fullWidth className={classes.contentContainer}>
              <Box p={3} style={{ textAlign: "center" }}>
                <a href={content.link} target="_blank" rel="noopener">
                  <img
                    className={classes.companyLogo}
                    src={content.logo}
                    alt={content.company_name}
                  />
                </a>
              </Box>
              <Box p={3} className={classes.textContainer}>
                {content.texts.map((text, idx) => {
                  return <li key={idx}>{text}</li>;
                })}
              </Box>
            </Container>
          </TabPanel>
        );
      })}
    </div>
  );
}
