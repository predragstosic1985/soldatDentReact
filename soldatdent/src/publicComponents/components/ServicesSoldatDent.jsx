import React from "react";

import { FormattedMessage } from "react-intl";

const ServicesSoldatDent = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>
            <FormattedMessage
              id="ws.services.headAbove"
              defaultMessage="Loading"
            />
          </h2>
          <p>
            <FormattedMessage
              id="ws.services.subHeadAbove"
              defaultMessage="Loading"
            />
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <i className="fa fa-code"></i>
            <div className="service-desc">
              <h3>
                {
                  <FormattedMessage
                    id="ws.services.head1"
                    defaultMessage="Loading"
                  />
                }
              </h3>
              <p>
                {
                  <FormattedMessage
                    id="ws.services.text1"
                    defaultMessage="Loading"
                  />
                }
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <i className="fa fa-cart-arrow-down"></i>
            <div className="service-desc">
              <h3>
                {
                  <FormattedMessage
                    id="ws.services.head2"
                    defaultMessage="Loading"
                  />
                }
              </h3>
              <p>
                {
                  <FormattedMessage
                    id="ws.services.text2"
                    defaultMessage="Loading"
                  />
                }
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <i className="fa fa-cog"></i>
            <div className="service-desc">
              <h3>
                {
                  <FormattedMessage
                    id="ws.services.head3"
                    defaultMessage="Loading"
                  />
                }
              </h3>
              <p>
                {
                  <FormattedMessage
                    id="ws.services.text3"
                    defaultMessage="Loading"
                  />
                }
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <i className="fa fa-chain"></i>
            <div className="service-desc">
              <h3>
                {
                  <FormattedMessage
                    id="ws.services.head4"
                    defaultMessage="Loading"
                  />
                }
              </h3>
              <p>
                {
                  <FormattedMessage
                    id="ws.services.text4"
                    defaultMessage="Loading"
                  />
                }
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <i className="fa fa-plane"></i>
            <div className="service-desc">
              <h3>
                {
                  <FormattedMessage
                    id="ws.services.head5"
                    defaultMessage="Loading"
                  />
                }
              </h3>
              <p>
                {
                  <FormattedMessage
                    id="ws.services.text5"
                    defaultMessage="Loading"
                  />
                }
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <i className="fa fa-diamond"></i>
            <div className="service-desc">
              <h3>
                {
                  <FormattedMessage
                    id="ws.services.head6"
                    defaultMessage="Loading"
                  />
                }
              </h3>
              <p>
                {
                  <FormattedMessage
                    id="ws.services.text6"
                    defaultMessage="Loading"
                  />
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSoldatDent;
