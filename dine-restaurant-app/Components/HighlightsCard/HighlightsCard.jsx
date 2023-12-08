import Divider from "../Divider/Divider";
import "../HighlightsCard/HighlightsCard.scss";

import HighlightsDish from "./HighlightsDish/HighlightsDish";
const HighlightsCard = ({ highlights }) => {
  const images = highlights
  console.log(images)
  return (
    <div className="highlights__container">
      <Divider className="highlights__divider" />
      <h2 className="highlights__header">A few highlights from our menu</h2>
      <p className="highlights__paragraph">
        We cater for all dietary requirements, but here’s a glimpse at some of
        our diner’s favourites. Our menu is revamped every season.
      </p>
      <div className="highlightsmenu__container">
        <HighlightsDish
          img={images.settledHighlightsOne}
          header="Seared Salmon Fillet"
          description="Our locally sourced salmon served with a refreshing buckwheat summer salad."
        />
        <HighlightsDish
          img={images.settledHighlightsTwo}
          header="Rosemary Filet Mignon"
          description="Our prime beef served to your taste with a delicious choice of seasonal sides."
        />
        <HighlightsDish
          img={images.settledHighlightsThree}
          header="Summer Fruit Chocolate Mousse"
          description="Creamy mousse combined with summer fruits and dark chocolate shavings."
          underscoreLine={false}
        />
      </div>
    </div>
  );
};

export default HighlightsCard;
