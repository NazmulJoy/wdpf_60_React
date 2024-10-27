import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Course from './pages/Course';
import Instructor from './pages/Instructor';
import Gallery from './pages/Gallery';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home/> }></Route>        
          <Route path='/about' element={<About/> }></Route>              
          <Route path='/contact' element={<Contact/> }></Route> 
          <Route path='/course' element={<Course/> }></Route>
          <Route path='/instructor' element={<Instructor/> }></Route>
          <Route path='/gallery' element={<Gallery/> }></Route>
        </Route>
      </Routes>
  </BrowserRouter>
    </>
   
  );
}

export default App;
