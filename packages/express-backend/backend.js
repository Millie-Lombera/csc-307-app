import express from "express";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const users = {
    users_list: [
      {id: "xyz789", name: "Charlie", job: "Janitor"},
      {id: "abc123", name: "Mac", job: "Bouncer"},
      {id: "ppp222", name: "Mac", job: "Professor"},
      {id: "yat999", name: "Dee", job: "Aspring actress" },
      {id: "zap555", name: "Dennis", job: "Bartender"}
     ]
    };

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const findUserByName = (name) => {
    return users["users_list"].filter(
      (user) => user["name"] === name
    );
  };
  
app.get("/users", (req, res) => {
    const { name, job } = req.query;
  
    if (name && job) {
      const matches = findUsersByNameAndJob(name, job);
      res.json(matches);
    } else {
      res.json(users);
    }
  });

const findUserById = (id) =>
    users["users_list"].find((user) => user["id"] === id);
  
app.get("/users/:id", (req, res) => {
    const id = req.params.id
    let result = findUserById(id);
    if (result === undefined) {
      res.status(404).send("Resource not found.");
    } else {
      res.send(result);
    }
  });

const findUsersByNameAndJob = (name, job) => {
    return users.users_list.filter(
      (u) => u.name === name && u.job === job
    );
  };

const addUser = (user) => {
    users["users_list"].push(user);
    return user;
  };

  function generateId() {
    return Math.random().toString(36).substring(2, 10);
  }


const deleteUserById = (id) => {
    const idx = users.users_list.findIndex((u) => u.id === id);
    if (idx === -1) return false;
    users.users_list.splice(idx, 1); 
    return true;
  };

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    const deleted = deleteUserById(id);
  
    if (!deleted) {
      res.status(404).send("Resource not found.");
    } else {
      res.status(204).send(); 
    }
  });
  
  app.post("/users", (req, res) => {
    const userToAdd = req.body;
    const newUser = {
      id: generateId(),
      name: userToAdd.name,
      job: userToAdd.job,
    };
  
    addUser(newUser);
  
    res.status(201).send(newUser);
  });
  

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});
