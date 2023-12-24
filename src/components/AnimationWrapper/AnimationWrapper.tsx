import React from "react";

interface AnimationWrapperProps {
  children: React.ReactNode;
  type: string;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ children, type }) => {
  return <div className={`animation-${type}`}>{children}</div>;
};

export default AnimationWrapper;
