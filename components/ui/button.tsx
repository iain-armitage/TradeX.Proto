import React from "react";
import classNames from "classnames";

export function Button({
  children,
  onClick,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline";
  className?: string;
}) {
  const base = "px-4 py-2 rounded text-sm font-medium transition-colors";
  const styles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-800 dark:text-white hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700",
  };

  return (
    <button onClick={onClick} className={classNames(base, styles[variant], className)}>
      {children}
    </button>
  );
}