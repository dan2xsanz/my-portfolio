import { useEffect, useState } from "react";
import {
  FACEBOOK_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from "../../config";
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwiterIcon,
} from "../icons";

import "./social-media-icons.css";

export const SocialMediaIcons = () => {
  const [visible, setVisible] = useState(true);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`social-media-icons-container ${!visible ? "hidden" : ""}`}>
      <TwiterIcon onClick={() => window.open(TWITTER_URL, "_blank")} />
      <FacebookIcon onClick={() => window.open(FACEBOOK_URL, "_blank")} />
      <LinkedInIcon onClick={() => window.open(LINKEDIN_URL, "_blank")} />
      <GitHubIcon onClick={() => window.open(GITHUB_URL, "_blank")} />
      <InstagramIcon onClick={() => window.open(INSTAGRAM_URL, "_blank")} />
    </div>
  );
};
