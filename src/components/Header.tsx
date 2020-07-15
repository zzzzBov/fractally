import React, {FC} from 'react';
import $ from 'styled-components';

export const $Header = $.header`

`;

export interface IHeaderProps {

}

export const Header: FC<IHeaderProps> = ({children}) => {
  return (
    <$Header>
      {children}
    </$Header>
  );
};
