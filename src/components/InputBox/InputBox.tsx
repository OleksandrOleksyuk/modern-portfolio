import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface InputBoxProps {
  name: string;
  type: string;
  id: string;
  value: string;
  placeholder: string;
  label: string;
  required?: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({ name, type, id, value, placeholder, label, required = true }) => {
  const [passwordVisibile, setPasswordVisibile] = useState(false);
  return (
    <div className="relative">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type === "password" ? (passwordVisibile ? "text" : "password") : type}
        placeholder={placeholder}
        defaultValue={value}
        required={required}
      />
      {type === "password" && (
        <div
          className="absolute bottom-3 right-3 cursor-pointer"
          onClick={() => setPasswordVisibile((currentVal) => !currentVal)}
        >
          {passwordVisibile ? <EyeIcon className="w-4 " /> : <EyeSlashIcon className="w-4 " />}
        </div>
      )}
    </div>
  );
};

export default InputBox;
