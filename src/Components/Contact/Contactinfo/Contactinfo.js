import phoneIcon from "../../../assets/Contact__icon__phone--light.png";
import phoneDarkIcon from "../../../assets/Contact__icon__phone--dark.png";
import mailIcon from "../../../assets/Contact__icon__mail--light.png";
import mailDarkIcon from "../../../assets/Contact__icon__mail--dark.png";
import locationDarkIcon from "../../../assets/Contact__icon__location--dark.png";
import locationIcon from "../../../assets/Contact__icon__location--light.png";

const contactInfo = [
  {
    icons: {
      light: phoneIcon,
      dark: phoneDarkIcon,
    },
    name: "Phone",
    content: "+1 6699462646",
  },
  {
    icons: {
      light: mailIcon,
      dark: mailDarkIcon,
    },
    name: "Email",
    content: "olliee0713@gmail.com",
  },
  {
    icons: {
      light: locationIcon,
      dark: locationDarkIcon,
    },
    name: "Location",
    content: "San Jose, California",
  },
];

export default contactInfo;
