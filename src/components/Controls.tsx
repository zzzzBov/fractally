import style from "@/components/Controls.module.scss";
import { CenterCanvas, ZoomIn, ZoomOut } from "@/components/Icons";
import { useDataService } from "@/hooks/useDataService";

export function CenterButton() {
  const { center } = useDataService();

  return (
    <div>
      <button className={style.centerButton} type="button" onClick={center}>
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
