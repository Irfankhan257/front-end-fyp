import logo from './logo.svg';
import './App.css';
import InvesTechWebsite from './Investech/investech';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path = "HomePage" element= { <InvesTechWebsite />}/>
    </Routes>
  );
}

export default App;
