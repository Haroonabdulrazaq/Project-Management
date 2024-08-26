import { Flex, Menu } from 'antd';
import {
  AiFillProduct,
  AiOutlineCluster,
  AiOutlineDashboard,
  AiOutlineTeam,
  AiOutlineUnorderedList,
} from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          {' '}
          <AiFillProduct />{' '}
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        className="menu-bar"
        items={[
          {
            key: '/dashboard',
            icon: <AiOutlineDashboard />,
            title: 'Dashboard',
            label: <Link to="/dashboard">Dashboard</Link>,
          },
          {
            key: '/projects',
            icon: <AiOutlineCluster />,
            title: 'Projects',
            label: <Link to="/projects">Projects</Link>,
          },
          {
            key: '/tasks',
            icon: <AiOutlineUnorderedList />,
            title: 'Tasks',
            label: <Link to="/tasks">Tasks</Link>,
          },
          {
            key: '/teams',
            icon: <AiOutlineTeam />,
            title: 'Teams',
            label: <Link to="/teams">Teams</Link>,
          },
        ]}
      />
    </>
  );
};

export default Sidebar;
