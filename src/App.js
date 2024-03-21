
import { Route, Routes } from 'react-router-dom';
import { InnovatorPanel } from './InnovatorPanel/InnovatorPanel';
import InvesTechWebsite from './Investech/Investech';



function App() {
  return (
    <Routes>
      <Route path = "/" element= { <InvesTechWebsite/>}/>
      <Route path = "inovatorPanel" element= {  <InnovatorPanel />}/>

    </Routes>
  );
}

export default App;
