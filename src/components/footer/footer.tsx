import { SocialMediaIcons } from "../../common";


import arrow from "../../assets/arrow.png";

import "./footer.style.css";

interface FooterInterface {
  navigationMessage: string;
  onClickNavigation: () => void;
}

export const Footer = ({
  navigationMessage,
  onClickNavigation,
}: FooterInterface) => {
  return (
    <div className="footer-main-container">
      <div className="footer-line-style" />
      <div className="footer-main-container">
        <div
          className="footer-see-more-about-me-style"
          onClick={onClickNavigation}
        >
          {navigationMessage}
          <div className="footer-beating-arrow-style">{`${"➞"}`}</div>
        </div>
      </div>
      <SocialMediaIcons />
    </div>
  );
};
