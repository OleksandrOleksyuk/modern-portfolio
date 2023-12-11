import React from "react";
import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Button from "../../Button/Button";

interface ProjectProps {
  id: number;
  img: string;
  title: string;
  link: string;
  description: string;
  stacks: { name: string; path: string }[];
}

const Project: React.FC<ProjectProps> = ({ id, img, title, link, description, stacks }) => {
  return (
    <div className={`space-y-4 md:grid md:grid-cols-2 items-center gap-5`}>
      <img className={`shadow-lg rounded-sm object-contain ${id % 2 === 0 ? "order-1" : ""}`} src={img} />
      <div className="space-y-3">
        <h3>{title}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex gap-2 text-primary-600">
          {link}
          <ArrowTopRightOnSquareIcon className="w-4" />
        </a>
        <p>{description}</p>
        <div className="flex gap-2">
          {stacks.map(({ name, path }) => (
            <img key={name} className="rounded-sm w-5" src={path} />
          ))}
        </div>
        <Button type="button" color="primary" link="#">
          View case study <ArrowRightIcon className="w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Project;
