import { Space, Table } from 'antd';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchProjects } from '../features/project/projectSlice';
import { RootState, useAppDispatch } from '../app/store';
import { AiOutlineDelete, AiTwotoneEye } from 'react-icons/ai';
import { IProject } from '../utils/definitions';
import { Link } from 'react-router-dom';

const { Column } = Table;

const TableContent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { projectList, isLoading, error } = useSelector(
    (state: RootState) => state.projects
  );

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
  }
  return (
    <Table
      dataSource={projectList}
      rowKey={(record) => record.id}
      className="data-table"
    >
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Description" dataIndex="description" key="description" />
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
            <Link to={`/projects/${record.id}`}>
              <AiOutlineDelete size="1.5rem" color="red" title="Delete" />
            </Link>
          </Space>
        )}
      />
    </Table>
  );
};
export default TableContent;
