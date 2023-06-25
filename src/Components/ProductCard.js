import {
  Card,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { Button } from "@material-ui/core";
import {  useSelector } from "react-redux";
import { translations } from "./../translate/translate";
const useStyles = makeStyles((theme) => ({
  main: {
    height: "58vh",
    width: "23vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "none",
    marginTop: "2rem",
    borderRadius: "1rem",
    cursor: "pointer",
    [theme.breakpoints.down('501')]: {
      width: "60vw",
    },
  },
  title: {
    height: "2rem",
    width: "90%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    marginTop: "0.5rem",
  },
  mTitle: {
    height: "4rem",
    width: "90%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    marginTop: "0.5rem",
    fontSize: "1.9rem",
  },
  image: {
    height: "60%",
    width: "60%",
    marginTop: "0.5rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  mImage: {
    height: "40%",
    width: "80%",
    marginTop: "0.5rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    marginBottom: "1rem",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    background: "transparent",
  },
  mFooter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
    background: "transparent",
  },
  addToCart: {
    background: "#FEBD69",
    height: "2rem",
    width: "8rem",
    borderRadius: "0.5rem",
    marginTop: "0.5rem",
    "&:hover": {
      background: "#FEBD69",
    },
  },
  mAddToCart: {
    background: "#FEBD69",
    height: "4rem",
    width: "12rem",
    fontSize: "1.4rem",
    borderRadius: "1rem",
    marginTop: "0.5rem",
    "&:hover": {
      background: "#FEBD69",
    },
  },
  rating: {
    display: "flex",
    alignItems: "center",

  },
  mrating: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  count: {
    marginLeft: "0.5rem",
    color: "#007185",
    fontSize: "1rem",
  },
  hoverText: {
    position: "relative",
    top: "50%",
    border: "1px solid grey",
    background: "#F7FAFA",
    width: "50%",
    margin: "auto",
    height: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0.5px 0.5px 2px 0px grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      background: "#dcf4f7",
    },
  },
  mHoverText: {
    position: "relative",
    top: "50%",
    border: "1px solid grey",
    background: "#F7FAFA",
    width: "60%",
    margin: "auto",
    height: "2.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0.5px 0.5px 2px 0px grey",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      background: "#dcf4f7",
    },
  },
}));
const rupeeCalculate = (val) => {
  const dec = Math.floor(val);
  return dec;
};
const ProductCard = ({ item }) => {
  const getLanguage = useSelector((state) => state.language.lang);
  const t = translations.get(getLanguage);
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  return (
    <Card
      className={classes.main}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {isMatch ? (
        <>
          <div
            className={classes.mImage}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {hover && (
              <div className={classes.mHoverText}>
                {" "}
                <Typography>{t.quickLook}</Typography>
              </div>
            )}
          </div>
          <Typography className={classes.mTitle}>{item.title}</Typography>
          <div className={classes.mFooter}>
            <Typography
              style={{
                fontSize: "1.8rem",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {" "}
              ₹ {rupeeCalculate(item.price * 79.67).toLocaleString()}
            </Typography>
            <span
              title={item.rating.rate + " out of 5"}
              className={classes.mrating}
            >
              <StarRatings
                rating={item.rating.rate}
                starRatedColor="#FFA41C"
                numberOfStars={5}
                name="rating"
                starDimension="1.2rem"
                starSpacing="0.15rem"
              />
              <Typography className={classes.count}>
                {item.rating.count}
              </Typography>
            </span>
          </div>
          <Button className={classes.mAddToCart}>{t.showNow}</Button>
        </>
      ) : (
        <>
          <div
            className={classes.image}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {hover && (
              <div className={classes.hoverText}>
                {" "}
                <Typography>{t.quickLook}</Typography>
              </div>
            )}
          </div>
          <Typography className={classes.title}>{item.title}</Typography>
          <div className={classes.footer}>
            <Typography>
              {" "}
              ₹ {rupeeCalculate(item.price * 79.67).toLocaleString()}
            </Typography>
            <span
              title={item.rating.rate + " out of 5"}
              className={classes.rating}
            >
              <StarRatings
                rating={item.rating.rate}
                starRatedColor="#FFA41C"
                numberOfStars={5}
                name="rating"
                starDimension="1.2rem"
                starSpacing="0.15rem"
              />
              <Typography className={classes.count}>
                {item.rating.count}
              </Typography>
            </span>
          </div>
          <Button className={classes.addToCart}>{t.showNow}</Button>
        </>
      )}
    </Card>
  );
};

export default ProductCard;
