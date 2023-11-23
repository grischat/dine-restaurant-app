import "../FeatureCard/FeatureCard.scss";
import Divider from "../Divider/Divider";
const FeatureCard = ({header,paragraph, src, alt }) => {
  return (
    <div className="feature__container">
      <img className="feature__img" src={src} alt={alt} />
      <Divider/>
      <h2 className="feature__header">{header}</h2>
      <p className="feature__paragraph">{paragraph}</p>
    </div>
  );
};

export default FeatureCard;
