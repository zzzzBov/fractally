import React, {FC} from 'react';
import $ from 'styled-components';

export const $Canvas = $.div`

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
