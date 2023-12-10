import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  color: "primary" | "secondary";
  children: React.ReactNode;
  link: string;
  style?: string;
}

const Button: React.FC<ButtonProps> = ({
  color,
  children,
  type,
  link,
  style,
}) => {
  const colorBtn =
    color === "primary" ? "bg-primary-600 text-white border" : "";
  return (
    <button
      type={type}
      className={`${colorBtn} ${style} border-primary-600 hover:bg-primary-600 cursor-pointer text-sm px-4 rounded py-2 text-center`}
    >
      <a
        href={`#${link}`}
        className="inline-flex justify-center items-center gap-2"
      >
        {children}
      </a>
    </button>
  );
};

export default Button;
