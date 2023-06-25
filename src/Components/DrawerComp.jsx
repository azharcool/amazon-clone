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
import Toolbar from "@mui/material/Toolbar";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const useStyles = makeStyles({
  // header: {
  //   top: "0",
  //   height: "8rem",
  //   width: "18rem",
  //   backgroundColor: "#131921",
  //   color: "white",
  //   display: "flex",
  //   justifyContent: "right",
  //   marginLeft: "-2.3rem",
  //   marginTop: "-2.1rem",
  //   marginRight: "-2.1rem",
  //   paddingTop: "2rem",
  //   paddingRight: "2rem",
  // },
  divider: {
    marginLeft: "-2rem",
    marginRight: "-2.1rem",
  },
  close: {
    display: "flex",
  },
  header: {
    backgroundColor: "#131921",
    padding: "2rem 1rem",
    minHeight: "5rem",
  },
  closeIcon: {
    height: "24px",
  },
  text: {
    color: "#fff",
  },
});
const languageIcons = {
  English: "IN",
  Chinese: "CN",
  Vietnam: "VN",
};
const DrawerComp = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
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
    <>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: "256px",
            minHeight: "100vh",
          }}
        >
          <Stack
            sx={{
              backgroundColor: "#131921",
              padding: "2rem 1rem",
              minHeight: "5rem",
            }}
            direction="row"
            justifyContent="space-between"
          >
            <IconButton
              onClick={handleClose}
              size="small"
              disableRipple
              className={classes.closeIcon}
            >
              <CloseRoundedIcon
                sx={{
                  color: "#fff",
                }}
              />
            </IconButton>

            <Stack>
              <IoPersonCircleSharp
                style={{
                  height: "2rem",
                  width: "2rem",
                  color: "#fff",
                  // marginLeft: "1.5rem",
                }}
              />
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
                {name ? `${t.hello} ${name}` : t.helloGuest}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    md: "0.7rem",
                    lg: "0.8rem",
                  },
                }}
                className={classes.text}
                onClick={() => {
                  if (name) {
                    onSignOut();
                  } else {
                    navigate("/Login");
                  }
                }}
              >
                {name ? t.signOut : t.signIn}
              </Typography>
            </Stack>
          </Stack>

          <Stack
            sx={{
              padding: "1rem 2rem",
            }}
          >
            <HiOutlineLocationMarker
              style={{ color: "black" }}
              size="1.15rem"
              className={classes.icon}
            />
            <Typography>
              {t.hello} {name}
            </Typography>
            <Typography>{t.selectYourAddress}</Typography>
          </Stack>

          <Divider />

          <Stack
            sx={{
              padding: "1rem",
            }}
          >
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Language
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="IN"
                  control={<Radio />}
                  label="English"
                  onChange={() => handleLanguage("English")}
                  checked={"English" === getLanguage}
                />
                <FormControlLabel
                  value="VN"
                  control={<Radio />}
                  label="Vietnam"
                  onChange={() => handleLanguage("Vietnam")}
                  checked={"Vietnam" === getLanguage}
                />
                <FormControlLabel
                  value="CN"
                  control={<Radio />}
                  label="Chinese"
                  onChange={() => handleLanguage("Chinese")}
                  checked={"Chinese" === getLanguage}
                />
              </RadioGroup>
            </FormControl>
          </Stack>
        </Box>
      </Drawer>
      <IconButton onClick={() => setOpen(!open)}>
        <RiMenuLine style={iconStyles} />
      </IconButton>
    </>
  );
};

export default DrawerComp;
