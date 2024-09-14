function generateNeonColors(count) {
  const neonColors: string[] = [];
  const baseColors = [
    [0, 0, 255], // Blue
    [255, 0, 0], // Red
    [255, 255, 0], // Yellow
    [255, 165, 0], // Orange
    [0, 255, 0], // Green
  ];

  baseColors.forEach((baseColor) => {
    neonColors.push(
      `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, 0.5)`
    );
  });

  return neonColors;
}

function hoverColor(colors) {
  const neonColors: string[] = [];
  colors.map((color) => {
    neonColors.push(color.replace('0.5', '0.9'));
  });
  return neonColors;
}

export { generateNeonColors, hoverColor };
