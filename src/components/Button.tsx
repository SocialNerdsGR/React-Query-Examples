import { PropsWithChildren } from "react";

type ButtonProps = {
  onClick?: () => void;
  type?: "submit" | "button";
  disabled?: boolean;
};

export function Button({
  children,
  onClick,
  type = "button",
  disabled = false
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      type={type}
      className={`Button ${disabled ? "Button--disabled" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
