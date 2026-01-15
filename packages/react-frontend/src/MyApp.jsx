import React, { useState } from "react";
import Table from "./Table";

function MyApp() {
  const [characters, setCharaters] = useState([
    {
      name: "Charlie",
      job: "Janitor"
    } ,
    {
      name: "Mac",
      job: "Bouncer"
    },
    {
      name: "Dee",
      job: "Aspring actress"
    },
    {
      name: "Dennis",
      job: "Bartender"
    }
  ]);
  
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

