export const generateGradient = (hexColor: string): string => {
  const lighterColor = lightenDarkenColor(hexColor, 40);
  const darkerColor = lightenDarkenColor(hexColor, -40);
  return `linear-gradient(45deg, ${lighterColor}, ${hexColor}, ${darkerColor})`;
};

export const lightenDarkenColor = (col: string, amt: number): string => {
  let usePound = false;

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  let num = parseInt(col, 16);

  let r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (
    (usePound ? "#" : "") +
    (g | (b << 8) | (r << 16)).toString(16).padStart(6, "0")
  );
};

export const generateLighterColor = (hexColor: string): string => {
  return lightenDarkenColor(hexColor, 80);
};

export const generateDarkerColor = (hexColor: string): string => {
  return lightenDarkenColor(hexColor, -80);
};

export const generateSlightlyLighterColor = (hexColor: string): string => {
  return lightenDarkenColor(hexColor, 20);
};

export const generateSlightlyDarkerColor = (hexColor: string): string => {
  return lightenDarkenColor(hexColor, -20);
};
