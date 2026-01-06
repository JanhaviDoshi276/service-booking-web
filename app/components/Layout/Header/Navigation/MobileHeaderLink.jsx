"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileHeaderLink({ item }) {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = (e) => {
    if (item.submenu) {
      e.preventDefault(); // stop navigation if submenu exists
      setSubmenuOpen(!submenuOpen);
    }
  };

  return (
    <div className="w-full border-b border-border last:border-none">
      {/* Main Link */}
      <Link
        href={item.href}
        onClick={handleToggle}
        className="flex items-center justify-between w-full py-3 text-midnight_text font-medium"
      >
        <span>{item.label}</span>

        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className={`transition-transform ${submenuOpen ? "rotate-180" : ""
              }`}
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
        <div className="bg-heroBg rounded-lg mb-3">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block px-4 py-2 text-sm text-muted hover:bg-primary hover:text-white rounded-md transition"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
