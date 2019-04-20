import React from 'react';
import styled from 'styled-components';

const DateStyled: any = styled.span`
  color: ${props => props.theme.colors.primary};
`;

type Props = {
  date: string;
};

export const Date = ({ date }: Props) => {
  return <DateStyled>{date.replace(/\./g, '/')}</DateStyled>;
};
