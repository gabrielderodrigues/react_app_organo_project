import { useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  
  const [teams, setTeams] = useState([
    {
      name: 'Programação',
      color: '#57C278'
    },
    {
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      name: 'DevOps',
      color: '#E06B69'
    },
    {
      name: 'UX & Design',
      color: '#DB6EBF'
    },
    {
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      name: 'Inovação e Gestão',
      color: '#FF8A29'
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const whenRegisteredNewCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  function deleteCollaborator() {
    console.log('teste');
  }

  function changeTeamColor(color, name) {
    setTeams(teams.map(team => {
      if (teams.name === name) {
        team.color = color;
      }
      return team;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Forms teams={teams.map(team => team.name)}
        whenRegistered={collaborator => whenRegisteredNewCollaborator(collaborator)}/>
      <section className="teams">
        <h1>Minha organização</h1>
        {teams.map((team, index) => <Team 
          key={index}
          team={team}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
          changeColor={changeTeamColor}
          whenDelete={deleteCollaborator()} 
        />)}
      </section>
      <Footer />
    </div>
  );
}

export default App;
