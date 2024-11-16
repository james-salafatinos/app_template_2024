import * as THREE from "/modules/three.module.js";
import Stats from "/modules/stats.module.js";

function createStats(document) {
    let stats = new Stats();
    stats.domElement.style.cssText = "position:absolute;top:0px;right:0px;";
    document.body.appendChild(stats.dom);
    return stats;
  }

  
  export { createStats };
