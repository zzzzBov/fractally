import React, {FC} from 'react';
import $ from 'styled-components';
import { colors } from 'styles/';

export const $Canvas = $.div`
  background-color: ${colors.white};
  box-shadow: 0 0 0.5rem ${colors.greyB};
  grid-area: canvas;
`;

export interface ICanvasProps {

}

export const Canvas: FC<ICanvasProps> = ({children}) => {
  return (
    <$Canvas>
      {children}
    </$Canvas>
  );
}
