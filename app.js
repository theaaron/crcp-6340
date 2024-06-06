import express from 'express';
import dotenv from 'dotenv';
import * as utils from './utils/utils.js';
import * as db from './utils/database.js';

dotenv.config();

const data = ['proj 1', 'proj 2', 'proj 3'];
let projects = [];
let projects2 = [];

const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));

app.get("/", async (req, res) => {
    await db.connect()
    .then(async() => {
        projects = await db.getAllProjects();
        console.log(projects);
        res.render("index.ejs", {projectArray: projects});
    })
});

app.get("/projects", (req, res) => {
        res.render("projects.ejs", {projectArray: projects});
});

app.get("/project/:id", (req, res) => {
    let id = req.params.id;
    if (id > data.length) {
        throw new Error("No project with that ID")
    }
    res.render("project.ejs", {projectArray: data, which: id});

});
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.post("/mail", async (req, res) => {
    await utils
    .sendMsg(req.body.sub, req.body.txt)
    .then(() => {
        res.send({result: "success"});
    })
    .catch(() => {
        res.send({result: "failure"});
    });
});

app.listen(port, () => {
    console.log(`App running @ http://localhost:${port}`);
})
