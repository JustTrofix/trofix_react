import '../App.css';
import NavBar from './NavBar';
import Opening from '../about/Opening';
import Text from '../about/Text';
import Pages from '../about/Pages';

import ParticleBackground from '../components/config/ParticleBackground';

function first() {
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



export default first;
