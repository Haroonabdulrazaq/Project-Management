import { useState } from 'react';
import { Button, Flex, Layout, Typography } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Sidebar from './components/Sidebar';

import './App.scss';
import CustomHeader from './components/Header';
import TableContent from './components/TableContent';
import { AiFillPlusCircle } from 'react-icons/ai';

const { Sider, Header, Content } = Layout;
const CustomLayout = () => {
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
        <Content className="content">
          <Flex justify="space-between" align="center" className="title-button">
            <Typography.Title level={4} type="secondary" className="main-title">
              Projects
            </Typography.Title>
            <Button type="primary" color="#4f6f52">
              <AiFillPlusCircle />
              Create Project
            </Button>
          </Flex>
          <TableContent />
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
