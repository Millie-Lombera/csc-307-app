// src/main.jsx
import React from "react";
import ReactDOMClient from "react-dom/client";
import MyApp from "./MyApp";
import "./main.css";

// Create the container - DOM root(HTML root container)
const container = document.getElementById("root"); /* --> Bridge between HTML & React. 
Its grabbing the <div id = "root" > <.... thats in index.html  */

// Create a root - React Root
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the Root
root.render(<MyApp />); //Makes MyApp the top-level component

/* A react componenet is only rendered when is used somwhere in the rendered tree (i.e. MyApp)
React controls the DOM inside root, & it renders only whats reacahble from the componenet 
passed into root.render(..)   */

/* We are using .jsx file, bc this file does not contain standard JS, but rather JSX. 
Which is an extenstion of JS created by REACT. Allowing us to write expressions that 
resemble HTML */

/* Browsers wont accept this type of code directly so we use Vite to transpile 
it to standard JS */