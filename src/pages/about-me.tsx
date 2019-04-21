import React from 'react';
import Helmet from 'react-helmet';
import { Layout, Wrapper, Header, Content, SectionTitle } from '../components';

import config from '../../config/SiteConfig';
import PageProps from '../models/PageProps';

export default class ContactPage extends React.Component<PageProps> {
  public render() {
    return (
      <Layout>
        <Helmet title={`About Me | ${config.siteTitle}`} />
        <Header>
          <SectionTitle uppercase={true}>About Me</SectionTitle>
        </Header>
        <Wrapper>
          <Content>
            <p>Super cool intro text to get people contacting me!</p>
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
