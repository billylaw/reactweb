import React from 'react';
import { Menu, Icon, Button } from 'antd';

const { SubMenu } = Menu;

class TopMenu extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 256 }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="desktop" />
            <span>主页操作</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="appstore" />
                <span>任务状态</span>
              </span>
            }
          >
            <Menu.Item key="2">任务信息</Menu.Item>
            <Menu.Item key="3">发送信息</Menu.Item>
            <Menu.Item key="4">跟踪统计</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="mail" />
                <span>邮件组</span>
              </span>
            }
          >
            <Menu.Item key="5">管理邮件</Menu.Item>
            <Menu.Item key="6">设置黑名单</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>客户信息</span>
              </span>
            }
          >
            <Menu.Item key="7">待沟通客户</Menu.Item>
            <Menu.Item key="8">已沟通客户</Menu.Item>
            <Menu.Item key="9">已回复客户</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}