import React from "react";
const Computer = () => {
  return (
    // <div className="computer__wrap">
    //   <img src="/assets/computer.svg" alt="computer-icon" className="computer"></img>
    //   <h1 className="hello">Hello World. Im' Daniel</h1>
    // </div>
    <div class="card">
      <div class="card__side card__side--front">
        <div class="card__picture card__picture--1">&nbsp;</div>
        <div class="card__heading">Heading</div>
        <div class="card__detail">Details</div>
      </div>
      <div class="card__side card__side--back card__side--back-1">back</div>
    </div>
  );
};

export default Computer;