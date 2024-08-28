import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../app/store';
import { fetchProjectById } from '../features/project/projectSlice';
import { useSelector } from 'react-redux';
import '../App.scss';
import { Button, Space, Table, Tag } from 'antd';
import Column from 'antd/es/table/Column';
import { ITask } from '../utils/definitions';
import { AiFillPlusCircle, AiTwotoneEye } from 'react-icons/ai';

const Project = () => {
  const dispatch = useAppDispatch();
  const { projectId } = useParams<{ projectId: string }>();
  useEffect(() => {
    if (projectId) {
      dispatch(fetchProjectById(parseInt(projectId)));
    }
  }, [dispatch, projectId]);
  const { selectedProject, isLoading } = useSelector(
    (state: RootState) => state.projects
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
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
            <p className="block-info">
              <p className="info-title">Name:</p>
              <span>{selectedProject && selectedProject.name}</span>
            </p>
            <p className="block-info">
              <p className="info-title">Description:</p>
              <span>{selectedProject && selectedProject.description}</span>
            </p>
            <p className="block-info">
              <p className="info-title">Due Date:</p>
              <span>
                {selectedProject && selectedProject.due_date.split('T')[0]}
              </span>
            </p>
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
                  <Link to={`/projects/${record.id}`}>
                    <AiTwotoneEye />
                  </Link>
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
