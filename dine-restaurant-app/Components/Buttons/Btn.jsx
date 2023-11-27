import "../Buttons/Btn.scss";

const Btn = ({ children, className = "btn__book" }) => {
  return (
    <div className="btn__container">
      <button className={className}>{children}</button>
    </div>
  );
};

export default Btn;
