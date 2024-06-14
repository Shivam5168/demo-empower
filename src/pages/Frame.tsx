import { FunctionComponent } from "react";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <img className={styles.image54Icon} alt="" src="/image-54@2x.png" />
      <img className={styles.image63Icon} alt="" src="/image-63@2x.png" />
      <img className={styles.image63Icon} alt="" src="/image-63@2x.png" />
      <img
        className={styles.pptMesaDeTrabajo1Copy24}
        alt=""
        src="/ppt-mesa-de-trabajo-1-copy-2-4@2x.png"
      />
      <img
        className={styles.pptMesaDeTrabajo1Copy22}
        alt=""
        src="/ppt-mesa-de-trabajo-1-copy-2-2@2x.png"
      />
      <img className={styles.image106Icon} alt="" src="/image-106@2x.png" />
      <img className={styles.slide151} alt="" src="/slide-15-1@2x.png" />
      <img
        className={styles.electricVehiclePpt1Icon}
        alt=""
        src="/electricvehicle-ppt-1@2x.png"
      />
      <img
        className={styles.electricVehiclePpt2Icon}
        alt=""
        src="/electricvehicle-ppt-2@2x.png"
      />
      <img
        className={styles.electricVehiclePpt3Icon}
        alt=""
        src="/electricvehicle-ppt-3@2x.png"
      />
      <div className={styles.davidSmith}>David Smith</div>
      <div className={styles.groupParent}>
        <img className={styles.groupChild} alt="" src="/group-1000006201.svg" />
        <div className={styles.parent}>
          <b className={styles.b}>404</b>
          <div className={styles.wereWorkingOn}>We’re working on it!</div>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonChild} />
          <b className={styles.goHome}>Go Home</b>
          <img className={styles.arrow28Icon} alt="" src="/arrow28.svg" />
        </div>
      </div>
      <img className={styles.child} alt="" src="/group-10000057332.svg" />
    </div>
  );
};

export default Frame;
