import React from 'react';
import { useParams } from 'react-router-dom';

const ComingSoon: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  console.log(projectId);

  return <div>Coming Soon!</div>;
};

export default ComingSoon;
