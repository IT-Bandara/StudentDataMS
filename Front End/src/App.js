import { useState } from 'react';
import './App.css';
import Body from './Component/Body/Body';
import Head from './Component/Head/Head';

function App() {

  const [filteredStudents, setFilteredStudents] = useState([]);

  return (
    <div>
      <Head setFilteredStudents={setFilteredStudents} />
      <Body filteredStudents={filteredStudents} />
    </div>
  );
}

export default App;
