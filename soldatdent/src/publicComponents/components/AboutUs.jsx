import React from "react";
import { FormattedMessage } from "react-intl";

const AboutUs = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>
                {" "}
                <FormattedMessage
                  id="ws.header.about"
                  defaultMessage="O nama"
                />
              </h2>
              <p>
                {
                  <FormattedMessage
                    id="ws.about.paragraph"
                    defaultMessage="Loading"
                  />
                }
              </p>
              <h3>
                {" "}
                <FormattedMessage
                  id="ws.about.whyHeader"
                  defaultMessage="Zasto mi"
                />
              </h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>
                      {
                        <FormattedMessage
                          id="ws.about.why1"
                          defaultMessage="Loading"
                        />
                      }
                    </li>
                    <li>
                      {
                        <FormattedMessage
                          id="ws.about.why2"
                          defaultMessage="Loading"
                        />
                      }
                    </li>
                    <li>
                      {
                        <FormattedMessage
                          id="ws.about.why3"
                          defaultMessage="Loading"
                        />
                      }
                    </li>
                    <li>
                      {
                        <FormattedMessage
                          id="ws.about.why4"
                          defaultMessage="Loading"
                        />
                      }
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>
                      {
                        <FormattedMessage
                          id="ws.about.why1"
                          defaultMessage="Loading"
                        />
                      }
                    </li>
                    <li>
                      {
                        <FormattedMessage
                          id="ws.about.why2"
                          defaultMessage="Loading"
                        />
                      }
                    </li>
                    <li>
                      {
                        <FormattedMessage
                          id="ws.about.why3"
                          defaultMessage="Loading"
                        />
                      }
                    </li>
                    <li>
                      {
                        <FormattedMessage
                          id="ws.about.why4"
                          defaultMessage="Loading"
                        />
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
