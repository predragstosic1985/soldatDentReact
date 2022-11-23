import React from "react";
import { Button, Modal } from "semantic-ui-react";
import Animate from "react-smooth";
import styles from "./style/BannerBlackFriday.module.css";

const BannerBlackFriday = ({ setOpenBanner, openBanner }) => {
  return (
    <>
      <Modal
        onClose={() => setOpenBanner(false)}
        onOpen={() => setOpenBanner(true)}
        open={openBanner}
        size="tiny"
        className={styles.bannerStyle}
      >
        <Modal.Content className={styles.heroImage}>
          <Modal.Description className={styles.heroImage}>
            <div>
              <Animate
                from={{ opacity: 0.1 }}
                to={{ opacity: 1 }}
                duration={5000}
                easing="ease-in"
              >
                <div className={styles.heroText}>
                  {/* <h1>Novogodisnji popusti su stigli ranije!</h1> */}

                  {/* <p className={styles.headerTextHead}>
                    Specijalni popusti na:
                  </p> */}
                  <p className={styles.headerTextFirst}>NE PROPUSTITE!</p>
                  {/* <p className={styles.headerTextSecond}>
                    implante bezmetalne krunice i{" "}
                  </p> */}
                  {/* <p className={styles.headerTextThird}>botoks tretmane! </p> */}

                  <Button
                    circular
                    icon="check"
                    size="mini"
                    onClick={() => setOpenBanner(false)}
                  />
                </div>
              </Animate>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default BannerBlackFriday;
