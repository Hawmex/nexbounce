# nexbounce

A debouncer library based on microtasks.

[![npm version](https://img.shields.io/npm/v/nexbounce?style=for-the-badge)](https://npmjs.com/package/nexbounce)
[![npm downloads](https://img.shields.io/npm/dw/nexbounce?style=for-the-badge)](https://npmjs.com/package/nexbounce)
[![github issues](https://img.shields.io/github/issues/Hawmex/nexbounce?style=for-the-badge)](https://github.com/Hawmex/nexbounce/issues)
[![license](https://img.shields.io/npm/l/nexbounce?style=for-the-badge)](https://github.com/Hawmex/nexbounce)

## Demo

You can try the demo [here](https://codepen.io/Hawmed/pen/bGqgGrR).

## Installation

```
npm i nexbounce
```

## Documentation

You can find documentation [here](https://hawmex.github.io/nexbounce/).

## Example

```js
import { Debouncer } from 'nexbounce/nexbounce.js';

let counter = 0;

const debouncer = new Debouncer();

nexbounce.enqueue(() => (counter += 3));
nexbounce.enqueue(() => (counter += 1));
nexbounce.enqueue(() => (counter += 2));

setTimeout(() => console.log(counter)); // 2
```
