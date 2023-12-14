import React from "react";
import Section1 from "../../assets/section-1.jpg";
import Section2 from "../../assets/section-2.jpg";
import Section3 from "../../assets/section-3.jpg";

const About1: React.FC = () => {
  return (
    <>
      <section className="overflow-hidden bg-white mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center justify-between">
          <div className="flex items-center">
            <div className="w-full px-3 sm:px-4 xl:w-1/2 space-y-4">
              <img src={Section1} alt="" className="w-full rounded-2xl" />
              <img src={Section2} alt="" className="w-full rounded-2xl" />
            </div>
            <div className="w-full px-3 sm:px-4 xl:w-1/2">
              <img src={Section3} alt="" className="w-full rounded-2xl" />
            </div>
          </div>
          <div className="space-y-2">
            <h6 className="uppercase">Why Choose Me</h6>
            <h2>I am passionate about creating unique and engaging online experiences.</h2>
            <p>
              As a web developer, I specialize in crafting modern and captivating websites tailored for ambitious
              entrepreneurs and freelance professionals.
            </p>
            <p>
              I am ready to tackle challenges and translate your ideas into extraordinary web designs. My mission is to
              bring your vision to life through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
