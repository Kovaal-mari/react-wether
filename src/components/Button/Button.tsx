import { ChildrenProps } from "../../interface/interface";

interface ButtonProps extends ChildrenProps {
    onClick: React.MouseEventHandler;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
