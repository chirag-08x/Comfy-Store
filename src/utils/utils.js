import { GiCompass, GiDiamondHard, GiPapers } from "react-icons/gi";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const tiles = [
  {
    id: 4,
    icon: <GiCompass />,
    text: "mission",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi`,
  },
  {
    id: 5,
    icon: <GiDiamondHard />,
    text: "vision",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi`,
  },
  {
    id: 6,
    icon: <GiPapers />,
    text: "history",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi`,
  },
];
