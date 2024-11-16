import * as THREE from "/modules/three.module.js";

function createScene() {
    let scene = new THREE.Scene();
    scene.background = new THREE.Color(0x00000);
    scene.fog = new THREE.Fog(0x102234, 1000, 2000);
    return scene;
  }

  export { createScene };
