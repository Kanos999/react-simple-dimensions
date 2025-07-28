# react-simple-dimensions

🔗 **[Live Demo](https://react-simple-dimensions.pages.dev/)**

**A lightweight React component for rendering engineering-style dimension lines.**  
Ideal for design tools, measurement overlays, and technical UI representations.


## ✨ Features

- Draws dimension lines (`top`, `bottom`, `left`, `right`) around any element
- Supports units: `px`, `rem`, `em`, `pt`
- Auto-measures parent element on resize
- Pure React, no dependencies beyond `react` and `react-dom`
- Suitable for design aids, developer tools, or educational visualizations

## 🚀 Installation

```bash
npm install react-simple-dimensions
```

## 📦 Example

```tsx
import React from 'react';
import Dimension from 'react-simple-dimensions';

function Example() {
  return (
    <div style={{ width: '300px', height: '200px', position: 'relative' }}>
      <Dimension
        position="top"
        color="yellow"
        units="px"
        angle={0}
        distance="auto"
      />
      <Dimension
        position="right"
        color="yellow"
        units="px"
        angle={0}
        distance="auto"
      />
      <div style={{ backgroundColor: '#333', width: '100%', height: '100%' }} />
    </div>
  );
}
```