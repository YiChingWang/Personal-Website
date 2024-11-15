import ballstcover from "../../../assets/Ballst__cover.png";
import sakanasuncover from "../../../assets/Sakanasun__cover.png";
import sexysexualcover from "../../../assets/SexyOrSexual__cover.png";
import echoeyescover from "../../../assets/Echoeyes__cover.png";

const cardlist = [
  {
    id: 1,
    title: "Project1",
    imageUrl: ballstcover,
    alt: "ballst cover",
    text: "A social platform for ball games’ lovers to find suitable sports’ venues and accompanies.",
    buttonText: "View Detail",
    pathname: "/Ballst",
    category: "User Research",
    onClick: () => {
      console.log("Card 1 clicked");
    },
  },
  {
    id: 2,
    title: "Project2",
    imageUrl: echoeyescover,
    alt: "EchoEyes cover",
    text: "Using image captioning and TTS technology to assist blind people in social interactions",
    buttonText: "View Detail",
    pathname:
      "https://github.com/YiChingWang/EchoEyes---Image-Captioning-Project/tree/main",
    visual: "link",
    category: "Machine Learning",
    onClick: () => {
      console.log("Card 2 clicked");
    },
  },
  {
    id: 3,
    title: "Project3",
    imageUrl: sakanasuncover,
    alt: "sakanasun cover",
    text: "A supermarket branding design",
    buttonText: "View Detail",
    pathname: "/Sakanasun",
    category: "Graphic Design",
    onClick: () => {
      console.log("Card 3 clicked");
    },
  },
  {
    id: 4,
    title: "Project4",
    imageUrl: sexysexualcover,
    alt: "sexy or sexual cover",
    text: "A social concern poster design",
    buttonText: "View Detail",
    pathname: "/SexOrSexual",
    category: "Graphic Design",
    onClick: () => {
      console.log("Card 4 clicked");
    },
  },
];

export default cardlist;
