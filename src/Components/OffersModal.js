import { Button, Divider, makeStyles, Typography, } from "@material-ui/core";
import React, { useState } from "react";
import { BiChevronDown, BiChevronRight, BiChevronLeft } from "react-icons/bi";
import {  useSelector } from "react-redux";
import { translations } from "./../translate/translate";

const useStyles = makeStyles({
  headerDiv: {
    background: "#F5F6F7",
    height: "10.5vh",
    display: "flex",
    alignItems: "center",
    padding: "0 1.5rem",
    justifyContent: "space-between",
    boxShadow: "0 1px 5px 0 #d1d1d1",
    position: "fixed",
    width: "Calc(38vw - 3rem)",
    top: 0,
  },
  close: {
    color: "black",
    fontSize: "1.5rem",
    height: "3rem",
    "&:hover": {
      background: "transparent",
    },
  },
  header: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  body: {
    padding: "0.5rem 1.5rem",
    marginTop: "10.5vh",
  },
  text1: {
    fontWeight: "bold",
    fontSize: "0.9rem",
  },
  heading: {
    fontSize: "1.15rem",
    fontWeight: "bold",
    letterSpacing: "-0.5px",
    marginTop: "1.2rem",
  },
  paragraph: {
    fontSize: "0.85rem",
    lineHeight: "1.4",
    letterSpacing: "-0.1px",
    width: "95%",
  },
  divider: {
    marginTop: "1rem",
  },
  btn: {
    fontSize: "0.75rem",
    color: "#0a8cc2",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginTop: "0.8rem",
    "&:hover": {
      textDecoration: "underline",
      color: "#C7511F",
    },
  },
  downIcon: {
    fontSize: "0.7rem",
    marginRight: "0.1rem",
    strokeWidth: "0.5px !important",
    color: "#343434",
  },
  rightIcon: {
    fontSize: "0.9rem",
  },
  leftIcon: {
    fontSize: "1.15rem",
    strokeWidth: "0.5px !important",
  },
  FAQ: {
    margin: "0.5rem 0",
  },
  question: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    lineHeight: "1.25",
    marginTop: "0.3rem",
  },
  answer: {
    fontSize: "0.8rem",
    lineHeight: "1.3",
  },
  ul: {
    margin: 0,
  },
  ulTerms: {
    margin: 0,
    paddingLeft: "1.5rem",
    paddingBottom: "2rem",
  },
  termsHeading: {
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  termsDiv: {
    padding: "0.4rem 0 1rem 1rem",
  },
  termsBody: {
    fontSize: "0.78rem",
    fontFamily: "Roboto",
    lineHeight: "1.4",
    wordSpacing: "1px",
  },
  listItem: {
    marginTop: "1rem",
  },
  amazonLink: {
    color: "#0a8cc2",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: "#C7511F",
    },
  },
  termsInnerHeading: {
    fontSize: "0.78rem",
    fontWeight: "bold",
    marginTop: "0.5rem",
  },
  offerTitle: {
    fontSize: "1rem",
    fontWeight: "bold",
    margin: "0.7rem 0",
  },
  offerDesc: {
    fontSize: "0.95rem",
  },
  availOffer: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "0.7rem",
  },
  backButton: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  partnerHeading: {
    fontSize: "1.15rem",
  },
  promotionTermsDiv: {
    marginLeft: "1rem",
  },
  promotionTerms: {
    fontSize: "1.05rem",
    fontWeight: "bold",
    marginTop: "1rem",
  },
  ol: {
    margin: "0",
    padding: "0",
    marginTop: "0.3rem",
    paddingLeft: "0.8rem",
    fontSize: "0.78rem",
  },
  noteMargin: {
    marginTop: "0.3rem",
  },
  headerOffer: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  descOffer: {
    fontSize: "1.3rem",
    lineHeight: "1.3",
    margin: "1.5rem 0",
  },
  promotionTermsOffer: {
    fontSize: "1.2rem",
    margin: "1rem",
    fontWeight: "bold",
  },
  "@global": {
    "ol > li": {
      paddingLeft: "1rem",
      marginTop: "0.5rem",
    },
    "ol > li::marker": {
      fontWeight: "bold",
    },
    "table, th, td": {
      border: "2px solid",
      padding: "0.3rem",
      borderCollapse: "collapse",
    },
  },
});
export const NoCostEmiModal = (props) => {
  const getLanguage = useSelector((state) => state.language.lang);
  const t = translations.get(getLanguage);
  const classes = useStyles();
  const [FAQ, setFAQ] = useState(false);
  const [terms, setTerms] = useState(false);
  const [rotateChevron, setRotateChevron] = useState(false);
  const [rotateChevron2, setRotateChevron2] = useState(false);
  const handleRotate = () => setRotateChevron(!rotateChevron);
  const handleRotate2 = () => setRotateChevron2(!rotateChevron2);

  const rotateFAQ = rotateChevron ? "rotate(180deg)" : "rotate(0)";
  const rotateTerms = rotateChevron2 ? "rotate(180deg)" : "rotate(0)";
  const showFAQ = (val) => {
    setFAQ(val);
    handleRotate();
  };
  const showTerms = (val) => {
    setTerms(val);
    handleRotate2();
  };
  return (
    <div>
    
      <div className={classes.headerDiv}>
        <Typography className={classes.header}>{t.noCostEMI}</Typography>
        <Button
          className={classes.close}
          onClick={() => {
            props.toggleDrawer(false);
          }}
        >
          &#10006;
        </Button>
      </div>
      <div className={classes.body}>
        <Typography className={classes.text1}>{t.SpecialOffer}</Typography>
        <Typography className={classes.heading}>
          {t.availNoCostEMIonselect}
        </Typography>
        <Typography className={classes.paragraph}>
         {t.tomakethisaNoCostEMIoffer}
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.btn} onClick={() => showFAQ(!FAQ)}>
          <BiChevronDown
            className={classes.downIcon}
            style={{ transform: rotateFAQ, transition: "all 0.05s linear" }}
          />
         {t.FAQs}
        </Typography>
        {FAQ && (
          <div className={classes.FAQ}>
            <ul className={classes.ul}>
              <li className={classes.ul}>
                <Typography className={classes.question}>
                 {t.isNoCostEMIAvailableonBuyingMorethanOneProductinoneOrder}
                </Typography>
                <Typography className={classes.answer}>
                 {t.YesYoucanbuyanynumberofproducts}
                </Typography>
              </li>
              <li>
                <Typography className={classes.question}>
                 {t.Whatistheminimumamount}
                </Typography>
                <Typography className={classes.answer}>
                  {t.EMIisavailableonlyonpurchasesaboveINR}
                </Typography>
              </li>
              <li>
                <Typography className={classes.question}>
                  {t.Isthereanyspecificcoupon}
                </Typography>
                <Typography className={classes.answer}>
                 {t.NoYoujustneedtopayusingeligiblecard}
                </Typography>
              </li>

              <li>
                <Typography className={classes.question}>
                  {t.Willmybankcontinuetocharge}
                </Typography>
                <Typography className={classes.answer}>
                  {t.Yesyourbankwillchargeyouinterest}
                </Typography>
              </li>
            </ul>
          </div>
        )}
        <Typography className={classes.btn} onClick={() => showTerms(!terms)}>
          <BiChevronDown
            className={classes.downIcon}
            style={{ transform: rotateTerms, transition: "all 0.05s linear" }}
          />
          {t.TermsandConditions}
        </Typography>
        {terms && (
          <div className={classes.termsDiv}>
            <Typography className={classes.termsHeading}>
              I{t.TermsandConditions}
            </Typography>
            <Typography className={classes.termsBody}>
              {t.Thefollowingtermsandconditionsapplytonocostequatedmonthlyinstallment} (""<b>{t.EMI}</b>""){t.transactionsmadeusingacreditcardissuedbyanybank} 
               (""<b>{t.noCostEMI}</b>"")
            </Typography>
            <ul className={classes.ulTerms}>
              <li className={`${classes.termsBody} ${classes.listItem}`}>
                {t.TheNoCostEMIfacilityisbeingofferedtothecustomers}{" "}
                <a
                  href="http://www.amazon.in"
                  target="blank"
                  className={classes.amazonLink}
                >
                  {t.wwwamazonin}
                </a>{" "}
                {t.orthemobileapplicationmobilesite} ""
                <b>{t.Amazonin}</b>"") {t.usingacreditcardissuedbyanybankusingEMIfacility}
              </li>
              <li className={classes.termsBody}>
                {t.TheNoCostEMIfacilityismadeavailableonselectproducts}
              </li>
              <li className={classes.termsBody}>
                {t.TheNoCostEMIpaymentoptioncanonlybeavailedusingthecreditcard}
              </li>
              <li className={classes.termsBody}>
                {t.UsingtheNoCostEMIpaymentoptionthecustomerswhoundertakethepurchase}
              </li>
              <li className={classes.termsBody}>
                {t.ThebanksissuingthecreditcardsreservetherighttochargeGoods}
              </li>
              <li className={classes.termsBody}>
                {t.Customerscanaddmorethanoneitemtotheircartandifalltheproducts}{" "}
              </li>
              <li className={classes.termsBody}>
                {t.CustomersmayavailtheNoCostEMIfacilityprovidedthat}
                <ol>
                  <li className={classes.termsBody}>
                    {t.theorderisnotcancelledbythecustomerortheparticipatingsellersorAmazonor}
                  </li>
                  <li className={classes.termsBody}>
                    {t.theproductisnotreturnedexchangedbythecustomer}
                  </li>
                </ol>
              </li>
              <li className={classes.termsBody}>
                {t.TheEMIfacilityismadeavailabletothecustomersbyandinthesolediscretion}
              </li>
              <li className={classes.termsBody}>
                {t.AmazonreservestherighttostopNoCostEMIpaymentoption}
              </li>
            </ul>
            <Typography className={classes.termsInnerHeading}>
              {t.TermsConditionsofBajajFinanceNoCostEMI}
            </Typography>
            <Typography className={`${classes.termsBody} ${classes.listItem}`}>
              {t.Thefollowingtermsconditionsapplytoanytransactionsmade}
            </Typography>
            <ul className={classes.ulTerms}>
              <li className={`${classes.termsBody} ${classes.listItem}`}>
                {t.TheBajajFinanceNoCostEMIfacilityisbeingofferedbyBajajFinanceLimited}(""<b>{t.BFL}</b>"") 
               {t.tothecustomershavingaBajajFinanceNoCostEMIcard} (""<b>{t.card}</b>"").
              </li>
              <li className={classes.termsBody}>
                {t.NoCostEMIusingtheCardasapaymentmethodisavailableon}{" "}
                <a
                  href="https://www.amazon.in/"
                  className={classes.amazonLink}
                  target="blank"
                >
                  https://www.amazon.in/
                </a>{" "}
                (""<b>{t.Website}</b>"").
              </li>
              <li className={classes.termsBody}>
                {t.TheBajajFinanceNoCostEMIfacilitycanonlybeavailedusing}
              </li>
              <li className={classes.termsBody}>
                {t.AslongasallitemsinthecartareeligibleforNocostEMIonBFL}
              </li>
              <li className={classes.termsBody}>
                {t.AmazonhasnoroletoplaypertainingtotheCardincludingbutnotlimited}
              </li>
              <li className={classes.termsBody}>
                {t.ThecustomeruseoftheCardisalsogovernedbythetermsandconditions}
              </li>
              <li className={classes.termsBody}>
                {t.ByusingtheBajajFinanceNoCostEMIfacilitythecustomershereby}
              </li>
              <li className={classes.termsBody}>
                {t.AmazonreservestherighttostopNoCostEMIfacilityatanytime}
              </li>
              <li className={classes.termsBody}>
                {t.Amazondoesnotchargethecustomeranyprocessingorconveniencefee}
              </li>
              <li className={classes.termsBody}>
                {t.IfanorderusingtheNoCostEMIfacilityiscancelled}
              </li>
              <li className={classes.termsBody}>
                {t.Amazonwillnotbeheldliableforanydisputearisingoutofor}
              </li>
              <li className={classes.termsBody}>
               {t.PleasecontactBFLforanyqueriesinrelationtotheCard}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export const BankOfferModal = (props) => {
  const getLanguage = useSelector((state) => state.language.lang);
  const t = translations.get(getLanguage);
  const classes = useStyles();
  const [offer1, setOffer1] = useState(false);
  const [offer2, setOffer2] = useState(false);
  const [backShow, setBackShow] = useState(false);
  const showOffer1 = (val) => {
    setOffer1(val);
    setBackShow(true);
  };
  const showOffer2 = (val) => {
    setOffer2(val);
    setBackShow(true);
  };
  const backClicked = () => {
    setBackShow(false);
    setOffer1(false);
    setOffer2(false);
  };
  const dayTh = (d) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const getDate = (val) => {
    
    const current = new Date();
    const day = current.getDate() + val;
    const d = dayTh(day);
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][current.getMonth()];
    const year = current.getFullYear();
    if (val === 0) return day + d + " " + month;

    return day + d + " " + month + " " + year;
  };
  return (
    <div>
      {backShow ? (
        <div className={classes.headerDiv}>
          <Typography
            className={`${classes.header} ${classes.backButton}`}
            onClick={backClicked}
          >
            <BiChevronLeft className={classes.leftIcon} />
            {t.Back}
          </Typography>
          <Button
            className={classes.close}
            onClick={() => {
              props.toggleDrawer(false);
            }}
          >
            &#10006;
          </Button>
        </div>
      ) : (
        <div className={classes.headerDiv}>
          <Typography className={classes.header}>{t.bankOffer}</Typography>
          <Button
            className={classes.close}
            onClick={() => {
              props.toggleDrawer(false);
            }}
          >
            &#10006;
          </Button>
        </div>
      )}

      {backShow && offer1 && (
        <div className={classes.body}>
          <Typography className={classes.headerOffer}>{t.OfferOne}</Typography>
          <Typography className={classes.descOffer}>
            {t.InstantDiscountuptoINRonHSBCCashbackCardCreditCard}
          </Typography>
          <Typography className={classes.promotionTermsOffer}>
         {t.promotionTerms}
          </Typography>
          <center>
            <Typography className={classes.termsInnerHeading}>
              {t.FrequentlyAskedQuestions}
            </Typography>
          </center>
          <ol className={classes.ol}>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {t.Whatistheoffer}
              </Typography>
              <Typography className={classes.termsBody}>
                {t.GetInstantDiscountwithHSBCCashbackCreditCard}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {t.HowcanIavailthisoffer}
              </Typography>
              <Typography className={classes.termsBody}>
                {t.Justgothroughthenormalpurchaseprocessandcheckoutwiththeeligibleproducts}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {t.Whatistheminimumtransactionsizefortheoffer}
              </Typography>
              <Typography className={classes.termsBody}>
                {t.AslongasRsisspentonthecardforpurchaseofeligibleproducts}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {t.WhatisthemaximumdiscountthatIcanavail}
              </Typography>
              <Typography className={classes.termsBody}>
                {t.ThemaximumdiscountpossibleperHSBCCashbackCreditCardacrossAmazoninSiteandAppduringtheoffer}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {t.Isdiscountapplicableondebitandcreditcards}
              </Typography>
              <Typography className={classes.termsBody}>
               {t.DiscountisavailableonlyonHSBCCashbackCreditCard}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {" "}
                {t.CanIavaildiscountonEMI}
              </Typography>
              <Typography className={classes.termsBody}>
                {t.YesthediscountisapplicableonHSBCCashbackCreditCard}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {t.IdidnotreceivethediscountWhy}
              </Typography>
              <Typography className={classes.termsBody}>
                {t.Pleasemakesureyouareusinganeligiblecardandhaveeligibleproducts}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {" "}
                {t.WhatifIcancelmyorder}
              </Typography>
              <Typography className={classes.termsBody}>
                {t.TheOfferisapplicableforasuccessfulpurchaseIfInstantDiscountisavailedonanypurchase}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {" "}
                {t.Mypaymentfailedwhileplacingtheorder}
              </Typography>
              <Typography className={classes.termsBody}>
               {t.IfyourpaymentfailedwhileplacingtheorderAmazoningivesyouanoptiontoreviseyourpayment}
              </Typography>
            </li>
          </ol>
          <center>
            <u>
              <Typography className={classes.termsInnerHeading}>
               {t.ScheduleOne}
              </Typography>
            </u>
            <Typography className={classes.termsInnerHeading}>
             {t.OfferTermsandConditions}
            </Typography>
          </center>

          <ol className={classes.ol}>
            <li>
              <Typography className={classes.termsBody}>
                {t.ThisofferOfferisprovidedbyTheHongkongandShanghaiBankingCorporationLimited}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.TheseOffertermsandconditionsOfferTermsareinaddition}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.AllresidentsofIndiaholdingHSBCCashbackCreditCardissuedbytheBank}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
               {t.TheOfferisvalidfromJulytoMarch}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.UnderthisOfferanyCardholderwhoduringtheOfferPeriod}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.ThemaximumdiscountprovidedunderthisOfferwillnotexceed}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.TheOfferisNOTapplicableonpaymentmadebycustomersusingtheCardonDelivery}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.ThepurchaseofProductbyCardholdersonequatedmonthlyinstalments}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.Incasetherearemultipleitemsinapurchaseordertheitemwisesavingsdiscountmayvary}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.ThisOfferwillnotbeapplicableiftheCardholderorthesellerorAmazoncancel}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.AmazonandortheBankreservetherighttodisqualifytheCardholder}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.AmazonandortheBankreservetherightatanytimewithoutpriornoticeandwithout}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.DelinquentandoverlimitBankscreditcardmemberswillnotqualify}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.CardholdersarenotboundinanywaytoparticipateinthisOffer}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
               {t.NothinghereinamountstoacommitmentbytheBankorAmazontoconductfurther}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.TheaboveOfferisbywayofaspecialofferandnothingcontainedhereinwillprejudice}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.ThisOfferisnotvalidoncorporateorcommercialCards}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.ThisOfferisnotavailableonipurchaseofproducts}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.ByparticipatinginthisOffereveryCardholderexpresslyagreesthatBank}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.TheseOfferTermsaregovernedbythelawsofIndiaandthecourtsatNewDelhi}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.AnypersonavailingthisOfferwillbedeemedtohaveaccepted}
              </Typography>
            </li>
            <li>
              <div>
                <Typography className={classes.termsBody}>
                  {t.NotwithstandinganythingcontainedintheseOfferTermsthisOfferisnotapplicable}
                </Typography>
                <ol>
                  <li className={classes.termsBody}>
                    {t.GiftCardsAmazonbrandedandNonAmazonbranded}
                  </li>
                  <li className={classes.termsBody}>{t.InfantNutrition}</li>
                  <li className={classes.termsBody}>
                    {t.PrepaidphonerechargesDTHrecharges}
                  </li>
                  <li className={classes.termsBody}>
                    {t.KindleebooksandKindleUnlimitedSubscriptionProgram}
                  </li>
                  <li className={classes.termsBody}>{t.AmazonPaybalance}</li>
                  <li className={classes.termsBody}>
                    {t.SelectSmartMobilephonesseeproductpageforoffereligibility}
                  </li>
                  <li className={classes.termsBody}>{t.GoldandSilvercoins}</li>
                </ol>
              </div>
            </li>
          </ol>
          <br />
          <br />
          <Divider className={classes.divider} />
          <Typography className={classes.availOffer}>
            {t.Howtoavailoffer}
          </Typography>
          <ul className={classes.ulTerms}>
            <li className={classes.offerDesc}>
              {t.Selecteligiblecardatthetimeofcheckout}
            </li>
            <li className={classes.offerDesc}>
              {t.Nopromocoderequiredtoavailtheoffer}
            </li>
          </ul>
        </div>
      )}
      
      {backShow && offer2 && (
        <div className={classes.body}>
          <Typography className={classes.headerOffer}>Offer 2</Typography>
          <Typography className={classes.descOffer}>
            {t.InstantDiscountuptoINRonBankofBarodaCreditCardTransactions}
          </Typography>
          <Typography className={classes.promotionTermsOffer}>
            {t.promotionTerms}
          </Typography>
          <center>
            <Typography className={classes.termsInnerHeading}>
              {t.FrequentlyAskedQuestions}
            </Typography>
          </center>
          <Typography className={classes.offerDesc}>
            <b>{t.Offerperiod}</b> {getDate(0)} 00:00 {t.HRSto} {getDate(3)}{" "}
            23:59{t.HRS}
          </Typography>

          <ol className={classes.ol}>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {t.WhatistheBOBOffer}
              </Typography>
              <ol type="a" className={classes.ol}>
                <li className={classes.termsBody}>
                  {t.GetinstantdiscountonBOBCreditCardpayment}
                </li>
                <li className={classes.termsBody}>
                  {t.Anycancelledrejectedorreturnedorderswillnotbeeligiblefortheoffer}
                </li>
              </ol>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {t.WhatisthemaximumdiscountthatIcanavail}
              </Typography>
              <Typography className={classes.termsBody}>
                {t.ThemaximumdiscountpossibleuptoINRReferthebelowtable}
              </Typography>
              <table className={classes.listItem}>
                <thead>
                  <th></th>
                  <th>{t.MinTransaction}</th>
                  <th>{t.CCMaxDiscount}</th>
                  <th>{t.CCEMIMaxDiscount}</th>
                </thead>
                <tr>
                  <td>{t.Mobiles}</td>
                  <td>7000</td>
                  <td>750</td>
                  <td>1250</td>
                </tr>
                <tr>
                  <td>{t.Fashion}</td>
                  <td>2000</td>
                  <td>500</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>{t.OtherCategories}</td>
                  <td>7000</td>
                  <td>1500</td>
                  <td>2000</td>
                </tr>
              </table>
              <Typography className={classes.termsBody}>
                {t.ApplicableonElectronicsLargeappliancesTVsHomeKitchencategories}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {t.HowcanIavailthisoffer}
              </Typography>
              <Typography className={classes.termsBody}>
                {t.Therearenootherspecialstepstoavailthisoffer}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {t.CanIgetthisofferwithExchangeoffer}
              </Typography>
              <Typography className={classes.termsBody}>
                {t.Yestheofferisvalidonexchangeaslongasminimumpurchase}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {t.CanIavaildiscountoncardpaymentforcashondeliveryorder}
              </Typography>
              <Typography className={classes.termsBody}>
                {t.CODandNetBankingtransactionsareNOTincludedinthisOffer}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {t.WouldIgettheBankofferevenifImakeapartpayment}
              </Typography>
              <Typography className={classes.termsBody}>
                {t.YestheofferisavailableonpartialpaymentsaslongasminimumpurchasevalueisspentonBOBCard}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
               {t.IstheofferapplicableonEMI}
              </Typography>
              <Typography className={classes.termsBody}>
                {t.YestheofferisapplicableonlyontheCreditCardEMIpayment}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {t.WhatifIcancelmyorder}
              </Typography>
              <Typography className={classes.termsBody}>
                {t.TheOfferisapplicableforasuccessfulpurchaseIfInstantDiscountisavailedonanypurchase}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsInnerHeading}>
                {t.MypaymentfailedwhileplacingtheorderwillIbeeligiblefortheoffer}
              </Typography>
              <Typography className={classes.termsBody}>
                {t.IfyourpaymentfailedwhileplacingtheorderAmazoningivesyouanoptiontoreviseyourpayment}
              </Typography>
            </li>
          </ol>
          <center>
            <u>
              <Typography className={classes.termsInnerHeading}>
                {t.ScheduleOne}
              </Typography>
            </u>
            <Typography className={classes.termsInnerHeading}>
              {t.OfferTermsandConditions}
            </Typography>
          </center>

          <ol className={classes.ol}>
            <li>
              <Typography className={classes.termsBody}>
                {t.This} "<b>{t.offers}</b>" {t.isprovidedtoyoubyBoBFinancialSolutionsLimited} ("<b>{t.Bank}</b>") 
                {t.andAmazonPayIndiaPrivateLimitedformerlyknownasAmazon} ("<b>Amazon</b>") 
                {t.andmadeavailableonthewebsite}{" "}
                <a href="www.amazon.in" className={classes.amazonLink}>
                 {t.wwwamazonin}
                </a>{" "}
                {t.andthemobilesiteandmobileapplicationthereofcollectively}"<b>{t.Amazonin}</b>").
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.TheseOffertermsandconditions} ("<b>{t.OfferTerms}</b>") {t.areinadditiontotheAmazoninConditionsofUseSaleandPrivacyNotice}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.AllresidentsofIndiaholdingavalidcreditcardissuedbytheBankeacha} "<b>{t.card}</b>") 
                 {t.areeligibletoavailtheOffereacha}"<b>{t.Cardholder}</b>".
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.TheofferisvalidinthemonthofSeptemberietoSeptember} ("<b>{t.OfferPeriod}</b>"),{t.unlessrevokedorextendedbyAmazoninitssolediscretionwithoutany}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.UnderthisOfferanyCardholderwhoduringtheOfferDurationmakesanypurchaseMobilesElectronics}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.EachCardholdercanavailamaximuminstantdiscountasperthebelowtable}
              </Typography>
              <table className={classes.listItem}>
                <thead>
                  <th></th>
                  <th>{t.MinTransaction}</th>
                  <th>{t.CCMaxDiscount}</th>
                  <th>{t.CCEMIMaxDiscount}</th>
                </thead>
                <tr>
                  <td>{t.Mobiles}</td>
                  <td>7000</td>
                  <td>750</td>
                  <td>1250</td>
                </tr>
                <tr>
                  <td>{t.Fashion}</td>
                  <td>2000</td>
                  <td>500</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>{t.OtherCategories}</td>
                  <td>7000</td>
                  <td>1500</td>
                  <td>2000</td>
                </tr>
              </table>
              <Typography className={classes.termsBody}>
                {t.ApplicableonElectronicsLargeappliancesTVsHomeKitchencategories}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.Thepurchaseoftheproductswillbegovernedbythetermsofsale}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.Whiletheoffersareseparateforallcategories}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.TheInstantDiscountwouldnotbe}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.TheOfferisalsovalidonEMI}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.Incasetherearemultipleitemsinapurchaseordertheitemwisesavingsdiscountmayvary}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.Intheeventtheorderisreturnedorcancelledby}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.IfInstantDiscountisavailedonanypurchaseandthe}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
               {t.Amazonreservestherightatanytimewithoutpriornotice}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.Nothingcontainedhereinamountstoacommitment}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
              {t.TheaboveOfferisbywayofaspecialofferandnothingcontainedhereinwillprejudice}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.DelinquentandoverlimitBankscreditcardmemberswillnotqualify}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.ThisOfferisnotvalidoncorporateorcommercialCards}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.AlldisputesbetweentheCardholdersandthe}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.ThisOffercannotbeavailedon}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.Undernocircumstances}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.ByparticipatinginthisOffereveryCardholderexpresslyagreesthatBank}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.TheseOfferTermsaregovernedbythelawsofIndiaandthecourtsatNewDelhi}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.TheCardholdersarenotboundinanyway}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
                {t.AnypersonavailingthisOfferwillbedeemedtohaveaccepted}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
               {t.Someproductsmightnotbeeligiblefor}
              </Typography>
            </li>
          </ol>
          <br />
          <br />
          <Divider className={classes.divider} />
          <Typography className={classes.availOffer}>
            {t.Howtoavailoffer}
          </Typography>
          <ul className={classes.ulTerms}>
            <li className={classes.offerDesc}>
              {t.Selecteligiblecardatthetimeofcheckout}
            </li>
            <li className={classes.offerDesc}>
              {t.Nopromocoderequiredtoavailtheoffer}
            </li>
          </ul>
        </div>
      )}
      {!backShow && (
        <div className={classes.body}>
          <Typography className={classes.offerTitle}>{t.OfferOne}</Typography>
          <Typography className={classes.offerDesc}>
           {t.InstantDiscountuptoINRonHSBCCashbackCardCreditCard}
          </Typography>
          <Typography
            className={classes.btn}
            onClick={() => showOffer1(!offer1)}
          >
            {t.Seedetails}
            <BiChevronRight className={classes.rightIcon} />
          </Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.offerTitle}>{t.Offertwo}</Typography>
          <Typography className={classes.offerDesc}>
            {t.InstantDiscountuptoINRonBankofBarodaCreditCardTransactions}
          </Typography>
          <Typography
            className={classes.btn}
            onClick={() => showOffer2(!offer2)}
          >
            {t.Seedetails}
            <BiChevronRight className={classes.rightIcon} />
          </Typography>
          <Divider className={classes.divider} />
          <Typography className={classes.availOffer}>
           {t.Howtoavailoffer}
          </Typography>
          <ul className={classes.ulTerms}>
            <li className={classes.offerDesc}>
              {t.Selecteligiblecardatthetimeofcheckout}
            </li>
            <li className={classes.offerDesc}>
              {t.Nopromocoderequiredtoavailtheoffer}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export const PartnerOffersModal = (props) => {
  const getLanguage = useSelector((state) => state.language.lang);
  const t = translations.get(getLanguage);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.headerDiv}>
        <Typography className={classes.header}>{t.partnerOffer}</Typography>
        <Button
          className={classes.close}
          onClick={() => {
            props.toggleDrawer(false);
          }}
        >
          &#10006;
        </Button>
      </div>
      <div className={classes.body}>
        <Typography className={classes.partnerHeading}>
          {t.getGstInvoiceAndSaveUp}{" "}
          <a
            href="https://www.amazon.in/business/register/org/landing"
            target="blank"
            className={classes.amazonLink}
          >
            {t.Signupforfree}
          </a>
        </Typography>
        <div className={classes.promotionTermsDiv}>
          <Typography className={classes.promotionTerms}>
            {t.promotionTerms}
          </Typography>
          <Typography className={classes.termsInnerHeading}>
           {t.AmazonBusinessprovides}
          </Typography>
          <Typography className={classes.termsBody}>
            {t.Additionallyyouwill}
          </Typography>
          <Typography className={classes.termsBody}>
            {t.Wanttoregister}
          </Typography>
          <ol className={classes.ol}>
            <li>
              <Typography className={classes.termsBody}>
                {t.Createa}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
               {t.Toregisteryourbusiness}
              </Typography>
            </li>
            <Typography className={classes.termsInnerHeading}>Note:</Typography>

            <Typography
              className={`${classes.termsBody} ${classes.noteMargin}`}
            >
              {t.Ifyoureconverting}
            </Typography>
            <Typography
              className={`${classes.termsBody} ${classes.noteMargin}`}
            >
              {t.Youwontbeable}
            </Typography>
            <Typography
              className={`${classes.termsBody} ${classes.noteMargin}`}
            >
             {t.KeepyourGST}
            </Typography>

            <li>
              <Typography
                className={`${classes.termsBody} ${classes.listItem}`}
              >
               {t.Togothrough}
              </Typography>
            </li>
            <li>
              <Typography className={classes.termsBody}>
               {t.TogothroughAmazon}
              </Typography>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
