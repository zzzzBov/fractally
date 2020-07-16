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
import { colors } from './styles';

export const $App = $.div`
  background-color: ${colors.greyE};
  min-height: 100%;
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


