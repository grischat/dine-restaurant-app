import "./EventCard.scss";
import eventsData from './Events.json'
const EventCard = () => {
    const event = eventsData[0]
  return (
    <div className="events__list">
      <img src={event.img} alt="" />
      {eventsData.map(event => (
        <span key={event.id}>{event.header}</span>
      ))}
      <h2 className="events__header">{event.header}</h2>
      <p className="events__description">{event.description}</p>
    </div>
  );
};
export default EventCard;
