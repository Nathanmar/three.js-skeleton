import * as THREE from '../node_modules/three/build/three.module.js';
import { TrackballControls } from '../node_modules/three/examples/jsm/controls/TrackballControls.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

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
const container = document.getElementById('canvas-glb');
container.appendChild(renderer.domElement);

// Load GLB model
const loader = new GLTFLoader();
loader.load(
  '/models/glb/apple_watch_ultra_2.glb',
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    model.scale.set(1, 1, 1);
    model.position.set(0, 0, 0);

    console.log('Modèle GLB chargé :', model);
    model.traverse((child) => {
      if (child.isMesh) {
        console.log('Mesh trouvé :', child);
        console.log('Matériau :', child.material);
      }
    });

    // Center model
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    camera.position.set(center.x, center.y, center.z + maxDim * 2);
    camera.lookAt(center);
    controls.target.copy(center);

    console.log('Bounding box :', box);
    console.log('Taille du modèle :', size);
    console.log('Nouvelle position de la caméra :', camera.position);
  },
  (progress) => console.log('Chargement GLB :', (progress.loaded / progress.total) * 100 + '%'),
  (error) => console.error('Erreur GLB :', error)
);

// Lights
const light = new THREE.AmbientLight(0x404040, 50);
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

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