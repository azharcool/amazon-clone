import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
} from "@material-ui/core";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
// import MenuIcon from '@mui/icons-material/Menu';
import { RiMenuLine } from "react-icons/ri";
import { ListItemButton } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import setUserAction from "../Actions/setUserAction";
import SignedInAction from "../Actions/SignedInAction";
import { translations } from "./../translate/translate";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import SetLanguageAction from "./../Actions/SetLanguageAction";
import ListItem from "@mui/material/ListItem";
import ReactCountryFlag from "react-country-flag";
import { AiOutlineCaretDown } from "react-icons/ai";

const useStyles = makeStyles({
  header: {
    top: "0",
    height: "8rem",
    width: "18rem",
    backgroundColor: "#131921",
    color: "white",
    display: "flex",
    justifyContent: "right",
    marginLeft: "-2.3rem",
    marginTop: "-2.1rem",
    marginRight: "-2.1rem",
    paddingTop: "2rem",
    paddingRight: "2rem",
  },
  divider: {
    marginLeft: "-2rem",
    marginRight: "-2.1rem",
  },
  close:{
    display: "flex",
    
  }
  
});
const languageIcons = {
  English: "IN",
  Chinese: "CN",
  Vietnam: "VN",
};
const DrawerComp = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const name = useSelector((state) => state.user.displayName);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.count);

  const getLanguage = useSelector((state) => state.language.lang);

  const t = translations.get(getLanguage);
  const classes = useStyles();
  const initialUserState = {
    uid: "",
    email: "",
    emailVerified: false,
    displayName: "",
    isAnonymous: false,
    providerData: [
      {
        providerId: "",
        uid: "",
        displayName: "",
        email: "",
        phoneNumber: null,
        photoURL: null,
      },
    ],
    stsTokenManager: {
      refreshToken: "",
      accessToken: "",
      expirationTime: 0,
    },
    createdAt: "",
    lastLoginAt: "",
    apiKey: "",
    appName: "[DEFAULT]",
  };

  const onSignOut = async () => {
    dispatch(setUserAction(initialUserState));
    dispatch(SignedInAction(false));
    setTimeout(() => {
      setOpen(true);
    }, 300);
  };

  const [open, setOpen] = useState(false);
  let iconStyles = { color: "white" };
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const openPopper = Boolean(anchorEl);
  const id = openPopper ? "simple-popper" : undefined;

  const handleClose = () => {
    setOpen(false);
  };

  const handleLanguage = (value) => {
    dispatch(SetLanguageAction(value));
  };

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItemButton>
            <ListItemIcon style={{ display: "flex", flexDirection: "column" }}>
              <ListItemText className={classes.header}>
               <div  className={classes.close}> 
              <Button
                  style={iconStyles}
                 
                  onClick={handleClose}
                >
                  &#10006;
                </Button>
                </div>

                <IoPersonCircleSharp
                  style={{
                    height: "2rem",
                    width: "2rem",
                    // marginLeft: "1.5rem",
                  }}
                />

                {name ? (
                  <div className={classes.headerButton} onClick={onSignOut}>
                    <Typography className={classes.text}>
                      {t.hello} {name}
                    </Typography>
                    <Typography className={classes.text2}>
                      {t.signOut}
                    </Typography>
                  </div>
                ) : (
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      paddingTop: "3rem",
                    }}
                    to="/Login"
                    className={classes.linkBtn}
                  >
                    <div className={classes.headerButton}>
                      <Typography
                        sx={{
                          fontSize: {
                            sm: "3rem",
                            md: "1rem",
                            lg: "0.6rem",
                            xl: "0.7rem",
                          },
                        }}
                        className={classes.text}
                      >
                        {t.helloGuest}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            md: "0.7rem",
                            lg: "0.8rem",
                          },
                        }}
                        className={classes.text2}
                      >
                        {t.signIn}
                      </Typography>
                    </div>
                  </Link>
                )}
              </ListItemText>
              <ListItemText>
                <Divider className={classes.divider} />
                <div
                  className={classes.location}
                  onClick={() => alert("Clicked")}
                >
                  <div>
                    <HiOutlineLocationMarker
                      style={{ color: "black" }}
                      size="1.15rem"
                      className={classes.icon}
                    />
                  </div>
                  <div>
                    <Typography className={classes.text}>
                      {t.hello} {name}
                    </Typography>
                    <Typography className={classes.text2}>
                      {t.selectYourAddress}
                    </Typography>
                  </div>
                </div>
                <Divider className={classes.divider} />
              </ListItemText>
              <ListItemText>
                <div className={classes.headerButton} onClick={handleClick}>
                  <Typography className={classes.text}>
                    {getLanguage}
                  </Typography>
                  <Typography className={classes.flagDiv}>
                    <ReactCountryFlag
                      countryCode={languageIcons[getLanguage]}
                      svg
                      className={classes.flag}
                    />
                    <AiOutlineCaretDown className={classes.downIcon} />
                  </Typography>
                  <Popper id={id} open={openPopper} anchorEl={anchorEl}>
                    <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton
                            onClick={() => handleLanguage("English")}
                          >
                            <ReactCountryFlag
                              countryCode="IN"
                              svg
                              className={classes.flag}
                            />
                            <ListItemText
                              primary="English"
                              sx={{
                                padding: "0 5px",
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton
                            onClick={() => handleLanguage("Chinese")}
                          >
                            <ReactCountryFlag
                              countryCode="CN"
                              svg
                              className={classes.flag}
                            />
                            <ListItemText
                              primary="Chinese"
                              sx={{
                                padding: "0 5px",
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton
                            onClick={() => handleLanguage("Vietnam")}
                          >
                            <ReactCountryFlag
                              countryCode="VN"
                              svg
                              className={classes.flag}
                            />
                            <ListItemText
                              primary="Vietnam"
                              sx={{
                                padding: "0 5px",
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Box>
                  </Popper>
                </div>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(!open)}>
        <RiMenuLine style={iconStyles} />
      </IconButton>
    </div>
  );
};

export default DrawerComp;
