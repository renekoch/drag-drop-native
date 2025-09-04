# drag-drop-native
Native drag'n'drop plugin for tom-select


# Usage
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

```
