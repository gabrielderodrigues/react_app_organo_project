import './Collaborator.css';

const Collaborator = ({ name, image, role, specialty, backgroundColorStyle }) => {
  const imageInfo = `Imagem do ${name}.`;

  return (
    <div className='collaborator'>
      <div className='cabecalho' style={{ backgroundColor: backgroundColorStyle }}>
        <img src={image} alt={imageInfo} />
      </div>
      <div className='rodape'>
        <h4>{name}</h4>
        <h5>{role}</h5>
        <h5 style={{color: backgroundColorStyle}}>{specialty}</h5>
      </div>
    </div>
  );
};

export default Collaborator;