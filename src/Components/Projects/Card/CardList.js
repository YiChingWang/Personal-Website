import ballstcover from "../../../assets/Ballst__cover.png";
import echoeyescover from "../../../assets/Echoeyes__cover.png";
import letMeChat from "../../../assets/letmeChat__cover.png";
import personalWebsite from "../../../assets/personalWebsite__cover.png";

const cardlist = [
  {
    id: 1,
    title: "LetMeChat.",
    imageUrl: letMeChat,
    alt: "letmeChat cover",
    text: "A time-limited hub for instant, meaningful, and impactful group connections.",
    buttonText: "View Detail",
    pathname:
      "https://github.com/YiChingWang/letmeChat---Full-Stack-Application",
    visual: "link",
    category: "Full Stack",
    onClick: () => {
      console.log("Card 1 clicked");
    },
  },
  {
    id: 2,
    title: "Personal Website",
    imageUrl: personalWebsite,
    alt: "Personal website cover",
    text: "My personal website.",
    buttonText: "View Detail",
    pathname: "https://github.com/YiChingWang/Personal-Website",
    visual: "link",
    category: "Front-end Development",
    onClick: () => {
      console.log("Card 1 clicked");
    },
  },
  {
    id: 3,
    title: "Ballst Mobile Application",
    imageUrl: ballstcover,
    alt: "ballst cover",
    text: "A social platform for ball games’ lovers to find suitable sports’ venues and accompanies.",
    buttonText: "View Detail",
    pathname: "/Ballst",
    category: "User Research",
    onClick: () => {
      console.log("Card 3 clicked");
    },
  },
  // {
  //   id: 4,
  //   title: "EchoEyes",
  //   imageUrl: echoeyescover,
  //   alt: "EchoEyes cover",
  //   text: "Using image captioning and TTS technology to assist blind people in social interactions",
  //   buttonText: "View Detail",
  //   pathname:
  //     "https://github.com/YiChingWang/EchoEyes---Image-Captioning-Project/tree/main",
  //   visual: "link",
  //   category: "Machine Learning",
  //   onClick: () => {
  //     console.log("Card 4 clicked");
  //   },
  // },
];

export default cardlist;
