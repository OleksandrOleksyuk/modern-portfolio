import { CheckBadgeIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

interface AlertProps {
  type: "success" | "error";
}

const Alert: React.FC<AlertProps> = ({ type }) => {
  const successMessage = "Message sent successfully. I'll get in touch with you shortly!";
  const errorMessage = "Oops! Something went wrong. Please try again.";

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-xs text-center space-y-4">
        {type === "success" ? (
          <CheckBadgeIcon className="w-20 text-emerald-500 p-2 bg-emerald-100 rounded-full mx-auto" />
        ) : (
          <XMarkIcon className="w-20 text-red-500 p-2 bg-red-100 rounded-full mx-auto" />
        )}
        <p className={type === "success" ? "text-emerald-500" : "text-red-500"}>
          {type === "success" ? successMessage : errorMessage}
        </p>
      </div>
    </div>
  );
};

export default Alert;
