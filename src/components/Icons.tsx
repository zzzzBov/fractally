import style from "@/components/Icons.module.scss";

export function CenterCanvas() {
  return (
    <svg viewBox="-3 -3 6 6" width="30" height="30">
      <title>Center canvas</title>
      <circle className={style.ring} cx="0" cy="0" r="1.25" />
      <circle className={style.dot} cx="0" cy="0" r="0.375" />
      <line className={style.line} x1="-2" y1="0" x2="-1.25" y2="0" />
      <line className={style.line} x1="2" y1="0" x2="1.25" y2="0" />
      <line className={style.line} x1="0" y1="-2" x2="0" y2="-1.25" />
      <line className={style.line} x1="0" y1="2" x2="0" y2="1.25" />
    </svg>
  );
}

export function ZoomIn() {
  return (
    <svg viewBox="-3 -3 6 6" width="30" height="30">
      <title>Zoom in</title>
      <line className={style.line} x1="-2" y1="0" x2="2" y2="0" />
      <line className={style.line} x1="0" y1="-2" x2="0" y2="2" />
    </svg>
  );
}

export function ZoomOut() {
  return (
    <svg viewBox="-3 -3 6 6" width="30" height="30">
      <title>Zoom out</title>
      <line className={style.line} x1="-2" y1="0" x2="2" y2="0" />
    </svg>
  );
}
