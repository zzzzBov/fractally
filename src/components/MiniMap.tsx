import React, {FC} from 'react';
import $ from 'styled-components';

export const $MiniMap = $.div`
  
`;

export interface IMiniMapProps {

}

export const MiniMap: FC<IMiniMapProps> = ({children}) => {
  return (
    <$MiniMap>
      {children}
    </$MiniMap>
  );
}
