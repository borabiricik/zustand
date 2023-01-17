import classNames from "classnames";
import { ICounterButtonProps } from "types/components/counter/Button";

const Button = ({ children, ...props }: ICounterButtonProps) => {
  const { className = "", ...rest } = props;
  return (
    <button
      className={classNames(
        "bg-blue-400 rounded-full text-white px-4 py-1 text-center",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
