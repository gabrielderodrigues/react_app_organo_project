import './Forms.css';
import { useState } from 'react';
import Field from '../Field';
import DropdownList from '../DropdownList';
import Button from '../Button';

const Forms = ({ createTeam, teams, whenRegistered }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamColor, setTeamColor] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    whenRegistered({
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
        <Field 
          required={true} 
          label="Nome" 
          placeholder="Digite o seu nome" 
          value={name} 
          whenChanged={value => setName(value)} 
        />
        <Field 
          required={true} 
          label="Cargo"
          placeholder="Digite seu cargo" 
          value={role} 
          whenChanged={value => setRole(value)} 
        />
        <Field 
          required={true} 
          label="Imagem"
          placeholder="Adicione uma imagem" 
          value={image} 
          whenChanged={value => setImage(value)} 
        />
        <Field 
          required={true} 
          label="Especialidade"
          placeholder="Digite sua especialidade" 
          value={specialty} 
          whenChanged={value => setSpecialty(value)} 
        />
        <DropdownList 
          required={true} 
          label="Time" 
          itens={teams}
          value={team}
          whenChanged={value => setTeam(value)}
        />
        <Button>
          Criar Card
        </Button>
      </form>
      <form onSubmit={(event) => {
        event.preventDefault()
        createTeam({ name: teamName, color: teamColor})
       }}>
        <h2>Preencha os dados para criar um novo time</h2>
        <Field 
          required
          label="Nome" 
          placeholder="Digite o seu nome do time" 
          value={teamName} 
          whenChanged={value => setTeamName(value)} 
        />
        <Field 
          required
          type='color'
          label="Cor"
          placeholder="Digite a cor do time" 
          value={teamColor} 
          whenChanged={value => setTeamColor(value)} 
        />
        <Button>
          Criar um novo time
        </Button>
      </form>
    </section>
  );
};

export default Forms;