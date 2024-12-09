import React, { useState } from "react";
import Icons from "../ui/Icons";
import Button from "../ui/Button";

type Filter = {
  field: string;
  operator: string;
  value: string | number | [number, number];
};

type Props = {
  fields: {
    label: string;
    value: string;
    type: "string" | "number" | "date";
  }[];
  onApply: (filters: Filter[]) => void;
  onClear: () => void;
};

const FilterDropdown: React.FC<Props> = ({ fields, onApply }) => {
  const [filters, setFilters] = useState<Filter[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const addFilter = () => {
    setFilters([...filters, { field: "", operator: "", value: "" }]);
  };

  const updateFilter = (index: number, key: string, value: any) => {
    const updatedFilters: any = [...filters];
    updatedFilters[index][key] = value;
    setFilters(updatedFilters);
  };

  const removeFilter = (index: number) => {
    setFilters(filters.filter((_, i) => i !== index));
  };

  const onClear = () => {
    setFilters([]);
  };

  return (
    <div className="relative">
      {!open && (
        <Button
          theme="primary"
          className="flex gap-1"
          onClick={() => setOpen(true)}
        >
          <Icons type="filter" size={5} />
          Filters
        </Button>
      )}

      {open && (
        <Button
          className="flex gap-1 items-center"
          onClick={() => setOpen(false)}
        >
          <Icons type="x-mark" size={5} />
          Close
        </Button>
      )}

      {open && (
        <div className="absolute bg-white shadow-lg border rounded-lg p-4 mt-2 w-[50rem]">
          <h3 className="text-lg font-normal mb-4">Advanced Filters</h3>
          {filters.map((filter, index) => (
            <div key={index} className="flex items-center gap-2 my-2">
              <select
                className="w-full p-2 border rounded h-[2.5rem]"
                value={filter.field}
                onChange={(e) => updateFilter(index, "field", e.target.value)}
              >
                <option value="">Select Field</option>
                {fields.map((field) => (
                  <option key={field.value} value={field.value}>
                    {field.label}
                  </option>
                ))}
              </select>
              <select
                className="w-full p-2 border rounded h-[2.5rem]"
                value={filter.operator}
                onChange={(e) =>
                  updateFilter(index, "operator", e.target.value)
                }
              >
                <option value="">Select Operator</option>
                {filter.field &&
                fields.find((f) => f.value === filter.field)?.type ===
                  "string" ? (
                  <>
                    <option value="contains">Contains</option>
                    <option value="equals">Equals</option>
                  </>
                ) : (
                  <>
                    <option value="=">Equals</option>
                    <option value=">">Greater Than</option>
                    <option value="<">Less Than</option>
                  </>
                )}
              </select>
              <input
                type="text"
                className="w-full p-2 border rounded h-[2.5rem]"
                placeholder="Enter value"
                value={filter.value as string}
                onChange={(e) => updateFilter(index, "value", e.target.value)}
              />
              <button
                className="bg-red-400 p-1 text-white rounded-full font-bold"
                onClick={() => removeFilter(index)}
              >
                <Icons type="x-mark" size={5}></Icons>
              </button>
            </div>
          ))}
          <button className="text-primary-800 text-sm mb-2" onClick={addFilter}>
            + Add Filter
          </button>
          <div className="flex justify-between mt-4">
            <Button onClick={() => onClear()}>Clear</Button>
            <Button theme="primary" onClick={() => onApply(filters)}>
              Apply
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
