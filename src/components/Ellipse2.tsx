import { FunctionComponent } from "react";
import styles from "./Ellipse2.module.css";

export type Ellipse2Type = {
  className?: string;
};

const Ellipse2: FunctionComponent<Ellipse2Type> = ({ className = "" }) => {
  return <div className={[styles.ellipseDiv, className].join(" ")} />;
};

export default Ellipse2;
