import { FunctionComponent } from "react";
import styles from "./NotCriticalText.module.css";

export type NotCriticalTextType = {
  className?: string;
};

const NotCriticalText: FunctionComponent<NotCriticalTextType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.notCritical, className].join(" ")}>
      Not Critical
    </div>
  );
};

export default NotCriticalText;
