import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Course from './pages/Course';
import Instructor from './pages/Instructor';
import Gallery from './pages/Gallery';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home/> }></Route>        
          <Route path='/about' element={<About/> }></Route>              
          <Route path='/contact' element={<Contact/> }></Route> 
          <Route path='/course' element={<Course/> }></Route>
          <Route path='/instructor' element={<Instructor/> }></Route>
          <Route path='/gallery' element={<Gallery/> }></Route>
          <Route path='/sign-up' element={<SignUp/> }></Route>
          <Route path='/sign-in' element={<SignIn/> }></Route>
        </Route>
      </Routes>
  </BrowserRouter>
    </>
   
  );
}

export default App;
