import { AnimationWrapper, Button, InputBox } from "@/components/";
import React from "react";

interface LoginProps {
  // Definisci le props qui
}

const Login: React.FC<LoginProps> = () => {
  return (
    <AnimationWrapper type="opacity">
      <section className="flex items-center justify-center h-[80vh]">
        <form className="w-4/5 max-w-xs mx-auto space-y-4">
          <h1>Welcome Back</h1>
          <InputBox id="user_name" label="Username" name="user_name" type="text" placeholder="Username" value="" />
          <InputBox id="user_psw" label="Password" name="user_psw" type="password" placeholder="Password" value="" />
          <Button type="submit" color="primary">
            Login
          </Button>
        </form>
      </section>
    </AnimationWrapper>
  );
};

export default Login;
