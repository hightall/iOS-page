import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Card } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const { Meta } = Card;

class News extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div className='home-page-wrapper content0-wrapper'>
        <div className='home-page content0'>
          <div className='title-wrapper'>
            <h1>
              <span>
                <p>新闻动态</p>
              </span>
            </h1>
          </div>
          <OverPack playScale={0.3}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              componentProps={{
                className: 'content0-block-wrapper'
              }}
            >
              {data.nodes.map((item, i) => {
                return (
                  <Col key={item.id} className='content0-block' md={8} xs={24}>
                    <div className='content0-block-item'>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={item.image} className='news-cover-image' />}
                      >
                        <Meta title={<a href={item.link} target='_blank' rel="noopener noreferrer">{item.title}</a>} description={item.description} />
                      </Card>
                    </div>
                  </Col>
                );
              })}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default News;
