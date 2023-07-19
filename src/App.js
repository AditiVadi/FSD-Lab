import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NewNavbar from './component/NewNavbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <NewNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
