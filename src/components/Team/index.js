import './Team.css';
import Collaborator from '../Collaborator';

const Team = (props) => {
  const backgroundStyle = { backgroundColor: props.secondaryColor };
  const borderStyle = { borderColor: props.primaryColor };
  
  return (
    props.collaborators.length > 0 ? <section className='team' style={backgroundStyle}>
      <h3 style={borderStyle}>{props.name}</h3>
      <div className='collaborators'>
        {props.collaborators.map(collaborator => <Collaborator
          key={collaborator.name} 
          name={collaborator.name} 
          role={collaborator.role} 
          specialty={collaborator.specialty}
          image={collaborator.image}
          backgroundColorStyle={props.primaryColor} />)}
      </div>
    </section>
    : ''
  );
};

export default Team;