export default function SizeReporter({ html }) {
  return html`
    <style>
      span {
        word-break: break-all;
      }
    </style>
    <output>
      <p class="mb0 text-center">Current viewport width: <span id="viewport-output" class="font-semibold block"></span></p>
      <p class="text-center">Current image source: <span id="image-output" class="font-semibold block"></span></p>
    </output>

    <script>
      const image = document.querySelector('img')
      const viewportOutput = document.getElementById('viewport-output')
      const imageOutput = document.getElementById('image-output')

      function calculateViewport() {
        viewportOutput.textContent = window.innerWidth + 'px'
      }

      document.addEventListener('DOMContentLoaded', calculateViewport)
      window.addEventListener('resize', calculateViewport)

      function calculateImage() {
        imageOutput.textContent = image.currentSrc
      }

      image.addEventListener('load', calculateImage)
    </script>
  `
}
