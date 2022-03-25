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
        <div className="events-items">
          <table>
            {events.map((item) => (
              <tr>
                <th>{item.title}</th>
                <th>
                  <img src={require("../assets/detail.png")} alt="detail" />
                </th>
                <th>
                  <a href={item?.registerLink}>
                    <img src={require("../assets/register.png")} alt="detail" />
                  </a>
                </th>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  </div>
);
