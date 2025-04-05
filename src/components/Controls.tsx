import style from "@/components/Controls.module.scss";
import { CenterCanvas, ZoomIn, ZoomOut } from "@/components/Icons";

export function CenterButton() {
  return (
    <div>
      <button className={style.centerButton} type="button">
        <CenterCanvas />
      </button>
    </div>
  );
}

export function Zoom() {
  return (
    <div className={style.zoom}>
      <button className={style.in} type="button">
        <ZoomIn />
      </button>
      <button className={style.out} type="button">
        <ZoomOut />
      </button>
    </div>
  );
}
