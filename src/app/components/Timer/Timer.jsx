import { useEffect, useState } from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
import "./timer.css";

function Counter() {
  return (
    <div className="timer">
      <h2>Time Remaining</h2>
      <div className="counter">
        <FlipCountdown
          className="timer-item"
          titlePosition="bottom"
          size={"big"}
          theme="dark"
          hideMonth
          hideYear
          dayTitle="Days"
          hourTitle="Hours"
          minuteTitle="Minutes"
          secondTitle="Seconds"
          endAt={"2022-03-29 11:00:00"}
        />
      </div>
    </div>
  );
}

export default Counter;
