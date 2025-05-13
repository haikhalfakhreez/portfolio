"use client";

import * as React from "react";
import { useTheme } from "next-themes";

const themes = ["Light", "Dark", "System"];

export function ThemeToggle() {
  const { setTheme } = useTheme();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setTheme(e.target.value.toLowerCase());
  }

  return (
    <div className="relative w-max">
      <select
        onChange={onChange}
        className="focus-border appearance-none rounded-sm bg-inherit py-2 pr-12 pl-3 text-xs"
      >
        {themes.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-gray-500 dark:text-gray-400">
        <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
          <path
            d="M6 8l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
