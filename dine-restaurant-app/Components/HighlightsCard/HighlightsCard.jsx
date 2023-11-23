import Divider from "../Divider/Divider";
import "../HighlightsCard/HighlightsCard.scss";

const HighlightsCard = () => {
  return (
    <div className="highlights__container">
      <Divider className="highlights__divider" />
      <h2 className="highlights__header">A few highlights from our menu</h2>
      <p className="highlights__paragraph">
        We cater for all dietary requirements, but here’s a glimpse at some of
        our diner’s favourites. Our menu is revamped every season.
      </p>
    </div>
  );
};

export default HighlightsCard;
