import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Headings, Catchphrase } from './components/Headings';
import Home from './components/Pages/Home';
import Concepts from './components/Pages/Concepts';
import Timeline from './components/Pages/Timeline';
import Playground from './components/Pages/Playground';
import HMenu from './components/hMenu';
import Explore from './components/Pages/Explore';
import Footer from './components/Pages/Footer';

function App() {
  return (
    <>
    <Router>
      <div id="outer-container">
        <Navbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      <HMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
      <div id="page-wrap">
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Concepts" element={<Concepts />}></Route>
      <Route path="/Timeline" element={<Timeline />}></Route>
      <Route path="/Playground" element={<Playground />}></Route>
      <Route path="/Explore" element={<Explore />}></Route>
      </Routes>
      </div>
    </Router>
    </>      
  );
}

export default App;
