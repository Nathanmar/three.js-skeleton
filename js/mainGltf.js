import * as THREE from '../node_modules/three/build/three.module.js';
import { TrackballControls } from '../node_modules/three/examples/jsm/controls/TrackballControls.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

// Scene
const scene = new THREE.Scene();

// Camera
const canvasWidth = 400;
const canvasHeight = 600;
const camera = new THREE.PerspectiveCamera(75, canvasWidth / canvasHeight, 0.1, 1000);
camera.position.z = 40;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#F9F7F0");
renderer.setSize(canvasWidth, canvasHeight);

//canvas in container
const container = document.getElementById('canvas-gltf');
container.appendChild(renderer.domElement);

// Load GLTF model
const loader = new GLTFLoader();
loader.load(
  '../models/gltf/scene.gltf',
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);
    model.scale.set(1, 1, 1);
    model.position.set(0, -4, 0);
  },
  (progress) => console.log('Chargement GLTF :', (progress.loaded / progress.total) * 100 + '%'),
  (error) => console.error('Erreur GLTF :', error)
);

// Light
const light = new THREE.AmbientLight(0x404040, 50); // Soft white light
scene.add(light);

// Controls
const controls = new TrackballControls(camera, renderer.domElement);
controls.rotateSpeed = 4;

// Render loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  scene.rotation.y -= 0.005;
  renderer.render(scene, camera);
}
animate();