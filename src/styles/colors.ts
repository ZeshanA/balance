/* Mapping to strings is annoying but allows us to access colors
 * without specifying the enum type, like this: ${colors.primary.purple} */
export enum Color {
  purple = "purple",
  teal = "teal",
  grey = "grey",
  blue = "blue",
  yellow = "yellow",
  red = "red"
}

/* Before adding another color to one of the groups in the color scheme,
 * make sure you define it inside the Pick<> type here */
interface ColorScheme {
  primary: Pick<Record<Color, string[]>, Color.purple | Color.teal>;
  neutrals: Pick<Record<Color, string[]>, Color.grey>;
  supporting: Pick<
    Record<Color, string[]>,
    Color.blue | Color.yellow | Color.red
  >;
  gradients: Pick<Record<Color, string[]>, Color.purple | Color.red>;
}

export type Gradient = keyof ColorScheme["gradients"];

const colorScheme: ColorScheme = {
  primary: {
    [Color.purple]: [
      "#0C008C",
      "#1D0EBE",
      "#3525E6",
      "#4D3DF7",
      "#5D55FA",
      "#7069FA",
      "#8888FC",
      "#A2A5FC",
      "#C4C6FF"
    ],
    [Color.teal]: [
      "#014D40",
      "#0C6B58",
      "#147D64",
      "#199473",
      "#27AB83",
      "#3EBD93",
      "#65D6AD",
      "#8EEDC7",
      "#C6F7E2",
      "#EFFCF6"
    ]
  },
  neutrals: {
    [Color.grey]: [
      "#102A43",
      "#243B53",
      "#334E68",
      "#486581",
      "#627D98",
      "#829AB1",
      "#9FB3C8",
      "#BCCCDC",
      "#D9E2EC",
      "#F0F4F8"
    ]
  },
  supporting: {
    [Color.blue]: [
      "#035388",
      "#0B69A3",
      "#127FBF",
      "#1992D4",
      "#2BB0ED",
      "#40C3F7",
      "#5ED0FA",
      "#81DEFD",
      "#B3ECFF",
      "#E3F8FF"
    ],
    [Color.yellow]: [
      "#8D2B0B",
      "#B44D12",
      "#CB6E17",
      "#DE911D",
      "#F0B429",
      "#F7C948",
      "#FADB5F",
      "#FCE588",
      "#FFF3C4",
      "#FFFBEA"
    ],
    [Color.red]: [
      "#610316",
      "#8A041A",
      "#AB091E",
      "#CF1124",
      "#E12D39",
      "#EF4E4E",
      "#F86A6A",
      "#FF9B9B",
      "#FFBDBD",
      "#FFE3E3"
    ]
  },
  gradients: {
    [Color.purple]: [`#635BFA 0%, #CC84E6 100%`],
    [Color.red]: [`#CF1124 0%, #FFAD80 100%`]
  }
};

export default colorScheme;
