import "@/styles/globals.css";
import { ToastProvider } from "@/context/ToastContext"; // ruta al contexto

export default function App({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}
