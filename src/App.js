import { useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      name: 'DevOps',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      name: 'UX & Design',
      color: '#DB6EBF'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29'
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const whenRegisteredNewCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  function deleteCollaborator(id) {
    setCollaborators(collaborators.filter(collaborator => collaborator.id !== id));
  }

  function changeTeamColor(color, id) {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color;
      }
      return team;
    }));
  }

  function createTeam(newTeam) {
    setTeams([...teams, {...newTeam, id: uuidv4() }]);
  }

  function changeFavoriteButton(id) {
    setCollaborators(collaborators.map(collaborator => {
      if (collaborator.id === id) {
        collaborator.favorite = !collaborator.favorite;
      }
      return collaborator;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Forms 
        createTeam={createTeam}
        teams={teams.map(team => team.name)}
        whenRegistered={collaborator => whenRegisteredNewCollaborator(collaborator)}/>
      <section className="teams">
        <h1>Minha organização</h1>
        {teams.map((team, index) => 
        <Team 
          whenFavorite={changeFavoriteButton}
          key={index}
          team={team}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
          changeColor={changeTeamColor}
          whenDelete={deleteCollaborator} 
        />)}
      </section>
      <Footer />
    </div>
  );
}

export default App;
