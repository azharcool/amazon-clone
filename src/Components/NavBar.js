import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import amazonLogo from "../Assets/images/amazonLogo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Search } from "@material-ui/icons";
import ReactCountryFlag from "react-country-flag";
import { AiOutlineCaretDown } from "react-icons/ai";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import setUserAction from "../Actions/setUserAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import SignedInAction from "../Actions/SignedInAction";
import DrawerComp from "./DrawerComp";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SetLanguageAction from "./../Actions/SetLanguageAction";
import { translations } from "./../translate/translate";

const useStyles = makeStyles({
  div: {
    width: "100%",
  },
  appbar: {
    background: "#131921",
  },

  toolbar: {
    margin: 0,
    // paddingLeft: "1rem",
    padding: "0 1rem",
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    width: "6.7rem",
    height: "1.9rem",
    marginTop: "0.2rem",
  },

  location: {
    display: "flex",
    alignItems: "end",
    margin: "0.2rem 0 0 0.75rem",
    cursor: "pointer",
    padding: "0.5rem 0.25rem",
    "&:hover": {
      outline: "1px solid",
    },
  },
  icon: {
    marginRight: "0.1rem",
  },
  text: {
    fontSize: "0.7rem",
    lineHeight: 0.5,
    cursor: "pointer",
    color: "#CCCCCC",
  },
  text2: {
    fontSize: "0.9rem",
    fontWeight: 500,
    cursor: "pointer",
  },
  search: {
    display: "flex",
    alignItems: "center",
  },
  searchbar: {
    width: "49vw",

    marginLeft: "1rem",
    height: "2.5rem",
    borderRadius: "0.3rem",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    border: "none",
    fontSize: "1rem",
    outline: "none",
    "&:focus": {
      outline: "1px solid #FEBD69",
    },
  },
  searchBtn: {
    width: "3rem",
    minWidth: "2rem",
    height: "2.7rem",
    borderRadius: "0.3rem",
    border: "none",
    background: "#FEBD69",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    "&:hover": {
      background: "#FEBD69",
    },
  },
  searchIcon: {
    width: "2rem",
    height: "2rem",
  },
  mSearch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mSearchbar: {
    width: "49vw",
    // marginLeft: "7rem",
    height: "2.5rem",
    borderRadius: "0.3rem",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    border: "none",
    fontSize: "1rem",
    outline: "none",
    "&:focus": {
      outline: "1px solid #FEBD69",
    },
  },
  mSearchBtn: {
    width: "3rem",
    minWidth: "2rem",
    height: "2.8rem",
    borderRadius: "0.3rem",
    border: "none",
    background: "#FEBD69",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    "&:hover": {
      background: "#FEBD69",
    },
  },
  mSearchIcon: {
    width: "2rem",
    height: "2rem",
  },
  headerButton: {
    margin: "0.2rem 0.4rem 0 0.5rem",
    padding: "0.5rem 0.25rem",
    "&:hover": {
      outline: "1px solid",
    },
  },
  flagDiv: {
    display: "flex",
    alignItems: "end",
    marginTop: "0.4rem",
    justifyContent: "end",
  },
  downIcon: {
    fontSize: "0.7rem",
    marginLeft: "0.3rem",
  },
  cart: {
    fontSize: "0.9rem",
    textDecoration: "none",
    color: "white",
    marginLeft: "0.8rem",
    display: "flex",
    alignItems: "end",
  },
  scart: {
    fontSize: "0.9rem",
    textDecoration: "none",
    color: "white",
    // marginLeft: "5rem",
    display: "flex",
    alignItems: "end",
  },
  header_cart: {
    display: "flex",
    textAlign: "end",
    justifyContent: "end",
    position: "relative",
    marginRight: "0.3rem",
  },
  cartItems: {
    position: "absolute",
    width: "1rem",
    height: "1rem",
    top: "-1.2rem",
    borderRadius: "50%",
    background: "red",
    color: "#fff",
    boxSizing: "border-box",
    fontSize: "0.7rem",
    display: "flex",
    justifyContent: "center",
  },
  cartIcon: {
    fontSize: "1.9rem",
  },
  linkBtn: {
    textDecoration: "none",
    color: "white",
  },
});

const languageIcons = {
  English: "IN",
  Chinese: "CN",
  Vietnam: "VN",
};

function NavBar() {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

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
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const name = useSelector((state) => state.user.displayName);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.count);

  const getLanguage = useSelector((state) => state.language.lang);

  const onSignOut = async () => {
    dispatch(setUserAction(initialUserState));
    dispatch(SignedInAction(false));
    setTimeout(() => {
      setOpen(true);
    }, 300);
  };

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

  const t = translations.get(getLanguage);

  return (
    <div className={classes.div}>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar} disableGutters>
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{t.success}</DialogTitle>
            <DialogContent>
              <Typography style={{ whiteSpace: "pre-line" }}>
                {t.youHaveBeenLoggedOutSucessfully}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>{t.okay}</Button>
            </DialogActions>
          </Dialog>
          <Link to="/">
            <img className={classes.logo} src={amazonLogo} alt="" />
          </Link>

          {isMatch ? (
            <>
              <div className={classes.mSearch}>
                <input type="text" className={classes.mSearchbar}></input>
                <Button className={classes.mSearchBtn}>
                  <Search className={classes.mSearchIcon} />
                </Button>
              </div>
              

              <Link to="/Cart" className={classes.scart}>
                <div className={classes.header_cart}>
                  <ShoppingCartOutlinedIcon className={classes.cartIcon} />
                  <p className={classes.cartItems}>{cartCount}</p>
                </div>
                {t.cart}
              </Link>
             
              <DrawerComp
                style={{
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "right",
                }}
              />
            </>
          ) : (
            <>
              <div
                className={classes.location}
                onClick={() => alert("Clicked")}
              >
                <div>
                  <HiOutlineLocationMarker
                    size="1.15rem"
                    className={classes.icon}
                  />
                </div>
                <div>
                  <Typography className={classes.text}>{t.hello} {name}</Typography>
                  <Typography className={classes.text2}>
                    {t.selectYourAddress}
                  </Typography>
                </div>
              </div>

              <div className={classes.search}>
                <input type="text" className={classes.searchbar}></input>
                <Button className={classes.searchBtn}>
                  <Search className={classes.searchIcon} />
                </Button>
              </div>
              <div className={classes.headerButton} onClick={handleClick}>
                <Typography className={classes.text}>{getLanguage}</Typography>
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
                    <ListItemButton onClick={() => handleLanguage("English")}>
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
                    <ListItemButton onClick={() => handleLanguage("Chinese")}>
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
                    <ListItemButton onClick={() => handleLanguage("Vietnam")}>
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

              {name ? (
                <div className={classes.headerButton} onClick={onSignOut}>
                  <Typography className={classes.text}>{t.hello} {name}</Typography>
                  <Typography className={classes.text2}>{t.signOut}</Typography>
                </div>
              ) : (
                <Link to="/Login" className={classes.linkBtn}>
                  <div className={classes.headerButton}>
                    <Typography
                      sx={{
                        fontSize: {
                          md: "0.5rem",
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

              <div className={classes.headerButton}>
                <Typography className={classes.text}>{t.returns}</Typography>
                <Typography className={classes.text2}>{t.orders}</Typography>
              </div>
              <Link to="/Cart" className={classes.cart}>
                <div className={classes.header_cart}>
                  <ShoppingCartOutlinedIcon className={classes.cartIcon} />
                  <p className={classes.cartItems}>{cartCount}</p>
                </div>
                {t.cart}
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
