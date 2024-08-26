import TableContent from '../components/TableContent';
import { Button, Flex, Typography } from 'antd';
import { AiFillPlusCircle } from 'react-icons/ai';

const Projects = () => {
  return (
    <>
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
    </>
  );
};

export default Projects;
