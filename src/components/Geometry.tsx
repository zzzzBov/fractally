import style from "@/components/Geometry.module.scss";
import { useDataService } from "@/hooks/useDataService";
import { BUTTONS } from "@/lib/ui";
import { PointerEvent, useCallback } from "react";

export function BaseLine() {
  return <line className={style.baseline} x1={4} y1={8} x2={12} y2={8} />;
}

export function DerivedLines() {
  return <></>;
}

export function GripLine() {
  const { drag, status, gripline, startDragging, stopDragging } =
    useDataService();

  const pointerDown = useCallback(
    (e: PointerEvent<SVGCircleElement>) => {
      if (e.button === BUTTONS.LEFT) {
        e.currentTarget.setPointerCapture(e.pointerId);
        startDragging();
      }
    },
    [startDragging]
  );

  const pointerMove = useCallback(
    (e: PointerEvent<SVGCircleElement>) => {
      if (status === "dragging") {
        // transform clientX and clientY to a point in SVG space
        const canvas = e.currentTarget.closest("svg")!;
        const point = canvas.createSVGPoint();
        point.x = e.clientX;
        point.y = e.clientY;
        const { x, y } = point.matrixTransform(
          canvas.getScreenCTM()?.inverse()
        );

        drag({
          grip: e.currentTarget.dataset.grip as "start" | "end",
          point: {
            x,
            y,
          },
        });
      }
    },
    [drag, status]
  );

  const pointerUp = useCallback(
    (e: PointerEvent<SVGCircleElement>) => {
      if (e.button === BUTTONS.LEFT) {
        e.currentTarget.releasePointerCapture(e.pointerId);
        stopDragging();
      }
    },
    [stopDragging]
  );

  return (
    <g>
      <line
        className={style.gripline}
        x1={gripline.start.x}
        y1={gripline.start.y}
        x2={gripline.end.x}
        y2={gripline.end.y}
      />
      <circle
        className={style.touch}
        cx={gripline.start.x}
        cy={gripline.start.y}
        r="1"
        // onPointerDown={pointerDown}
        // onPointerMove={pointerMove}
        // onPointerUp={pointerUp}
      />
      <circle
        className={style.touch}
        cx={gripline.end.x}
        cy={gripline.end.y}
        // onPointerDown={pointerDown}
        // onPointerMove={pointerMove}
        // onPointerUp={pointerUp}
        r="1"
      />
      <circle
        data-grip="start"
        className={style.grip}
        cx={gripline.start.x}
        cy={gripline.start.y}
        onPointerDown={pointerDown}
        onPointerMove={pointerMove}
        onPointerUp={pointerUp}
        r="0.12"
      />
      <circle
        data-grip="end"
        className={style.grip}
        cx={gripline.end.x}
        cy={gripline.end.y}
        onPointerDown={pointerDown}
        onPointerMove={pointerMove}
        onPointerUp={pointerUp}
        r="0.12"
      />
    </g>
  );
}
