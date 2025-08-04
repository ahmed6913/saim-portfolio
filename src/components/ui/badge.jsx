import React from "react"

export function Badge({ className = "", variant = "default", ...props }) {
  const base = "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium"
  const variants = {
    default: "bg-indigo-600 text-white",
    outline: "border border-gray-300 bg-white text-gray-800",
  }

  return (
    <span
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
