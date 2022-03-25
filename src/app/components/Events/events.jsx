import React from "react";
import "./events.css";

export const EventsContainer = ({ children }) => (
  <div className="events">{children}</div>
);

export const EventSection = ({ title, image }) => (
  <div className="events-section">
    <img src={image} alt={title} />
    <h2>{title}</h2>
    {/* {events.map((item) => (
      <span>
        {item} <br />
      </span>
    ))} */}
  </div>
);
