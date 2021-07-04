import React, { useContext } from "react";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import Popup from "semantic-ui-react/dist/commonjs/modules/Popup";
import Dropdown from "semantic-ui-react/dist/commonjs/modules/Dropdown";
import { Context } from "../../Wrapper";
import { FormattedMessage } from "react-intl";
import styles from "./Navigation.module.css";

const NavigationBar = (props) => {
  const context = useContext(Context);
  // eslint-disable-next-line no-unused-vars

  const countryOptions = [
    { key: "en", value: "en", flag: "gb", text: "English" },
    { key: "sr", value: "sr", flag: "cs", text: "Srpski" },
    // { key: "fr", value: "fr", flag: "fr", text: "France" },
    { key: "de", value: "de", flag: "de", text: "German" },
  ];
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Navigacija</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Soldat dent
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-left">
            {/* <li>
                <a href="#features" className="page-scroll">
                  Features
                </a>
              </li> */}
            <li>
              <a href="#about" className="page-scroll">
                <FormattedMessage
                  id="ws.navigation.about"
                  defaultMessage="Loading"
                />
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                <FormattedMessage
                  id="ws.navigation.services"
                  defaultMessage="Loading"
                />
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                <FormattedMessage
                  id="ws.navigation.galery"
                  defaultMessage="Loading"
                />
              </a>
            </li>
            {/* <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li> */}
            {/* <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                <FormattedMessage
                  id="ws.navigation.contact"
                  defaultMessage="Loading"
                />
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Popup
                content={
                  <FormattedMessage
                    id="ws.header.chooseLanguage"
                    defaultMessage="Jezik"
                  />
                }
                trigger={
                  <Dropdown
                    className={`icon ${styles.langStyle}`}
                    // icon="world"
                    placeholder={
                      <FormattedMessage
                        id="ws.header.language"
                        defaultMessage="Jezik"
                      />
                    }
                    selection
                    options={countryOptions}
                    value={context.locale}
                    onChange={context.selectLanguage}
                  />
                }
              />
            </li>
            <li>
              <a href="/login" className="page-scroll">
                <Popup
                  content={
                    <FormattedMessage
                      id="ws.header.signIn"
                      defaultMessage="Prijavi se"
                    />
                  }
                  trigger={<Icon name="sign in" />}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
