import React from "react";
import { EventsContainer, EventSection } from "./events";

const data = [
  {
    id: 1,
    title: "Technical Events",
    image: "../assets/events/technical.png",
    registrationLink: "",
  },
];

function Events() {
  return (
    <EventsContainer>
      {data.map((item) => (
        <EventSection title={item.title} image={item.image} id={item.id} />
      ))}
    </EventsContainer>
  );
}

export default Events;
