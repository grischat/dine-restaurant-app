import "../Buttons/Btn.scss";

const Btn = ({ children, className = "btn__book", type }) => {
  return (
    <div className="btn__container">
      <button type={type} className={className}>
        {children}
      </button>
    </div>
  );
};

export default Btn;
