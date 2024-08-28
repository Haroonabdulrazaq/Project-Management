import TableContent from '../components/TableContent';
import { Flex, Typography } from 'antd'; // Button,
import { AiFillPlusCircle } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';

const Projects = () => {
  return (
    <>
      <Flex justify="space-between" align="center" className="title-button">
        <Typography.Title level={4} type="secondary" className="main-title">
          Projects
        </Typography.Title>
        <Link to={`/projects/new`} type="primary" color="#4f6f52">
          <AiFillPlusCircle />
          Create Project
        </Link>
      </Flex>
      <TableContent />
      <Outlet />
    </>
  );
};

export default Projects;
