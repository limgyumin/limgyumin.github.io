const colors = {
  bgWhite: "#fff",
  bgGray: "#f0f0f0",
  bgBlack: "#1b1b1b",

  ftWhite: "#f8f8f8",
  ftBlack: "#1b1b1b",
  ftGray: "#d9d9d9",

  boxShadow: "rgba(0,0,0,0.4)",
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
