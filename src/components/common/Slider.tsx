import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import React, {
  DragEvent,
  DragEventHandler,
  TouchEventHandler,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

const Window = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #fff;
  overflow: hidden;
`;

const SliderWrap = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: max-content;
`;

const Item = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  width: 100%;
  height: 60px;
`;

const CenterPointer = styled(motion.div)`
  position: absolute;
  z-index: 10;
  pointer-events: none;
  border-top: 1px solid red;
  border-bottom: 1px solid red;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 60px;
  background-color: #888;
  opacity: 0.1;
`;

const TimeSlider = () => {
  const TimeLine = Array.from({ length: 12 }, (_, i) => i + 1);
  const [numbers, setNumbers] = useState(TimeLine);
  const windowRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const y = useMotionValue(0);

  // const changeY = useTransform(y, (event: any) => {
  //   console.log(event);
  //   y.set(-120);
  // });

  // const onDragEnd = (event: any, info: any) => {
  //   const velocity = info.velocity.y;
  //   setTimeout(() => {
  //     let [x, translateY, z]: string[] =
  //       sliderRef.current?.style.transform.split(" ") as any;

  //     let numY: number = 0;
  //     if (translateY && sliderRef.current) {
  //       const startIdx = translateY.indexOf("(");
  //       const lastIdx = translateY.indexOf("px");
  //       numY = Number(translateY.slice(startIdx + 1, lastIdx));

  //       const remainder = numY % 60;
  //       if (remainder > 30) {
  //         const spare = 60 - remainder;
  //         numY = numY + spare;
  //       } else {
  //         numY = numY - remainder;
  //       }
  //       console.log(numY);

  //       const newTransform = `${x} translateY(${numY - 60}px) ${z}`;
  //       sliderRef.current.style.transform = newTransform;
  //     }
  //   }, 0);
  // };

  const onDragEnd = (event: any, info: any) => {
    const velocity = info.velocity.y;
    setTimeout(() => {
      const currentY = y.get();
      const remainder = currentY % 60;
      let targetY: number;
      if (remainder > 30) {
        const spare = 60 - remainder;
        targetY = currentY + spare;
      } else {
        targetY = currentY - remainder;
      }
      console.log(targetY);
      y.set(targetY);
    }, Math.abs(velocity));
  };

  return (
    <Window ref={windowRef}>
      <CenterPointer />
      <SliderWrap
        ref={sliderRef}
        style={{ transform: `translateY(${y}px)` }}
        drag="y"
        dragConstraints={windowRef}
        dragMomentum={false}
        onDragEnd={onDragEnd}
      >
        {numbers.map((item, i) => (
          <Item key={i}>{item}</Item>
        ))}
      </SliderWrap>
    </Window>
  );
};

export default TimeSlider;
