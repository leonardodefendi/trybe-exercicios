// import React from "react";
import Title from './Title';
import ModuleDetails from './ModuleDetails';
import calculateAge from './calculateAge';

function HelloWorld() {
  const age = calculateAge('12/01/1996');
  return (
    <div>
      <Title />
      <ModuleDetails />
      <p>{`A Sua idade é ${age}`}</p>
    </div>
  );
}

export default HelloWorld;
