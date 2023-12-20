import "./App.scss";
import useWindowResize from "../Components/Hooks/useWindowResize";
import HeaderBooking from "../Components/HeaderBooking/HeaderBooking";
import FeatureCard from "../Components/FeatureCard/FeatureCard";
import HighlightsCard from "../Components/HighlightsCard/HighlightsCard";
import DineEvents from "../Components/DineEvents/DineEvents";
import ReservationCard from "../Components/Reservation/ReservationCard";
import Footer from "../Components/Footer/Footer";
import initialImages from "../Components/Data/initialImages.json";
function App() {
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
