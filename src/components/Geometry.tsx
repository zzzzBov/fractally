import style from "@/components/Geometry.module.scss";
import { useDataService } from "@/hooks/useDataService";

export function BaseLine() {
  return <line className={style.baseline} x1={4} y1={8} x2={12} y2={8} />;
}

export function DerivedLines() {
  return <></>;
}

export function GripLine() {
  const { gripline } = useDataService();

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
      />
      <circle
        className={style.touch}
        cx={gripline.end.x}
        cy={gripline.end.y}
        r="1"
      />
      <circle
        className={style.grip}
        cx={gripline.start.x}
        cy={gripline.start.y}
        r="0.12"
      />
      <circle
        className={style.grip}
        cx={gripline.end.x}
        cy={gripline.end.y}
        r="0.12"
      />
    </g>
  );
}
