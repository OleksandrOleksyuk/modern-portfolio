import React, { FormEvent, useRef, useState } from "react";
import { Button } from "..";
import emailjs from "@emailjs/browser";
import Alert from "../Alert/Alert";

const Contacts: React.FC = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    emailjs.sendForm("service_lj7etk3", "template_hxxy9uu", formRef.current!, "m4sxVG3srknTzT1ai").then(
      () => setSuccess(true),
      () => setError(true)
    );
  };

  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md space-y-4">
        <h2 className="text-center">Let's Create Your Digital Presence Together!</h2>
        <p>
          If you're ready to elevate your online presence, fill out the form below. Together, we'll craft a website that
          clearly speaks to your business or freelance services. I look forward to collaborating with you!
        </p>
        {success || error ? (
          <Alert type={success ? "success" : "error"} />
        ) : (
          <form action="#" className="space-y-4" ref={formRef} onSubmit={sendEmail}>
            <div>
              <label htmlFor="user_name">Your name</label>
              <input name="user_name" type="name" id="user_name" placeholder="Oleksandr Oleksyuk" required />
            </div>
            <div></div>
            <div>
              <label htmlFor="user_email">Your email</label>
              <input name="user_email" type="email" id="user_email" placeholder="dev.oleksandr@outlook.it" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="user_message">Your message</label>
              <textarea
                name="user_message"
                id="user_message"
                rows={6}
                placeholder="Share your ideas and inquiries..."
              ></textarea>
            </div>
            <Button type="submit" color="primary">
              Send message
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contacts;
