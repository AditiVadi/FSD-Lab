import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NewNavbar from './component/NewNavbar';
import Practical3 from './component/Practical3';
import { Switch } from '@mui/material';


function App() {
  return (
    <>
    {/* <BrowserRouter>
    <NewNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter> */}
    <Router>
    <Practical3/>
    <Switch>
      <Route path='/'exact component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>

    </Switch>
    </Router>
    
    </>
  );
}

export default App;
