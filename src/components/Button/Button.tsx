import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  color: "primary" | "secondary";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ color, children, type }) => {
  const colorBtn = color === "primary" ? "bg-sky-600 text-white border" : "";
  return (
    <button
      type={type}
      className={`${colorBtn} border-sky-600 hover:bg-sky-600 cursor-pointer text-sm px-4 rounded py-2 text-center`}
    >
      {children}
    </button>
  );
};

export default Button;
