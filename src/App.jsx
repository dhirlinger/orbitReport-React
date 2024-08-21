import React from "react";
import { useState } from "react";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import satData from './components/satData';

function App() {
  const [sat, setSat] = useState(satData);
  //change this displaySats to orbitTypes
  const orbitTypes = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };
  return (
    <>
    <Banner />
    <Buttons
      filterByType={filterByType}
      setSat={setSat}
      orbitTypes={orbitTypes}
    />
    <Table sat={sat}/>
  </>
  );
}

export default App;