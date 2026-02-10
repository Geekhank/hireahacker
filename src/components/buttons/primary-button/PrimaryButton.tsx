import React from "react";
import styles from "./PrimaryButton.module.css";

// Interfaces
interface IProps {
  className?: string;
  placeholder: string;
  withArrow?: boolean;
  isActionLoading?: boolean;
  disabled?: boolean;
   fullWidth?: boolean; 
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

// In PrimaryButton.jsx
function PrimaryButton({
  className,
  placeholder,
  disabled = false,
  onClick,
  fullWidth = true, // Add this prop
}: IProps) {
  return (
    <div className={`${styles['primary-button-wrapper']} ${className}`} 
         style={!fullWidth ? { width: 'auto' } : {}}>
      <button 
        disabled={disabled} 
        onClick={onClick}
        className={styles.button}
        style={!fullWidth ? { width: 'auto' } : {}}
      >
        {placeholder}
      </button>
    </div>
  );
}

export default PrimaryButton;