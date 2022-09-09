import Alpes from "../assets/carousel/alpes.jpg";
import Florence from "../assets/carousel/florence.jpg";
import Greece from "../assets/carousel/greece.jpg";
import Bay from "../assets/carousel/greece_bay.jpg";
import Maldives from "../assets/carousel/maldives.jpg";
import Mauritius from "../assets/carousel/mauritius.jpg";

export const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  focusOnSelect: false,
  accessibility: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export const data = [
  { image: Alpes, title: "picture", description: "picture picture picture" },
  { image: Florence, title: "picture", description: "picture picture picture" },
  { image: Greece, title: "picture", description: "picture picture picture" },
  { image: Bay, title: "picture", description: "picture picture picture" },
  { image: Maldives, title: "picture", description: "picture picture picture" },
  {
    image: Mauritius,
    title: "picture",
    description: "picture picture picture",
  },
];
