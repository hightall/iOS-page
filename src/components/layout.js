/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import './antd/less/antMotionStyle.less';
import Nav0 from "./antd/Nav0"
import { Footer10DataSource, Nav00DataSource } from "./antd/data.source"
import Footer1 from "./antd/Footer1"
import { enquireScreen } from "enquire-js"

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Layout extends React.Component {
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
    const { children } = this.props;

    return (
      <div
        className="templates-wrapper"
      >
        <Nav0
          id="Nav0_0"
          key="Nav0_0"
          dataSource={Nav00DataSource}
          isMobile={this.state.isMobile}
        />
        {children}
        <Footer1
          id="Footer1_0"
          key="Footer1_0"
          dataSource={Footer10DataSource}
          isMobile={this.state.isMobile}
        />
      </div>
    )
  }
}
