import './App.css';
import First from './pages/first'
import Contact from './pages/contact'
import About from './pages/about'
import Projects from './pages/projects'
import NotFoundPage from './pages/notfoundpage'

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <First/> }/>
        <Route path='/contact' element={ <Contact/> }/>
        <Route path='/about' element={ <About/> }/>
        <Route path='/projects' element={ <Projects/> }/>
        <Route path="*" element={ <NotFoundPage/> } />
      </Routes>
      </>
  );

}



export default App;
