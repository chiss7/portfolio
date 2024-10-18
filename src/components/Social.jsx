import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import PropTypes from "prop-types";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/chiss7",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/christopher-trujillo/",
  },
  {
    icon: <BiLogoGmail />,
    path: "mailto:cristru8@gmail.com",
  },
];

export const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

Social.propTypes = {
  containerStyles: PropTypes.string,
  iconStyles: PropTypes.string,
};
