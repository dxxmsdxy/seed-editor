import * as THREE from 'three';
import { OrbitControls } from './orbitControls.js';

let scene, camera, renderer;
let spiral, point;
let controls;
let raycaster, mouse;
let itemNumber = 9999;
let targetScale = new THREE.Vector3(1, 1, 1);
let targetColor = new THREE.Color(0x111111);
let lastUpdate = 0;
let needsRender = true;
let hoverTimeout;

export function updateVisualization(newItemNumber, setLabel) {
  itemNumber = newItemNumber;
  if (isNaN(itemNumber) || itemNumber < 1) {
    itemNumber = 1;
  } else if (itemNumber > 9999) {
    itemNumber = 9999;
  }
  let points = getSpiralPoints();
  updatePointPosition(points);
  setLabel(`Seed #${itemNumber}\nX: ${point.position.x.toFixed(2)}\nY: ${point.position.y.toFixed(2)}\nZ: ${point.position.z.toFixed(2)}`);
  lastUpdate = Date.now();
}

export function init(container, setLabel) {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf5f5f5);
  scene.fog = new THREE.FogExp2(0xeeeeee, 0.0003);

  camera = new THREE.PerspectiveCamera(48, container.clientWidth / container.clientHeight, 0.1, 2000);
  camera.position.set(0, 350, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 50, 0);

  if (container.clientHeight > container.clientWidth) {
    camera.position.set(0, 600, 0);
    controls.target.set(0, 50, 0);
  } else {
    camera.position.set(0, 420, 0);
    controls.target.set(0, 50, 0);
  }
  camera.lookAt(controls.target);

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  let points = getSpiralPoints();

  let spiralPath = new THREE.CatmullRomCurve3(points);
  let spiralGeometry = new THREE.TubeGeometry(spiralPath, 9999, 0.5, 8, false);
  let spiralMaterial = new THREE.MeshBasicMaterial({ color: 0x111111, side: THREE.DoubleSide });
  spiral = new THREE.Mesh(spiralGeometry, spiralMaterial);
  scene.add(spiral);

  let pointGeometry = new THREE.SphereGeometry(3, 32, 32);
  let pointMaterial = new THREE.MeshBasicMaterial({ color: 0x111111 });
  point = new THREE.Mesh(pointGeometry, pointMaterial);
  scene.add(point);
  updatePointPosition(points);

  let ambientLight = new THREE.AmbientLight(0x111111, 0.2);
  scene.add(ambientLight);

  let directionalLight = new THREE.DirectionalLight(0x111111, 0.5);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);

  let gridHelper = new THREE.GridHelper(500, 50, 0xdddddd, 0xdddddd);
  gridHelper.material.opacity = 0.2;
  gridHelper.material.transparent = true;
  scene.add(gridHelper);

  controls.addEventListener("change", function() {
    needsRender = true;
  });

  return { scene, camera, renderer, spiral, point, controls, raycaster, mouse };
}

export function onWindowResize(container) {
  let width = container.clientWidth;
  let height = container.clientHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

export function onMouseMove(event, container, setLabel, setLabelPosition) {
  event.preventDefault();
  mouse.x = ((event.clientX - container.offsetLeft) / container.clientWidth) * 2 - 1;
  mouse.y = - ((event.clientY - container.offsetTop) / container.clientHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  let intersects = raycaster.intersectObject(point);

  if (intersects.length > 0) {
    targetColor.set(0xff0000);
    targetScale.set(1.5, 1.5, 1.5);
    const labelText = `Seed #${itemNumber}\nX: ${point.position.x.toFixed(2)}\nY: ${point.position.y.toFixed(2)}\nZ: ${point.position.z.toFixed(2)}`;
    setLabel(labelText);
    
    // Calculate label position
    const labelX = event.clientX > window.innerWidth / 2 ? event.clientX - 120 : event.clientX + 20;
    const labelY = event.clientY - 60; // Position the label above the cursor
    setLabelPosition({ x: labelX, y: labelY });
  } else {
    targetColor.set(0x111111);
    targetScale.set(1, 1, 1);
    setLabel('');
  }
  needsRender = true;
}

function getSpiralPoints() {
  let points = [];
  let t = 2 * Math.PI;
  for (let n = 0; n <= 9999; n++) {
    let exponent = 0.9;
    let normalizedN = n / 9999;
    let i = Math.sqrt(80 * t) * Math.pow(normalizedN, exponent);
    let o = 50 * Math.sqrt((i * i) / 80);
    let r = (i * i) / 2;
    let a = i * i / (80 + i * i);
    let s = o * Math.cos(r);
    let l = 80 * (a *= Math.sqrt(i / Math.sqrt(80 * t)));
    let d = o * Math.sin(r);
    points.push(new THREE.Vector3(s, l, d));
  }
  return points;
}

function getCumulativeDistances(points) {
  let distances = [0];
  for (let n = 1; n < points.length; n++) {
    let dist = points[n].distanceTo(points[n - 1]);
    distances.push(distances[n - 1] + dist);
  }
  return distances;
}

function getPositionForItemNumber(points, distances, itemNumber) {
  let normalized = Math.pow(itemNumber / 9999, 1.5) * distances[distances.length - 1];
  for (let o = 1; o < distances.length; o++) {
    if (distances[o] >= normalized) {
      let r = points[o - 1];
      let a = points[o];
      let s = distances[o] - distances[o - 1];
      let l = (normalized - distances[o - 1]) / s;
      return new THREE.Vector3(
        r.x + l * (a.x - r.x),
        r.y + l * (a.y - r.y),
        r.z + l * (a.z - r.z)
      );
    }
  }
  return points[points.length - 1];
}

function updatePointPosition(points) {
  let distances = getCumulativeDistances(points);
  let position = getPositionForItemNumber(points, distances, itemNumber);
  point.position.copy(position);
  targetColor.set(0xff0000);
  targetScale.set(1.5, 1.5, 1.5);
  if (hoverTimeout) {
    clearTimeout(hoverTimeout);
  }
  hoverTimeout = setTimeout(() => {
    targetColor.set(0x111111);
    targetScale.set(1, 1, 1);
  }, 700);
  needsRender = true;
}

export function animate() {
  point.material.color.lerp(targetColor, 0.05);
  point.scale.lerp(targetScale, 0.05);
  controls.update();
  if (Date.now() - lastUpdate < 1000) {
    needsRender = true;
  }
  if (!needsRender && point.scale.equals(targetScale) && point.material.color.equals(targetColor)) {
    // Do nothing
  } else {
    renderer.render(scene, camera);
    needsRender = false;
  }
  requestAnimationFrame(animate);
}

function throttle(fn, wait) {
  let time, lastTime;
  return function() {
    let now = Date.now();
    if (lastTime && now < lastTime + wait) {
      clearTimeout(time);
      time = setTimeout(function() {
        lastTime = now;
        fn();
      }, wait - (now - lastTime));
    } else {
      lastTime = now;
      fn();
    }
  };
}