import React from "react";
import HeroImage from "../../assets/hero.jpg";
import { Button, NewBannerProject } from "..";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Hero: React.FC = () => {
  return (
    <section className="bg-white mx-auto max-w-screen-xl text-center space-y-4 lg:py-16 lg:px-12">
      <img src={HeroImage} alt="" className="w-full max-w-md mx-auto" />
      <NewBannerProject />
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
        Hey there, I'm Oleksandr, your Web Developer.
      </h1>
      <p className="mb-8 text-lg  lg:text-xl sm:px-16 xl:px-48">
        Welcome to your digital transformation! I specialize in crafting modern and captivating websites tailored for
        entrepreneurs and freelance professionals. Let's bring your ideas to life with a website that truly stands out.
      </p>
      <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <Button type="button" color="primary" link="#">
          Learn more
          <ArrowRightIcon className="w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
