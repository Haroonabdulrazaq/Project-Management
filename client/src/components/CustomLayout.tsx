import { useState } from 'react';
import { Button, Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Sidebar from './Sidebar';

import '../App.scss';
import CustomHeader from './Header';
import { CustomLayoutProps } from '../utils/definitions';

const { Sider, Header, Content } = Layout;

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <Sidebar />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="trigger-btn"
        />
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
