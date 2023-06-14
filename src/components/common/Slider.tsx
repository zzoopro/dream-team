import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import React, { DragEvent, TouchEventHandler, useState } from "react";
import styled from "styled-components";

const SliderWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  background-color: #fff;
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

const makeFontSize = ({ index }: ItemProps) => {
  if (index === 0 || index === OFFSET - 1) return "14px";
  if (index === 1 || index === OFFSET - 2) return "16px";
  if (index === 2 || index === OFFSET - 3) return "24px";
  return "16px";
};

const makeFontWeight = ({ index }: ItemProps) => {
  if (index === 0 || index === OFFSET - 1) return 200;
  if (index === 1 || index === OFFSET - 2) return 500;
  if (index === 2 || index === OFFSET - 3) return 900;
  return 200;
};

const makeOpacity = ({ index }: ItemProps) => {
  if (index === 0 || index === OFFSET - 1) return 0.2;
  if (index === 1 || index === OFFSET - 2) return 0.4;
  if (index === 2 || index === OFFSET - 3) return 1;
  return 0;
};

const Item = styled(motion.div)<{ index: number }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  /* background-color: #d9d9d9; */
  pointer-events: none;
  width: 100%;
  height: 90px;
  font-size: ${makeFontSize};
  font-weight: bold;
  top: ${makeTop};
  z-index: ${makeZindex};
  opacity: ${makeOpacity};
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
  console.log(current);
  const plus = () => {
    if (current === 0) {
      setCurrent((prev: number) => prev + 1);
      // setTimeout(() => {
      //   setTransition("all 0s");
      //   setCurrent(-MAX + 1);
      // }, TIME + 0.1);

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

  let startY: number;
  let dragY: number;
  let onDragging: boolean = false;
  const onTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
    console.log("touchStart");
    onDragging = true;
    startY = event.touches[0].pageY;
  };
  const onDrag: TouchEventHandler<HTMLDivElement> = (event) => {
    dragY = event.touches[0].pageY;
    console.log("startY", startY);
    console.log("dragY", dragY);
    if (startY && Boolean(startY - dragY)) {
      if (startY - dragY > 80) {
        setCurrent((prev: number) => prev - 1);
      }
    }
  };

  const onTouchEnd: TouchEventHandler<HTMLDivElement> = (event) => {
    onDragging = false;
  };

  return (
    <>
      <SliderWrap
        onTouchStart={onTouchStart}
        onTouchMove={onDrag}
        onTouchEnd={onTouchEnd}
      >
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
      </SliderWrap>
      <button onClick={plus} style={{ marginTop: 30 }}>
        플러스
      </button>
      <button onClick={minus}>마이너스</button>
    </>
  );
};

export default TimeSlider;
