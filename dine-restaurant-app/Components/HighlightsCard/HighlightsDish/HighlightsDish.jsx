import "./HighlightsDish.scss";

const HighlightsDish = ({ img, header, description, underscoreLine = true}) => {
  return (
    <div className="dish__container">
      <img className="dish__img" src={img} alt="dish photo"></img>
      <h3 className="dish__header">{header}</h3>
      <p className="dish__description">{description}</p>
      {underscoreLine === true ? <div className="underscore"></div> : null}
    </div>
  );
};
export default HighlightsDish;
