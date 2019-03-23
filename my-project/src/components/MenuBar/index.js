import React, { PureComponent } from 'react';
import { TabBar } from 'antd-mobile';
import Router from 'umi/router';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '@/theme';

const tabBarData = [
  {
    title: '日记',
    icon: 'pen',
    selectedIcon: 'pen',
    link: '/',
  },
  {
    title: '过客',
    icon: 'list',
    selectedIcon: 'list',
    link: '/find',
  },
  {
    title: '我的',
    icon: 'user-cog',
    selectedIcon: 'user-cog',
    link: '/mine',
  },
];

class MenuBar extends PureComponent {
  render() {
    const { isMenubar, children, pathname } = this.props;
    return (
      <TabBar hidden={isMenubar} tintColor={theme.primaryColor}>
        {tabBarData.map(({ title, icon, selectedIcon, link }) => (
          <TabBar.Item
            key={link}
            title={title}
            icon={<FontAwesomeIcon icon={icon} />}
            selectedIcon={<FontAwesomeIcon icon={selectedIcon} />}
            selected={pathname === link}
            onPress={() => Router.push(`${link}`)}
          >
            {/* 匹配到的children路由进行渲染 */}
            {children.props.location.pathname === link && children}
          </TabBar.Item>
        ))}
      </TabBar>
    );
  }
}

MenuBar.defaultProps = {
  isMenubar: false,
  children: null,
  pathname: '/',
};

MenuBar.propTypes = {
  isMenubar: PropTypes.bool,
  children: PropTypes.node,
  pathname: PropTypes.string,
};

export default MenuBar;
