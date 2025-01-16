// components/DynamicForm.tsx
import React from "react";
import Input from "./Input";
import Button from "./Button";

interface Field {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

interface DynamicFormProps {
  schema: Field[];
  onSubmit: (formData: Record<string, any>) => void;
  onReset?: () => void;
  onCustomActions?: {
    title: string;
    action: (formData: Record<string, any>) => void;
  }[];
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  schema,
  onSubmit,
  onReset,
  onCustomActions,
}) => {
  const [formData, setFormData] = React.useState<Record<string, any>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {schema.map((field) => (
        <Input
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          required={field.required}
          onChange={handleChange}
        />
      ))}

      <div className="flex gap-2 items-center justify-end my-4">
        {onCustomActions &&
          onCustomActions?.map((action, key) => (
            <Button
              key={key}
              type="button"
              variant="outline"
              onClick={action.action}
            >
              {action.title}
            </Button>
          ))}
        {onReset && (
          <Button type="reset" variant="outline">
            Reset
          </Button>
        )}
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default DynamicForm;
