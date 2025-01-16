import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  isLoading = false,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded focus:outline-none focus:ring transition";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-800 focus:ring-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
    outline: "hover:bg-gray-50 focus:ring-gray-200 border-2 border-gray-200",
  };

  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const loadingStyles = isLoading ? "opacity-50 cursor-not-allowed" : "";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${loadingStyles} ${className}`;

  return (
    <button className={combinedStyles} disabled={isLoading} {...props}>
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
