# drag-drop-native
[![npm version](https://img.shields.io/npm/v/drag-drop-native.svg)](https://www.npmjs.com/package/drag-drop-native)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/renekoch/drag-drop-native?style=social)](https://github.com/renekoch/drag-drop-native)

Native drag'n'drop plugin for [Tom Select](https://tom-select.js.org/).

---

## Usage

```javascript
import Select from 'tom-select';
import dragdrop from 'drag-drop-native';

// Import plugin
Select.define('drag_drop', dragdrop);

// Find the <select>
const dom = document.querySelector('select#my-select');

// Setup the select
const select = new Select(dom, {
    plugins: ['drag_drop'],
    ...
});
