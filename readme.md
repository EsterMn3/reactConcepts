# React App: ReactConcepts

This React app displays a list of core concepts and examples related to React development. The app allows users to select a topic from a menu and view the corresponding example.

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://reactconcepts-ester.netlify.app/">
    <img src="assets\react-core-concepts.png" alt="Logo" height="80">
  </a>
  <h1 align="center">ReactConcepts</h1>

  <p align="center">
    <a href="https://reactconcepts-ester.netlify.app/">View Demo</a>
  </p>
</div>

## Components

### 1. Header

A simple header component that displays the app title.

### 2. CoreConcept

A component that displays a single core concept item, including its title and description.

### 3. TabButton

A button component that represents a topic in the examples menu. It takes an `isSelected` prop to indicate whether the topic is currently selected, and an `onSelect` prop to handle topic selection.

## Data

The app uses two data files:

- **data.js**
  - `CORE_CONCEPTS`: an array of objects, each representing a core concept item with a title and description.
  - `EXAMPLES`: an object with four properties, each representing an example topic (`components`, `jsx`, `props`, `state`). Each property contains a title, description, and code snippet.

## App Component

The `App` component is the main entry point of the app. It uses the `useState` hook to manage the currently selected topic. When a topic is selected, the app updates the `selectedTopic` state and renders the corresponding example content.

## Features

- Displays a list of core concepts with titles and descriptions.
- Allows users to select a topic from a menu and view the corresponding example.
- Displays example content, including title, description, and code snippet.

## Getting Started

To run the app, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/EsterMn3/reactConcepts.git
   ``
   ```
2. Navigate to the project directory

3. Install the dependencies:
   npm install
4. Start the app:
   npm start
