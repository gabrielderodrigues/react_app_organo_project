import './Forms.css';
import { useState } from 'react';
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';

const Forms = (props) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');
  const [specialty, setSpecialty] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    props.whenRegistered({
      name,
      role,
      image,
      team,
      specialty
    });
    cleanForms();
  }

  const cleanForms = () => {
    setName('');
    setRole('');
    setImage('');
    setTeam('');
    setSpecialty('');
  }

  return (
    <section className="forms">
      <form onSubmit={submitForm}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField 
          required={true} 
          label="Nome" 
          placeholder="Digite o seu nome" 
          value={name} 
          whenChanged={value => setName(value)} 
        />
        <TextField 
          required={true} 
          label="Cargo"
          placeholder="Digite seu cargo" 
          value={role} 
          whenChanged={value => setRole(value)} 
        />
        <TextField 
          required={true} 
          label="Imagem"
          placeholder="Adicione uma imagem" 
          value={image} 
          whenChanged={value => setImage(value)} 
        />
        <TextField 
          required={true} 
          label="Especialidade"
          placeholder="Digite sua especialidade" 
          value={specialty} 
          whenChanged={value => setSpecialty(value)} 
        />
        <DropdownList 
          required={true} 
          label="Time" 
          itens={props.teams}
          value={team}
          whenChanged={value => setTeam(value)}
        />
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
};

export default Forms;