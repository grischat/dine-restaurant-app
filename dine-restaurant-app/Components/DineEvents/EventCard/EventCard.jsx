import "./EventCard.scss";
import eventsData from '../../Data/events.json';
import { useState } from "react";
import { Link } from "react-router-dom";
import Btn from "../../Buttons/Btn";
const EventCard = () => {
  const initialEventId = eventsData[0].id;
  const [selectedEventId, setSelectedEventId] = useState(initialEventId);
  const windowWidth = window.innerWidth;
  const handleEventClick = (eventId) => setSelectedEventId(eventId);
  const selectedEvent = eventsData.find(
    (event) => event.id === selectedEventId
  );

  return (
    <div className="events__container">
      <img
        className="event__image"
        src={
          windowWidth < 768
            ? selectedEvent.imgMobile
            : windowWidth > 768 && windowWidth < 1440
            ? selectedEvent.imgTablet
            : selectedEvent.imgDesktop
        }
        alt="event image"
      />
      <div className="events__list">
        {eventsData.map((event) => (
          <span
            key={event.id}
            className={
              selectedEventId === event.id
                ? "event__name-selected"
                : "event__name"
            }
            onClick={() => handleEventClick(event.id)}
          >
            {event.header}
          </span>
        ))}
      </div>
      {selectedEvent && (
        <>
          <h2 className="events__header">{selectedEvent.header}</h2>
          <p className="events__description">{selectedEvent.description}</p>
        </>
      )}
      <Link to="/booking">
        <Btn>BOOK A TABLE</Btn>
      </Link>
    </div>
  );
};

export default EventCard;
