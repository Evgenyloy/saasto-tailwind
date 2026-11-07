import React from "react";
import Container from "../ui/Container";

const data = [
  {
    title: "Time Tracking",
    text: "Time Tracking is never been easier.n\
Just let the stopwatch run",
  },
  {
    title: "Expenses",
    text: "Time Tracking is never been easier.n\
Just let the stopwatch run",
  },
  {
    title: "Budget controlling",
    text: "Time Tracking is never been easier.n\
Just let the stopwatch run",
  },
];

function Tracker() {
  return (
    <div>
      <Container>
        <div className="">
          <div className="">
            <h2 className="">How our Tracker work for you</h2>
            {data.map((item) => (
              <div className="">
                <img src="" alt="" className="" />
                <div className="">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Tracker;
