import "./App.scss";
import useWindowResize from "../Components/Hooks/useWindowResize";
import HeaderBooking from "../Components/HeaderBooking/HeaderBooking";
import FeatureCard from "../Components/FeatureCard/FeatureCard";
import HighlightsCard from "../Components/HighlightsCard/HighlightsCard";
import DineEvents from "../Components/DineEvents/DineEvents";
import ReservationCard from "../Components/Reservation/ReservationCard";
import Footer from "../Components/Footer/Footer";
//images direct import for gh-pages (not bundling with the src property) WHAT A FREAKED SHIT i would say
import bgMobile from "./public/images/homepage/hero-bg-mobile.jpg";
import bgTablet from "./public/images/homepage/hero-bg-tablet.jpg";
import bgDesktop from "./public/images/homepage/hero-bg-desktop.jpg";

import footerBgMobile from "./public/images/homepage/ready-bg-mobile.jpg";
import footerBgTablet from "./public/images/homepage/ready-bg-tablet.jpg";
import footerBgDesktop from "./public/images/homepage/ready-bg-desktop.jpg";

import bookingBgImgMobile from "./public/images/booking/hero-bg-mobile.jpg";
import bookingBgImgTablet from "./public/images/booking/hero-bg-tablet.jpg";
import bookingBgImgDesktop from "./public/images/booking/hero-bg-desktop.jpg";

import featurePlaceMobile from "./public/images/homepage/enjoyable-place-mobile.jpg";
import featurePlaceTablet from "./public/images/homepage/enjoyable-place-tablet.jpg";
import featurePlaceDesktop from "./public/images/homepage/enjoyable-place-desktop.jpg";

import featureLocallyMobile from "./public/images/homepage/locally-sourced-mobile.jpg";
import featureLocallyTablet from "./public/images/homepage/locally-sourced-tablet.jpg";
import featureLocallyDesktop from "./public/images/homepage/locally-sourced-desktop.jpg";

import highlightsDishOneMobile from "./public/images/homepage/salmon-mobile.jpg";
import highlightsDishOneTablet from "./public/images/homepage/salmon-desktop-tablet.jpg";
import highlightsDishOneDesktop from "./public/images/homepage/salmon-desktop-tablet.jpg";
import highlightsDishTwoMobile from "./public/images/homepage/beef-mobile.jpg";
import highlightsDishTwoTablet from "./public/images/homepage/beef-desktop-tablet.jpg";
import highlightsDishTwoDesktop from "./public/images/homepage/beef-desktop-tablet.jpg";
import highlightsDishThreeMobile from "./public/images/homepage/chocolate-mobile.jpg";
import highlightsDishThreeTablet from "./public/images/homepage/chocolate-desktop-tablet.jpg";
import highlightsDishThreeDesktop from "./public/images/homepage/chocolate-desktop-tablet.jpg";
function App() {
  const initialImages = {
    backgroundImg: {
      bgMobile: bgMobile,
      bgTablet: bgTablet,
      bgDesktop: bgDesktop,
      footerBgImg: {
        footerBgMobile: footerBgMobile,
        footerBgTablet: footerBgTablet,
        footerBgDesktop: footerBgDesktop,
      },
      bookingBgImg: {
        bookingBgImgMobile: bookingBgImgMobile,
        bookingBgImgTablet: bookingBgImgTablet,
        bookingBgImgDesktop: bookingBgImgDesktop,
      },
    },
    featureImg: {
      place: {
        featurePlaceMobile: featurePlaceMobile,
        featurePlaceTablet: featurePlaceTablet,
        featurePlaceDesktop: featurePlaceDesktop,
      },
      locally: {
        featureLocallyMobile: featureLocallyMobile,
        featureLocallyTablet: featureLocallyTablet,
        featureLocallyDesktop: featureLocallyDesktop,
      },
    },
    highlightImg: {
      highlightsDishOneMobile: highlightsDishOneMobile,
      highlightsDishOneTablet: highlightsDishOneTablet,
      highlightsDishOneDesktop: highlightsDishOneDesktop,
      highlightsDishTwoMobile: highlightsDishTwoMobile,
      highlightsDishTwoTablet: highlightsDishTwoTablet,
      highlightsDishTwoDesktop: highlightsDishTwoDesktop,
      highlightsDishThreeMobile: highlightsDishThreeMobile,
      highlightsDishThreeTablet: highlightsDishThreeTablet,
      highlightsDishThreeDesktop: highlightsDishThreeDesktop,
    },
  };

  const images = useWindowResize({
    initialFeatureImages: initialImages.featureImg,
    initialBgImages: initialImages.backgroundImg,
    initialHighlightsImages: initialImages.highlightImg,
    initialBgFooterImages: initialImages.backgroundImg.footerBgImg,
    initialBookingBgImages: initialImages.backgroundImg.bookingBgImg,
  });

  return (
    <>
      <div className="container">
        <img
          className="container__bgimg"
          src={images.backgroundImg.settledImg}
          alt="header background image"
        />
        <HeaderBooking />
        <div className="cards__container">
          <FeatureCard
            imgPosition="feature__img-left"
            containerPosition="feature__description-right"
            header="Enjoyable place for all the family"
            paragraph="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
            src={images.featureImg.settledPlaceImg}
          />
          <FeatureCard
            imgPosition="feature__img-right"
            containerPosition="feature__description-left"
            header="The most locally sourced food"
            paragraph="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
            src={images.featureImg.settledLocallyImg}
          />
          <HighlightsCard highlights={images.highlightImg} />
          <DineEvents />
          <div className="footer__container">
            <ReservationCard
              className="reservation__container"
              classNameImage="reservation__img"
              classNameParagraph="reservation__header"
              classNameInnerContent="innerContent"
              header={"Ready to make a reservation?"}
              btnPresented={true}
              btnText={"BOOK A TABLE"}
              img={images.footerBgImg.settledFooterBgImg}
            />
            <Footer place="Homepage" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
