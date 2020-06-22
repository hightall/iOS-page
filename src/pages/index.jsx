/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Banner0 from '../components/antd/Banner0';
import Layout from "../components/layout";

import {
  Banner01DataSource,
} from '../components/antd/data.source';
import '../components/antd/less/antMotionStyle.less';
import SEO from "../components/seo"

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    const children = [
      <Banner0
        id="Banner0_1"
        key="Banner0_1"
        dataSource={Banner01DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <Layout>
        <SEO title='Home' />
        {children}
      </Layout>
    );
  }
}

