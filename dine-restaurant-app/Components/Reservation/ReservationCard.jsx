import Btn from "../Buttons/Btn";
import { Link } from "react-router-dom";
import "./ReservationCard.scss";
const ReservationCard = ({ header, subheader, paragraph, btnText }) => {
  return (
    <div className="reservation__container">
      <img
        className="reservation__img"
        src="../images/homepage/ready-bg-mobile.jpg"
        alt="dish photo"
      />
      <div className="innerContent">
        <h2 className="reservation__header">{header}</h2>
        {paragraph && (
          <p className="reservation__paragraph">
            {subheader && <span>Reservations</span>}
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
        )}
        <Link to="/booking">
          <Btn className="btn__book-transparent">{btnText}</Btn>
        </Link>
      </div>
    </div>
  );
};

export default ReservationCard;
