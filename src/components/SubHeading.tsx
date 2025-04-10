import React from "react";

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({
  children,
  className = "",
}) => {
  return (
    <p className={`text-lg text-gray-700 mb-8 ${className}`}>{children}</p>
  );
};

export default SubHeading;
