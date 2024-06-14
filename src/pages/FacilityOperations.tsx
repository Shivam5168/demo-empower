import { FunctionComponent } from "react";
import styles from "./FacilityOperations.module.css";

const FacilityOperations: FunctionComponent = () => {
  return (
    <div className={styles.facilityOperations1}>
      <div className={styles.topBar}>
        <div className={styles.userWrapper}>
          <div className={styles.user}>
            <div className={styles.component30}>
              <div className={styles.notificationIconWrapper}>
                <div className={styles.notificationIcon}>
                  <div className={styles.statusnewWrapper}>
                    <div className={styles.statusnew} />
                  </div>
                  <div className={styles.notification}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector19.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.davidSmithParent}>
              <div className={styles.davidSmith}>David Smith</div>
              <img
                className={styles.frameChild}
                alt=""
                src="/group-10000057111.svg"
              />
              <div className={styles.logo}>
                <img className={styles.groupIcon} alt="" src="/group10.svg" />
                <img className={styles.logoChild} alt="" src="/vector-42.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.vectorParent}>
            <img className={styles.frameItem} alt="" src="/vector20.svg" />
            <div className={styles.div}>11-07-2023</div>
          </div>
          <div className={styles.groupParent}>
            <img
              className={styles.frameItem}
              alt=""
              src="/group-1000005907.svg"
            />
            <div className={styles.div}>10:00</div>
          </div>
        </div>
      </div>
      <div className={styles.component61}>
        <img className={styles.unionIcon} alt="" src="/union.svg" />
        <div className={styles.component61Inner}>
          <div className={styles.davidSmithParent}>
            <div className={styles.activeTab}>
              <div className={styles.icon}>
                <img className={styles.frameItem} alt="" src="/vector21.svg" />
              </div>
            </div>
            <div className={styles.facilityPlanning}>Facility Planning</div>
          </div>
        </div>
        <img
          className={styles.empowerLogoIcon}
          alt=""
          src="/empower-logo@2x.png"
        />
        <img className={styles.unionIcon1} alt="" src="/union1.svg" />
        <div className={styles.iconParent}>
          <div className={styles.icon1}>
            <img className={styles.frameItem} alt="" src="/union2.svg" />
          </div>
          <div className={styles.div}>Facility Operations</div>
        </div>
      </div>
      <img
        className={styles.empowerLogoIcon1}
        alt=""
        src="/empower-logo@2x.png"
      />
      <div className={styles.activeState}>
        <div className={styles.activeTab1}>
          <div className={styles.icon2}>
            <img className={styles.frameItem} alt="" src="/union3.svg" />
          </div>
          <div className={styles.div}>Analytics</div>
        </div>
      </div>
      <div className={styles.activeState}>
        <div className={styles.activeTab1}>
          <img className={styles.icon3} alt="" src="/icon.svg" />
          <div className={styles.div}>Profile</div>
        </div>
      </div>
      <div className={styles.activeState}>
        <div className={styles.activeTab1}>
          <div className={styles.icon4}>
            <img className={styles.vectorIcon3} alt="" src="/vector22.svg" />
          </div>
          <div className={styles.div}>Setting</div>
        </div>
      </div>
      <div className={styles.line} />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <img
        className={styles.facilityOperations1Child}
        alt=""
        src="/group-1000005527@2x.png"
      />
      <img
        className={styles.facilityOperations1Item}
        alt=""
        src="/group-1000006016.svg"
      />
    </div>
  );
};

export default FacilityOperations;
