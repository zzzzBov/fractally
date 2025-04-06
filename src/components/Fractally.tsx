import {
  PointerEvent,
  PropsWithChildren,
  useCallback,
  WheelEvent,
} from "react";
import style from "./Fractally.module.scss";
import { BaseLine, DerivedLines, GripLine } from "@/components/Geometry";
import { CenterButton, Zoom } from "@/components/Controls";
import { Data } from "@/components/Data";
import { useDataService } from "@/hooks/useDataService";
import { BUTTONS } from "@/lib/ui";

export function Fractally() {
  return (
    <Data>
      <Container>
        <Canvas>
          <BaseLine />
          <DerivedLines />
          <GripLine />
        </Canvas>
        <Controls>
          <CenterButton />
          <Zoom />
        </Controls>
      </Container>
    </Data>
  );
}

function Container({ children }: PropsWithChildren) {
  return <div className={style.container}>{children}</div>;
}

export function Canvas({ children }: PropsWithChildren) {
  const { status, startPanning, stopPanning, pan, viewport, zoom } =
    useDataService();

  const pointerDown = useCallback(
    (e: PointerEvent<SVGSVGElement>) => {
      if (e.button === BUTTONS.MIDDLE) {
        e.currentTarget.setPointerCapture(e.pointerId);
        const canvas = e.currentTarget;
        const point = new DOMPoint(e.clientX, e.clientY).matrixTransform(
          canvas.getScreenCTM()?.inverse()
        );

        startPanning(point);
      }
    },
    [startPanning]
  );

  const pointerMove = useCallback(
    (e: PointerEvent<SVGSVGElement>) => {
      if (status === "panning") {
        const canvas = e.currentTarget;
        const point = new DOMPoint(e.clientX, e.clientY).matrixTransform(
          canvas.getScreenCTM()?.inverse()
        );

        pan(point);
      }
    },
    [pan, status]
  );

  const pointerUp = useCallback(
    (e: PointerEvent<SVGSVGElement>) => {
      if (e.button === BUTTONS.MIDDLE) {
        e.currentTarget.releasePointerCapture(e.pointerId);
        stopPanning();
      }
    },
    [stopPanning]
  );

  const wheel = useCallback(
    (e: WheelEvent<SVGSVGElement>) => {
      const point = new DOMPoint(e.clientX, e.clientY).matrixTransform(
        e.currentTarget.getScreenCTM()?.inverse()
      );

      zoom({
        center: point,
        zoom: e.deltaY > 0 ? 1.1 : 1 / 1.1,
      });
    },
    [zoom]
  );

  return (
    <svg
      className={style.canvas}
      viewBox={`${viewport.x} ${viewport.y} ${viewport.width} ${viewport.height}`}
      data-status={status}
      onPointerDown={pointerDown}
      onPointerMove={pointerMove}
      onPointerUp={pointerUp}
      onWheel={wheel}
    >
      {children}
    </svg>
  );
}

export function Controls({ children }: PropsWithChildren) {
  return <div className={style.controls}>{children}</div>;
}
