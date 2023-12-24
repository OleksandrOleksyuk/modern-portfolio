import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const NewBannerProject: React.FC = (): JSX.Element => {
  return (
    <a
      href="#"
      className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
      role="alert"
    >
      <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
      <span className="text-sm font-medium">Lorem ipsum dolor sit amet.</span>
      <ChevronRightIcon className="w-5 ml-2" />
    </a>
  );
};

export default NewBannerProject;
