import { ICounterButtonProps } from "types/components/counter/Button";

const Button = ({ children, ...props }: ICounterButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
