import { GiCompass, GiDiamondHard } from "react-icons/gi";
import { MdHistoryEdu } from "react-icons/md";

export const links = [
  {
    id: 1,
    path: "/",
    text: "home",
  },
  {
    id: 2,
    path: "/about",
    text: "about",
  },
  {
    id: 3,
    path: "/products",
    text: "products",
  },
];

export const tiles = [
  {
    id: 4,
    title: "mission",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    icon: <GiCompass />,
  },
  {
    id: 5,
    title: "vision",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    icon: <GiDiamondHard />,
  },
  {
    id: 6,
    title: "history",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    icon: <MdHistoryEdu />,
  },
];
