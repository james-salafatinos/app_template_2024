import * as THREE from "/modules/three.module.js";

function createExampleIsoBlock(scene) {
    const blockGeometry = new THREE.BoxGeometry(1, 1, 1); // Define the block size
    const blockMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Set material for the blocks

    // Create a few blocks at different positions
    const positions = [
        [0, 0, 0],
        [1.5, 0, 0],
        [3, 0, 0],
        [0, 0, 1.5],
        [1.5, 0, 1.5],
        [0, 0, 3],
        [0, 0, 5],
    ];

    // Loop through the positions and create blocks
    positions.forEach((pos) => {
        const block = new THREE.Mesh(blockGeometry, blockMaterial);
        block.position.set(pos[0], pos[1] + 0.5, pos[2]); // Adjust Y position to stack correctly
        block.castShadow = true; // Enable shadow casting
        block.receiveShadow = true; // Enable shadow receiving
        scene.add(block);
    });


}

export { createExampleIsoBlock };
