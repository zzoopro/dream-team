import { motion, useMotionValue } from "framer-motion";
import React, {
  TouchEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import Box from "../UI/Box";

const Window = styled.div`
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
  transform: translateY(0px);
  transition: all ease-out 0.1s;
`;

const Item = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  width: 100%;
  height: 60px;
  font-weight: 200;
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

interface TimeSliderProps {
  items: any[];
  setValue: React.SetStateAction<any>;
}
interface FrameSize {
  width: number;
  height: number;
}
let startY: number;
const IH = 60;

const TimeSlider = ({ items, setValue }: TimeSliderProps) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const ItemsRef = useRef<HTMLDivElement[]>([]);
  const centerRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);

  const [frameSize, setFrameSize] = useState<FrameSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (windowRef.current?.parentElement) {
      const { width, height }: DOMRect =
        windowRef.current.parentElement?.getClientRects()[0];
      setFrameSize({ width, height });
    }
    if (ItemsRef.current) {
      const selected = ItemsRef.current[0];
      selected.style.fontWeight = "bold";
      setValue(selected.innerText);
    }
  }, []);

  const onTouchStartCapture: TouchEventHandler = useCallback((event) => {
    startY = Math.ceil(event.touches[0].clientY);
  }, []);

  const onTouchEndCapture: TouchEventHandler = useCallback((event) => {
    const currentY = y.get();
    if (currentY > 0) return y.set(0);
    if (currentY < (-items.length + 1) * IH) {
      return y.set((-items.length + 1) * IH);
    }

    const remainder = Math.abs(currentY % IH);
    // floor
    if (remainder >= IH / 2) {
      return y.set(currentY - (IH - remainder));
    }
    // ceil
    if (remainder < IH / 2) {
      return y.set(currentY + remainder);
    }
  }, []);

  interface Rect {
    top: number;
    left: number;
    bottom: number;
    right: number;
  }
  const isTarget = useCallback((a: Rect, b: Rect): boolean => {
    const aCenter = (a.top + a.bottom) / 2;
    const bCenter = (b.top + b.bottom) / 2;
    if (
      Math.abs(aCenter - bCenter) <= IH / 2 &&
      Math.abs(bCenter - aCenter) <= IH / 2
    ) {
      return true;
    }
    return false;
  }, []);

  const onTouchMove: TouchEventHandler = useCallback((event) => {
    const currentY = Math.ceil(event.touches[0].clientY);
    if (!startY || startY === currentY) return;
    y.set(y.get() + currentY - startY);
    startY = Math.ceil(event.touches[0].clientY);
    compareRect();
  }, []);

  const compareRect = useCallback(() => {
    const aRect: Rect = centerRef.current?.getBoundingClientRect()!;
    ItemsRef.current.forEach((item) => {
      const bRect: Rect = item.getBoundingClientRect();
      if (isTarget(aRect, bRect)) {
        item.style.fontWeight = "bold";
        setValue(item.innerText);
      } else {
        item.style.fontWeight = "";
      }
    });
  }, []);

  // useEffect(() => {
  //   const callback = (entries: any) => {
  //     entries.forEach((entry: any) => {
  //       const visibles = entries.filter((entry: any) => entry.isIntersecting);
  //       visibles.forEach((visible: any) => {
  //         console.log(visible);
  //       });
  //     });
  //   };

  //   let options = {
  //     rootMargin: "0px",
  //     threshold: 1.0,
  //   };

  //   let observer = new IntersectionObserver(callback, options);
  //   ItemsRef.current.forEach((item: HTMLDivElement) => {
  //     observer.observe(item);
  //   });
  // }, []);

  // const round = (ref: number, value: number) => {
  //   if (value % ref > ref / 2) {
  //     return value - ref / 2;
  //   }
  //   return value + (value % ref);
  // };

  return (
    <Window ref={windowRef}>
      <CenterPointer ref={centerRef} />
      <SliderWrap
        ref={sliderRef}
        onTouchEndCapture={onTouchEndCapture}
        onTouchStartCapture={onTouchStartCapture}
        onTouchMove={onTouchMove}
        onTransitionEnd={compareRect}
        style={{ y }}
      >
        <Box height={IH * 2} />
        {items.map((item, i) => (
          <Item key={item} ref={(el: any) => (ItemsRef.current[i] = el)}>
            {item}
          </Item>
        ))}
        <Box height={IH * 2} />
      </SliderWrap>
    </Window>
  );
};

export default TimeSlider;

// round(IH, y.get()) / IH
