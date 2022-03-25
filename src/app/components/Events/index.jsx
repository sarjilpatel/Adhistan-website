import React from "react";
import { EventsContainer, EventSection } from "./events";
import "./events.css";

const data = [
  {
    id: 1,
    title: "Technical Events",
    image: require("../assets/events/technical.png"),
    registrationLink: "",
    events: [
      {
        title: "DreamTech",
      },
      {
        title: "Blind Coding",
      },
      {
        title: "Guessozonia",
      },
      {
        title: "Hardwar",
      },
      {
        title: "Programmer Date",
      },
      {
        title: "Web Mania",
      },
      {
        title: "Photo Bomb",
      },
      {
        title: "Office Mania",
      },
    ],
  },
  {
    id: 2,
    title: "Workshops",
    image: require("../assets/events/workshop-event.png"),
    registrationLink: "",
    events: [
      {
        title: "DreamTech",
      },
    ],
  },
  {
    id: 3,
    title: "Non Tech Events",
    image: require("../assets/events/non-tech-events.png"),
    registrationLink: "",
    events: [
      {
        title: "Trust Your Partner",
      },
      {
        title: "The Escape Plan",
      },
      {
        title: "Meme Guruji",
      },
      {
        title: "Clash Of Time",
      },
      {
        title: "I’m Holmes",
      },
      {
        title: "Cricket-EPhantoms",
      },
      {
        title: "Treasure Hunt",
      },
      {
        title: "Gaming Events",
      },
    ],
  },
  {
    id: 4,
    title: "Fun Games",
    image: require("../assets/events/fun-games.png"),
    registrationLink: "",
    events: [
      {
        title: "DreamTech",
      },
    ],
  },
  {
    id: 5,
    title: "Cultural Events",
    image: require("../assets/events/cultural-events.png"),
    registrationLink: "",
    events: [
      {
        title: "DreamTech",
      },
    ],
  },
];

function Events() {
  return (
    <EventsContainer>
      {data.map((item) => (
        <EventSection
          title={item.title}
          image={item.image}
          id={item.id}
          events={item.events}
        />
      ))}
    </EventsContainer>
  );
}

export default Events;
