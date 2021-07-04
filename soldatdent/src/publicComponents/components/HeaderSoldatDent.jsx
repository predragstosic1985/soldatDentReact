import React from "react";
import { FormattedMessage } from "react-intl";

const HeaderSoldatDent = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  <FormattedMessage
                    id="ws.header.title"
                    defaultMessage="Dobro došli"
                  />
                  <span></span>
                </h1>
                <p>
                  <FormattedMessage
                    id="ws.header.paragraph"
                    defaultMessage="Soldat dent"
                  />
                </p>
                <a href="#about" className="btn btn-custom btn-lg page-scroll">
                  <FormattedMessage
                    id="ws.header.about"
                    defaultMessage="O nama"
                  />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSoldatDent;
