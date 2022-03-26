import React, { useState } from "react";
import { EventsContainer, EventSection } from "./events";
import "./events.css";
import { Fade } from "react-reveal";
import EventModal from "../EventModal";

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
        image: require("../assets/events/workshop-event.png"),
        description: "round 1 : guess image",
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
  const [currData, setcurrData] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <Fade bottom>
      <EventsContainer>
        {data.map((item) => (
          <EventSection
            title={item.title}
            image={item.image}
            id={item.id}
            events={item.events}
            onClick={() => {
              setcurrData(data[item.id - 1]);
              setOpen(!isOpen);
            }}
          />
        ))}
        <EventModal data={currData} open={isOpen} close={handleClose} />
      </EventsContainer>
    </Fade>
  );
}

export default Events;
