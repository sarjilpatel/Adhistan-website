import { useEffect, useState } from "react";
import "./timer.css";

function toDoubleString(str) {
  if (Number.parseInt(str) < 10) {
    str = "0".concat(String(str));
  }
  return str;
}

function calcRemainingTime(endTime) {
  let currTime = new Date();
  let endDate = new Date(`${endTime} GMT+0530 (India Standard Time)`);
  let timeDelta = endDate.getTime() / 1000 - currTime.getTime() / 1000;
  timeDelta = Math.floor(timeDelta);
  let mm = Math.floor(timeDelta / 60);
  let ss = timeDelta - mm * 60;
  let hh = Math.floor(mm / 60);
  mm = mm - hh * 60;
  return {
    hh: toDoubleString(hh),
    mm: toDoubleString(mm),
    ss: toDoubleString(ss),
  };
}

export const TimerContainer = ({ children }) => (
  <div className="timer">{children}</div>
);

export const Clock = ({ endTime }) => {
  let [time, setTime] = useState(calcRemainingTime("Tu Mar 29 2022 10:00:00"));

  useEffect(() => {
    setTime(calcRemainingTime("Tu Mar 29 2022 10:00:00"));
  });

  return (
    <div className="clock">
      <Hour>{time.hh}</Hour> : <Minute>{time.mm}</Minute> :{" "}
      <Second>{time.ss}</Second>
    </div>
  );
};

export const Hour = ({ children }) => <span className="hour">{children}</span>;

export const Minute = ({ children }) => (
  <span className="minute">{children}</span>
);

export const Second = ({ children }) => (
  <span className="second">{children}</span>
);
