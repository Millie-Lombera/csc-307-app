import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  const [characters, setCharaters] = useState([]);
  
  function removeOneCharacter(index){
    const updated = characters.filter((character, i) => {
      return i != index;
    });
    setCharaters(updated);
  }

  return (
    <div className = "container">
        <Table 
          characterData = {characters}
          removeCharacter = {removeOneCharacter}
        />
    </div>
    );
  }
  export default MyApp; //Allows MyApp compinent to be imported into other componenets or files

