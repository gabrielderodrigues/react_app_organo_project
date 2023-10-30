import { FaDeleteLeft } from 'react-icons/fa6';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Collaborator.css';

const Collaborator = ({ collaborator, whenDelete, backgroundColorStyle, fontColorStyle, whenFavorite }) => {
  const imageInfo = `Imagem do ${collaborator.name}.`;

  function changeFavorite() {
    whenFavorite(collaborator.id)
  };

  const propsFavorite = {
    size: 25,
    onClick: changeFavorite
  };

  return (
    <div className='collaborator'>
      <FaDeleteLeft 
        size={29} 
        color='#ae0303' 
        className="delete" 
        onClick={() => whenDelete(collaborator.id)} 
      />
      <div className='header' style={{ backgroundColor: backgroundColorStyle }}>
        <img src={collaborator.image} alt={imageInfo} />
      </div>
      <div className='card-footer'>
        <h4>{collaborator.name}</h4>
        <p>{collaborator.role}</p>        
        <div className="favorite">
          {collaborator.favorite 
            ? <AiFillHeart {...propsFavorite} color='#ff0000'/> 
            : <AiOutlineHeart {...propsFavorite} />
          }
        </div>
        <h5 style={{color: fontColorStyle}}>{collaborator.specialty}</h5>
      </div>
    </div>
  );
};

export default Collaborator;