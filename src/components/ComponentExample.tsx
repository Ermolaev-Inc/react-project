import React from "react";

interface Props {
  text: string;
}

export const ComponentExample: React.FC<Props> = ({
  text
}) => {
  return (
    <p>{text}</p>
  );
};