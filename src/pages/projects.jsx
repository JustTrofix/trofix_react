import '../App.css';
import NavBar from '../projects/NavBar';
import Text from '../projects/Text';
import Pages from '../projects/Pages';
import Opening from '../projects/Opening';

import ParticleBackground from '../components/config/ParticleBackground';

function projects() {
  return (
    <>
      <NavBar/>
      <Opening />
      <Text/>
      <Pages/>
      <ParticleBackground />
    </>
    
  );

}



export default projects;
