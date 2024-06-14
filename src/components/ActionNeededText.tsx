import { FunctionComponent } from "react";
import styles from "./ActionNeededText.module.css";

export type ActionNeededTextType = {
  className?: string;
};

const ActionNeededText: FunctionComponent<ActionNeededTextType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.actionNeeded, className].join(" ")}>
      Action Needed
    </div>
  );
};

export default ActionNeededText;
