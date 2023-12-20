import "./App.scss";
import useWindowResize from "../Components/Hooks/useWindowResize";
import HeaderBooking from "../Components/HeaderBooking/HeaderBooking";
import FeatureCard from "../Components/FeatureCard/FeatureCard";
import HighlightsCard from "../Components/HighlightsCard/HighlightsCard";
import DineEvents from "../Components/DineEvents/DineEvents";
import ReservationCard from "../Components/Reservation/ReservationCard";
import Footer from "../Components/Footer/Footer";
//images direct import for gh-pages (not bundling with the src property)
import bgMobile from "../public/images/homepage/hero-bg-mobile.jpg"
function App() {
  const initialImages = {
    backgroundImg: {
      bgMobile: bgMobile,
      bgTablet: "../images/homepage/hero-bg-tablet.jpg",
      bgDesktop: "../images/homepage/hero-bg-desktop.jpg",
      footerBgImg: {
        footerBgMobile: "./images/homepage/ready-bg-mobile.jpg",
        footerBgTablet: "./images/homepage/ready-bg-tablet.jpg",
        footerBgDesktop: "./images/homepage/ready-bg-desktop.jpg",
      },
      bookingBgImg: {
        bookingBgImgMobile: "./images/booking/hero-bg-mobile.jpg",
        bookingBgImgTablet: "./images/booking/hero-bg-tablet.jpg",
        bookingBgImgDesktop: "./images/booking/hero-bg-desktop.jpg",
      },
    },
    featureImg: {
      place: {
        featurePlaceMobile: "../images/homepage/enjoyable-place-mobile.jpg",
        featurePlaceTablet: "../images/homepage/enjoyable-place-tablet.jpg",
        featurePlaceDesktop: "../images/homepage/enjoyable-place-desktop.jpg",
      },
      locally: {
        featureLocallyMobile: "../images/homepage/locally-sourced-mobile.jpg",
        featureLocallyTablet: "../images/homepage/locally-sourced-tablet.jpg",
        featureLocallyDesktop: "../images/homepage/locally-sourced-desktop.jpg",
      },
    },
    highlightImg: {
      highlightsDishOneMobile: "../images/homepage/salmon-mobile.jpg",
      highlightsDishOneTablet: "../images/homepage/salmon-desktop-tablet.jpg",
      highlightsDishOneDesktop: "../images/homepage/salmon-desktop-tablet.jpg",
      highlightsDishTwoMobile: "../images/homepage/beef-mobile.jpg",
      highlightsDishTwoTablet: "../images/homepage/beef-desktop-tablet.jpg",
      highlightsDishTwoDesktop: "../images/homepage/beef-desktop-tablet.jpg",
      highlightsDishThreeMobile: "../images/homepage/chocolate-mobile.jpg",
      highlightsDishThreeTablet: "../images/homepage/chocolate-desktop-tablet.jpg",
      highlightsDishThreeDesktop: "../images/homepage/chocolate-desktop-tablet.jpg",
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
