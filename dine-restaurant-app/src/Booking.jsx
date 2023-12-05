import ReservationCard from "../Components/Reservation/ReservationCard";
import BookingForm from "../Components/BookingForm/BookingForm";
import Footer from "../Components/Footer/Footer";
import './Booking.scss'
const Booking = () => {
  return (
    <div className="booking__container">
      <ReservationCard
        header={`dine`}
        paragraph={`We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.`}
        subheader={"Reservation"}
        btnText={`RESERVE PLACE`}
        img={'../images/booking/hero-bg-mobile.jpg'}
      />
      <BookingForm/>
      <Footer place="Booking"/>
    </div>
  );
};

export default Booking;
