import React, {FC} from 'react';
import $ from 'styled-components';

export const $Controls = $.div`

`;

export interface IControlsProps {

}

export const Controls: FC<IControlsProps> = ({children}) => {
  return (
    <$Controls>
      {children}
    </$Controls>
  );
}
