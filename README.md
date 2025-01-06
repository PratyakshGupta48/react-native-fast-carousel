
# React Native Fast Carousel

A very light weight, extremely fast and customizable image slider component for React Native, with smooth animations and pagination.


![Slider Demo](https://drive.google.com/uc?export=download&id=10-pCsxjKO4ZCqaQc7G-DpkwI6--2Fbxf)


## Features

- Smooth scrolling with animated pagination.
- Auto-play with customizable intervals.
- Easy to integrate and use in any project.


## Installation

Install the package using npm:

```bash
  npm install react-native-fast-carousel
```

Install the package using yarn:

```bash
  npm install react-native-fast-carousel
```
## Usage

```javascript
import React from 'react';
import { View } from 'react-native';
import Slider from 'react-native-fast-carousel';

const App = () => {
  const images = [
    { source: require('./assets/image1.png') },
    { source: require('./assets/image2.png') },
    { source: require('./assets/image3.png') },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Slider images={images} autoPlayInterval={5000} />
    </View>
  );
};

export default App;
```

## Props

| Prop               | Type          | Default     | Description                                   |
|--------------------|---------------|-------------|-----------------------------------------------|
| `images`           | `Array`       | `[]`        | Array of image objects with `source` as the key. |
| `autoPlayInterval` | `number`      | `8000`      | Interval for auto-play in milliseconds.       |


## Example

```javascript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from 'react-native-fast-carousel';

const images = [
  { source: require('./assets/image1.png') },
  { source: require('./assets/image2.png') },
  { source: require('./assets/image3.png') },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Slider images={images} autoPlayInterval={3000} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```
## Contributing

Contributions are always welcome!

Feel free to open an issue or submit a pull request for improvements.



## License


This library is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.

