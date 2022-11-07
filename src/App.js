import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Page from './Page/Page';
import Note from './Page/Note';

function App() {
  return (
   <div>
      <Routes>
      <Route path='/' element={<Home />}> </Route>
      <Route path='/note' element={<Note />}> 
      <Route path='page' element={<Page />}> </Route></Route>
      </Routes>

    </div>

  );
}

export default App;
