import { FunctionComponent } from "react";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <img
          className={styles.headerItem}
          alt=""
          src="/group-10000057333.svg"
        />
      </div>
      <div className={styles.bannerSec}>
        <div className={styles.container}>
          <div className={styles.bannerContent}>
            <b
              className={styles.empoweringSustainableFreight}
            >{`Empowering Sustainable Freight Mobility `}</b>
            <div className={styles.divider} />
            <div className={styles.rolesBox}>
              <div className={styles.selectYourRole}>Select your role</div>
              <div className={styles.rolesWrapper}>
                <div className={styles.rolesFreightBox}>
                  <img
                    className={styles.imageBoxIcon}
                    alt=""
                    src="/imagebox.svg"
                  />
                  <div className={styles.freightMovers}>Freight Movers</div>
                </div>
                <div className={styles.rolesChargingBox}>
                  <img
                    className={styles.imageBoxIcon}
                    alt=""
                    src="/imagebox1.svg"
                  />
                  <div className={styles.freightMovers}>
                    Mobility Infrastructure
                  </div>
                </div>
                <div className={styles.rolesUtilitiesBox}>
                  <img
                    className={styles.imageBoxIcon}
                    alt=""
                    src="/imagebox2.svg"
                  />
                  <div className={styles.freightMovers}>Utilities</div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.bannerImgBoxIcon}
            alt=""
            src="/bannerimgbox.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
