import { Grid ,useTheme,useMediaQuery} from "@material-ui/core";
import React from "react";
import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/styles";
import amazonBanner from "../Assets/images/amazonBanner.jpg";
import AmazonBanner from "../Assets/images/banner2.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ElfsightWidget } from 'react-elfsight-widget';
const useStyles = makeStyles({
  banner: {
    backgroundImage: `url(${amazonBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 70vh",
    height: "75vh",
    width:"100%"
},
mBanner:{
  backgroundImage: `url(${AmazonBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 75vh",
    height: "30vh",
   width:"100%",
   padding:"0px",
    
    display:"block",

},
 
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    cursor: "default",
  },
  main: {
    marginTop: "2.8rem",
    paddingRight:"0",
    paddingLeft:"0",
    paddingBottom: "2rem",
  },
});
function Home() {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const data = useSelector((state) => state.products);

  return (
    <div className={classes.main}>
    {isMatch ?
      <>
      <div  className={classes.mBanner}  ></div>
      <Grid   container className={classes.grid}>
        {Object.keys(data).map((i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={i}>
              <Link to={`/products/${data[i].id}`} className={classes.gridItem}>
                <ProductCard item={data[i]} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <ElfsightWidget widgetID='41efd4b8-961a-4c4f-bbfa-1d7cc13ac734' lazy />;
      <ElfsightWidget widgetID='56674c18-22b4-443e-bdfe-94feae9816ce' lazy />;
      </>
      :
      <>
      <div  className={classes.banner}  item></div>
      <Grid   container className={classes.grid}>
        {Object.keys(data).map((i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={i}>
              <Link to={`/products/${data[i].id}`} className={classes.gridItem}>
                <ProductCard item={data[i]} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <ElfsightWidget widgetID='41efd4b8-961a-4c4f-bbfa-1d7cc13ac734' lazy />;
      <ElfsightWidget widgetID='56674c18-22b4-443e-bdfe-94feae9816ce' lazy />;
      </>}
      
    </div>
  );
}

export default Home;
