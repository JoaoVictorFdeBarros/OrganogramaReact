import { useState } from 'react';
import Banner from './components/banner/banner';
import Customform from './components/customform/customform';
import Teamform from './components/teamform/teamform';
import Footer from './components/footer/footer';
import Team from './components/team/team';
import defaultColabs from './defaultdata/defaultcolabs';
import Customicon from './components/Icon/icon';
import {defaultteams} from './defaultdata/defaultteams';

function App() {

  const [renderform, setrenderform] = useState(true)

  const [teams, setteams] = useState(defaultteams)

  const [colabs, setcolabs] = useState(defaultColabs)

  function changeteamcolor(color, teamid) {

    setteams(teams.map(team => {
      if (team.id === teamid) {
        team.color = color
      }

      return team
    }))
  }
  const addcolab = (colab) => {
    setcolabs([...colabs, colab])
  }
  function deletemember(id){
    setcolabs(colabs.filter(colab => colab.id !== id))
  }

  const addteam = (team) =>{
    setteams([...teams,team])
  }
  const favcolab = (id)=>{
    setcolabs(colabs.map(colab =>{
      if(colab.id === id){
        colab.fav = !colab.fav
        console.log(colab);
      }
      return colab
    }))
  }

  return (
    <div className="App">
      <Banner />
      {renderform ? 
        <div className='forms'>
          <Customform newcolab={colab => addcolab(colab)} teams={teams} />
          <Teamform newteam={addteam}/> 
        </div>
      : <></>}
      <Customicon formstate={renderform} togglestate={setrenderform} />
      {teams.map((team, index) => <Team name={team.name} color={team.color} colabs={colabs.filter(colab => colab.team === team.name)} id = {team.id}
        changecolor={changeteamcolor} key={index} updatecolabfunc = {deletemember} favcolab={favcolab}/>)}
      <Footer />
    </div>
  );
}

export default App;
