import React from 'react';
import styled from 'styled-components';
import config from '../../config/SiteConfig';

const HeaderWrapper: any = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.5rem 1rem 0.5rem;
  text-align: left;
`;

const Content = styled.div`
  position: relative;
  z-index: 999;
  flex: 1 1 40rem;
  max-width: 40rem;
  a {
    &:hover {
      opacity: 0.85;
    }
  }
`;

interface Props {
  children: any;
  banner?: string;
}

export class Header extends React.PureComponent<Props> {
  public render() {
    return (
      <HeaderWrapper banner={this.props.banner || config.defaultBg}>
        <Content>{this.props.children}</Content>
      </HeaderWrapper>
    );
  }
}
