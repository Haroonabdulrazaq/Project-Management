import '../App.scss';
import ProjectForm from '../components/ProjectForm';

const NewTask = () => {
  return (
    <>
      <div className="new-project-wrapper">
        <div className="form-wrapper">
          <h2>Create New Task</h2>
          <ProjectForm />
        </div>
      </div>
    </>
  );
};

export default NewTask;
