import "@/styles/globals.css";
import { ToastProvider } from "@/context/ToastContext";
import AuthGuard from "./auth/AuthGuard";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const isPublicRoute = ["/auth/login", "/auth/signup", "/auth/forgot-password"].includes(router.pathname);
  const guardedComponent = isPublicRoute ? (
    <Component {...pageProps} />
  ) : (
    <AuthGuard>
      <Component {...pageProps} />
    </AuthGuard>
  );
  

  return <ToastProvider>{guardedComponent}</ToastProvider>;
}
