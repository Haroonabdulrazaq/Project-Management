import '../App.scss';
import ProjectForm from '../components/ProjectForm';

const NewProject = () => {
  return (
    <>
      <div className="new-project-wrapper">
        <div className="form-wrapper">
          <h2>Create New Project</h2>
          <ProjectForm />
        </div>
      </div>
    </>
  );
};

export default NewProject;
