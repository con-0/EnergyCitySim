# Energy City Simulator

A simulation game about building a resilient and profitable city through clean energy management.

## How to Run

1. Clone this repository.
2. Open the `index.html` file in a modern web browser that supports ES6 modules (Chrome, Firefox, Safari, Edge).

## Project Structure

- `index.html`: Main game page.
- `css/style.css`: All styling for the UI.
- `js/`: Contains all JavaScript modules.
  - `main.js`: The main entry point, initializes the game and runs the main loop.
  - `config.js`: Contains all tunable game constants.
  - `state.js`: The core state machine for the entire game. All simulation logic lives here.
  - `renderer.js`: Handles rendering the state to the canvas and updating the HTML UI.
  - `building.js`: The class definition for all placeable buildings.
  - `utils.js`: Utility functions, like loading data.
- `data/`: Contains JSON files that drive the game content.
  - `buildings.json`: Definitions for all buildings.
