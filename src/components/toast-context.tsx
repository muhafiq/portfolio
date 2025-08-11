"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ToastContainer } from "./toast";

type ToastType = "success" | "error" | "warning";
type Toast = { id: number; message: string; type: ToastType };

const ToastContext = createContext<{
  toasts: Toast[];
  showToast: (message: string, type: ToastType) => void;
}>({ toasts: [], showToast: () => {} });

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: ToastType) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
