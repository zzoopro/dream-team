import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const SliderWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  background: #ddd;
`;

interface ItemProps {
  index: number;
}
const makeZindex = ({ index }: ItemProps): number => {
  if (index === 0 || index === OFFSET - 1) return 2;
  if (index === 1 || index === OFFSET - 2) return 3;
  if (index === 2 || index === OFFSET - 3) return 4;
  return 1;
};
const makeTop = ({ index }: ItemProps) => {
  for (let i = 0; i < OFFSET; i++) {
    if (i === index) return `${i * 2}0%`;
  }
  return "50%";
};

const makeHeight = ({ index }: ItemProps) => {
  if (index === 0 || index === OFFSET - 1) return "70px";
  if (index === 1 || index === OFFSET - 2) return "70px";
  if (index === 2 || index === OFFSET - 3) return "80px";
  return "50px";
};

const makeFontSize = ({ index }: ItemProps) => {
  if (index === 0 || index === OFFSET - 1) return "16px";
  if (index === 1 || index === OFFSET - 2) return "18px";
  if (index === 2 || index === OFFSET - 3) return "20px";
  return "16px";
};

const makeFontWeight = ({ index }: ItemProps) => {
  if (index === 0 || index === OFFSET - 1) return 200;
  if (index === 1 || index === OFFSET - 2) return 500;
  if (index === 2 || index === OFFSET - 3) return 900;
  return 200;
};

const Item = styled(motion.div)<{ index: number }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  background-color: #d9d9d9;
  cursor: pointer;
  width: 100%;
  height: 90px;
  font-size: ${makeFontSize};
  font-weight: ${makeFontWeight};
  top: ${makeTop};
  z-index: ${makeZindex};
`;

const OFFSET = 5;
const INIT = 1;
const MAX = 24;
const TIME = 0.2;

const TimeSlider = () => {
  const [current, setCurrent] = useState(0);
  const TimeLine = Array.from({ length: MAX }, (_, i) => i + 1);
  const TimeRoll = [MAX - 2, MAX - 1, MAX, ...TimeLine, 1, 2, 3];
  const [numbers, setNumbers] = useState(TimeRoll);

  const [transition, setTransition] = useState(`all ${TIME}s`);

  const plus = () => {
    if (current === 0) {
      setCurrent((prev: number) => prev + 1);
      setTimeout(() => {
        setTransition("all 0s");
        setCurrent(-MAX + 1);
      }, TIME + 0.1);

      return;
    }
    setCurrent((prev: number) => prev + 1);
  };

  const minus = () => {
    if (current === -23) {
      setCurrent(0);

      return;
    }
    setCurrent((prev: number) => prev - 1);
  };

  return (
    <>
      <SliderWrap>
        <AnimatePresence mode="sync" initial={false}>
          {numbers.map((item, i) => (
            <Item
              key={i}
              index={i + current - 1}
              style={{
                transition: transition,
              }}
            >
              {item}
            </Item>
          ))}
        </AnimatePresence>
      </SliderWrap>
      <button onClick={plus} style={{ marginTop: 30 }}>
        플러스
      </button>
      <button onClick={minus}>마이너스</button>
    </>
  );
};

export default TimeSlider;
