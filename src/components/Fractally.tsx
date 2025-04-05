import { PropsWithChildren } from "react";
import style from "./Fractally.module.scss";

export function Fractally() {
  return (
    <Container>
      <Canvas>{/* TODO */}</Canvas>
      <Controls>{/* TODO */}</Controls>
    </Container>
  );
}

function Container({ children }: PropsWithChildren) {
  return <div className={style.container}>{children}</div>;
}

export function Canvas({ children }: PropsWithChildren) {
  return (
    <svg className={style.canvas} viewBox="0 0 16 16">
      {children}
    </svg>
  );
}

export function Controls({ children }: PropsWithChildren) {
  return <div className={style.controls}>{children}</div>;
}
