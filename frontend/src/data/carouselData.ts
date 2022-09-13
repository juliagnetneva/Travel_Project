import Alpes from "../assets/carousel/alpes.jpg";
import Florence from "../assets/carousel/florence.jpg";
import Greece from "../assets/carousel/greece.jpg";
import Bay from "../assets/carousel/greece_bay.jpg";
import Maldives from "../assets/carousel/maldives.jpg";
import Mauritius from "../assets/carousel/mauritius.jpg";
import Video1 from "../assets/video/video_carous.mp4";
import Video2 from "../assets/video/video_carousel.mp4";
import Video3 from "../assets/video/video_carousel3.mp4";
import Video4 from "../assets/video/video_carousel4.mp4";
import Video5 from "../assets/video/video_carousel5.mp4";

export const sliderSettingsImg = {
  arrows: false,
  slidesToShow: 3,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
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

export const sliderSettingsVid = {
  arrows: false,
  slidesToShow: 2,
  dots: true,
  focusOnSelect: false,
  accessibility: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
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
export const dataImg = [
  {
    image: Alpes,
    title: "Route des Grandes Alpes",
    description:
      "Route des Grandes Alpes is the name of a legendary trip from the mountains to the sea, across the French Alps. This fabulous route takes you from lake Leman to the Mediterranean, climbing 16 passes that are among the highest in the Alps. How long is Route des Grandes Alpes?\n" +
      "The true classic trip is 684 km (425mi) long, running from Thonon-les-Bains on the shores of Lac Léman (also known as Lake Geneva) towards Menton, on the French Riviera, climbing up some of the highest and most beautiful mountain passes of Europe. The construction of the scenic drive started in 1909 and was opened in 1913. In that period, the Alps still were an isolated region of France with poor access possibilities. In 1937 it was totally paved. It was then renamed “Route des Grandes Alpes” in 1950. Today, the roads are totally paved and the quality ranges from excellent to patchy. For the most part the road surface is smooth. However, featuring mountain roads there are inevitably going to be some areas that have suffered from freeze thaw action.",
  },
  {
    image: Mauritius,
    title: "Mauritius Tour Packages",
    description:
      "Lying 800km east of Madagascar, Mauritius is part of the Mascarene Islands, a volcanic chain extending as far as the Seychelles. Fringed by 160km of sandy beaches and an azure sea, with a backdrop of rugged peaks and shimmering sugar cane, this pear-shaped tropical island is a dream holiday destination. An islander once told Mark Twain that “Mauritius was made first and then heaven; and heaven was copied after Mauritius”. Thanks to year-round sunshine, the island’s beaches are its key selling point, many lined with world-class hotels, top-notch spas, championship golf courses and gourmet restaurants. But the “pearl of the ocean” is no longer the preserve of the jet set, with an ever-expanding range of accommodation and activities for all tastes and budgets. Watersports are a particular highlight: it’s possible to swim with dolphins in the morning and then go diving, kitesurfing or paddleboarding in the afternoon.\n" +
      "\n" +
      "At 45km by 65km, nowhere in the island’s interior is more than 45 minutes’ drive from the sea, and gone are the days when no one ventured more than a mile from their sunlounger. Among the three main mountain ranges surrounding the central plateau – Moka, Black River Chain and Grand Port, the remains of volcanic activity which started thirteen million years ago – there are now numerous outdoor adventures and eco-trails. Then there’s tiny Rodrigues, an eco-paradise scattered with forested ravines, secluded beaches and sandy islands.",
  },
  {
    image: Florence,
    title: "Florence Historic Center",
    description:
      "Florence charms visitors with its mix of majestic chapels and fortified palaces. Elegant gardens are spread out near museums that house Renaissance masterpieces. The Arno runs through Florence at the base of the Apennines, and picturesque stone bridges like the Ponte Vecchio cross over it, allowing you to easily explore both halves of this idyllic Mediterranean city.\n" +
      "\n" +
      "Throughout Florence’s public spaces and piazzas, almost everywhere you look there’s a magnificent marble Renaissance sculpture by a great Italian artist. When not exploring the city’s art-filled spaces and magnificent landmarks, you may easily find yourself pleasantly lost inside a lively Florentine flea market. Make your visit a memorable one with these 11 best things to see, do and try in Florence.",
  },
  {
    image: Maldives,
    title: "Holidays in the Maldives",
    description:
      "Looking for Maldives packages? Here are some of things you should know before visiting this archipelagic country.\n" +
      "\n" +
      "A natural sunken garden, the Maldives is a collection of atolls tossed on the Indian Ocean that comprise its tens of hundreds of coral islands. Home to a unique and extremely delicate ecosystem, at the Maldives either you are under the water drinking in its spectacular marine life or on the surface dipping your toes on its powdery white sands and taking in a tropical breeze. The Maldives’ palm-fringed beaches, the rustic resorts are known to be the byword for luxury and crystalline waters make it the stuff picture-postcards are made of. With no dense tropical jungles or volcanic cliffs like a Seychelles, Hawaii, Bora Bora or Fiji, the Maldives is flatter with the highest point not shooting any more than five feet above the sea level. The world here centers around the atolls within which thousand-odd islands have come up with their share of sandbars, lagoons and reefs that are home to some exotic reef fish and coral gardens.",
  },
  {
    image: Greece,
    title: "Discover Wonderful Greece",
    description:
      "Are you are planning to explore Greece and are looking for a Greek Tour Packages that can present UNESCO-listed sites?\n" +
      "Our company offers you Customized Tours all over Greece with a wide range of tours. Moreover we specialize in Group Vacation Packages in Mainland & Greek Islands (Mykonos, Santorini, Milos, Naxos, Paros, Syros, Crete and more) to the specific needs and wishes of our clients!\n" +
      "\n" +
      "Our company also provide you wide selection of Private Tours from Athens and day trips from Athens, in order to visit Ancient Corinth, Delphi, Ancient Olympia, Argolis, Meteora and more through our Classical Vacation Packages.",
  },
  {
    image: Bay,
    title: "From Zakynthos to Shipwreck Beach",
    description:
      "Join us on our unique glass-bottom boat for a beautiful trip around Zakynthos. We will start from North Zakynthos, from here everyone takes their own car for 3 minutes to the port where we can board the boat. Once everyone is on the boat, we will set sail around Cape Skinari. This route allows you to see the difference between the east and the west side of the island perfectly.\n" +
      "\n" +
      "The west coast has steep cliffs and small bays, one of which is called Smugglers Cove. On this beautiful beach, you will find the remains of a ship that was used to smuggle cigarettes over the Ionian Sea. You get plenty of time to explore the beach, take pictures and go for a swim. After that, we continue towards our second swimming stop at the Blue Caves. The glass bottom of the boat allows you to see all the beautiful colours and rock formations underwater, without having to dive or snorkel.\n" +
      "\n" +
      "We will get off the boat at Agios Nikolaos port, where you can once again take pictures and go swimming. If you choose to be picked up and dropped off at your accommodation by bus, we will make an additional swimming stop at Xigia Beach on our drive back. The sulphuric waters of this beach will make you look and feel young again!",
  },
];

export const dataVid = [
  {
    video: Video1,
    title: "Mountain Range",
  },
  {
    video: Video2,
    title: "Route des Grandes Alpes",
  },
  {
    video: Video3,
    title: "Route des Grandes Alpes",
  },
  {
    video: Video4,
    title: "Route des Grandes Alpes",
  },
  {
    video: Video5,
    title: "Route des Grandes Alpes",
  },
];
