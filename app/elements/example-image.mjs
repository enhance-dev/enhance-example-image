export default function ExampleImage({ html }) {
  return html`
    <style>
      @media (min-width: 48em) {
        img {
          inline-size: 50vw;
          margin-inline: auto;
        }
      }
    </style>
    <enhance-image
      src="/_public/example.jpg"
      alt="Two Axols flying in the sky, carrying a large framed picture into view. Two smaller versions of the same picture float on clouds in the background."
      sizes="(min-width: 48em) 50vw, 100vw"
    ></enhance-image>
  `
}
