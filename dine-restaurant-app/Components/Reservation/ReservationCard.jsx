import Btn from "../Buttons/Btn";
import { Link } from "react-router-dom";
import "./ReservationCard.scss";

const ReservationCard = ({
  img,
  header,
  subheader,
  paragraph,
  btnText,
  btnPresented = false,
  classNameImage,
  classNameParagraph,
  classNameInnerContent,
  className = '"reservation__container"',
}) => {
  return (
    <div className={className}>
      <img className={classNameImage} src={img} alt="dish photo" />

      <div className={classNameInnerContent}>
        <h2 className={classNameParagraph}>{header}</h2>

        {paragraph && (
          <p className="reservation__paragraph">
            {subheader && (
              <span className="reservation__subheader">Reservations</span>
            )}
            <br />
            <br />
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </p>
        )}
        {window.innerWidth < 768 || btnPresented === true ? (
          <Link to="/booking">
            <Btn className="btn__book-transparent">{btnText}</Btn>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ReservationCard;
