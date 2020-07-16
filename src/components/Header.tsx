import React, {FC} from 'react';
import $ from 'styled-components';
import { colors } from '../styles';

export const $Header = $.header`
  background-color: ${colors.grey3};
  grid-area: header;
  height: 4.8rem;
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
