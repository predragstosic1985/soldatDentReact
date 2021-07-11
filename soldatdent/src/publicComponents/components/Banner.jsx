import React, { useState } from "react";
import styles from "./style/Banner.module.css";

const Banner = (props) => {
  const [hideBanner, setHideBanner] = useState(false);

  return (
    <div className={hideBanner ? styles.hideFooterBanner : styles.footerBanner}>
      <button
        class="w3-button w3-circle w3-black"
        className={styles.btnBanner}
        onClick={() => setHideBanner(true)}
      >
        X
      </button>
      <div>
        <h3 className={styles.headline}>
          Petrovac Crna Gora Apartmani Tomasevic
        </h3>
        <h4 className={styles.headline1}>vec od 10e osoba/noc</h4>
        <button className={styles.bannerVisit}>
          <a
            className={styles.bannerVisitLink}
            target="_blank"
            rel="noreferrer"
            href="http://tomasevic-smestaj.me/"
          >
            Poseti web sajt
          </a>
        </button>
      </div>
    </div>
  );
};

export default Banner;
