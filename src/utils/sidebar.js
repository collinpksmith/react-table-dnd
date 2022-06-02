import React, { useEffect } from "react";
import {
  SwipeableDrawer,
  useMediaQuery,
  List,
  ListItem,
  Button,
  Collapse,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 270,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 270,
    zIndex: theme.zIndex.appBar - 1,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  itemMargin: {
    marginLeft: "43px",
  },
  nestedItemMargin: {
    marginLeft: "20px",
  },
  buttonMargin: {
    marginLeft: "50px",
    fontSize: "17px",
  },
  inputRoot: {
    borderRadius: 10,
  },
  notchedOutlined: {
    border: "3px solid #85888D",
  },
}));
export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [searchPatient, setSearchPatient] = React.useState("");

  const [open, setOpen] = React.useState(true);
  const [collapse1Open, setCollapse1Open] = React.useState(false);
  const [collapse2Open, setCollapse2Open] = React.useState(false);
  const [collapse3Open, setCollapse3Open] = React.useState(false);
  const [collapse4Open, setCollapse4Open] = React.useState(false);
  const [collapse5Open, setCollapse5Open] = React.useState(false);
  const [collapse6Open, setCollapse6Open] = React.useState(false);
  const [collapse7Open, setCollapse7Open] = React.useState(false);
  const [collapse8Open, setCollapse8Open] = React.useState(false);

  useEffect(() => {
    if (matchesSM) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [matchesSM]);
  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log(open, matchesSM);

  return (
    <SwipeableDrawer
      className={classes.drawer}
      variant={matchesSM ? "temporary" : "persistent"}
      anchor="left"
      open={open}
      //open={true}
      onClose={handleDrawerClose}
      onOpen={() => setOpen(true)}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List style={{ marginTop: "1em" }} disablePadding>
        {/* AGENDA Button */}
        <ListItem>
          <Button
            style={{
              borderRadius: 0,
              backgroundColor: "#0030AB",
              fontWeight: "bold",
              color: "#fff",
            }}
            className={classes.buttonMargin}
          >
            AGENDA
          </Button>
        </ListItem>
        {/* RDV en ligne */}
        <ListItem
          disableGutters
          style={{ cursor: "pointer", padding: 0, marginTop: "15px" }}
          onClick={() => setCollapse1Open((s) => !s)}
        >
          <Grid container alignItems="center" className={classes.itemMargin}>
            <Grid item>
              <ArrowRightIcon />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  fontSize: "12px",
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                RDV en ligne
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
        {/* RDV en ligne - Nested items */}
        <Collapse in={collapse1Open} timeout="auto" unmountOnExit>
          <List component="div" className={classes.itemMargin} disablePadding>
            <ListItem style={{ padding: 0 }} disableGutters>
              <Grid
                container
                alignItems="center"
                className={classes.nestedItemMargin}
              >
                <Grid item>-</Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "12px",
                      marginLeft: "25px",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    RDV en ligne
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Collapse>
        {/*AGENDA */}
        <ListItem
          disableGutters
          style={{ cursor: "pointer", padding: 0, marginTop: "10px" }}
          onClick={() => setCollapse2Open((s) => !s)}
        >
          <Grid container alignItems="center" className={classes.itemMargin}>
            <Grid item>
              <ArrowRightIcon />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  fontSize: "12px",
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                AGENDA
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
        {/* AGENDA - Nested items */}
        <Collapse in={collapse2Open} timeout="auto" unmountOnExit>
          <List component="div" className={classes.itemMargin} disablePadding>
            {/* general */}
            <ListItem style={{ padding: 0 }} disableGutters>
              <Grid
                container
                alignItems="center"
                className={classes.nestedItemMargin}
              >
                <Grid item>-</Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "12px",
                      marginLeft: "25px",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    general
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
            {/* prothese */}
            <ListItem style={{ padding: 0 }} disableGutters>
              <Grid
                container
                alignItems="center"
                className={classes.nestedItemMargin}
              >
                <Grid item>-</Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "12px",
                      marginLeft: "25px",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    prothese
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
            {/* rappels */}
            <ListItem style={{ padding: 0 }} disableGutters>
              <Grid
                container
                alignItems="center"
                className={classes.nestedItemMargin}
              >
                <Grid item>-</Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "12px",
                      marginLeft: "25px",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    rappels
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Collapse>
        {/* Patient Button */}
        <ListItem>
          <Button
            style={{
              borderRadius: 0,
              backgroundColor: "#51A7F9",

              color: "#fff",
              marginTop: "15px",
            }}
            className={classes.buttonMargin}
          >
            PATIENTS
          </Button>
        </ListItem>
        {/* search  */}
        <ListItem>
          <TextField
            size="small"
            variant="outlined"
            InputProps={{
              classes: {
                root: classes.inputRoot,
                notchedOutline: classes.notchedOutlined,
              },
              startAdornment: <SearchIcon style={{ color: "#85888D" }} />,
            }}
            value={searchPatient}
            onChange={(e) => setSearchPatient(e.target.value)}
          />
        </ListItem>
        {/*nouveau */}
        <ListItem
          disableGutters
          style={{ cursor: "pointer", padding: 0, marginTop: "10px" }}
          onClick={() => setCollapse3Open((s) => !s)}
        >
          <Grid container alignItems="center" className={classes.itemMargin}>
            <Grid item>
              <ArrowRightIcon />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  fontSize: "12px",
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                nouveau
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
        {/* nouveau - Nested items */}
        <Collapse in={collapse3Open} timeout="auto" unmountOnExit>
          <List component="div" className={classes.itemMargin} disablePadding>
            {/*  liste alphabetique */}
            <ListItem style={{ padding: 0 }} disableGutters>
              <Grid
                container
                alignItems="center"
                className={classes.nestedItemMargin}
              >
                <Grid item>-</Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "12px",
                      marginLeft: "25px",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    liste alphabetique
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
            {/*  a rappeler */}
            <ListItem style={{ padding: 0 }} disableGutters>
              <Grid
                container
                alignItems="center"
                className={classes.nestedItemMargin}
              >
                <Grid item>-</Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "12px",
                      marginLeft: "25px",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    a rappeler
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
            {/* classement per categorie */}
            <ListItem style={{ padding: 0 }} disableGutters>
              <Grid
                container
                alignItems="center"
                className={classes.nestedItemMargin}
              >
                <Grid item>-</Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "12px",
                      marginLeft: "25px",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    classement per categorie
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Collapse>
        {/* PROTHESE Button */}
        <ListItem>
          <Button
            style={{
              borderRadius: 0,
              backgroundColor: "#B36AE2",
              fontWeight: "bold",
              color: "#fff",
              marginTop: "15px",
            }}
            className={classes.buttonMargin}
          >
            PROTHESE
          </Button>
        </ListItem>
        {/* laboratioires*/}
        <ListItem
          disableGutters
          style={{ cursor: "pointer", padding: 0, marginTop: "15px" }}
          onClick={() => setCollapse4Open((s) => !s)}
        >
          <Grid container alignItems="center" className={classes.itemMargin}>
            <Grid item>
              <ArrowRightIcon />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  fontSize: "12px",
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                laboratioires
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
        {/* laboratioires - Nested items */}
        <Collapse in={collapse4Open} timeout="auto" unmountOnExit>
          <List component="div" className={classes.itemMargin} disablePadding>
            <ListItem style={{ padding: 0 }} disableGutters>
              <Grid
                container
                alignItems="center"
                className={classes.nestedItemMargin}
              >
                <Grid item>-</Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "12px",
                      marginLeft: "25px",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    laboratioires
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Collapse>

        {/* travaux en cours*/}
        <ListItem
          disableGutters
          style={{ cursor: "pointer", padding: 0, marginTop: "15px" }}
          onClick={() => setCollapse5Open((s) => !s)}
        >
          <Grid container alignItems="center" className={classes.itemMargin}>
            <Grid item>
              <ArrowRightIcon />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  fontSize: "12px",
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                travaux en cours
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
        {/* travaux en cours - Nested items */}
        <Collapse in={collapse5Open} timeout="auto" unmountOnExit>
          <List component="div" className={classes.itemMargin} disablePadding>
            <ListItem style={{ padding: 0 }} disableGutters>
              <Grid
                container
                alignItems="center"
                className={classes.nestedItemMargin}
              >
                <Grid item>-</Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "12px",
                      marginLeft: "25px",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    travaux en cours
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Collapse>
        {/* travaux non soldes*/}
        <ListItem
          disableGutters
          style={{ cursor: "pointer", padding: 0, marginTop: "15px" }}
          onClick={() => setCollapse6Open((s) => !s)}
        >
          <Grid container alignItems="center" className={classes.itemMargin}>
            <Grid item>
              <ArrowRightIcon />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  fontSize: "12px",
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                travaux non soldes
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
        {/* travaux non soldes - Nested items */}
        <Collapse in={collapse6Open} timeout="auto" unmountOnExit>
          <List component="div" className={classes.itemMargin} disablePadding>
            <ListItem style={{ padding: 0 }} disableGutters>
              <Grid
                container
                alignItems="center"
                className={classes.nestedItemMargin}
              >
                <Grid item>-</Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "12px",
                      marginLeft: "25px",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    travaux non soldes
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Collapse>
        {/* COMPTABILITE Button */}
        <ListItem>
          <Button
            style={{
              borderRadius: 0,
              backgroundColor: "#6DE8C9",
              color: "#776AB3",
              marginTop: "15px",
            }}
            className={classes.buttonMargin}
          >
            COMPTABILITE
          </Button>
        </ListItem>
        {/* recettes*/}
        <ListItem
          disableGutters
          style={{ cursor: "pointer", padding: 0, marginTop: "15px" }}
          onClick={() => setCollapse7Open((s) => !s)}
        >
          <Grid container alignItems="center" className={classes.itemMargin}>
            <Grid item>
              <ArrowRightIcon />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  fontSize: "12px",
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                recettes
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
        {/* recettes - Nested items */}
        <Collapse in={collapse7Open} timeout="auto" unmountOnExit>
          <List component="div" className={classes.itemMargin} disablePadding>
            <ListItem style={{ padding: 0 }} disableGutters>
              <Grid
                container
                alignItems="center"
                className={classes.nestedItemMargin}
              >
                <Grid item>-</Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "12px",
                      marginLeft: "25px",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    recettes
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Collapse>

        {/* travaux non soldes*/}
        <ListItem
          disableGutters
          style={{ cursor: "pointer", padding: 0, marginTop: "15px" }}
          onClick={() => setCollapse8Open((s) => !s)}
        >
          <Grid container alignItems="center" className={classes.itemMargin}>
            <Grid item>
              <ArrowRightIcon />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  fontSize: "12px",
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                compta analytique
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
        {/* travaux non soldes - Nested items */}
        <Collapse in={collapse8Open} timeout="auto" unmountOnExit>
          <List component="div" className={classes.itemMargin} disablePadding>
            <ListItem style={{ padding: 0 }} disableGutters>
              <Grid
                container
                alignItems="center"
                className={classes.nestedItemMargin}
              >
                <Grid item>-</Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "12px",
                      marginLeft: "25px",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    compta analytique
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Collapse>

        {/* PARAMETRAGE Button */}
        <ListItem>
          <Button
            style={{
              borderRadius: 0,
              backgroundColor: "#C5C5C5",
              color: "#2d2d2d",
              marginTop: "15px",
            }}
            className={classes.buttonMargin}
          >
            PARAMETRAGE
          </Button>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}
