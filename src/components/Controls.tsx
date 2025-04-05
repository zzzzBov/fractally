import style from "@/components/Controls.module.scss";
import { CenterCanvas, ZoomIn, ZoomOut } from "@/components/Icons";
import { useDataService } from "@/hooks/useDataService";
import { useCallback } from "react";

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
  const { zoom } = useDataService();

  const zoomIn = useCallback(() => {
    zoom({
      zoom: 1 / 1.1,
    });
  }, [zoom]);

  const zoomOut = useCallback(() => {
    zoom({
      zoom: 1.1,
    });
  }, [zoom]);

  return (
    <div className={style.zoom}>
      <button className={style.in} type="button" onClick={zoomIn}>
        <ZoomIn />
      </button>
      <button className={style.out} type="button" onClick={zoomOut}>
        <ZoomOut />
      </button>
    </div>
  );
}
