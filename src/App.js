import './App.css';
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';
import data from './data.json';
import React, { useState } from 'react';

function App() {
  const [costsData, setCostsData] = useState(data);

  const addCostHandler = (cost) => {
    setCostsData(prevCosts => {
      return [cost, ...prevCosts]
    });
  }

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costsData} />
    </div>
  );
}

export default App;
