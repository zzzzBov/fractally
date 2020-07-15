import React, {FC} from 'react';
import $ from 'styled-components';

export const $Footer = $.footer`

`;

export interface IFooterProps {

}

export const Footer: FC<IFooterProps> = ({children}) => {
  return (
    <$Footer>
      {children}
    </$Footer>
  );
};
