import "./Footer.scss";

const Footer = ({ place }) => {
  return (
    <div className={`footer__container${place}`}>
      <div className="footer__content">
        <h1 className="footer__header">dine</h1>
        <p className="footer__address">
          Marthwaite, Sedbergh <br />
          Cumbria <br />
          +00 44 123 4567
        </p>
        <p className="footer__opentimes">
          OPEN TIMES <br /> MON - FRI: 09:00 AM - 10:00 PM <br /> SAT - SUN:
          09:00 AM - 11:30 PM
        </p>
      </div>
    </div>
  );
};

export default Footer;
