import { Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { deleteProject, fetchProjects } from '../features/project/projectSlice';
import { RootState, useAppDispatch } from '../app/store';
import { AiOutlineDelete, AiTwotoneEye } from 'react-icons/ai';
import { IProject } from '../utils/definitions';
import { Link } from 'react-router-dom';
import CustomModal from './CustomModal';

const { Column } = Table;

const TableContent: React.FC = () => {
  const dispatch = useAppDispatch();
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const { projectList, isLoading, error } = useSelector(
    (state: RootState) => state.projects
  );

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  const handleDelete = async (projectId: number) => {
    // handle delete logic
    setOpenSuccessModal(false);
    setOpenErrorModal(false);
    const projectToDelete = await dispatch(deleteProject(projectId));
    console.log('projectToDelete', projectToDelete);
    dispatch(fetchProjects());

    if (projectToDelete.meta.requestStatus === 'fulfilled') {
      setOpenSuccessModal(true);
    }
  };

  useEffect(() => {
    if (error.length > 0) {
      setOpenErrorModal(true);
    }
  }, [error, dispatch]);

  return (
    <>
      {openErrorModal && (
        <CustomModal
          title="Delete Project"
          status="error"
          message={
            error || 'Project has tasks, cannot delete, kindly delete all tasks'
          }
        />
      )}
      {openSuccessModal && (
        <CustomModal
          title="Delete Project"
          status="success"
          message="Project deleted successfully!"
        />
      )}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Table
          dataSource={projectList}
          rowKey={(record) => record.id}
          className="data-table"
        >
          <Column title="Name" dataIndex="name" key="name" />
          <Column
            title="Description"
            dataIndex="description"
            key="description"
          />
          <Column
            title="Due Date"
            dataIndex="due_date"
            key="due_date"
            render={(due_date: string) => <>{due_date.split('T')[0]}</>}
          />
          <Column
            title="No. of tasks"
            dataIndex="Tasks"
            key="tasks"
            render={(tasks: string[]) => <>{tasks.length}</>}
          />
          <Column
            title="Action"
            key="action"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            render={(_: any, record: IProject) => (
              <Space size="large">
                <Link to={`/projects/${record.id}`}>
                  <AiTwotoneEye size="1.5rem" title="View detail" />
                </Link>
                <Space onClick={() => handleDelete(record.id)}>
                  <AiOutlineDelete size="1.5rem" color="red" />
                </Space>
              </Space>
            )}
          />
        </Table>
      )}
    </>
  );
};
export default TableContent;
