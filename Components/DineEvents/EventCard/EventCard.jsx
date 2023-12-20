
import { Link } from "react-router-dom";
import Btn from "../../Buttons/Btn";
import eventsData from "../../Data/events.json";
import { useState } from "react";
import familyGatheringMobile from "../../../src/public/images/homepage/family-gathering-mobile.jpg";
import familyGatheringTablet from "../../../src/public/images/homepage/family-gathering-tablet.jpg";
import familyGatheringDesktop from "../../../src/public/images/homepage/family-gathering-desktop.jpg";
import specialEventsMobile from "../../../src/public/images/homepage/special-events-mobile.jpg";
import specialEventsTablet from "../../../src/public/images/homepage/special-events-tablet.jpg";
import specialEventsDesktop from "../../../src/public/images/homepage/special-events-desktop.jpg";
import socialEventsMobile from "../../../src/public/images/homepage/social-events-mobile.jpg";
import socialEventsTablet from "../../../src/public/images/homepage/social-events-tablet.jpg";
import socialEventsDesktop from "../../../src/public/images/homepage/social-events-desktop.jpg";
import "./EventCard.scss";

const images = {
  family: {
    mobile: familyGatheringMobile,
    tablet: familyGatheringTablet,
    desktop: familyGatheringDesktop,
  },
  special: {
    mobile: specialEventsMobile,
    tablet: specialEventsTablet,
    desktop: specialEventsDesktop,
  },
  social: {
    mobile: socialEventsMobile,
    tablet: socialEventsTablet,
    desktop: socialEventsDesktop,
  },
};

const EventCard = () => {
  const initialEventId = eventsData[0].id;
  const [selectedEventId, setSelectedEventId] = useState(initialEventId);
  const windowWidth = window.innerWidth;
  
  const handleEventClick = (eventId) => setSelectedEventId(eventId);
  const selectedEvent = eventsData.find(
    (event) => event.id === selectedEventId
  );
  console.log(images[selectedEventId])  
  return (
    <div className="event">
      <img
        className="event__image"
        src={
          windowWidth < 768
            ? images[selectedEventId].mobile
            : windowWidth > 768 && windowWidth < 1440
            ? images[selectedEventId].tablet
            : images[selectedEventId].desktop
        }
        alt="event image"
      />
      <div className="events__list">
        {eventsData.map((event) => (
          <p
            key={event.id}
            className={
              selectedEventId === event.id
                ? "event__name-selected"
                : "event__name"
            }
            onClick={() => handleEventClick(event.id)}
          >
            {event.header}
          </p>
        ))}
      </div>
      {selectedEvent && (
        <div className="event__summary">
          <h2 className="events__header">{selectedEvent.header}</h2>
          <p className="events__description">{selectedEvent.description}</p>
          <div className="btn__container">
            <Link to="/booking">
              <Btn>BOOK A TABLE</Btn>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;
