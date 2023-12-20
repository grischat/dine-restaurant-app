import "../FeatureCard/FeatureCard.scss";
import Divider from "../Divider/Divider";
const FeatureCard = ({ header, paragraph, src, alt, imgPosition, containerPosition }) => {
  return (
    <div className="feature__container">
      <img className={imgPosition} src={src} alt={alt} />
      <div className={containerPosition}>
        <Divider />
        <h2 className="feature__header">{header}</h2>
        <p className="feature__paragraph">{paragraph}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
