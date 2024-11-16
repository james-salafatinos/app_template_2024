import * as THREE from "/modules/three.module.js";

function createCamera(type = 'perspective', width = window.innerWidth, height = window.innerHeight) {
    let camera;

    if (type === 'isometric') {
        const aspect = width / height;
        const d = 20; // This controls the view distance
        camera = new THREE.OrthographicCamera(
            -d * aspect, d * aspect, 
            d, -d, 
            1, 1000
        );
        // Set the camera position for isometric view
        camera.position.set(20, 20, 20); // Position to achieve isometric view
        camera.rotation.order = 'YXZ'; // Set rotation order
        camera.lookAt(0, 0, 0); // Look at the center of the scene
    } else if (type === 'orthographic') {
        const aspect = width / height;
        const frustumSize = 1000; // Adjust this size as needed
        camera = new THREE.OrthographicCamera(
            frustumSize * aspect / -2, 
            frustumSize * aspect / 2, 
            frustumSize / 2, 
            frustumSize / -2, 
            1, 
            1000
        );
        camera.position.set(0, 0, 5);
        camera.lookAt(0, 0, 0);
    } else if (type === 'perspective') {
        // Default to perspective camera
        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.set(0, 0, 5); // Adjust this position as needed
        camera.lookAt(0, 0, 0);
    }

    return camera;
}

export { createCamera };
