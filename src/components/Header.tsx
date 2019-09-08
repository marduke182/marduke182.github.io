import React from 'react';
import styled from 'styled-components';
import config from '../../config/SiteConfig';
import { Link } from 'gatsby';
import { Theme } from '../../config/Theme';
import { Nav } from './Nav';
import { JustifyContentProperty } from 'csstype';

const HeaderWrapper: any = styled.header`
  padding: 2rem 1rem 0.5rem;
  text-align: left;
`;

const Content = styled.div<{ direction?: 'row' | 'column', justify?: JustifyContentProperty }>`
  z-index: 999;
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  justify-content: ${props => props.justify};
  a {
    &:hover {
      opacity: 0.85;
    }
  }
`;

const HeaderTitle = styled.span`
  font-size: 1.8rem;
  font-family: ${(props: { theme: Theme }) => props.theme.fontFamily.heading};
  font-weight: 900;
`;

interface Props {
  banner?: string;
}

export class Header extends React.PureComponent<Props> {
  public render() {
    return (
      <HeaderWrapper banner={this.props.banner || config.defaultBg}>
        <Content justify="space-between">
          <div>
            <HeaderTitle>Jesús Quintana</HeaderTitle>
            <br />
            <Link to="/">{config.siteTitle}</Link>
          </div>
          <Nav />
        </Content>
        <br />
        {this.props.children && <Content direction="column">{this.props.children}</Content>}
      </HeaderWrapper>
    );
  }
}
