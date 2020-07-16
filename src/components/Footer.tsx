import React, {FC} from 'react';
import $ from 'styled-components';

export const $Footer = $.footer`
  align-self: end;
  grid-area: footer;
`;

export interface IFooterProps {

}

export const Footer: FC<IFooterProps> = ({children}) => {
  return (
    <$Footer>
      <p>Copyright &copy; 2020 zzzzBov.</p>
    </$Footer>
  );
};
