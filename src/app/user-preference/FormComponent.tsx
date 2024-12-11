"use client";

import React, { useState } from "react";
import Button from "../components/ui/Button";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    amountFormat: "",
    dateFormat: "",
    screenTimeout: "",
  });

  const arr = [
    "Total Invoices Uploaded till date",
    "Total Invoice Value",
    "Total Invoices Discounted",
    "Value of Total Invoices Discounted",
    "Invoice Pending for Discounting",
    "Value of Invoices Pending for Discounting",
    "Total Invoices Paid on Due Date",
    "Value of Total Invoies Paid on Due Date",
    "Total Profit Made Till Date",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded">
      {/* Company Name */}
      <div className="mb-4 flex gap-6 items-center">
        <label
          htmlFor="companyName"
          className="text-gray-700 mb-2 w-[10rem]"
        >
          Company Name
        </label>
        <select
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className=" bg-gray-50 border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[20rem]"
        >
          <option value="">Select a company</option>
          <option value="Company A">Company A</option>
          <option value="Company B">Company B</option>
          <option value="Company C">Company C</option>
        </select>
      </div>

      {/* Amount Format */}

      <div className="mb-4 flex gap-6 items-center">
        <label
          htmlFor="amountFormat"
          className="text-gray-700 mb-2 w-[10rem]"
        >
          Amount Format
        </label>
        <select
          id="amountFormat"
          name="amountFormat"
          value={formData.amountFormat}
          onChange={handleChange}
          className=" bg-gray-50 border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[20rem]"
        >
          <option value="">Select amount format</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
      </div>

      {/* Date Format */}
      <div className="mb-4 flex gap-6 items-center">
        <label
          htmlFor="dateFormat"
          className="text-gray-700 mb-2 w-[10rem]"
        >
          Date Format
        </label>
        <select
          id="dateFormat"
          name="dateFormat"
          value={formData.dateFormat}
          onChange={handleChange}
          className=" bg-gray-50 border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[20rem]"
        >
          <option value="">Select date format</option>
          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
        </select>
      </div>

      {/* Screen Timeout */}
      <div className="mb-4 flex gap-6 items-center">
        <label
          htmlFor="screenTimeout"
          className="text-gray-700 mb-2 w-[10rem]"
        >
          Screen Timeout
        </label>
        <select
          id="screenTimeout"
          name="screenTimeout"
          value={formData.screenTimeout}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[20rem]"
        >
          <option value="">Select timeout</option>
          <option value="1 min">1 min</option>
          <option value="5 mins">5 mins</option>
          <option value="10 mins">10 mins</option>
        </select>
      </div>

      <div className="mb-4 flex gap-6 items-center">
        <label
          htmlFor="screenTimeout"
          className="text-gray-700 mb-2 w-[10rem]"
        >
          Dashboard Widgets
        </label>

        <div>
          {arr.map((item, i) => (
            <div key={i} className="flex gap-2 my-1">
              <input type="checkbox" />
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button theme="primary">Save</Button>
      </div>
    </form>
  );
};

export default FormComponent;
