'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

const themes = ['Light', 'Dark', 'System']

export function ThemeToggle() {
  const { setTheme } = useTheme()

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setTheme(e.target.value.toLowerCase())
  }

  return (
    <select onChange={onChange} className="focus-border pl-3 pr-8 py-2 text-xs rounded">
      {themes.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  )
}
