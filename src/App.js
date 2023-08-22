import { useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'DevOps',
      primaryColor: '#E06869',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX & Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const whenRegisteredNewCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Forms teams={teams.map(team => team.name)}
        whenRegistered={collaborator => whenRegisteredNewCollaborator(collaborator)}/>

      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor} 
        collaborators={collaborators.filter(collaborator => collaborator.team == team.name)} />)}
      <Footer />
    </div>
  );
}

export default App;
