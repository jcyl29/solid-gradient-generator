const getGradientString = (colors, spacerSize, rotation = 180) => {
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

    // IE/Edge linear gradient support is finicky.
    // cannot do double color stops.  For example:
    // linear-gradient(45deg, black 25% 50%, white 50% 75%)

    // So must be declare only one color and stop per entry only
    // https://caniuse.com/#feat=mdn-css_types_image_gradient_linear-gradient_doubleposition
    const result = [
      `${color} ${barStartColorStop}%`,
      `${color} ${barEndColorStop}%`
    ];

    // add a spacer after every bar except after the last bar
    if (numColors !== index + 1) {
      const spacerEndColorStop =
        spacerSize * index + barSize * (index + 1) + spacerSize;

      result.push(
        ...[
          `transparent ${barEndColorStop}%`,
          `transparent ${spacerEndColorStop}%`
        ]
      );
    }

    return result;
  });
  return `linear-gradient(${rotation}deg, ${strFragment.join(',')})`;
};
