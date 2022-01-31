const colors = {
  bgWhite: "#FFF",

  ftBlack: "#000",
};

const sizes = {
  mobile: 580,
  tablet: 768,
  smallDesktop: 1044,
  desktop: 1284,
};

type SizeLabels = keyof typeof sizes;
type Media = { [key in SizeLabels]: string };

const sizeLabels = Object.keys(sizes) as SizeLabels[];

const mediaQuery = (value: number) =>
  `@media only screen and (max-width: ${value}px)`;

const medias: Media = sizeLabels.reduce((acc, label) => {
  acc[label] = mediaQuery(sizes[label]);
  return acc;
}, {} as Media);

export const theme = {
  colors,
  medias,
};

export type Theme = typeof theme;
