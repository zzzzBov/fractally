import style from "@/components/Geometry.module.scss";

export function BaseLine() {
  return <line className={style.baseline} x1={4} y1={8} x2={12} y2={8} />;
}

export function DerivedLines() {
  return <></>;
}

export function GripLine() {
  return (
    <g>
      <line className={style.gripline} x1="12.2" y1="7.4" x2="6.9" y2="2.1" />
      <circle className={style.touch} cx="12.2" cy="7.4" r="1" />
      <circle className={style.touch} cx="6.9" cy="2.1" r="1" />
      <circle className={style.grip} cx="12.2" cy="7.4" r="0.12" />
      <circle className={style.grip} cx="6.9" cy="2.1" r="0.12" />
    </g>
  );
}
