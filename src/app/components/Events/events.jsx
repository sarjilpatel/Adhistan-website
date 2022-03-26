import { IconButton } from "@mui/material";
import React from "react";
import "./events.css";

export const EventsContainer = ({ children }) => (
  <div className="events">
    <h2 className="events-header">Events</h2>
    <div className="event-wrap">{children}</div>
  </div>
);

export const EventSection = ({ title, events, image, onClick }) => (
  <div className="event-section">
    <div className="event-section-wrapper">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="events-wrapper">
        <div className="events-items">
          <table>
            {events.map((item) => (
              <tr>
                <th className="event-table-title">{item.title}</th>
                <th className="event-table-btn">
                  <IconButton
                    size="small"
                    onClick={onClick}
                    className="event-btn"
                  >
                    <img src={require("../assets/detail.png")} alt="detail" />
                  </IconButton>
                </th>
                <th className="event-table-btn">
                  <IconButton
                    href={item?.registerLink}
                    size="small"
                    className="event-btn"
                  >
                    <img src={require("../assets/register.png")} alt="detail" />
                  </IconButton>
                </th>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  </div>
);
