import * as THREE from "/modules/three.module.js";

function createRenderer(window, camera, document, containerElementID) {
  let renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);

  let container = document.getElementById(containerElementID);
  container.appendChild(renderer.domElement);


  _handleResize(renderer, camera, container);
  window.addEventListener("resize", () => {
    _handleResize(renderer, camera, container);

  });

  return renderer;
}

function _handleResize(renderer, camera, container) {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
  
    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();
  
    renderer.setSize(containerWidth, containerHeight);
  }

export { createRenderer };
