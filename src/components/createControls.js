import * as THREE from "/modules/three.module.js";
import { OrbitControls } from "/modules/OrbitControls.js";


function createControls(type = "orbit", window, camera, document, renderer) {
  let controls;

  if (type == "orbit") {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
  }

  return controls;
}

function updateControls(controls) {
  controls.update();
}

export { createControls, updateControls };
