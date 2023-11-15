import "./App.scss";
import HeaderBooking from "../Components/HeaderBooking/HeaderBooking";

function App() {
  return (
    <>
      <div className="container">
        <img className="container__bgimage"src="../images/homepage/hero-bg-mobile.jpg" alt="header background image"/>
        <HeaderBooking/>
      </div>
    </>
  );
}

export default App;
