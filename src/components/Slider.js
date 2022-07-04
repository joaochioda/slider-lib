import React, { useState } from "react";
import styled from "styled-components";

const Number = styled.span`
  left: ${(props) => props.left}px !important;
  top: ${(props) => props.top}px !important;
  position: relative;
  transform-origin: center center;
  display: block;
  width: 49px;
  height: 49px;
  background: transparent;
  border-radius: 50%;
  line-height: 30px;
  text-align: center;
  font-weight: bold;
  padding-top: 9px;
  box-sizing: border-box;
  border: 4px solid ${(props) => props.color};
  margin-top: 20px;
  margin-left: -38px;
  color: black;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 19px;
  &::after {
    content: "";
    width: 15px;
    height: 14px;
    background: ${(props) => props.color};
    display: block;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
    position: absolute;
    left: 13px;
    top: 43px;
  }
`;

const RangeWrapper = styled.div`
  input {
    position: absolute !important;
    left: 0;
    bottom: 0;
  }

  .container {
    padding-top: 25px;
  }
  .box-minmax {
    width: 304px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    color: ${(props) => props.color};
    span:first-child {
      margin-left: 10px;
    }
  }
  .range-slider {
    margin-top: 30px;
    width: 300px;
    margin: auto;
    text-align: center;
    position: relative;
    height: 6em;
  }
  .range {
    margin-top: 29px;
    width: 300px;
    -webkit-appearance: none;
    &:focus {
      outline: none;
    }
    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 1px;
      cursor: pointer;
      box-shadow: none;
      background: ${(props) => props.color};
      border-radius: 0px;
      border: 0px solid #010101;
    }
    &::-moz-range-track {
      width: 100%;
      height: 1px;
      cursor: pointer;
      box-shadow: none;
      background: ${(props) => props.color};
      border-radius: 0px;
      border: 0px solid #010101;
    }

    &::-webkit-slider-thumb {
      box-shadow: none;
      border: 0px solid ${(props) => props.color};
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
      height: 42px;
      width: 22px;
      border-radius: 22px;
      background: ${(props) => props.color};
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -20px;
    }
    &::-moz-range-thumb {
      box-shadow: none;
      border: 0px solid #ffffff;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
      height: 42px;
      width: 22px;
      border-radius: 22px;
      background: rgba(255, 255, 255, 1);
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -20px;
    }
    &::-moz-focus-outer {
      border: 0;
    }
  }
`;

const Slider = ({ nameAnimal, getMinValue, step }) => {
  let color;
  if (nameAnimal === "bear") {
    color = "rgba(112, 171, 193, 0.8)";
  } else if (nameAnimal === "fox") {
    color = "rgba(209, 115, 51, 0.8)";
  } else if (nameAnimal === "tiger") {
    color = "rgba(50, 127, 118, 0.8)";
  } else {
    color = "rgba(209, 159, 221, 0.8)";
  }
  const [rangeValueMin, setRangeValueMin] = useState(1);

  function handleRangeValueMin(value) {
    if (value > 100 - step) {
      getMinValue(100 - step);
      setRangeValueMin(100 - step);
      return;
    }
    getMinValue(value);
    setRangeValueMin(value);
  }

  function getLeftValue() {
    return (rangeValueMin / 107) * 300;
  }

  function handleRangeValueMax(value) {
    if (value < step + 1) {
      setRangeValueMin(1);
      getMinValue(1);
      return;
    }
    getMinValue(value - step);
    setRangeValueMin(value - step);
  }

  function getRightValue() {
    return 27 + step * 2.78 + getLeftValue();
  }

  return (
    <RangeWrapper color={color}>
      <div className="container">
        <div className="range-slider">
          <Number color={color} left={getLeftValue() + 25} top={-13}>
            {rangeValueMin}
          </Number>
          <Number color={color} left={getRightValue()} top={-82}>
            {(rangeValueMin + step).toString()}
          </Number>
          <input
            value={rangeValueMin}
            id="range-line"
            className="range"
            type="range"
            min="1"
            max="100"
            step="1"
            onChange={(e) => handleRangeValueMin(parseInt(e.target.value))}
          />
          <input
            value={(rangeValueMin + step).toString()}
            id="range-line2"
            className="range"
            type="range"
            onChange={(e) => handleRangeValueMax(parseInt(e.target.value))}
          />
        </div>
      </div>
    </RangeWrapper>
  );
};

export default Slider;
