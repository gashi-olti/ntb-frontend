import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Typography from "../Common/Typography";
import DialogSuccess from "./DialogSuccess";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  const [email, setEmail] = React.useState<string>("");
  const [isValidEmail, setIsValidEmail] = React.useState<boolean | undefined>(
    undefined
  );
  const [open, setOpen] = React.useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(undefined);
  };

  const submit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email as string);

    if (!isValid) {
      setIsValidEmail(isValid);
      return;
    } else {
      setOpen(true);
      setIsValidEmail(true);
      setEmail("");
    }
  };

  return (
    <>
      <div className="w-full mx-auto flex flex-col gap-y-4 items-center rounded-full md:flex-row md:bg-gray-100">
        <Input
          type="email"
          value={email}
          placeholder="Email Address"
          className="h-[49px] bg-gray-100 rounded-full border-0 shadow-none focus-visible:ring-0 pl-6"
          onChange={handleChange}
        />
        <Button
          size="lg"
          className="w-full rounded-full md:w-[143px] h-[49px]"
          onClick={submit}
          disabled={!email}
        >
          Sign up
        </Button>
      </div>
      {isValidEmail === false && (
        <Typography className="text-red-500 ml-6 mt-1">
          Please enter a valid email address.
        </Typography>
      )}

      {open && <DialogSuccess isOpen={open} onClose={() => setOpen(false)} />}
    </>
  );
};

export default Form;
