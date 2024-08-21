import Ballstdesignprocess from "../../assets/Ballst__designprocess.png";
import BallstUnderstanding from "../../assets/Ballst__competitioranalysis.png";
import Ballstinterview from "../../assets/Ballst__research__interview.png";
import Ballstdata from "../../assets/Ballst__research__data.png";
import Ballstuser1 from "../../assets/Ballst__define__user1.png";
import Ballstuser2 from "../../assets/Ballst__define__user2.png";
import BallstInformationArchitecture from "../../assets/Ballst__ideation__InformationArchitecture.png";
import BallstUserflow from "../../assets/Ballst__ideation__userflow.png";
import BallstWireframe from "../../assets/Ballst__ideation__wireframe.png";
import Ballstcolor from "../../assets/Ballst__hifidesign__color.png";
import Ballsthifidesign from "../../assets/Ballst__hifidesign.png";

export const introData = {
  title: "APP DESIGN",
  description:
    "A social platform for ball games’ lovers to find suitable sports’ venues and accompanies.",
};

export const roleData = {
  details: [
    {
      label: "My Role",
      content: "UIUX Designer",
    },
    {
      label: "Timeline",
      content: "March-now",
    },
    {
      label: "Team",
      content:
        "I worked closely with the CEO, Product Manager, 2 UX designers, and Marketing Manager.",
    },
  ],
};

export const designProcessData = {
  imageUrl: Ballstdesignprocess,
  className: "Ballst__designprocess__img",
};

export const challengesData = [
  {
    title: "Full-time remote work 👩‍💻",
    content:
      "The first challenge is that we are an all-remote team, so the time we spend discussing together is precious. Therefore, before each discussion, I will arrange my own schedule to ensure that I get the work done, so that we can be more efficient in the meeting.",
  },
  {
    title: "I can't play basketball 🏀",
    content:
      "Another challenge I faced was that it was difficult for me to conduct user research due to my unfamiliarity with basketball. So before the interview and discussion, I will collect a lot of background information and observe more players, so that I can express my thoughts more clearly during the discussion, and let users understand the meaning of each question better.",
  },
  {
    title: "Design with Constraints 😫",
    content:
      "Since this app is intended to be released online, we are constrained by money and market demand in our design. Thus, in this project, I strove to discuss issues with my teammates to ensure we could maximize the utility of the design amid the constraints.",
  },
];

export const understandingData = {
  title: "Understand",
  description:
    "There are many similar products on the market, but there is no distinct leading product that users generally accept. Therefore, before determining the functions of the new software, I proposed performing a comparative study of similar products to learn about market demand and entry opportunities. We discussed why the number of users in similar markets could not increase.",
  image: {
    className: "Ballst__understanding__img",
    src: BallstUnderstanding,
    alt: "Competitive Analysis",
  },
  keyInsightTitle: "Key insight",
  insights: [
    "Even if the function is complete, the number of users is still insufficient.",
    "The simpler the operation process, the more willing it is for users to use it.",
    "Rewarding users for the spontaneous use of software is more effective than advertising.", // Add more insights as needed
  ],
  listClassName: "Ballst__keyinsight--list",
  itemClassName: "Ballst__keyinsight--item",
};

export const researchData = {
  interview: {
    content:
      "To better understand the playing habits of target users, I held several rounds of face-to-face interviews, categorized the problems using an affinity map, classified them according to level of need, and compiled them into user stories. Then I identified functional requirements and potential opportunities through analysis.",
    imageSrc: Ballstinterview,
    imageAlt: "interview img",
    imageClassName: "Ballst__interview__img",
    results: [
      {
        title: "It's hard to make friends",
        content:
          "In my research, I found that basketball players are often too busy playing to make friends, or they are too introverted to ask for contact information from strangers, but, they still want make new friends when they play basketball.",
      },
      {
        title: "Finding a court is time-consuming for users",
        content:
          "From my observations, I also found that busy office workers, or people who have just arrived in a new county or city, hope to quickly find a basketball court close to home, because in this way they can spend more time playing instead of looking for a suitable basketball court.",
      },
      {
        title:
          "Insufficient  information on the hardware equipment of the court",
        content:
          "I found that users often go to the basketball court only to find that the hardware is broken, the court is slippery, or there are too many people, so that they cannot play basketball.",
      },
      {
        title: "Cannot find a suitable basketball partner",
        content:
          "The survey found that basketball players are used to playing with the same group of friends they know, not only because they are already familiar with each other or the state of the court, but also can avoid unnecessary conflicts.",
      },
    ],
  },
  dataAnalysis: {
    content:
      "We received questionnaire survey results from more than 200 users in more than a month to verify whether the functional design of the app meets the market demand, and through the investigation of the expectations of the target users for the various functions of the app, provide us with future development Product reference.",
    imageSrc: Ballstdata,
    imageAlt: "data img",
    imageClassName: "Ballst__data__img",
  },
  results: [
    {
      title: "​It took a while to find the suitble basketball court",
      content:
        "Among the target users, 70% spend an average of 30.7 minutes finding a suitable basketball court. Most users tend to ask friends or players to find nearby courts.",
    },
    {
      title:
        "The hardware condition of the basketball court determines whether the user can play basketball smoothly",
      content:
        "Among the target users, 80% encountered crowded courts and were unable to report the situation to their teams; or else the court was slippery and unplayable due to rain. An efficient appointment scheduling function would be more attractive to customers, like with professional basketball training.",
    },
    {
      title:
        "Compared with professional basketball training, the efficient appointment function is more attractive to customers",
      content:
        "Being able to score quickly is the most important goal for 82% of the target users.",
    },
  ],
};

