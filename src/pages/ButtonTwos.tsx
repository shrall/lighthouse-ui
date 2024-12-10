import { Button } from "@/components/ui/button";
import { ButtonTwo } from "@/index";
import { CheckFilled } from "@/index";
import { useRef } from "react";

const ButtonTwosPage = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <Button onClick={() => {}}>Button One</Button>
      <ButtonTwo
        ref={buttonRef}
        onClick={() => {
          alert("hello ges");
        }}
        className="lui-flex lui-items-center"
        leftNode={<CheckFilled />}
      >
        ButtonTwoaowjefoawejofkawoeko
      </ButtonTwo>
    </div>
  );
};

export default ButtonTwosPage;
