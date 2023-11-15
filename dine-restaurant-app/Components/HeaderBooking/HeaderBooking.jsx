import "./HeaderBooking.scss";
import Btn from "../Buttons/Btn";
const HeaderBooking = () => {
  return (
    <div className="header__container">
      <h1 className="header">dine</h1>
      <h2 className="header__subheader">
        Exquisite dining
        <br />
        since 1989
      </h2>
      <p className="header__paragraph">
        Experience our seasonal menu in beautiful country surroundings. Eat the
        freshest produce from the comfort of our farmhouse.
      </p>
      <Btn>BOOK A TABLE</Btn>
    </div>
  );
};

export default HeaderBooking;
