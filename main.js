import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Crear la geometría de los cubos
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Crear los materiales
const materialVerde = new THREE.MeshStandardMaterial({
    color: 0x00ff00
});

const materialAzul = new THREE.MeshStandardMaterial({
    color: 0x0000ff
});

const materialRojo = new THREE.MeshStandardMaterial({
    color: 0xff0000
});

// Crear los cubos
const cuboVerde = new THREE.Mesh(geometry, materialVerde);
const cuboAzul = new THREE.Mesh(geometry, materialAzul);
const cuboRojo = new THREE.Mesh(geometry, materialRojo);

// Posicionar los cubos
cuboVerde.position.x = -2.5;
cuboAzul.position.x = 0;
cuboRojo.position.x = 2.5;

// Agregar los cubos a la escena
scene.add(cuboVerde);
scene.add(cuboAzul);
scene.add(cuboRojo);

// Agregar iluminación ambiental
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

// Agregar luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 7;

// Función de animación con diferentes velocidades
function animate() {
    // Cubo verde: giro lento
    cuboVerde.rotation.x += 0.02;
    cuboVerde.rotation.y += 0.02;

    // Cubo azul: giro medio
    cuboAzul.rotation.x += 0.05;
    cuboAzul.rotation.y += 0.05;

    // Cubo rojo: giro rápido
    cuboRojo.rotation.x += 0.10;
    cuboRojo.rotation.y += 0.10;

    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);

// Ajustar al tamaño de la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
