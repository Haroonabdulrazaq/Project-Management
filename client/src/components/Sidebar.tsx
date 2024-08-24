import { Flex, Menu } from 'antd';
import {
  AiFillProduct,
  AiOutlineCluster,
  AiOutlineDashboard,
  AiOutlineTeam,
  AiOutlineUnorderedList,
} from 'react-icons/ai';
// import { Link } from 'react-router-dom';

const Sidebar = () => {
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
        defaultSelectedKeys={['2']}
        className="menu-bar"
        items={[
          {
            key: '1',
            icon: <AiOutlineDashboard />,
            title: 'Dashboard',
            label: <a href="/dashboard">Dashboard</a>,
          },
          {
            key: '2',
            icon: <AiOutlineCluster />,
            title: 'Projects',
            label: <a href="/projects">Projects</a>,
          },
          {
            key: '3',
            icon: <AiOutlineUnorderedList />,
            title: 'Tasks',
            label: <a href="/tasks">Tasks</a>,
          },
          {
            key: '4',
            icon: <AiOutlineTeam />,
            title: 'Teams',
            label: <a href="/teams">Teams</a>,
          },
        ]}
      />
    </>
  );
};

export default Sidebar;
