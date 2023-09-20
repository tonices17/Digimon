import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//se importa el componente
import ShowDigimon from './components/ShowDigimon';
import CreateDigimon from './components/CreateDigimon';
import EditDigimon from './components/EditDigimon';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowDigimon/>} />
          <Route path='/create' element={ <CreateDigimon/>} />
          <Route path='/edit/:id' element={ <EditDigimon/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
