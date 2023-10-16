import './Team.css';
import Collaborator from '../Collaborator';
import hexToRgba from 'hex-to-rgba';

const Team = ({ team, collaborators, whenDelete, changeColor }) => {
  
  return (
    collaborators.length > 0 ? <section className='team' style={{backgroundColor: hexToRgba(team.color, '0.6')}}>
      <input 
        className='input-color'
        onChange={event => changeColor(event.target.value, team.id)} 
        value={team.color} 
        type='color'>
      </input>
      <h3 style={{borderColor: team.color}}>{team.name}</h3>
      <div className='collaborators'>
        {collaborators.map((collaborator, index) => {
          return (
            <Collaborator
            key={index} 
            collaborator={collaborator}
            backgroundColorStyle={team.color} 
            fontColorStyle={team.color}
            whenDelete={whenDelete}/>
          );
        })}
      </div>
    </section>
    : ''
  );
};

export default Team;