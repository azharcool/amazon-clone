import { Card, Drawer, makeStyles, Typography,useTheme,useMediaQuery } from "@material-ui/core";
import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import {
  BankOfferModal,
  NoCostEmiModal,
  PartnerOffersModal,
} from "./OffersModal";
import {  useSelector } from "react-redux";
import { translations } from "./../translate/translate";

const useStyles = makeStyles({
  main: {
    display: "flex",
    margin: "1rem 0",
  },
  card: {
    width: "10vw",
    height: "auto",
    padding: "0.7rem",
    marginRight: "0.8rem",
    boxShadow: "0px 0px 3px 2px #D3D3D3",
  },
  mCard: {
    width: "20vw",
    height: "20vh",
    padding: "0.7rem",
    marginRight: "1rem",
    boxShadow: "0px 0px 3px 2px #D3D3D3",
  },
  title: {
    fontWeight: "bold",
    fontSize: "0.85rem",
  },
  mTitle: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  text: {
    fontSize: "0.85rem",
    lineHeight: "1.1rem",
    marginTop: "0.5rem",
    height: "3.7rem",
    letterSpacing: "0.7px",
  },
  mText: {
    fontSize: "1.2rem",
    lineHeight: "1.1rem",
    marginTop: "0.5rem",
    height: "3.7rem",
    letterSpacing: "0.7px",
  },
  offer: {
    display: "flex",
    alignItems: "center",
    fontSize: "0.8rem",
    color: "#007185",
    paddingTop:"2rem",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
      color: "#C7511F",
    },
  },
  mOffer: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.5rem",
    paddingTop:"2.9rem",
    color: "#007185",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
      color: "#C7511F",
    },
  },
  modal: {
    height: "100vh",
    width: "38vw",
    overflowY: "scroll",
  },
  offerIcon: {
    fontSize: "0.6rem",
    marginLeft: "0.2rem",
  },
  mofferIcon: {
    fontSize: "0.6rem",
    // marginLeft: "0.2rem",
    paddingTop:"12rem"
  },
});
function Offers() {
  const getLanguage = useSelector((state) => state.language.lang);
  const t = translations.get(getLanguage);
  const  theme = useTheme();

  const isMatch=useMediaQuery(theme.breakpoints.down('sm'));
 
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };
  const showModal = (value) => {
    setModalType(value);
  };
  return (
    <div className={classes.main}>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        transitionDuration={400}
      > 
      <div className={classes.modal}>
      {modalType === "NoCostEmiModal" && (
        <NoCostEmiModal toggleDrawer={toggleDrawer} />
      )}
      {modalType === "BankOfferModal" && (
        <BankOfferModal toggleDrawer={toggleDrawer} />
      )}
      {modalType === "PartnerOffersModal" && (
        <PartnerOffersModal toggleDrawer={toggleDrawer} />
      )}
    </div>
  </Drawer>
      {isMatch?
        <>
       
    <Card className={classes.mCard}>
      <Typography className={classes.mTitle}>{t.noCostEMI}</Typography>
      <Typography className={classes.mText}>
        {t.noCostEMIAvailable}
      </Typography>
      <Typography
        className={classes.mOffer}
        onClick={() => {
          showModal("NoCostEmiModal");
          toggleDrawer(true);
        }}
      >
        {t.oneOffer} <AiOutlineRight className={classes.mofferIcon} />
      </Typography>
    </Card>
    <Card className={classes.mCard}>
      <Typography className={classes.mTitle}>{t.bankOffer}</Typography>
      <Typography className={classes.mText}>
        {t.InstantDiscountuptoINRonHSBCCashbackCardCreditCard}
      </Typography>
      <Typography
        className={classes.mOffer}
        onClick={() => {
          showModal("BankOfferModal");
          toggleDrawer(true);
        }}
      >
        {t.twoOffer} <AiOutlineRight className={classes.mofferIcon} />
      </Typography>
    </Card>
    <Card className={classes.mCard}>
      <Typography className={classes.mTitle}>{t.partnerOffer}</Typography>
      <Typography className={classes.mText}>
         {t.getGstInvoiceAndSaveUp}
      </Typography>
      <Typography
        className={classes.mOffer}
        onClick={() => {
          showModal("PartnerOffersModal");
          toggleDrawer(true);
        }}
      >
       {t.oneOffer} <AiOutlineRight className={classes.mofferIcon} />
      </Typography>
    </Card>
        </>
        :
        <>
       
    <Card className={classes.card}>
      <Typography className={classes.title}>No Cost EMI</Typography>
      <Typography className={classes.text}>
        {t.noCostEMIAvailable}
      </Typography>
      <Typography
        className={classes.offer}
        onClick={() => {
          showModal("NoCostEmiModal");
          toggleDrawer(true);
        }}
      >
        {t.oneOffer} <AiOutlineRight className={classes.offerIcon} />
      </Typography>
    </Card>
    <Card className={classes.card}>
      <Typography className={classes.title}>Bank Offer</Typography>
      <Typography className={classes.text}>
        {t.InstantDiscountuptoINRonHSBCCashbackCardCreditCard}
      </Typography>
      <Typography
        className={classes.offer}
        onClick={() => {
          showModal("BankOfferModal");
          toggleDrawer(true);
        }}
      >
        {t.twoOffer} <AiOutlineRight className={classes.offerIcon} />
      </Typography>
    </Card>
    <Card className={classes.card}>
      <Typography className={classes.title}>Partner Offer</Typography>
      <Typography className={classes.text}>
        {t.getGstInvoiceAndSaveUp}
      </Typography>
      <Typography
        className={classes.offer}
        onClick={() => {
          showModal("PartnerOffersModal");
          toggleDrawer(true);
        }}
      >
        {t.oneOffer} <AiOutlineRight className={classes.offerIcon} />
      </Typography>
    </Card>
    </>}
       
    </div>
  );
}

export default Offers;
