import logo from './logo.svg';
import './App.css';

import Screen1 from './zoom/s1.jsx';
import Screen2 from './zoom/s2.jsx';
import Screen3 from './zoom/s3.jsx';
import Screen4 from './zoom/s4.jsx';
import Screen5 from './zoom/s5.jsx';
import Screen6 from './zoom/s6.jsx';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <ReducerForm/> */}
      <Router>
        <Routes>
          <Route path='/' element={ <Screen2 />} />
          <Route path='/settings' element={ <Screen3 />} />
          <Route path='/signup' element={ <Screen5 />} />
          <Route path='/signin' element={ <Screen4 />} />
          <Route path='/join' element={ <Screen6 />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
