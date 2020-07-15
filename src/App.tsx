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

export const $App = $.div`
  
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


