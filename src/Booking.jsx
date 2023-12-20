import ReservationCard from "../Components/Reservation/ReservationCard";
import BookingForm from "../Components/BookingForm/BookingForm";
import Footer from "../Components/Footer/Footer";

import "./Booking.scss";
import bookingBgImgMobile from "./public/images/booking/hero-bg-mobile.jpg";
import bookingBgImgTablet from "./public/images/booking/hero-bg-tablet.jpg";
import bookingBgImgDesktop from "./public/images/booking/hero-bg-desktop.jpg";
const Booking = () => {
  
  const windowWidth = window.innerWidth
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
        img={
          windowWidth < 768
            ? bookingBgImgMobile
            : windowWidth > 768 && windowWidth < 1440
            ? bookingBgImgTablet
            : bookingBgImgDesktop
        }
      />
      <BookingForm />
      <Footer place="Booking" />
    </div>
  );
};

export default Booking;
