import React, {FC} from 'react';
import $ from 'styled-components';

export const $Layers = $.div`

`;

export interface ILayersProps {

}

export const Layers: FC<ILayersProps> = ({children}) => {
  return (
    <$Layers>
      {children}
    </$Layers>
  );
}
