import express from "express";
import dotenv from "dotenv";
import * as utils from "./utils/utils.js";
import * as db from "./utils/database.js";

dotenv.config();

const data = ["proj 1", "proj 2", "proj 3"];

let projects = [];
let contracts = [];
let mints = [];

const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));

app.get("/", async (req, res) => {
  await db.connect().then(async () => {
    projects = await db.getAllProjects();
    contracts = [];
    mints = [];
    projects.forEach((item) => {
      contracts.push(item.contractAddress);
      mints.push(0);
    });
    let feat = getRandomInt(projects.length);
    res.render("index.ejs", {
      projectArray: projects,
      projects: projects,
      featProj: feat,
      mints: mints,
      contracts: contracts,
    });
  });
});

app.get("/projects", (req, res) => {
  res.render("projects.ejs", {
    contracts: contracts,
    mints: mints,
    projectArray: projects,
    projects: projects,
  });
});

app.get("/project/:id", async (req, res) => {
  let id = req.params.id;
  if (id > data.length) {
    throw new Error("No project with that ID");
  }
  // await db.connect().then(async () => {
  //   projects = await db.getAllProjects();
  //   res.render("project.ejs", { projectArray: projects, which: id });
  // });
  res.render("project.ejs", {
    projectArray: projects,
    which: id,
    contracts: contracts,
    mints: mints,
    projects: projects,
    project: projects[id - 1],
  });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.post("/mail", async (req, res) => {
  await utils
    .sendMsg(req.body.sub, req.body.txt)
    .then(() => {
      res.send({ result: "success" });
    })
    .catch(() => {
      res.send({ result: "failure" });
    });
});

app.listen(port, () => {
  console.log(`App running @ http://localhost:${port}`);
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
3;
