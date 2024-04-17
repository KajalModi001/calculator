import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './Pages/Calculator';
import Header from './Components/Header';

function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
      <Routes>
        <Route path='calculator' element={<Calculator/>}></Route>
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
