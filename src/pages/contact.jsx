import '../App.css';
import NavBar from '../contact/NavBar';
import Opening from '../contact/Opening';
import Text from '../contact/Text';
import Pages from '../contact/Pages';

import ParticleBackground from '../components/config/ParticleBackground';

function contact() {
  return (
    <>
      <NavBar/>
      <Opening />
      <Text />
      <Pages />
      <ParticleBackground />
    </>
    
  );

}



export default contact;
