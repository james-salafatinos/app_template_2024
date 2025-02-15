import * as THREE from "/modules/three.module.js";


function createLights(scene) {
    const light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    light.position.set(0.5, 1, 0.75);
    scene.add(light);
    return light;
  }

  export { createLights };
