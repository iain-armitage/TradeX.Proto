import React from "react";
import classNames from "classnames";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={classNames("rounded-lg border p-4 shadow-sm bg-white dark:bg-gray-800", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={classNames("text-sm", className)}>{children}</div>;
}