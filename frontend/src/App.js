import './App.css';
import './component/components/Components.css';
import './component/pages/Pages.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './component/pages/Home';
import Form from './component/pages/AddEmployees';
import Details from './component/pages/ViewEmployees';
import NavBar from './component/components/NavBar';
import Footer from './component/components/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Form' element={<Form/>} />
        <Route path='/Details' element={<Details/>} />
      </Routes>  
      <Footer />    
    </Router>
  );
}

export default App;
