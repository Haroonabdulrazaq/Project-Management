import React from 'react';
import { Modal } from 'antd';
import { AiFillCheckCircle } from 'react-icons/ai';

interface IConfrimModal {
  modalTitle: string;
  modalText: string;
  handleOk: () => Promise<void>;
  handleCancel: () => void;
  confirmLoading: boolean;
}

const ConfirmModal: React.FC<IConfrimModal> = ({
  modalTitle,
  modalText,
  handleOk,
  handleCancel,
  confirmLoading,
}) => {
  return (
    <>
      <Modal
        title={modalTitle}
        open={true}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okButtonProps={{ style: { background: '#4f6f52', color: 'white' } }}
        cancelButtonProps={{
          style: {
            background: 'white',
            border: '1px solid #4f6f52',
            color: '#4f6f52',
          },
        }}
      >
        <div>
          <AiFillCheckCircle color="green" size="2rem" />
          <span style={{ marginLeft: '1rem', fontSize: '2rem' }}>
            {modalText}
          </span>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmModal;
