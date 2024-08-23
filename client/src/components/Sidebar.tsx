import { Flex, Menu } from 'antd';
import {
  AiFillProduct,
  AiOutlineCluster,
  AiOutlineDashboard,
  // AiOutlineOrderedList,
  AiOutlineTeam,
  AiOutlineUnorderedList,
} from 'react-icons/ai';

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
        defaultSelectedKeys={['1']}
        className="menu-bar"
        items={[
          {
            key: '1',
            icon: <AiOutlineDashboard />,
            title: 'Dashboard',
            label: 'Dashboard',
          },
          {
            key: '2',
            icon: <AiOutlineCluster />,
            title: 'Projects',
            label: 'Projects',
          },
          {
            key: '3',
            icon: <AiOutlineUnorderedList />,
            title: 'Tasks',
            label: 'Tasks',
          },
          {
            key: '4',
            icon: <AiOutlineTeam />,
            title: 'Teams',
            label: 'Teams',
          },
        ]}
      />
    </>
  );
};

export default Sidebar;
