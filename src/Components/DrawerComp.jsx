import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
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

const useStyles = makeStyles({
    header:{
        top:"0",
        height:"8rem",
        width:"18rem",
        backgroundColor:"#131921",
        color:"white",
        display:"flex",
        justifyContent:"right",
        marginLeft:"-2.3rem",
        marginTop:"-2.1rem",
        marginRight:"-2.1rem",
        paddingTop:"2rem",
        paddingRight:"2rem"
        
      
    },
    divider: {
        marginLeft:"-2rem",
        marginRight:"-2.1rem"
      },
});
const DrawerComp = () => {
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

  const name = useSelector((state) => state.user.displayName);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.count);
  const onSignOut = async () => {
    dispatch(setUserAction(initialUserState));
    dispatch(SignedInAction(false));
    setTimeout(() => {
      setOpen(true);
    }, 300);
  };

  const [open, setOpen] = useState(false);
  let iconStyles = { color: "white" };

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List onClick={() => setOpen(false)}>
          <ListItemButton>
            <ListItemIcon style={{ display: "flex", flexDirection: "column" }}>
              <ListItemText className={classes.header}>
              <IoPersonCircleSharp style={{height:"2rem",width:"2rem",marginLeft:"1.5rem"}}/>
                {name ? (
                  <div className={classes.headerButton} onClick={onSignOut}>
                    <Typography className={classes.text}>
                      Hello {name}
                    </Typography>
                    <Typography className={classes.text2}>Sign out</Typography>
                  </div>
                ) : (
                  <Link style={{textDecoration:"none",color:"white",paddingTop:"3rem"}} to="/Login" className={classes.linkBtn}>
                    <div className={classes.headerButton}>
                      <Typography
                        sx={{
                          fontSize: {
                            sm:"3rem",
                            md: "1rem",
                            lg: "0.6rem",
                            xl: "0.7rem",
                          },
                        }}
                        className={classes.text}
                      >
                        Hello Guest
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
                        Sign in
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
                    style={{color:"black"}}
                      size="1.15rem"
                      className={classes.icon}
                    />
                  </div>
                  <div>
                    <Typography className={classes.text}>
                      Hello {name}
                    </Typography>
                    <Typography className={classes.text2}>
                      Select your address
                    </Typography>
                  </div>
                </div>
                <Divider className={classes.divider} />
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
