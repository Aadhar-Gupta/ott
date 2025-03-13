import "./globals.css";
import Header from "@/mycomp/Header";
import Footer from "@/mycomp/Footer";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-dark-cyan/theme.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PrimeReactProvider>
          <Header></Header>
          {children}
          <Footer></Footer>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
