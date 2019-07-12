import React, { PureComponent, Fragment } from 'react';
import { WingBlank, List, WhiteSpace, Flex, Button } from 'antd-mobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.less';
const Item = List.Item;
const Brief = Item.Brief;
export class Mine extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: '资料修改', icon: 'user-edit' },
        { name: '升级高级账户', icon: 'medal', space: true },
        { name: '系统通知', icon: 'comment', space: true },
        { name: '好评鼓励', icon: 'thumbs-up' },
        { name: '更多功能', icon: 'th-large' },
        { name: '设置', icon: 'cog' },
        { name: '分享给朋友', icon: 'share' },
      ],
    };
  }
  render() {
    const { list } = this.state;
    return (
      <div className={styles.mine}>
        <Flex className={styles.top} direction="column">
          <WhiteSpace size="lg" />
          <Flex.Item>
            <FontAwesomeIcon className={styles.icon} icon="leaf" size="4x" border />
          </Flex.Item>
          <WhiteSpace size="lg" />
          <Flex.Item>Jiuxia</Flex.Item>
          <Flex.Item>
            星星 <FontAwesomeIcon icon="star" />
            x5
          </Flex.Item>
          <WhiteSpace size="lg" />
        </Flex>
        <List>
          <WhiteSpace size="lg" />
          {list.map(li => {
            return (
              <Fragment>
                <Item key={li.name} arrow="horizontal" className={styles.item}>
                  <FontAwesomeIcon icon={li.icon} />
                  <span className={styles.text}>{li.name}</span>
                </Item>
                <WhiteSpace style={{ display: li.space ? 'block' : 'none' }} size="lg" />
              </Fragment>
            );
          })}
        </List>
        <WingBlank>
          <WhiteSpace size="lg" />
          <Button type="warning">退出登录</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Mine;
