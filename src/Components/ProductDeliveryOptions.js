import React, { useState } from "react";
import { makeStyles, Typography,useTheme,useMediaQuery } from "@material-ui/core";
import { BsShieldCheck } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiDropbox } from "react-icons/si";
import { Popover } from "react-tiny-popover";
import { MdDangerous } from "react-icons/md";
import { BsCamera } from "react-icons/bs";
import { translations } from "./../translate/translate";
import {  useSelector } from "react-redux";

const useStyles = makeStyles({
  main: {
    display: "flex",
    margin: "0.5rem 0",
  },
  icon: {
    width: "2rem",
    height: "2rem",
    color: "skyblue",
  },
  iconDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 1rem",
    cursor: "pointer",
  },
  text: {
    fontSize: "0.8rem",
    color: "#007185",
    marginTop: "0.5rem",
    cursor: "pointer",
    "&:hover": {
      color: "#C7511F",
    },
  },
  mIcon: {
    width: "3rem",
    height: "3rem",
    color: "skyblue",
  },
  mIconDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 1rem",
    cursor: "pointer",
  },
  mText: {
    fontSize: "1.2rem",
    color: "#007185",
    marginTop: "0.5rem",
    cursor: "pointer",
    "&:hover": {
      color: "#C7511F",
    },
  },
  popover: {
    padding: "1rem",
    background: "white",
    width: "35vw",
    borderRadius: "0.5rem",
    border: "1px solid grey",
    boxShadow: "0.5px 0.5px 5px 0px grey",
  },
  mPopover: {
    padding: "1rem",
    background: "white",
    width: "90vw",
    height:"24vh",
    borderRadius: "0.5rem",
    border: "1px solid grey",
    boxShadow: "0.5px 0.5px 5px 0px grey",
    marginLeft:"2rem"
    
  },
  heading: {
    fontSize: "0.95rem",
    fontWeight: "bold",
  },
  mHeading: {
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  description: {
    fontSize: "0.9rem",
  },
  mDescription: {
    fontSize: "1.2rem",
  },
  close: {
    color: "black",
    fontSize: "1rem",
    height: "3rem",
    cursor: "pointer",
    "&:hover": {
      background: "transparent",
    },
  },
  popoverHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
  },
  mPopoverHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
  },
  returnDiv: {
    display: "flex",
    marginTop: "1rem",
    justifyContent: "space-between",
    alignItems: "start",
  },
  returnIcons: {
    fontSize: "3.5rem",
    color: "#414042",
  },
  returnIconDiv: {
    marginRight: "1rem",
    padding: "1.5rem 1.2rem",
    background: "#F1F2F2",
  },
});

