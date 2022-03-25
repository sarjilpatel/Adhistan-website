import React from "react";
import "./events.css";

export const EventsContainer = ({ children }) => (
  <div className="events">
    <h2 className="events-header">Events</h2>
    <div className="event-wrap">{children}</div>
  </div>
);

export const EventSection = ({ title, events, image }) => (
  <div className="event-section">
    <div className="event-section-wrapper">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="events-wrapper">
        {events.map((item) => (
          <span>
            {item.title} <br />
          </span>
        ))}
      </div>
    </div>
  </div>
);
