import React, { useState } from 'react';
import { Modal } from 'antd';
import { AiFillCheckCircle } from 'react-icons/ai';

interface IConfrimModal {
  modalTitle: string;
  modalText: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmModal: React.FC<IConfrimModal> = ({
  modalTitle,
  modalText,
  setOpenModal,
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    console.log('Clicked ok button');
    setTimeout(() => {
      setOpenModal(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpenModal(false);
  };

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
            border: '1px solid red',
            color: 'red',
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
