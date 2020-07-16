import React, { FC } from 'react';
import $ from 'styled-components';
import {
  Canvas,
  Controls,
  Footer,
  Header,
  Layers,
  MiniMap
} from './components/';
import {
  colors,
  media
} from './styles';

export const $App = $.div`
  background-color: ${colors.greyE};
  display: grid;
  gap: 1.6rem;
  grid-template:
    "header  "
    "canvas  "
    "controls"
    "minimap "
    "layers  "
    "footer  "
  /  1fr     ;
  min-height: 100%;

  ${media.medium} {
    grid-template:
      "header   header "
      "canvas   canvas "
      "controls minimap"
      "layers   minimap"
      "footer   footer "
    /  1fr      1fr    ;
  }

  ${media.large} {
    grid-template:
      "header header   header header  header" auto
      "...... controls canvas minimap ......" auto
      "...... footer   canvas layers  ......" 1fr
    /  0      1fr      54rem  1fr     0     ;
  }
`;

export interface IAppProps {

}

export const App: FC<IAppProps> = () => {
  return (
    <$App>
      <Header />
      <Canvas />
      <Controls />
      <MiniMap />
      <Layers />
      <Footer />
    </$App>
  );
}


