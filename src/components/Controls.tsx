import React, {FC} from 'react';
import $ from 'styled-components';

export const $Controls = $.div`
  grid-area: controls;
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
