import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import HomePage from './Pages/Home';
import RoomPage from './Pages/Room';
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/room/:roomid' element={<RoomPage/>}/>
    </Routes>
  );
}

export default App;
