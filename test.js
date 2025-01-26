// import { emissive } from 'three/webgpu';

import * as Three from 'three';



const scene = new THREE.Scene();
scene.background = new Three.color('#F0F0F0');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;




const geometry = new Three.boxGeometry();
const material = new Three.MeshLambertMaterial({ color: '#468585', emissive: '#468585' });

const cube = new Three.Mesh(geometry, material);
scene.add(cube);



// light

const light = new Three.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);


scene.add(light);


// renderer

const renderer = new Three.WebGLRenderer(); 
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



renderer.render(scene, camera); 
