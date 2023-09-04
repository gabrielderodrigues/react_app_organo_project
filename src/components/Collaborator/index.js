import { AiFillCloseCircle } from 'react-icons/ai';
import './Collaborator.css';

const Collaborator = ({ collaborator, whenDelete, backgroundColorStyle, fontColorStyle }) => {
  const imageInfo = `Imagem do ${collaborator.name}.`;

  return (
    <div className='collaborator'>
      <AiFillCloseCircle size={29} className="delete" onClick={whenDelete} />
      <div className='header' style={{ backgroundColor: backgroundColorStyle }}>
        <img src={collaborator.image} alt={imageInfo} />
      </div>
      <div className='card-footer'>
        <h4>{collaborator.name}</h4>
        <p>{collaborator.role}</p>
        <h5 style={{color: fontColorStyle}}>{collaborator.specialty}</h5>
      </div>
    </div>
  );
};

export default Collaborator;