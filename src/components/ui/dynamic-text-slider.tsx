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
  onChange?: (values: { left: number; right: number; range: number }) => void;
}

/**
 * The visible heading that houses the range‑slider.
 * Width is measured from an off‑screen copy of the text so that the label
 * always clips precisely, regardless of font‑loading or window size.
 */
function TitleComponent() {
  const measureRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(408); // sensible default until measured

  // Re‑measure whenever fonts load or the viewport resizes
  useEffect(() => {
    const measure = () => setTextWidth(measureRef.current?.clientWidth ?? 408);
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
    <div className="w-full flex flex-col items-center justify-center text-center font-sans px-4">
      <div className="max-w-5xl w-full">
        {/* Main heading with Shashank in blue */}
        <h1 className="font-bold tracking-tighter text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-black mb-4 md:mb-6 lg:mb-8">
          Hey ! I am{" "}
          <span className="text-blue-500">Shashank</span>
        </h1>

        {/* Hidden copy for width‑measurement. Font size must match the visible text in the slider. */}
        <span
          ref={measureRef}
          className="absolute -left-[9999px] px-4 whitespace-nowrap font-bold tracking-tighter text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black"
        >
          Stop Looking at me 😜 !
        </span>

        {/* Range‑slider container */}
        <div className="flex justify-center gap-2 sm:gap-4 mt-4 md:mt-6">
          <OpenSourceSlider width={textWidth} />
        </div>

        {/* Subheading */}
        <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto text-gray-600 font-medium px-4">
          I am a{" "}
          <a
            href="#projects"
            className="relative inline-block font-semibold group text-black cursor-pointer"
          >
            Versatile Designer
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ADFF2F] transition-all duration-300 group-hover:w-full"></span>
          </a>
          {" "}and an{" "}
          <a
            href="#projects"
            className="relative inline-block font-semibold group text-black cursor-pointer"
          >
            Engineer
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ADFF2F] transition-all duration-300 group-hover:w-full"></span>
          </a>
          {" "}obviously !
        </p>
      </div>
    </div>
  );
}

/**
 * A two‑handle slider that is itself rotated.
 * The rotation angle now changes dynamically based on handle positions.
 * Dragging is projected on to this rotated axis so the handles feel natural.
 */
function OpenSourceSlider({ width: initialWidth, height = 70, handleSize = 28, onChange }: SliderProps) {
  // Adjusted height to better accommodate larger text - responsive height
  const width = initialWidth > 0 ? initialWidth + 35 : 0;
  const responsiveHeight = typeof window !== 'undefined' && window.innerWidth < 640 ? 55 : height;
  const responsiveHandleSize = typeof window !== 'undefined' && window.innerWidth < 640 ? 28 : handleSize;
  
  const [left, setLeft] = useState(width / 2 - 25);
  const [right, setRight] = useState(width / 2 + 25);
  const [draggingHandle, setDraggingHandle] = useState<string | null>(null);
  // State to hold the dynamic rotation angle
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
      // Calculate deviation of the handle midpoint from the slider's absolute center
      const deviationFactor = (handleMidpoint - sliderCenter) / sliderCenter;
      // Define the maximum amount of additional tilt
      const maxAdditionalTilt = 3; 
      // Calculate the new rotation based on the deviation
      const newRotation = ROTATION_DEG + (deviationFactor * maxAdditionalTilt);
      setDynamicRotation(newRotation);
    }
  }, [left, right, width]);

  useEffect(() => {
    setLeft(width / 2 - 25);
    setRight(width / 2 + 25);
  }, [width]);

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
      // We still project onto the *original* angle for consistent drag feel
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
      <div className="absolute inset-0 rounded-2xl border-2 border-blue-500 pointer-events-none" />
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
            className={`z-20 absolute top-0 h-full rounded-full bg-white border-2 border-blue-500 flex items-center justify-center cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-150 ease-in-out opacity-100 shadow-md ${scaleClass}`}
            style={{
              left: x,
              width: responsiveHandleSize,
              touchAction: "none"
            }}
          >
            <span className="w-1 h-8 rounded-full bg-blue-500" />
          </button>
        );
      })}
      {/* Hidden text that appears when dragging */}
      <div
        className="flex z-10 items-center justify-center w-full h-full px-4 overflow-hidden pointer-events-none font-bold tracking-tighter text-3xl text-black md:text-4xl lg:text-5xl"
        style={{ clipPath: `inset(0 ${width - right}px 0 ${left}px round 1rem)` }}
      >
        Stop Looking at me 😜 !
      </div>
    </div>
  );
}

export default TitleComponent;
