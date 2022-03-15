import React from "react";
import styled from "styled-components";
import { sharedButtonStyles } from "./common-styles";

interface UIButtonProp {
  ariaLabel: string;
  label: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const UIButton: React.FC<UIButtonProp> = ({
  ariaLabel,
  label,
  onClick,
  className,
}) => (
  <button
    aria-label={ariaLabel}
    className={`firstNameLastName ${className}`}
    onClick={onClick}
  >
    {label}
  </button>
);

const UIButtonStyled = styled(UIButton)`
  ${sharedButtonStyles}
`;

export { UIButtonStyled as UIButton };
