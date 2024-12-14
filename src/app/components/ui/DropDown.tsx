import React, { ReactNode, useEffect, useRef, useState } from "react";
import Button from "./Button";
import Icons from "./Icons";

export interface IACTIONTYPE {
  LINK: "link";
  BUTTON: "button";
}

export interface IOPTIONS {
  label: string;
  value: string;
  actionType: string;
  icon?: string;
}

function DropDownOption({ data }: { data: IOPTIONS }) {
  return (
    <div className="flex gap-2 items-center">
      {data.icon && (
        <div className="w-[25px] flex justify-center items-center">
          <Icons type={data.icon} size={5} />
        </div>
      )}
      <div>{data.label}</div>
    </div>
  );
}

function DropDown({
  icon,
  options,
  onSelect,
  children,
}: {
  icon?: string;
  options: IOPTIONS[];
  onSelect?: Function;
  children: ReactNode;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };
  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <Button
        aria-expanded="false"
        aria-haspopup="true"
        aria-controls="menu-id"
        className="flex"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {children}
        {(!icon && (
          <svg
            className="ml-1 size-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        )) ||
          (icon && <Icons type={icon} size={5} />)}
      </Button>

      {dropdownOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          role="menu"
          id="menu-id"
          aria-hidden="true"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {options.map((o, index) => {
              return o.actionType == "link" ? (
                <a
                  href={o.value}
                  key={index}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50"
                  role="menuitem"
                  tabIndex={-1}
                  id={`menu-item-${index}`}
                >
                  <DropDownOption data={o} />
                </a>
              ) : (
                <button
                  key={index}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50 w-full text-left"
                  role="menuitem"
                  tabIndex={-1}
                  id={`menu-item-${index}`}
                  onClick={() => {
                    onSelect && onSelect(o.value);
                    setDropdownOpen(false);
                  }}
                >
                  <DropDownOption data={o} />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDown;
