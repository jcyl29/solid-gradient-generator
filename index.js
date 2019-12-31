const getSolidGradientString = (colors = [], spacerSize = 0, rotation = 0) => {
  const numColors = colors.length;
  const numSpacers = numColors - 1;
  const totalSpacingBySpacer = numSpacers * spacerSize;
  const barSize = (100 - totalSpacingBySpacer) / numColors;

  if (barSize <= 0) {
    throw new Error(`spacerSize provided is too large.`);
  }

  const strFragment = colors.map((color, index) => {
    const barStartColorStop = spacerSize * index + barSize * index;
    const barEndColorStop = spacerSize * index + barSize * (index + 1);
    const result = [`${color} ${barStartColorStop}% ${barEndColorStop}%`];

    // add a spacer after every bar except after the last bar
    if (numColors !== index + 1) {
      const spacerEndColorStop =
        spacerSize * index + barSize * (index + 1) + spacerSize;
      result.push(`transparent ${barEndColorStop}% ${spacerEndColorStop}%`);
    }

    return result;
  });
  return `linear-gradient(${rotation}deg, ${strFragment.join(",")})`;
};
