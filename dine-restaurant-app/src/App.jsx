import "./App.scss";
import HeaderBooking from "../Components/HeaderBooking/HeaderBooking";
import FeatureCard from "../Components/FeatureCard/FeatureCard";
import HighlightsCard from "../Components/HighlightsCard/HighlightsCard";
import DineEvents from "../Components/DineEvents/DineEvents";
import ReservationCard from "../Components/Reservation/ReservationCard";
import Footer from "../Components/Footer/Footer";
function App() {
  return (
    <>
      <div className="container">
        <img
          className="container__bgimg"
          src="../images/homepage/hero-bg-mobile.jpg"
          alt="header background image"
        />
        <HeaderBooking />
        <div className="cards__container">
          <FeatureCard
            header={`Enjoyable place for all the family`}
            paragraph={`Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.`}
            src={"../images/homepage/enjoyable-place-mobile.jpg"}
          />
          <FeatureCard
            header={`The most locally sourced food`}
            paragraph={`All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.`}
            src={"../images/homepage/locally-sourced-mobile.jpg"}
          />
          <HighlightsCard />
          <DineEvents />
          <ReservationCard
            header={"Ready to make a reservation?"}
            btnText={"BOOK A TABLE"}
            img={"../images/homepage/ready-bg-mobile.jpg"}
          />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
