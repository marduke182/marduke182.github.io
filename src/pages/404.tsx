import * as React from 'react';
import { Content, Header, Layout, Wrapper, SectionTitle } from '../components';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import { Link } from 'gatsby';

export default class NotFoundPage extends React.Component<any> {
  public render() {
    return (
      <Layout>
        <Helmet title={`404 not found | ${config.siteTitle}`} />
        <Header>
          <SectionTitle>NOT FOUND</SectionTitle>
        </Header>
        <Wrapper>
          <Content>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
