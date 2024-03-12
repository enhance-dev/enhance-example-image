import { getStyles } from '@enhance/arc-plugin-styles'

export default function Head() {
  // Enhance Styles
  // CSS will be included as a <link> tag for local development.
  // For deployments, CSS will be included as a <style> tag in order to eliminate the blocking network request created by <link> tags.
  const styles = process.env.ARC_LOCAL
    ? getStyles.linkTag()
    : getStyles.styleTag()

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Enhance Image example</title>
      ${styles}
      <meta name="description" content="An example using Enhance Image">
    </head>
    <body class="font-sans leading4 p0">
`
}
