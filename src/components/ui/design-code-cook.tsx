'use client';

import React, { useState, useRef, useEffect, useCallback } from "react";

/**
 * Slider constants
 */
const MIN_RANGE = 50; // px – minimum gap between the two handles
const ROTATION_DEG = -2.76; // matches CSS transform
const THETA = ROTATION_DEG * (Math.PI / 180);
const COS_THETA = Math.cos(THETA);
const SIN_THETA = Math.sin(THETA);

/** Utility */
const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

interface SliderProps {
  width: number;
  height?: number;
  handleSize?: number;
  onChange?: (data: { left: number; right: number; range: number }) => void;
}

/**
 * The visible heading that houses the range‑slider for "Design. Code. Cook!!"
 */
function DesignCodeCookComponent() {
  const measureRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(300); // sensible default until measured

  // Re‑measure whenever fonts load or the viewport resizes
  useEffect(() => {
    const measure = () => setTextWidth(measureRef.current?.clientWidth ?? 300);
    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (measureRef.current) ro.observe(measureRef.current);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center text-center font-sans">
      <div className="max-w-lg w-full">
        {/* First line - Design with gradient */}
        <h1 className="font-bold tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-1 md:mb-2">
          <span className="bg-gradient-to-r from-[#ADFF2F] to-cyan-400 bg-clip-text text-transparent">
            Design.
          </span>
        </h1>
        
        {/* Second line - Code in white */}
        <h1 className="font-bold tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-1 md:mb-2">
          Code.
        </h1>

        {/* Hidden copy for width‑measurement for Cook!! */}
        <span
          ref={measureRef}
          className="absolute -left-[9999px] px-4 whitespace-nowrap font-bold tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white"
        >
          Cook!!
        </span>

        {/* Third line - Cook!! with slider (hidden on small screens) */}
        <div className="flex justify-center gap-2 sm:gap-4 mt-3 md:mt-4">
          <div className="hidden sm:block">
            <DesignSlider width={textWidth} />
          </div>
          <div className="block sm:hidden text-center">
            <h3 className="font-bold text-2xl">Cook!!</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * A two‑handle slider for the "Cook!!" text
 */
function DesignSlider({ width: initialWidth, height = 60, handleSize = 24, onChange }: SliderProps) {
  const width = initialWidth > 0 ? initialWidth + 30 : 0;
  const responsiveHeight = typeof window !== 'undefined' && window.innerWidth < 640 ? 45 : height;
  const responsiveHandleSize = typeof window !== 'undefined' && window.innerWidth < 640 ? 18 : handleSize;
  
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(width);
  const [draggingHandle, setDraggingHandle] = useState<string | null>(null);
  const [dynamicRotation, setDynamicRotation] = useState(ROTATION_DEG);

  const leftRef = useRef(left);
  const rightRef = useRef(right);
  const dragRef = useRef<any>(null);

  useEffect(() => {
    leftRef.current = left;
    rightRef.current = right;
    onChange?.({ left, right, range: right - left });
  }, [left, right, onChange]);
  
  // Effect to calculate and set the dynamic rotation
  useEffect(() => {
    if (width > 0) {
      const handleMidpoint = (left + right) / 2;
      const sliderCenter = width / 2;
      const deviationFactor = (handleMidpoint - sliderCenter) / sliderCenter;
      const maxAdditionalTilt = 3; 
      const newRotation = ROTATION_DEG + (deviationFactor * maxAdditionalTilt);
      setDynamicRotation(newRotation);
    }
  }, [left, right, width]);

  useEffect(() => setRight(width), [width]);

  const startDrag = (handle: string, e: React.PointerEvent) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = {
      handle,
      startX: e.clientX,
      startY: e.clientY,
      initialLeft: leftRef.current,
      initialRight: rightRef.current,
    };
    setDraggingHandle(handle);
  };

  const moveDrag = useCallback(
    (e: PointerEvent) => {
      if (!dragRef.current) return;
      const { handle, startX, startY, initialLeft, initialRight } = dragRef.current;
      const dX = e.clientX - startX;
      const dY = e.clientY - startY;
      const projected = dX * COS_THETA + dY * SIN_THETA;
      if (handle === "left") {
        const newLeft = clamp(initialLeft + projected, 0, rightRef.current - MIN_RANGE);
        setLeft(newLeft);
      } else {
        const newRight = clamp(initialRight + projected, leftRef.current + MIN_RANGE, width);
        setRight(newRight);
      }
    },
    [width]
  );

  const endDrag = useCallback(() => {
    dragRef.current = null;
    setDraggingHandle(null);
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", moveDrag);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
    return () => {
      window.removeEventListener("pointermove", moveDrag);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
    };
  }, [moveDrag, endDrag]);

  const nudgeHandle = (handle: string) => (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const delta = e.key === "ArrowLeft" ? -10 : 10;
    if (handle === "left") {
      setLeft((prev) => clamp(prev + delta, 0, rightRef.current - MIN_RANGE));
    } else {
      setRight((prev) => clamp(prev + delta, leftRef.current + MIN_RANGE, width));
    }
  };

  return (
    <div
      className="relative select-none transition-transform duration-300 ease-out"
      style={{ width, height: responsiveHeight, transform: `rotate(${dynamicRotation}deg)` }}
    >
      <div className="absolute inset-0 rounded-2xl border border-[#ADFF2F] pointer-events-none" />
      {(["left", "right"] as const).map((handle) => {
        const x = handle === "left" ? left : right - responsiveHandleSize;
        const scaleClass = draggingHandle === handle ? "scale-125" : "hover:scale-110";

        return (
          <button
            key={handle}
            type="button"
            aria-label={handle === "left" ? "Adjust start" : "Adjust end"}
            onPointerDown={(e) => startDrag(handle, e)}
            onKeyDown={nudgeHandle(handle)}
            className={`z-20 absolute top-0 h-full rounded-full bg-[#262626] border border-[#ADFF2F] flex items-center justify-center cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-[#ADFF2F] transition-transform duration-150 ease-in-out opacity-100 ${scaleClass}`}
            style={{
              left: x,
              width: responsiveHandleSize,
              touchAction: "none"
            }}
          >
            <span className="w-1 h-6 rounded-full bg-[#ADFF2F]" />
          </button>
        );
      })}
      
      {/* The "Cook!!" text that gets revealed */}
      <div
        className="flex z-10 items-center justify-center w-full h-full px-4 overflow-hidden pointer-events-none font-bold tracking-tighter text-4xl text-white md:text-5xl lg:text-6xl"
        style={{ clipPath: `inset(0 ${width - right}px 0 ${left}px round 1rem)` }}
      >
        Cook!!
      </div>
    </div>
  );
}

export default DesignCodeCookComponent;
