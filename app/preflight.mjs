export default async function Preflight() {
  return {
    plugins: {
      '@enhance/image': {
        transform: {
          widths: [3000, 2000, 1500, 750, 500],
          format: 'webp',
          quality: 80,
        },
      }
    }
  }
}
