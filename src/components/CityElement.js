// src/public/components/CityElement.js

import * as THREE from "/modules/three.module.js";

class CityElement {
    constructor(scene, gameState) {
        this.scene = scene;
        this.gameState = gameState;

        // Create the building geometry and material
        const geometry = new THREE.BoxGeometry(1, 1, 1); // Width, Height, Depth
        const material = new THREE.MeshStandardMaterial({ color: "gray" });

        // Create the mesh
        this.building = new THREE.Mesh(geometry, material);

        // Set the position of the building
        this.building.position.set(0, 0.5, 0); // Adjust Y to position on top of the ground

        // Enable shadow casting and receiving (optional)
        this.building.castShadow = true;
        this.building.receiveShadow = true;

        // Add the building to the scene
        this.scene.add(this.building);

        // Subscribe to population changes
        this.gameState.subscribe("population", this.onPopulationChange.bind(this));
    }

    onPopulationChange(newPopulation) {
        // React to population change, e.g., change building color
        if (newPopulation > 2000) {
            this.building.material.color.set("green");
        } else {
            this.building.material.color.set("gray");
        }
    }
}

export { CityElement };
