#!/usr/bin/env node
// Called by bare name in the build, like a host build command (`vite build`).
// It only runs if the deploy workflow puts node_modules/.bin on PATH (Shipyard workflow v11+).
console.log("shipyard-path-probe: node_modules/.bin is on PATH")
