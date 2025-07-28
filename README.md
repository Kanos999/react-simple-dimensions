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

## Usage

| Prop       | Type                                           | Required | Default | Description                                                               |
| ---------- | ---------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------- |
| `position` | `"top"` \| `"bottom"` \| `"left"` \| `"right"` | ✅ Yes    | —       | Specifies which side of the parent to place the dimension line            |
| `color`    | `string`                                       | ❌ No     | —       | Color of the dimension lines and label text (e.g., `'yellow'`, `'#fff'`)  |
| `units`    | `"px"` \| `"rem"` \| `"em"` \| `"pt"`          | ✅ Yes    | —       | Unit to convert and display the measured distance in                      |
| `angle`    | `number`                                       | ❌ No     | —       | Reserved for future use (e.g., angled dimensions); currently unused       |
| `distance` | `number` \| `"auto"`                           | ✅ Yes    | —       | Fixed length in pixels, or `"auto"` to stretch across full element side   |
| `offset`   | `number`                                       | ❌ No     | `0`     | Distance (in px) to offset the dimension line from the edge of the parent |
