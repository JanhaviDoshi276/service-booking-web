"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLink({ item }) {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Link */}
      <Link
        href={item.href}
        className={`flex items-center gap-1 text-16 font-normal transition ${path === item.href
          ? "text-black"
          : "text-midnight_text hover:text-primary"
          }`}
      >
        {item.label}

        {/* Dropdown Icon */}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className="mt-0.5"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {/* Submenu */}
      {submenuOpen && item.submenu && (
        <div className="absolute left-0 mt-2 w-60 rounded-xl bg-white border border-border shadow-lg overflow-hidden z-50">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-3 text-sm transition ${path === subItem.href
                ? "bg-primary text-white"
                : "text-midnight_text hover:bg-heroBg hover:text-primary"
                }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
