"use client";
import { createContext, useContext, useState, useCallback } from "react";
import Toast from "@/components/feedback/Toast";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ show: false, text: "" });

  const showToast = useCallback((text) => {
    setToast({ show: true, text });
    setTimeout(() => {
      setToast({ show: false, text: "" });
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast.show && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 mb-4">
          <Toast text={toast.text} />
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
