import TableContent from '../components/TableContent';
import { Button, Flex, Typography } from 'antd'; // Button,
import { AiFillPlusCircle } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';

const Projects = () => {
  return (
    <>
      <Flex justify="space-between" align="center" className="title-button">
        <Typography.Title level={4} type="secondary" className="main-title">
          Projects
        </Typography.Title>
        <Button className="create-project-button">
          <AiFillPlusCircle size="2rem" />
          <Link to={`/projects/new`} type="primary">
            Create Project
          </Link>
        </Button>
      </Flex>
      <TableContent />
      <Outlet />
    </>
  );
};

export default Projects;
