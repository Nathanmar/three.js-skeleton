import * as THREE from '../node_modules/three/build/three.module.js';
import { TrackballControls } from '../node_modules/three/examples/jsm/controls/TrackballControls.js';

// Scene
const scene = new THREE.Scene();

// Camera
const canvasWidth = 400;
const canvasHeight = 600;
const camera = new THREE.PerspectiveCamera(75, canvasWidth / canvasHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#F9F7F0");
renderer.setSize(canvasWidth, canvasHeight);

//canvas in container
const container = document.getElementById('canvas-main');
container.appendChild(renderer.domElement);

// Create box
const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
boxMesh.rotation.set(40, 0, 40);
scene.add(boxMesh);

// Light
const light = new THREE.HemisphereLight(0x27D2EB, 0x080820, 1);
light.position.set(5, 5, 5);
scene.add(light);

// Controls
const controls = new TrackballControls(camera, renderer.domElement);
controls.rotateSpeed = 4;

// Render loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  scene.rotation.z -= 0.005;
  scene.rotation.x -= 0.01;
  renderer.render(scene, camera);
}
animate();