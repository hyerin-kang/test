import CarPNG from "@/public/images/content/automotiveCarBg.png";
import InteriorBGPNG from "@/public/images/content/interiorBG.png";

export const AUTOMOTIVE_TABS = [
  { label: "Exterior", key: "exterior", image: CarPNG },
  {
    label: "Interior",
    key: "interior",
    image: InteriorBGPNG,
  },
];

export const AUTOMOTIVE_PINS = {
  exterior: [
    {
      id: 1,
      href: "automotive/exterior?id=ap020101",
      title: "Head Light",
      list: ["WICOP UHL", "WICOP HF", "WICOP HL", "WICOP TE"],
      positionClass: "absolute left-[14%] top-[62%]",
    },
    {
      id: 2,
      href: "automotive/exterior?id=ap020106",
      title: "Mirror Lamp",
      list: ["T6", "802"],
      positionClass: "absolute left-[41%] top-[53%]",
    },
    {
      id: 3,
      href: "automotive/exterior?id=ap020105",
      title: "Rear Light",
      list: ["3030X", "3014", "T6"],
      positionClass: "absolute left-[79%] top-[55%]",
    },
    {
      id: 4,
      href: "automotive/exterior?id=ap020107",
      title: "Grille Light",
      list: ["3014"],
      positionClass: "absolute left-[12%] top-[69%]",
    },
  ],
  interior: [
    {
      id: 5,
      href: "automotive/interior?id=ap020202",
      title: "HUD",
      list: ["WICOP", "4014/3014"],
      positionClass: "absolute 2xl:left-[43%] left-[25%] top-[36%]",
    },
    {
      id: 6,
      href: "automotive/interior?id=ap020204",
      title: "Indicator",
      list: ["801/809", "1608"],
      positionClass: "absolute 2xl:left-[41%] left-[20%] top-[53%]",
    },
    {
      id: 7,
      href: "automotive/interior?id=ap020206",
      title: "Disinfection",
      list: ["Violeds"],
      positionClass:
        "absolute 2xl:left-[53%] 2xl:top-[82%] top-[88%] left-[40%]",
    },
    {
      id: 8,
      href: "automotive/interior?id=ap020201",
      title: "Auto Display",
      list: ["4014/3014"],
      positionClass: "absolute 2xl:left-[59%] top-[55%] left-[47%]",
    },
    {
      id: 9,
      href: "automotive/interior?id=ap020205",
      title: "Ambient Light",
      list: ["825 RGB", "3535 RGB"],
      positionClass: "absolute 2xl:left-[82%] left-[64%] top-[59%]",
    },
    {
      id: 10,
      href: "automotive/interior?id=ap020203",
      title: "Reading Light",
      list: ["SunLike", "Acrich", "5630/3014"],
      positionClass:
        "absolute 2xl:left-[88%] 2xl:top-[80%] left-[79%] top-[82%]",
    },
  ],
};
