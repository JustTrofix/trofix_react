import '../App.css';
import NavBar from '../index/NavBar';
import Opening from '../index/Opening';
import Text from '../index/Text';
import ShortAbout from '../index/ShortAbout';
import Pages from '../index/Pages';
import ParticleBackground from '../components/config/ParticleBackground';

function first() {
  return (
    <>
      <NavBar/>
      <Opening />
      <Text/>
      <ShortAbout/>
      <Pages/>
      <ParticleBackground />
    </>
    
  );

}



export default first;
