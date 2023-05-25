
import Header from './components/Header';
import LogIn from './components/LogIn';
import SigIn from './components/SigIn';
import BackTimer from './components/BackTimer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App() {

 

  return (
    <div >
      
      
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<BackTimer/>} exact></Route>
          <Route path='/login' element={<LogIn />} ></Route>
          <Route path='/sigin' element={<SigIn/>} ></Route>
          {/* <Route path='/index' element={<Index/>} ></Route> */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
