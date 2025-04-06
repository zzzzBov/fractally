import { useEffect } from "react";
import { useDataService } from "./useDataService";

export function useUpdateURL() {
  const { gripline, status, viewport } = useDataService();

  useEffect(() => {
    if (status !== "idle") {
      return;
    }

    const url = new URL(location.href);
    url.searchParams.set(
      "start",
      buildCoords(gripline.start.x, gripline.start.y)
    );
    url.searchParams.set("end", buildCoords(gripline.end.x, gripline.end.y));

    history.replaceState(null, "", url.toString());
  }, [gripline, status]);

  useEffect(() => {
    if (status !== "idle") {
      return;
    }

    const url = new URL(location.href);

    url.searchParams.set(
      "viewport",
      buildCoords(viewport.x, viewport.y, viewport.width, viewport.height)
    );

    history.replaceState(null, "", url.toString());
  }, [status, viewport]);
}

function buildCoords(...coords: number[]) {
  return coords.map((coord) => +coord.toFixed(4)).join(",");
}
