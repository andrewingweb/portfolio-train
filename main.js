import "./style.css";
import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe8dc);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.setZ(20);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//const ambientLight = new THREE.AmbientLight();
//scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xbf408f);
pointLight.position.set(5, -28.5, 5);

const pointLight2 = new THREE.PointLight(0x00ffff);
pointLight2.position.set(5, 5, 5);

scene.add(pointLight, pointLight2);

//add object or shape
const shapeGeo = new THREE.OctahedronBufferGeometry(1, 0);
const shapeMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
const shapeMesh = new THREE.Mesh(shapeGeo, shapeMat);
scene.add(shapeMesh);

const textureLoader = new THREE.TextureLoader();
const normalTexture = textureLoader.load("./normal-map.jpeg");
const textureMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.7,
  roughness: 0.2,
  normalMap: normalTexture,
  emissive: 0x9152cc,
});

const ballGeo = new THREE.SphereBufferGeometry(4, 64, 64);
const ball = new THREE.Mesh(ballGeo, textureMaterial);
scene.add(ball);

function animate() {
  requestAnimationFrame(animate);
  ball.rotateY(0.004);
  renderer.render(scene, camera);
}
animate();

//const moveCamera = () => {
//  const t = document.body.getBoundingClientRect().top;
//  camera.position.z = t + 0.008 + 20;
//  camera.position.y = t + 0.008;
//  camera.position.x = t + 0.00095;
//};

//DocumentFragment.body.onscroll = moveCamera;
