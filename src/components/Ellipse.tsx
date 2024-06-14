import { FunctionComponent } from "react";
import styles from "./Ellipse.module.css";

export type EllipseType = {
  className?: string;
};

const Ellipse: FunctionComponent<EllipseType> = ({ className = "" }) => {
  return <div className={[styles.ellipseDiv, className].join(" ")} />;
};

export default Ellipse;
