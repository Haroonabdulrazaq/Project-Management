import { Avatar, Flex, Typography } from 'antd';
import Search from 'antd/es/input/Search';
import {
  NotificationOutlined,
  MessageOutlined,
  UserOutlined,
} from '@ant-design/icons';

const CustomHeader = () => {
  return (
    <Flex justify="space-between" align="center">
      <Typography.Title level={4} type="secondary" className="welcome-text">
        Welcome Back
      </Typography.Title>
      <Flex align="center" gap="3rem">
        <Search placeholder="Search" allowClear />
        <Flex align="center" gap="1rem">
          <MessageOutlined className="header-icon" />
          <NotificationOutlined className="header-icon" />
          <Avatar size="large" icon={<UserOutlined />} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CustomHeader;
