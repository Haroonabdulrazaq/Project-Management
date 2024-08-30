import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../app/store';
import { fetchProjectById } from '../features/project/projectSlice';
import { useSelector } from 'react-redux';
import '../App.scss';
import { Button, Modal, Space, Table, Tag } from 'antd';
import Column from 'antd/es/table/Column';
import { ITask } from '../utils/definitions';
import {
  AiFillCheckCircle,
  AiFillPlusCircle,
  AiOutlineDelete,
} from 'react-icons/ai';
import { deleteTaskById } from '../features/task/taskSlice';
// import ConfirmModal from '../components/ConfirmModal';

const Project = () => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const { projectId } = useParams<{ projectId: string }>();
  const { selectedProject, isLoading } = useSelector(
    (state: RootState) => state.projects
  );

  useEffect(() => {
    if (projectId) {
      dispatch(fetchProjectById(parseInt(projectId)));
    }
  }, [dispatch, projectId]);

  const handleOk = () => {
    setConfirmLoading(true);
    setDeleteConfirm(true);
    console.log('Clicked ok button');
    setTimeout(() => {
      setOpenModal(false);
      setConfirmLoading(false);
      if (projectId) {
        dispatch(fetchProjectById(parseInt(projectId)));
      }
    }, 2000);
  };

  const handleDelete = async (taskId: number) => {
    // set up Modal to confirm delete
    console.log('Handle Delete');

    setOpenModal(true);
    if (projectId && deleteConfirm) {
      console.log('delete task', projectId, taskId);
      // await dispatch(deleteTaskById({ projectId, taskId }));
    }
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpenModal(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {openModal && (
        <Modal
          title="Delete Task"
          open={true}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          okButtonProps={{ style: { background: '#4f6f52', color: 'white' } }}
          cancelButtonProps={{
            style: {
              background: 'white',
              border: '1px solid red',
              color: 'red',
            },
          }}
        >
          <div>
            <AiFillCheckCircle color="green" size="2rem" />
            <span style={{ marginLeft: '1rem', fontSize: '2rem' }}>
              Are you sure you want to delete this task
            </span>
          </div>
        </Modal>
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
