import { useEffect, useState } from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
import "./timer.css";

function Counter() {
  return (
    <div className="timer">
      <h1>Time Remaining</h1>
      <div className="counter">
        <FlipCountdown
          titlePosition="bottom"
          theme="dark"
          hideYear
          hideMonth
          hideDay
          hideMinute
          hideSecond
          dayTitle="Days"
          hourTitle="Hours"
          minuteTitle="Minutes"
          secondTitle="Seconds"
          endAt={"2022-03-26 01:26:58"}
        />
        <h1>:</h1>
        <FlipCountdown
          titlePosition="bottom"
          theme="dark"
          hideYear
          hideMonth
          hideHour
          hideDay
          hideSecond
          dayTitle="Days"
          hourTitle="Hours"
          minuteTitle="Minutes"
          secondTitle="Seconds"
          endAt={"2022-03-26 01:26:58"}
        />
        <h1>:</h1>
        <FlipCountdown
          titlePosition="bottom"
          theme="dark"
          hideYear
          hideMonthhideYear
          hideMonth
          hideMinute
          hideHour
          hideDay
          dayTitle="Days"
          hourTitle="Hours"
          minuteTitle="Minutes"
          secondTitle="Seconds"
          endAt={"2022-03-26 01:26:58"}
        />
      </div>
    </div>
  );
}

export default Counter;
