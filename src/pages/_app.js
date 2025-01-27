import UserDataContextProvider from "@/Context/UserDataContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <UserDataContextProvider>
      <Component {...pageProps} />
    </UserDataContextProvider>
  );
}
