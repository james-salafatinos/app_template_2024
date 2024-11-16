import * as THREE from "/modules/three.module.js";

import { createStats } from "/components/createStats.js";
import { createRenderer } from "/components/createRenderer.js";
import { createLights } from "/components/createLights.js";
import { createScene } from "/components/createScene.js";
import { createCamera } from "/components/createCamera.js";
import { createControls } from "/components/createControls.js";
let camera, scene, renderer, lights, stats, controls;

import { AxesHelper } from "/components/AxesHelper.js";
let axesHelper;
import { GridHelper } from "/components/GridHelper.js";
let gridHelper;

import { GameState } from "/components/GameState.js";
let gameState;

import { CityElement } from "/components/CityElement.js";


init();
animate();

function init() {
  camera = createCamera("isometric"); // Set to 'isometric' for isometric view
  renderer = createRenderer(window, camera, document, "threejs-container");
  scene = createScene();
  lights = createLights(scene);
  stats = new createStats(document);
  controls = createControls("orbit", window, camera, document, renderer);

  axesHelper = new AxesHelper(scene);
  gridHelper = new GridHelper(scene);

//   createExampleIsoBlock(scene);

    // Initialize game state with initial population
    gameState = new GameState({ population: 1000 });

    // Create a city element
    const cityElement = new CityElement(scene, gameState);

    // Simulate population changes
    setInterval(() => {
        const currentPopulation = gameState.getState().population;
        const newPopulation = currentPopulation + 500; // Increase population
        gameState.setState({ population: newPopulation });
        console.log(   `Population: ${currentPopulation} -> ${newPopulation}`);
        console.log( gameState.getState())   }, 100); 
}

function animate() {
  requestAnimationFrame(animate);

  controls.update();
  stats.update();
  renderer.render(scene, camera);
}
