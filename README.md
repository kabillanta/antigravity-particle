# antigravity-particle

A highly optimized, interactive WebGL particle swarm component for React, originally extracted from the Google Antigravity landing page.

This package provides a drop-in React component built on top of Three.js and React Three Fiber. It renders an interactive, jellyfish-like swarm of particles that gracefully follows the user's cursor with fluid dynamics and organic oscillation.

## Installation

Install the package and its peer dependencies using your preferred package manager:

```bash
npm install antigravity-particle three @react-three/fiber
```

## Basic Usage

Import the component and its stylesheet, then render it within a container that has a defined width and height.

```tsx
import React from 'react';
import { Medusae } from 'antigravity-particle';
import 'antigravity-particle/medusae.css';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Medusae />
    </div>
  );
}
```

## Advanced Customization

The component exposes a `config` prop that accepts a deeply partial configuration object. This allows you to override any specific parameters without redefining the entire configuration.

```tsx
import React from 'react';
import { Medusae, type MedusaeConfig } from 'antigravity-particle';
import 'antigravity-particle/medusae.css';

const customConfig: Partial<MedusaeConfig> = {
  particles: {
    colorBase: "#000000",
    colorOne: "#ff0000",
    colorTwo: "#00ff00",
    colorThree: "#0000ff",
    baseSize: 0.02,
  },
  cursor: {
    strength: 5,
    dragFactor: 0.02,
  },
  background: {
    color: "transparent",
  }
};

export default function CustomApp() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Medusae config={customConfig} />
    </div>
  );
}
```

## API Reference

### MedusaeConfig

The `config` prop accepts a `DeepPartial<MedusaeConfig>` object. Below are the default values and types for all available properties.

#### `cursor`
Configuration for cursor interaction physics.
* `radius` (number): Interaction radius around the cursor. Default: `0.065`
* `strength` (number): Attraction/Repulsion strength. Default: `3`
* `dragFactor` (number): Speed at which particles follow the cursor. Default: `0.015`

#### `halo`
Configuration for the macroscopic structure of the swarm.
* `outerOscFrequency` (number): Frequency of the outer boundary oscillation. Default: `2.6`
* `outerOscAmplitude` (number): Amplitude of the outer boundary oscillation. Default: `0.76`
* `outerOscJitterStrength` (number): Jitter intensity of the outer boundary. Default: `0.025`
* `outerOscJitterSpeed` (number): Speed of the jitter effect. Default: `0.3`
* `radiusBase` (number): Base radius of the swarm halo. Default: `2.4`
* `radiusAmplitude` (number): Amplitude of the halo's breathing effect. Default: `0.5`
* `shapeAmplitude` (number): Amplitude of structural noise. Default: `0.75`
* `rimWidth` (number): Thickness of the active particle rim. Default: `1.8`
* `outerStartOffset` (number): Inner boundary offset for outer oscillation. Default: `0.4`
* `outerEndOffset` (number): Outer boundary offset for outer oscillation. Default: `2.2`
* `scaleX` (number): Horizontal scale factor of the halo. Default: `1.3`
* `scaleY` (number): Vertical scale factor of the halo. Default: `1`

#### `particles`
Configuration for individual particles.
* `baseSize` (number): Base size of dormant particles. Default: `0.016`
* `activeSize` (number): Size multiplier for active particles. Default: `0.044`
* `blobScaleX` (number): Horizontal stretch of individual particles. Default: `1`
* `blobScaleY` (number): Vertical stretch of individual particles. Default: `0.6`
* `rotationSpeed` (number): Speed of particle rotation. Default: `0.1`
* `rotationJitter` (number): Jitter applied to rotation. Default: `0.2`
* `cursorFollowStrength` (number): Strength of individual particle tracking. Default: `1`
* `oscillationFactor` (number): Speed of individual particle oscillation. Default: `1`
* `colorBase` (string): HEX color for dormant particles. Default: `"#0000ff"`
* `colorOne` (string): Primary active HEX color. Default: `"#4285f5"`
* `colorTwo` (string): Secondary active HEX color. Default: `"#eb4236"`
* `colorThree` (string): Tertiary active HEX color. Default: `"#faba03"`

#### `background`
Configuration for the canvas background.
* `color` (string): HEX color or `"transparent"`. Default: `"#ffffff"`

## License

MIT
# antigravity-particle
