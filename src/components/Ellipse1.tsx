import { FunctionComponent } from "react";
import styles from "./Ellipse1.module.css";

export type Ellipse1Type = {
  className?: string;
};

const Ellipse1: FunctionComponent<Ellipse1Type> = ({ className = "" }) => {
  return <div className={[styles.ellipseDiv, className].join(" ")} />;
};

export default Ellipse1;
