import UserDataContextProvider from "@/Context/UserDataContext";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const isPublicPath = router.pathname === "/";
    const userData = sessionStorage.getItem("userData");

    if (!userData && !isPublicPath) {
      router.replace("/");
    }
  }, [router.pathname]);

  return (
    <UserDataContextProvider>
      <Component {...pageProps} />
    </UserDataContextProvider>
  );
}