function ProductDeliveryOptions() {
  const getLanguage = useSelector((state) => state.language.lang);
  const t = translations.get(getLanguage);
  const  theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  const [isCODPopoverOpen, setIsCODPopoverOpen] = useState(false);
  const [isReturnablePopoverOpen, setIsReturnablePopoverOpen] = useState(false);
  const [isDeliveredPopoverOpen, setIsDeliveredPopoverOpen] = useState(false);
  const [isWarrantyPopoverOpen, setIsWarrantyPopoverOpen] = useState(false);
  return (
    <div className={classes.main}>
    {isMatch?
      <>
      <Popover
        isOpen={isCODPopoverOpen}
        positions={["bottom", "top"]}
        padding={15}
        reposition={true}
        onClickOutside={() => setIsCODPopoverOpen(false)}
        content={() => (
          <div className={classes.mPopover}>
            <div className={classes.mPopoverHeader}>
              <Typography className={classes.mHeading}>
               {t.whatIsCashOnDelivery}
              </Typography>
              <Typography
                className={classes.mClose}
                onClick={() => {
                  setIsCODPopoverOpen(false);
                }}
              >
                &#10006;
              </Typography>
            </div>
            <Typography className={classes.mDescription}>
          {t.cashOnDeliveryPaymentInclude}
            </Typography>
          </div>
        )}
      >
        <div
          className={classes.mIconDiv}
          onClick={() => {
            setIsCODPopoverOpen(!isCODPopoverOpen);
          }}
        >
          <GiTakeMyMoney className={classes.mIcon} />
          <Typography className={classes.mText}>{t.cashOnDelivery}</Typography>
        </div>
      </Popover>

      <Popover
        isOpen={isReturnablePopoverOpen}
        positions={["bottom", "top"]}
        padding={15}
        reposition={true}
        onClickOutside={() => setIsReturnablePopoverOpen(false)}
        content={() => (
          <div className={classes.mPopover}>
            <div className={classes.mPopoverHeader}>
              <Typography className={classes.mHeading}>
                {t.notReturnable}
              </Typography>
              <Typography
                className={classes.mClose}
                onClick={() => {
                  setIsReturnablePopoverOpen(false);
                }}
              >
                &#10006;
              </Typography>
            </div>
            <div>
              <Typography className={classes.mDescription}>
                {t.thisItemIsNotReturnableDueToNature}
              </Typography>
              <div className={classes.returnDiv}>
                <div className={classes.returnIconDiv}>
                  <MdDangerous className={classes.returnIcons} />
                </div>
                <Typography className={classes.mDescription}>
                  {t.forDamagedDefectiveWrong}
                </Typography>
              </div>
              <div className={classes.returnDiv}>
                <div className={classes.returnIconDiv}>
                  <BsCamera className={classes.returnIcons} />
                </div>
                <Typography className={classes.mDescription}>
                 {t.youWillNeedToShareIMG}
                </Typography>
              </div>
            </div>
          </div>
        )}
      >
        <div
          className={classes.mIconDiv}
          onClick={() => {
            setIsReturnablePopoverOpen(!isReturnablePopoverOpen);
          }}
        >
          <SiDropbox className={classes.mIcon} />
          <Typography className={classes.mText}>{t.notReturnable}</Typography>
        </div>
      </Popover>

      <Popover
        isOpen={isDeliveredPopoverOpen}
        positions={["bottom", "top"]}
        padding={15}
        reposition={true}
        onClickOutside={() => setIsDeliveredPopoverOpen(false)}
        content={() => (
          <div className={classes.mPopover}>
            <div className={classes.mPopoverHeader}>
              <Typography className={classes.mHeading}>
               {t.amazonDeliverd}
              </Typography>
              <Typography
                className={classes.mClose}
                onClick={() => {
                  setIsDeliveredPopoverOpen(false);
                }}
              >
                &#10006;
              </Typography>
            </div>
            <Typography className={classes.mDescription}>
              {t.amazonDirectlyManagedDelivery}
            </Typography>
          </div>
        )}
      >
        <div
          className={classes.mIconDiv}
          onClick={() => {
            setIsDeliveredPopoverOpen(!isDeliveredPopoverOpen);
          }}
        >
          <TbTruckDelivery className={classes.mIcon} />
          <Typography className={classes.mText}>{t.amazonDeliverd}</Typography>
        </div>
      </Popover>

      <Popover
        isOpen={isWarrantyPopoverOpen}
        positions={["bottom", "top"]}
        padding={15}
        reposition={true}
        onClickOutside={() => setIsWarrantyPopoverOpen(false)}
        content={() => (
          <div className={classes.mPopover}>
            <div className={classes.mPopoverHeader}>
              <Typography className={classes.mHeading}>
                {t.oneYearWarranty}
              </Typography>
              <Typography
                className={classes.mClose}
                onClick={() => {
                  setIsWarrantyPopoverOpen(false);
                }}
              >
                &#10006;
              </Typography>
            </div>
            <Typography className={classes.mDescription}>
              {t.oneYearOnProduct}
            </Typography>
          </div>
        )}
      >
        <div
          className={classes.mIconDiv}
          onClick={() => {
            setIsWarrantyPopoverOpen(!isWarrantyPopoverOpen);
          }}
        >
          <BsShieldCheck className={classes.mIcon} />
          <Typography className={classes.mText}> {t.oneYearWarranty}</Typography>
        </div>
      </Popover>
      </>
      :
      <>
      <Popover
        isOpen={isCODPopoverOpen}
        positions={["bottom", "top"]}
        padding={15}
        reposition={true}
        onClickOutside={() => setIsCODPopoverOpen(false)}
        content={() => (
          <div className={classes.popover}>
            <div className={classes.popoverHeader}>
              <Typography className={classes.heading}>
                {t.whatIsCashOnDelivery}
              </Typography>
              <Typography
                className={classes.close}
                onClick={() => {
                  setIsCODPopoverOpen(false);
                }}
              >
                &#10006;
              </Typography>
            </div>
            <Typography className={classes.description}>
              {t.cashOnDeliveryPaymentInclude}
            </Typography>
          </div>
        )}
      >
        <div
          className={classes.iconDiv}
          onClick={() => {
            setIsCODPopoverOpen(!isCODPopoverOpen);
          }}
        >
          <GiTakeMyMoney className={classes.icon} />
          <Typography className={classes.text}>{t.cashOnDelivery}</Typography>
        </div>
      </Popover>

      <Popover
        isOpen={isReturnablePopoverOpen}
        positions={["bottom", "top"]}
        padding={15}
        reposition={true}
        onClickOutside={() => setIsReturnablePopoverOpen(false)}
        content={() => (
          <div className={classes.popover}>
            <div className={classes.popoverHeader}>
              <Typography className={classes.heading}>
               {t.notReturnable}
              </Typography>
              <Typography
                className={classes.close}
                onClick={() => {
                  setIsReturnablePopoverOpen(false);
                }}
              >
                &#10006;
              </Typography>
            </div>
            <div>
              <Typography className={classes.description}>
                
                {t.thisItemIsNotReturnableDueToNature}
              </Typography>
              <div className={classes.returnDiv}>
                <div className={classes.returnIconDiv}>
                  <MdDangerous className={classes.returnIcons} />
                </div>
                <Typography className={classes.description}>
                  {t.forDamagedDefectiveWrong}
                </Typography>
              </div>
              <div className={classes.returnDiv}>
                <div className={classes.returnIconDiv}>
                  <BsCamera className={classes.returnIcons} />
                </div>
                <Typography className={classes.description}>
                  {t.youWillNeedToShareIMG}
                </Typography>
              </div>
            </div>
          </div>
        )}
      >
        <div
          className={classes.iconDiv}
          onClick={() => {
            setIsReturnablePopoverOpen(!isReturnablePopoverOpen);
          }}
        >
          <SiDropbox className={classes.icon} />
          <Typography className={classes.text}>{t.notReturnable}</Typography>
        </div>
      </Popover>

      <Popover
        isOpen={isDeliveredPopoverOpen}
        positions={["bottom", "top"]}
        padding={15}
        reposition={true}
        onClickOutside={() => setIsDeliveredPopoverOpen(false)}
        content={() => (
          <div className={classes.popover}>
            <div className={classes.popoverHeader}>
              <Typography className={classes.heading}>
                {t.amazonDeliverd}
              </Typography>
              <Typography
                className={classes.close}
                onClick={() => {
                  setIsDeliveredPopoverOpen(false);
                }}
              >
                &#10006;
              </Typography>
            </div>
            <Typography className={classes.description}>
              {t.amazonDirectlyManagedDelivery}
            </Typography>
          </div>
        )}
      >
        <div
          className={classes.iconDiv}
          onClick={() => {
            setIsDeliveredPopoverOpen(!isDeliveredPopoverOpen);
          }}
        >
          <TbTruckDelivery className={classes.icon} />
          <Typography className={classes.text}>{t.amazonDeliverd}</Typography>
        </div>
      </Popover>

      <Popover
        isOpen={isWarrantyPopoverOpen}
        positions={["bottom", "top"]}
        padding={15}
        reposition={true}
        onClickOutside={() => setIsWarrantyPopoverOpen(false)}
        content={() => (
          <div className={classes.popover}>
            <div className={classes.popoverHeader}>
              <Typography className={classes.heading}>
                {t.oneYearWarranty}
              </Typography>
              <Typography
                className={classes.close}
                onClick={() => {
                  setIsWarrantyPopoverOpen(false);
                }}
              >
                &#10006;
              </Typography>
            </div>
            <Typography className={classes.description}>
              {t.oneYearOnProduct}
            </Typography>
          </div>
        )}
      >
        <div
          className={classes.iconDiv}
          onClick={() => {
            setIsWarrantyPopoverOpen(!isWarrantyPopoverOpen);
          }}
        >
          <BsShieldCheck className={classes.icon} />
          <Typography className={classes.text}>{t.oneYearWarranty}</Typography>
        </div>
      </Popover>
      </>}
      
    </div>
  );
}

export default ProductDeliveryOptions;
