import React, {FC} from 'react';
import $ from 'styled-components';
import { colors } from '../styles';

export const $MiniMap = $.div`
  background-color: ${colors.white};
  box-shadow: 0 0 0.5rem ${colors.greyB};
  grid-area: minimap;
`;

export interface IMiniMapProps {

}

export const MiniMap: FC<IMiniMapProps> = ({children}) => {
  return (
    <$MiniMap>
      <svg>
        
      </svg>
    </$MiniMap>
  );
}
