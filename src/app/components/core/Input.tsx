// components/Input.tsx
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  required,
  ...props
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-0.5"
      >
        {label} {required && <span className="text-sm text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
        required
        {...props}
      />
    </div>
  );
};

export default Input;