export const designGoalsData = {
  title: "Design Goal",
  description:
    "We set basic design goals based on user feedback and surveys. The overall goal here is to design a complete, efficient and easy-to-use ball playing social app.",
  goals: [
    {
      title: "Find basketball venues more efficiently",
      description: "Assessment of Function：",
      functions: [
        "A function of quick search the basketball venue",
        "A function to filter by basketball venue name",
      ],
    },
    {
      title: "Let friends make friends more conveniently and quickly",
      description: "Assessment of Function：",
      functions: [
        "QR code",
        "A signal function that can inform my friends I'm going to play basketball now",
        "A locate function that other friends kown where i am play the basketball",
        "The group function allows a group of friends with the same abilities or preferences to chat and play basketball together",
      ],
    },
    {
      title: "Complete basketball court hardware information",
      description: "Assessment of Function：",
      functions: [
        "Provide hardware information of basketball venue",
        "A function that player can give the positive or negative  function review to basketball venues",
      ],
    },
  ],
};

export const defineData = [
  {
    type: "Type 1",
    description: "a retiree often goes to the park to play basketball",
    imgSrc: Ballstuser1,
    imgAlt: "Type1 persona img",
  },
  {
    type: "Type 2",
    description: "A hard-working office worker",
    imgSrc: Ballstuser2,
    imgAlt: "Type2 persona img",
  },
];

export const ideationData = [
  {
    subTitle: "Information Architecture",
    description:
      "Based on previous market research and interview, me and my teammate defined 5 main features: Home page，Search，Court，Social，Setting for Ballst.",
    imgSrc: BallstInformationArchitecture,
    imgAlt: "Information Architecture Diagram",
    imgClassName: "ideation-image",
  },
  {
    subTitle: "User flow",
    description:
      "To further define users’ actions, we created user flows for different features to gain a better understanding of how users will use it.",
    imgSrc: BallstUserflow,
    imgAlt: "User Flow Diagram",
    imgClassName: "ideation-image",
  },
  {
    subTitle: "Wireframes",
    description:
      "At this stage, we used wireframes to discuss with our stakeholders and better understood what kind of information they want to know about. We created most of pages based on the information architecture.",
    imgSrc: BallstWireframe,
    imgAlt: "Wireframe Diagram",
    imgClassName: "ideation-image",
  },
];

export const hifiDesignData = {
  title: "Hi-Fi Design",
  subTitle: "Color Palette for Ballst",
  description:
    "The color scheme of the app mainly uses wine red as the main color, because red is particularly bright and represents vitality, just like every passionate teenager who plays basketball wants to be seen by other players. The reason why black is used to complement red is that black and red are complementary colors, so red will be particularly bright when paired with black, and it also means that our app, it can help players make it easier for other players to discover and playing basketball more smoothly!",
  images: [
    {
      src: Ballstcolor,
      alt: "Color Palette Image 1",
      className: "Ballst__hifidesign__img",
    },
    {
      src: Ballsthifidesign,
      alt: "Color Palette Image 2",
      className: "Ballst__hifidesign__img2",
    },
  ],
};

export const nextStepsData = {
  title: "Next Steps",
  steps: [
    {
      title: "First Phase Development",
      content:
        "At present, I hope that the design iteration part can be carried out as soon as possible, so as to understand the lack of app design and improve it, so as to give users a better playing journey.",
    },
    {
      title: "Website Design",
      content:
        "Although we are still not finished designing the app, many people still use the website to find suitable basketball venues or player. Therefore, we put the mobile version of the design as top priority. Also, we plan to finish the design for networking which is another very important feature.",
    },
    {
      title: "MVP",
      content:
        "Although it takes more time to develop, we hope to launch MVP soon, which includes the functions of finding basketball venues and players.",
    },
  ],
};

export const reflectionsData = {
  title: "Reflection",
  reflections: [
    {
      title: "Using Workshops to Align Thoughts",
      content:
        "When we first started having discussions, often the meetings became time-consuming and unproductive because everyone had different opinions. Therefore, I began to ask each team member to put forward their own ideas and sort them out before the meeting. In addition to allowing everyone to fully express their opinions, they will not deviate from the core of the problem due to long discussions, making the discussions more efficient.",
    },
    {
      title:
        "Think from different users’ perspectives. Explain more to deliver the idea.",
      content:
        'When we conducted interviews, we found that some interviewees had trouble understanding what a "landing page" was. So I learned to be more empathetic and explain my designs without using too much technical vocabulary when explaining them to the ordinary person.',
    },
  ],
};
