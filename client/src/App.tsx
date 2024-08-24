// import ComingSoon from '../components/ComingSoon.tsx';
import CustomLayout from './components/CustomLayout.tsx';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <CustomLayout>
        <Outlet /> {/* Equivalent to Children prop in React */}
      </CustomLayout>
    </>
  );
};

export default App;
