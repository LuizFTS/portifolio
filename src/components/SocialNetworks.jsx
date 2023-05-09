import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const SocialNetworks = () => {
  const socialNetworks = [
    {
      name: "linkedin",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/lfilipets/",
    },
    { name: "github", icon: <FaGithub />, link: "https://github.com/LuizFTS" },
    {
      name: "instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/luizftosta/",
    },
  ];

  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.link}
          target="_blank"
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
