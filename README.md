# CSS-in-JS Inferno Tests

## Overview

This is a very simple project to test CSS-in-JS libraries in the browser.
The project [CSS-in-JS Performance Tests](https://github.com/hellofresh/css-in-js-perf-tests) tests several libraries on the server side to compare their performance.
I did a [branch](https://github.com/PhiLhoSoft/css-in-js-perf-tests/tree/complex-test-case) (not yet merged at start of 2017) that do a complex layout to test some advanced features like auto-prefixing and managing globals.
Some libraries behave differently on server and on client side, so I made this project to inspect how they behave in the browser.
I will probably use a smaller set of libraries than the above project.

## Getting started

Clone this repository locally and then run `npm install`.

Run `npm start`, view `http://localhost:8080` in your browser to see the application.

## Requirements

This project is based on the `inferno-boilerplate` project which uses `inferno@beta45`, `webpack`, `babel` and the `babel-plugin-inferno` JSX Babel plugin.

NodeJS v6+ is required to use `inferno-boilerplate`.
