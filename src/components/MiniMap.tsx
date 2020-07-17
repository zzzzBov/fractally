import React, {FC} from 'react';
import $ from 'styled-components';
import { colors } from 'styles/';
import { ILayer } from 'types/';
import { getBoundingBox } from 'utils/';

export const $MiniMap = $.div`
  background-color: ${colors.white};
  box-shadow: 0 0 0.5rem ${colors.greyB};
  grid-area: minimap;
`;

export interface IMiniMapProps {
  layers: ILayer[]
}

export const MiniMap: FC<IMiniMapProps> = ({
  layers
}) => {
  const boundingBox = getBoundingBox(layers)

  return (
    <$MiniMap>
      <svg viewBox={boundingBox}>
        
      </svg>
    </$MiniMap>
  );
}
