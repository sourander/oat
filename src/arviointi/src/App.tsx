import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import GradeTypeSelector from './components/GradeTypeSelector/GradeTypeSelector'
import GradeStateManager from './components/GradeStateManager/GradeStateManager'

function App() {
    const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = parseInt(event.target.value);
        setSelectedGrade(selectedIndex);
        console.log(`${selectedIndex} is selected`);
    };

  return (
    <>
      <Header />
      <main>
        <GradeTypeSelector handleSelectChange={handleSelectChange} />
        <GradeStateManager selectedGrade={selectedGrade} />
      </main>
    </>
  );
}

export default App
