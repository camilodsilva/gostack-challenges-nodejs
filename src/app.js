const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  repositories.push(repository);

  return response.json(repository);
});

app.use("/repositories/:id", (request, response, next) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(
    (repository) => repository.id === id
  );

  if (repositoryIndex < 0)
    return response.status(400).json({ error: "Repository not found" });

  request.repositoryIndex = repositoryIndex;

  return next();
});

app.put("/repositories/:id", (request, response) => {
  const { repositoryIndex } = request;
  const { title, url, techs } = request.body;

  const repository = repositories[repositoryIndex];
  const data = {
    title,
    url,
    techs,
  };

  repositories[repositoryIndex] = { ...repository, ...data };

  return response.json(repositories[repositoryIndex]);
});

app.delete("/repositories/:id", (request, response) => {
  const { repositoryIndex } = request;

  repositories.splice(repositoryIndex, 1);

  return response.status(204).json();
});

app.post("/repositories/:id/like", (request, response) => {
  const { repositoryIndex } = request;

  const repository = repositories[repositoryIndex];
  const data = {
    likes: repository.likes + 1,
  };

  repositories[repositoryIndex] = { ...repository, ...data };

  return response.json(repositories[repositoryIndex]);
});

module.exports = app;
