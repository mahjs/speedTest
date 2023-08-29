import { FC } from "react";
import "./styles.css";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="wrapper header-container">
        <h1 className="header-logo-container">
          <a className="header-logo-link" href="#">
            <svg
              fill="#fff"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              className="header-logo"
              viewBox="0 0 193 24"
            >
              <path d="M35.7 19.3l1.9-2.3c1.7 1.5 3.5 2.4 5.8 2.4 2 0 3.2-.9 3.2-2.3V17c0-1.3-.7-2-4.1-2.8-3.9-.9-6.1-2.1-6.1-5.5 0-3.1 2.6-5.3 6.3-5.3 2.7 0 4.8.8 6.7 2.3l-1.7 2.4c-1.6-1.2-3.3-1.9-5-1.9-1.9 0-3 1-3 2.2v.1c0 1.4.8 2.1 4.4 2.9 3.9.9 5.9 2.3 5.9 5.4v.1c0 3.4-2.7 5.5-6.6 5.5-2.9-.2-5.5-1.1-7.7-3.1m23.9-6.1c2.4 0 3.9-1.4 3.9-3.3 0-2.2-1.5-3.3-3.9-3.3h-3.7v6.6h3.7zm-7-9.5h7.2c4.3 0 7 2.4 7 6.1v.1c0 4.1-3.3 6.3-7.3 6.3h-3.6V22h-3.2l-.1-18.3zm17 0h13.6v2.8H72.8v4.8H82v2.9h-9.2v4.9h10.5V22H69.6zm17 0h13.6v2.8H89.8v4.8H99v2.9h-9.2v4.9h10.5V22H86.6zm20.2 2.9v12.5h3.6c3.8 0 6.4-2.6 6.4-6.2v-.1c0-3.6-2.5-6.2-6.4-6.2h-3.6zm-3.2-2.9h6.8c5.8 0 9.7 3.9 9.7 9.1v.1c0 5.2-4 9.2-9.7 9.2h-6.8V3.7zm24.2 2.9H122V3.7h14.9v2.9h-5.8V22h-3.3zm12.5-2.9h13.6v2.8h-10.4v4.8h9.2v2.9h-9.2v4.9H154V22h-13.7zm16.3 15.6l1.9-2.3c1.7 1.5 3.5 2.4 5.8 2.4 2 0 3.2-.9 3.2-2.3V17c0-1.3-.7-2-4.1-2.8-3.9-.9-6.1-2.1-6.1-5.5 0-3.1 2.6-5.3 6.3-5.3 2.7 0 4.8.8 6.7 2.3l-1.7 2.4c-1.6-1.2-3.3-1.9-5-1.9-1.9 0-3 1-3 2.2v.1c0 1.4.8 2.1 4.4 2.9 3.9.9 5.9 2.3 5.9 5.4v.1c0 3.4-2.7 5.5-6.6 5.5-2.9-.2-5.5-1.1-7.7-3.1m22.1-12.7h-5.8V3.7h14.9v2.9H182V22h-3.3zM23 23c2.3-2.3 3.8-5.5 3.8-9.1C26.8 6.8 21 1 13.9 1 6.8 1 1 6.8 1 13.9c0 3.6 1.4 6.8 3.8 9.1l1.8-1.8c-1.9-1.9-3-4.4-3-7.3 0-5.7 4.6-10.3 10.3-10.3 5.7 0 10.3 4.6 10.3 10.3 0 2.8-1.2 5.4-3 7.3L23 23z"></path>
              <path d="M13.5 16.5l-2.2-2.3 7.3-6.4 1.3 1.4zM190.8 5.1c.2 0 .4-.1.4-.3 0-.2-.1-.3-.4-.3h-.5v.6h.5zm-.8-.9h.8c.2 0 .4.1.5.2.1.1.2.2.2.4 0 .3-.2.5-.4.5l.5.7h-.4l-.4-.6h-.4V6h-.4V4.2z"></path>
              <path d="M190.7 3.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5m0 .2c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3 0-.7.5-1.3 1.3-1.3"></path>
            </svg>
          </a>
        </h1>

        <div className="header-navigation-mobile-controls">
          <button
            className="header-navigation-mobile-toggle"
            aria-label="Toggle navigation"
          ></button>
        </div>

        <nav className="header-navigation-menu">
          <ul className="header-navigation-list">
            <li className="header-navigation-list-item">
              <a
                className="header-navigation-list-item-link text-white"
                href="#"
              >
                برنامه‌ها
              </a>
              <ul className="header-navigation-submenu">
                <li className="header-navigation-submenu-list-item">
                  <a
                    className="header-navigation-submenu-list-item-link"
                    href="#"
                  >
                    <img
                      className="header-navigation-submenu-icon"
                      src="/svg/ios.svg"
                    />
                    <span className="header-navigation-submenu-text">iOS</span>
                  </a>
                </li>
                <li className="header-navigation-submenu-list-item">
                  <a
                    className="header-navigation-submenu-list-item-link"
                    href="#"
                  >
                    <img
                      className="header-navigation-submenu-icon"
                      src="/svg/android.svg"
                    />
                    <span className="header-navigation-submenu-text">
                      Android
                    </span>
                  </a>
                </li>
                <li className="header-navigation-submenu-list-item">
                  <a
                    className="header-navigation-submenu-list-item-link"
                    href="#"
                  >
                    <img
                      className="header-navigation-submenu-icon"
                      src="/svg/mac.svg"
                    />
                    <span className="header-navigation-submenu-text">Mac</span>
                  </a>
                </li>
                <li className="header-navigation-submenu-list-item">
                  <a
                    className="header-navigation-submenu-list-item-link"
                    href="#"
                  >
                    <img
                      className="header-navigation-submenu-icon"
                      src="/svg/windows.svg"
                    />
                    <span className="header-navigation-submenu-text">
                      Windows
                    </span>
                  </a>
                </li>
                <li className="header-navigation-submenu-list-item">
                  <a
                    className="header-navigation-submenu-list-item-link"
                    href="#"
                  >
                    <img
                      className="header-navigation-submenu-icon"
                      src="/svg/chrome.svg"
                    />
                    <span className="header-navigation-submenu-text">
                      Chrome
                    </span>
                  </a>
                </li>
                <li className="header-navigation-submenu-list-item">
                  <a
                    className="header-navigation-submenu-list-item-link"
                    href="#"
                  >
                    <img
                      className="header-navigation-submenu-icon"
                      src="/svg/appleTV.svg"
                    />
                    <span className="header-navigation-submenu-text">
                      Apple TV
                    </span>
                  </a>
                </li>
                <li className="header-navigation-submenu-list-item">
                  <a
                    className="header-navigation-submenu-list-item-link"
                    href="#"
                  >
                    <img
                      className="header-navigation-submenu-icon"
                      src="/svg/cli.svg"
                    />
                    <span className="header-navigation-submenu-text">CLI</span>
                  </a>
                </li>
                <li className="header-navigation-submenu-list-item">
                  <a
                    className="header-navigation-submenu-list-item-link"
                    href="#"
                  >
                    <img
                      className="header-navigation-submenu-icon"
                      src="/svg/vpn.svg"
                    />
                    <span className="header-navigation-submenu-text">VPN</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="header-navigation-list-item">
              <a
                className="header-navigation-list-item-link text-white"
                href="#"
              >
                تحلیل
              </a>
            </li>
            <li className="header-navigation-list-item">
              <a
                className="header-navigation-list-item-link text-white"
                href="#"
              >
                شبکه
              </a>
            </li>
            <li className="header-navigation-list-item">
              <a
                className="header-navigation-list-item-link text-white"
                href="#"
              >
                دولوپرها
              </a>
            </li>
            <li className="header-navigation-list-item">
              <a
                className="header-navigation-list-item-link text-white"
                href="#"
              >
                سازمان
              </a>
            </li>
            <li className="header-navigation-list-item">
              <a
                className="header-navigation-list-item-link text-white"
                href="#"
              >
                درباره ما
              </a>
            </li>
            <li className="header-navigation-list-item">
              <a
                className="header-navigation-list-item-link text-white"
                href="#"
              >
                {/* <img src="/svg/user.svg" className="user-icon" /> */}
                <svg
                  fill="#fff"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  className="user-icon"
                  viewBox="0 0 30 30"
                >
                  <path d="M22.27 22.385a.73.73 0 0 1-.733-.727v-.483c0-1.337-.83-2.536-2.062-2.976-1.518-.545-4.037-1.194-7.475-1.194s-5.957.65-7.47 1.19c-1.23.44-2.06 1.638-2.06 2.975v.48a.735.735 0 0 1-1.47.004v-.48c0-1.957 1.22-3.706 3.036-4.355 1.622-.584 4.317-1.277 7.964-1.277s6.34.693 7.964 1.276C21.78 17.47 23 19.22 23 21.174v.48c0 .4-.33.73-.73.73zM12 3.085c2.425 0 4.4 1.975 4.4 4.4s-1.974 4.4-4.4 4.4-4.4-1.973-4.4-4.4 1.975-4.4 4.4-4.4m0-1.468a5.87 5.87 0 0 0 0 11.737 5.87 5.87 0 0 0 0-11.74v.003z"></path>
                </svg>
                ورود
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
