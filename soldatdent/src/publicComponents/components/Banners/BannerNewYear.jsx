import React from "react";
import { Button, Modal } from "semantic-ui-react";
import Animate from "react-smooth";
import styles from "./style/BannerNewYear.module.css";
import Snowfall from "react-snowfall";

const BannerNewYear = ({ setOpenBanner, openBanner }) => {
  return (
    <>
      <Modal
        onClose={() => setOpenBanner(false)}
        onOpen={() => setOpenBanner(true)}
        open={openBanner}
        className={styles.bannerStyle}
      >
        <Modal.Content>
          <Snowfall
            // color="red"
            // Applied to the canvas element
            // style={{ background: "#fff" }}
            // Controls the number of snowflakes that are created (default 150)
            style={{
              backgroundColor: "#ba8e40",
              backgroundImage: "linear-gradient(to right, #00b4db, #0083b0)",
              // backgroundImage:
              //   "linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )",
              height: "100%",
              width: "100%",
              // backgroundPosition: "center",
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "cover",
              // position: "relative",
              // backgroundImage:
              //   "url('../../../../Assets/Images/newYearBanner.jpg')",
            }}
            snowflakeCount={1000}
          />
          <Modal.Description>
            <div>
              <Animate
                from={{ opacity: 0.1 }}
                to={{ opacity: 1 }}
                duration={5000}
                easing="ease-in"
              >
                <div className={styles.heroText}>
                  {/* <h1>Novogodisnji popusti su stigli ranije!</h1> */}
                  <p className={styles.headerTextHead}>
                    Srećne praznike želi vam naša ordinacija!
                  </p>
                  {/* <p className={styles.headerTextFirst}>izbeljivanje</p> */}
                  {/* <p className={styles.headerTextSecond}>
                    implante bezmetalne krunice i{" "}
                  </p> */}
                  {/* <p className={styles.headerTextThird}>botoks tretmane! </p> */}
                  <p className={styles.headerTextThird}>
                    <br />
                    Posetite nas čekaju vas pokloni{" "}
                  </p>

                  {/* 
                  <Button
                    circular
                    icon="check"
                    onClick={() => setOpenBanner(false)}
                  /> */}
                </div>
              </Animate>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default BannerNewYear;
