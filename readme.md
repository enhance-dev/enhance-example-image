# enhance-example-image

A simple example Enhance application demonstrating [Enhance Image](https://github.com/enhance-dev/enhance-image).

## Usage

1. Clone the repo
2. Install dependencies: `npm install`
3. Start the local development server: `npm start`
4. Open the application at `localhost:3333`

An example image is rendered using Enhance Image. Below, the current viewport width will be logged, as well as the current image source. When starting from a narrow viewport and resizing wider, the current image source will update based on the `sizes` attribute (see [example-image.mjs]()). When starting from a wide viewport and resizing narrower, the current image source will *not* update, so as to avoid needless network requests.

