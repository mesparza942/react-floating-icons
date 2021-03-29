import Boo from "../assets/Boo.png";
import Peepa from "../assets/peepa.png";
import CharGhost from "../assets/char-ghost.png";
import LuiguiBg from "../assets/luigui-scared.jpg";

/**
 * Boo const
 */
const BooItem = {
  src: Boo,
  size: { width: "40px", height: "40px" },
};

/**
 * Demo: Luigui's Mansion Boo
 */
export const LuiguiMansionTemplate = {
  backgroundContent: {
    imagePath: LuiguiBg,
  },
  items: [
    {
      id: "boo1",
      ...BooItem,
      altText: "Boo 1",
      position: { x: "120px", y: "100px" },
      animationDuration: "1s",
    },
    {
      id: "boo2",
      ...BooItem,
      altText: "Boo 2",
      position: { x: "180px", y: "100px" },
      animationDuration: "1s",
    },
    {
      id: "boo3",
      src: Peepa,
      size: { width: "40px", height: "40px" },
      position: { x: "250px", y: "100px" },
      altText: "Boo 3",
    },
    {
      id: "boo4",
      ...BooItem,
      position: { x: "340px", y: "150px" },
      altText: "Boo 4",
    },
    {
      id: "boo5",
      ...BooItem,
      position: { x: "50px", y: "150px" },
      altText: "Boo 5",
    },
    {
      id: "boo6",
      ...BooItem,
      position: { x: "150px", y: "50px" },
      altText: "Boo 6",
    },
    {
      id: "boo7",
      src: CharGhost,
      size: { width: "40px", height: "40px" },
      position: { x: "250px", y: "50px" },
      altText: "Boo 7",
    },
    {
      id: "boo8",
      ...BooItem,
      position: { x: "350px", y: "50px" },
      altText: "Boo 8",
    },
    {
      id: "boo9",
      ...BooItem,
      position: { x: "240px", y: "200px" },
      altText: "Boo 9",
    },
    {
      id: "boo10",
      ...BooItem,
      position: { x: "440px", y: "200px" },
      altText: "Boo 10",
    },
  ],
};
