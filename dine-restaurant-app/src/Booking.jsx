import ReservationCard from "../Components/Reservation/ReservationCard";
import BookingForm from "../Components/BookingForm/BookingForm";
import Footer from "../Components/Footer/Footer";
import initialImages from "../Components/Data/initialImages.json";
import useWindowResize from "../Components/Hooks/useWindowResize";
import "./Booking.scss";
const Booking = () => {
  const images = useWindowResize({
    initialFeatureImages: initialImages.featureImg,
    initialBgImages: initialImages.backgroundImg,
    initialHighlightsImages: initialImages.highlightImg,
    initialBgFooterImages: initialImages.backgroundImg.footerBgImg,
    initialBookingBgImages: initialImages.backgroundImg.bookingBgImg,
  });

  return (
    <div className="booking__container">
      <ReservationCard
        className="reservation__containerBooking"
        classNameImage="reservation__imgBooking"
        classNameParagraph="reservation__headerBg"
        classNameInnerContent="innerContentBooking"
        header={`dine`}
        paragraph={`We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.`}
        subheader={"Reservation"}
        btnText={`RESERVE PLACE`}
        img={images.bookingBgImg.settledBookingBgImg}
      />
      <BookingForm />
      <Footer place="Booking" />
    </div>
  );
};

export default Booking;
