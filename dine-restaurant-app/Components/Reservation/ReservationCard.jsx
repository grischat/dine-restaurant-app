import Btn from "../Buttons/Btn";
import { Link } from "react-router-dom";
import "./ReservationCard.scss";
const ReservationCard = ({ img, header, subheader, paragraph, btnText }) => {
  return (
    <div className="reservation__container">
      <img className="reservation__img" src={img} alt="dish photo" />
      <div className="innerContent">
        <h2 className="reservation__header">{header}</h2>
        {paragraph && (
          <p className="reservation__paragraph">
            {subheader && (
              <span className="reservation__subheader">Reservations</span>
            )}{" "}
            <br />
            <br />
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
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
