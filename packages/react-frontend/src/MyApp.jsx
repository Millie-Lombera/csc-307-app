import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  const [characters, setCharacters] = useState([]);
  
  function removeOneCharacter(index){
    deleteUser(id)
      .then((response) => {
        if (response.status === 204) {
          const updated = characters.filter((c) => c.id !== id);
          setCharacters(updated);
        } else if (response.status === 404) {
          console.log("Resource not found.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchUsers() {
    const promise = fetch("http://localhost:8000/users");
    return promise;
  }

  useEffect(() => {
    fetchUsers()
      .then((res) => res.json())
      .then((json) => setCharacters(json["users_list"]))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function postUser(person) {
    const promise = fetch("Http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });
  
    return promise;
  }
  
  function updateList(person) {
    postUser(person)
      .then((response) => {
        if (response.status !== 201) {
          throw new Error("Expected 201 Created");
        }
        return response.json();
      })
      .then((newUser) => setCharacters([...characters, newUser]))
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteUser(id) {
    return fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <div className = "container">
        <Table 
          characterData = {characters}
          removeCharacter = {removeOneCharacter}
        />
      <Form handleSubmit = {updateList}/>
    </div>
    );
  }
  export default MyApp; //Allows MyApp compinent to be imported into other componenets or files

