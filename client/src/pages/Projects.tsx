import TableContent from '../components/TableContent';
import { Button, Flex, Typography } from 'antd';
import { AiFillPlusCircle } from 'react-icons/ai';
// import CustomLayout from '../components/CustomLayout';

const Projects = () => {
  return (
    // <CustomLayout>
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
    // </CustomLayout>
  );
};

export default Projects;
