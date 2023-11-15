import "../Buttons/Btn.scss";

const Btn = ({ children }) => {
  return (
    <div className="btn__container">
      <button className="btn__book"> {children}</button>
    </div>
  );
};

export default Btn;
