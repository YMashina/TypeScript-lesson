import React, { useState } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: (num: number) => void;
}

const Card: React.FC<CardProps> = ({
  width,
  height,
  variant,
  children,
  onClick,
}) => {
  const [value, setValue] = useState(0);

  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid gray" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}
      onClick={() => onClick(value)}
    >
      <div>value = {value}</div>

      {children}
    </div>
  );
};

export default Card;
