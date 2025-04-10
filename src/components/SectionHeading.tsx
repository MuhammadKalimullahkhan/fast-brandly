import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  align?: "left" | "center" | "right";
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  align = "center",
}) => {
  const baseStyles = "font-bold mb-4";

  const variantStyles = {
    primary: "text-gray-900",
    secondary: "text-blue-700",
  };

  const sizeStyles = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl md:text-5xl",
  };

  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <h2
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${alignStyles[align]} ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
