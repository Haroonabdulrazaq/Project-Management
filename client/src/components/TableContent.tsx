import { Space, Table } from 'antd';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  fetchProjects,
  fetchSingleProject,
} from '../features/project/projectSlice';
import { RootState, useAppDispatch } from '../app/store';
import { AiTwotoneEye } from 'react-icons/ai';
import { Project } from '../utils/definitions';

const { Column } = Table;

const TableContent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { projectList, isLoading } = useSelector(
    (state: RootState) => state.projects
  );

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Table dataSource={projectList} className="data-table">
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
        key="Tasks"
        render={(tasks: string[]) => <>{tasks.length}</>}
      />
      <Column
        title="Action"
        key="action"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        render={(_: any, record: Project) => (
          <Space size="large">
            <a onClick={() => dispatch(fetchSingleProject(record.id))}>
              <AiTwotoneEye />
            </a>
          </Space>
        )}
      />
    </Table>
  );
};

export default TableContent;
