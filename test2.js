import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { depth } from 'three/webgpu';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let object;

// let controls
let objToRender  = "Burger";


loader.load(

    'models/${objToRender}.glb',
)

//other code

const canvas = document.getElementById('canvas');


const scene = new THREE.Scene();    
scene.background = new THREE.Color('#F0F0F0');
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;


const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585',   });
// const material = new THREE.MeshBasicMaterial({ color: '#468585',  '#468585' });

const DodecahedronGeometry = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(10, 0.1, 5);
const boxMaterial = new THREE.MeshLambertMaterial({ color: '#B4B4B3',   });

const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;


// scene.add(DodecahedronGeometry);




scene.add(box);



const light  = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);

scene.add(light);

const render = new THREE.WebGLRenderer({ canvas });
render.setSize(window.innerWidth, window.innerHeight);

render.setPixelRatio(window.devicePixelRatio);





const controls = new OrbitControls(camera, render.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;

controls.enableZoom = true;



function animate() {

requestAnimationFrame(animate);


DodecahedronGeometry.rotation.x += 0.01;
DodecahedronGeometry.rotation.y += 0.01;
box.rotation.y += 0.005;
controls.update();

render.render(scene, camera);   
}


animate();