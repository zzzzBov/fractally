import style from "@/components/Geometry.module.scss";
import { useDataService } from "@/hooks/useDataService";
import { BUTTONS } from "@/lib/ui";
import { PointerEvent, useCallback, useEffect, useMemo, useState } from "react";

export function BaseLine() {
  return <line className={style.baseline} x1={4} y1={8} x2={12} y2={8} />;
}

export function DerivedLines() {
  const { baseline, gripline, lineCount } = useDataService();

  const [lines, ratio] = useMemo(() => {
    const A = baseline.start;
    const B = baseline.end;
    const C = gripline.start;
    const D = gripline.end;

    const dABx = B.x - A.x;
    const dABy = B.y - A.y;

    const dACx = C.x - A.x;
    const dACy = C.y - A.y;

    const dADx = D.x - A.x;
    const dADy = D.y - A.y;

    const dCDx = D.x - C.x;
    const dCDy = D.y - C.y;

    const angleAB = Math.atan2(dABy, dABx);
    const angleAC = Math.atan2(dACy, dACx);
    const angleAD = Math.atan2(dADy, dADx);

    const angleBAC = angleAC - angleAB;
    const angleBAD = angleAD - angleAB;

    const distAB = Math.sqrt(dABx * dABx + dABy * dABy);
    const distAC = Math.sqrt(dACx * dACx + dACy * dACy);
    const distAD = Math.sqrt(dADx * dADx + dADy * dADy);
    const distCD = Math.sqrt(dCDx * dCDx + dCDy * dCDy);

    const rBAC = distAC / distAB;
    const rBAD = distAD / distAB;

    const ratio = distCD / distAB;

    const lines = [
      [A, B],
      [C, D],
    ];

    for (let i = 0; i < lineCount; i++) {
      const [C, D] = lines[i + 1];

      const dCDx = D.x - C.x;
      const dCDy = D.y - C.y;

      const angleCD = Math.atan2(dCDy, dCDx);

      const angleDCE = angleCD + angleBAC;
      const angleDCF = angleCD + angleBAD;

      const distCD = Math.sqrt(dCDx * dCDx + dCDy * dCDy);

      const E = {
        x: rBAC * distCD * Math.cos(angleDCE) + C.x,
        y: rBAC * distCD * Math.sin(angleDCE) + C.y,
      };

      const F = {
        x: rBAD * distCD * Math.cos(angleDCF) + C.x,
        y: rBAD * distCD * Math.sin(angleDCF) + C.y,
      };

      lines.push([E, F]);
    }

    return [lines.slice(2), ratio];
  }, [baseline.end, baseline.start, gripline.end, gripline.start, lineCount]);

  return lines.map(([start, end], index) => (
    <line
      className={style.derivedline}
      // eslint-disable-next-line react-x/no-array-index-key
      key={index}
      strokeWidth={0.2 * Math.pow(ratio, index + 1)}
      x1={start.x}
      y1={start.y}
      x2={end.x}
      y2={end.y}
    />
  ));
}

export function GripLine() {
  const { drag, status, gripline, startDragging, stopDragging, viewport } =
    useDataService();

  const [canvasSize, setCanvasSize] = useState(new DOMRect());

  useEffect(() => {
    const resize = new ResizeObserver(([entry]) => {
      setCanvasSize(entry.contentRect);
    });

    resize.observe(document.documentElement, {
      box: "border-box",
    });

    return () => {
      resize.unobserve(document.documentElement);
    };
  }, []);

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
        const point = new DOMPoint(e.clientX, e.clientY).matrixTransform(
          canvas.getScreenCTM()?.inverse()
        );

        drag({
          grip: e.currentTarget.dataset.grip as "start" | "end",
          point,
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

  const gripRadius = useMemo(() => {
    const px = viewport.width / Math.min(canvasSize.width, canvasSize.height);

    return Math.max(7.5 * px, 0.12);
  }, [viewport, canvasSize]);

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
        r={gripRadius}
        onPointerDown={pointerDown}
        onPointerMove={pointerMove}
        onPointerUp={pointerUp}
      />
      <circle
        data-grip="end"
        className={style.grip}
        cx={gripline.end.x}
        cy={gripline.end.y}
        r={gripRadius}
        onPointerDown={pointerDown}
        onPointerMove={pointerMove}
        onPointerUp={pointerUp}
      />
    </g>
  );
}
