import './Field.css';

const Field = ({ type = 'text', label, placeholder, value, whenChanged, required = false }) => {
  const placeHolderModified = `${placeholder}...`;


  return (
    <div className={`text-field text-field-${type}`}>
      <label>{label}</label>
      <input 
        type={type}
        value={value} 
        onChange={event => whenChanged(event.target.value)} 
        required={required} 
        placeholder={placeHolderModified}
      />
    </div>
  );
};

export default Field;