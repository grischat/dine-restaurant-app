import "../FeatureCard/FeatureCard.scss";
import Divider from "../Divider/Divider";
const FeatureCard = ({header,paragraph, src, alt }) => {
  return (
    <div className="container__card">
      <img className="card__img" src={src} alt={alt} />
      <Divider/>
      <h2 className="card__header">{header}</h2>
      <p className="card__paragraph">{paragraph}</p>
    </div>
  );
};

export default FeatureCard;
