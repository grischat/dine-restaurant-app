import "./EventCard.scss";
import eventsData from "./Events.json";
import { useState } from "react";
import Btn from "../../Buttons/Btn";
const EventCard = () => {
  const initialEventId = eventsData[0].id;
  const [selectedEventId, setSelectedEventId] = useState(initialEventId);

  const handleEventClick = (eventId) => setSelectedEventId(eventId);
  const selectedEvent = eventsData.find(
    (event) => event.id === selectedEventId
  );
  

  return (
    <div className="events__list">
      <img src={selectedEvent.img} alt="" />
      {eventsData.map((event) => (
        <span
          key={event.id}
          className={selectedEventId === event.id ? "event__name-selected" : "event__name"}
          onClick={() => handleEventClick(event.id)}
        >
          {event.header}
        </span>
      ))}
      {selectedEvent && (
        <>
          <h2 className="events__header">{selectedEvent.header}</h2>
          <p className="events__description">{selectedEvent.description}</p>
        </>
      )}
      <Btn>BOOK A TABLE</Btn>
    </div>
  );
};

export default EventCard;
