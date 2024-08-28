import React, { useState } from 'react';
import { Modal } from 'antd';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

interface ICustomModalProps {
  status: string;
  message: string;
}

const CustomModal: React.FC<ICustomModalProps> = ({ status, message }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  setTimeout(() => {
    setIsModalOpen(false);
  }, 5000);

  return (
    <>
      <Modal
        title="Successfully Created"
        open={isModalOpen}
        onOk={handleOk}
        okButtonProps={{ style: { background: '#4f6f52' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        {status === 'success' ? (
          <div>
            <AiFillCheckCircle color="green" size="2rem" />
            <span style={{ marginLeft: '1rem', fontSize: '2rem' }}>
              {message}
            </span>
          </div>
        ) : (
          <div>
            <AiFillCloseCircle color="red" size="2rem" />
            <span style={{ marginLeft: '1rem', fontSize: '2rem' }}>
              {message}
            </span>
          </div>
        )}
      </Modal>
    </>
  );
};

export default CustomModal;
