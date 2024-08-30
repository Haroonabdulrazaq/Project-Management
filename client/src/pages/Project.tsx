import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../app/store';
import { fetchProjectById } from '../features/project/projectSlice';
import { useSelector } from 'react-redux';
import { Button, Space, Table, Tag } from 'antd';
import Column from 'antd/es/table/Column';
import { ITask } from '../utils/definitions';
import { AiFillPlusCircle, AiOutlineDelete } from 'react-icons/ai';
import { deleteTaskById } from '../features/task/taskSlice';
import ConfirmModal from '../components/ConfirmModal';

import '../App.scss';

const Project = () => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState<number | null>(null);
  const { projectId } = useParams<{ projectId: string }>();
  const { selectedProject, isLoading } = useSelector(
    (state: RootState) => state.projects
  );

  useEffect(() => {
    if (projectId) {
      dispatch(fetchProjectById(parseInt(projectId)));
    }
  }, [dispatch, projectId]);

  const handleOk = async () => {
    setConfirmLoading(true);
    if (projectId && taskIdToDelete !== null) {
      await dispatch(deleteTaskById({ projectId, taskId: taskIdToDelete }));
      dispatch(fetchProjectById(parseInt(projectId)));
      setTaskIdToDelete(null);
      setConfirmLoading(false);
    }
    setOpenModal(false);
  };

  const handleDelete = async (taskId: number) => {
    setTaskIdToDelete(taskId);
    setOpenModal(true);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {openModal && (
        <ConfirmModal
          handleOk={handleOk}
          handleCancel={handleCancel}
          confirmLoading={confirmLoading}
          modalTitle="Delete Task"
          modalText="Are you sure you want to delete this task?"
        />
      )}
      <Button
        className="create-project-button"
        style={{ alignSelf: 'flex-end', marginBottom: '2rem' }}
      >
        <AiFillPlusCircle size="2rem" />
        <Link to={`/tasks/new`} type="primary">
          Create New Task
        </Link>
      </Button>
      <div className="project-detail-wrapper">
        <div className="project-detail">
          <h2>Project details</h2>
          <div className="project-info">
            <div className="block-info">
              <h3 className="info-title">Name:</h3>
              <span>{selectedProject && selectedProject.name}</span>
            </div>
            <div className="block-info">
              <h3 className="info-title">Description:</h3>
              <span>{selectedProject && selectedProject.description}</span>
            </div>
            <div className="block-info">
              <h3 className="info-title">Due Date:</h3>
              <span>
                {selectedProject && selectedProject.due_date.split('T')[0]}
              </span>
            </div>
          </div>
        </div>
        <div className="task-list">
          <Table
            dataSource={selectedProject ? selectedProject.Tasks : []}
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
              title="Status"
              dataIndex="status"
              key="status"
              render={(status: string) => (
                <>
                  {status === 'IN_PROGRESS' ? (
                    <Tag color="geekblue">{status}</Tag>
                  ) : status === 'COMPLETED' ? (
                    <Tag color="green">{status}</Tag>
                  ) : (
                    <Tag color="volcano">{status}</Tag>
                  )}
                </>
              )}
            />
            <Column
              title="Action"
              key="action"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              render={(_: any, record: ITask) => (
                <Space size="large">
                  <Space onClick={() => handleDelete(record.id)}>
                    <AiOutlineDelete size="1.5rem" color="red" />
                  </Space>
                </Space>
              )}
            />
          </Table>
        </div>
      </div>
    </>
  );
};

export default Project;
