import { FunctionComponent } from "react";
import styles from "./NormalOperationText.module.css";

export type NormalOperationTextType = {
  className?: string;
};

const NormalOperationText: FunctionComponent<NormalOperationTextType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.normalOperation, className].join(" ")}>
      Normal Operation
    </div>
  );
};

export default NormalOperationText;
