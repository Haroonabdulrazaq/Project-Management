import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button, DatePicker, Form, Input } from 'antd';
import { createProject } from '../features/project/projectSlice';
import { useAppDispatch } from '../app/store';
import { IProject } from '../utils/definitions';
import CustomModal from './CustomModal';

const { TextArea } = Input;

const onFinishFailed: FormProps<IProject>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const ProjectForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const onFinish: FormProps<IProject>['onFinish'] = async (
    values: IProject
  ) => {
    setIsModalOpen(true);
    await dispatch(createProject(values));
    form.resetFields();
  };
  return (
    <>
      {isModalOpen && (
        <CustomModal status="success" message="Project created successfully!" />
      )}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        size="large"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="project-form"
      >
        <Form.Item<IProject>
          label="Name"
          name="name"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: 'Please input project name' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IProject>
          label="Description"
          name="description"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item<IProject>
          label="Due Date"
          name="due_date"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: 'Please input due date' }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          wrapperCol={{ offset: 8, span: 24 }}
          className="button-wrapper"
        >
          <Button type="primary" htmlType="submit" className="project-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ProjectForm;
