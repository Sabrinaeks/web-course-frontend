import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Course from './components/Course';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserPage from './components/UserPage';
import CourseDetail from './components/CourseDetail';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route  path='/' element={<Home />} ></Route>
      <Route  path='/about' element={<About />} ></Route>
      <Route  path='/course' element={<Course />} ></Route>
      <Route  path='/contact' element={<Contact />} ></Route>
      <Route  path='/partner' element={<Partners />} ></Route>
      <Route  path='/login' element={<Login />} ></Route>
      <Route  path='/register' element={<Register />} ></Route>
      <Route  path='/userpage' element={<UserPage />} ></Route>
      <Route  path='/coursedetail' element={<CourseDetail />} ></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
