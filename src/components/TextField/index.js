import './TextField.css';

const TextField = (props) => {
  const placeHolderModified = `${props.placeholder}...`;
  
  const whenDigited = (event) => {
    props.whenChanged(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input 
        value={props.value} 
        onChange={whenDigited} 
        required={props.required} 
        placeholder={placeHolderModified}
      />
    </div>
  );
};

export default TextField;