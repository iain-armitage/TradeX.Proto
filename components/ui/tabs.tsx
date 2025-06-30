import React, { useState, createContext, useContext } from "react";

const TabsContext = createContext<any>(null);

export function Tabs({ defaultValue, children }: { defaultValue: string; children: React.ReactNode }) {
  const [value, setValue] = useState(defaultValue);
  return <TabsContext.Provider value={{ value, setValue }}>{children}</TabsContext.Provider>;
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <div className="flex space-x-2">{children}</div>;
}

export function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  const { value: active, setValue } = useContext(TabsContext);
  const activeStyle = value === active ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800";
  return (
    <button
      className={`px-4 py-2 rounded ${activeStyle}`}
      onClick={() => setValue(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }: { value: string; children: React.ReactNode }) {
  const { value: active } = useContext(TabsContext);
  return value === active ? <div className="mt-4">{children}</div> : null;
}