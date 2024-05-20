import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three";

const scene = new Scene();
const cam = new PerspectiveCamera(75, innerWidth / innerHeight);
cam.position.z = 3;
scene.add(cam);

let geom = BoxGeometry(1, 1, 1);
let mat = MeshBasicMaterial({color: 'blue'});
let mesh = Mesh(sphere, mat);
scene.add(mesh);

const canvas = document.querySelector('#hero-canv');
const renderer = new WebGLRenderer({canvas: canvas});

renderer.setSize(innerWidth*.75, innerHeight*.5);
renderer.render(scene, cam);
